import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const extensions = [".js", ".ts", ".tsx"];
const outputFolder = "build";

const defaultPlugins = [
    nodeResolve({ extensions }),
    babel({
        babelHelpers: "runtime",
        rootMode: "upward",
        extensions,
    }),
    commonjs(),
];

const uglifiedPlugins = [...defaultPlugins, terser({ ecma: "es5" })];

function config(plugins) {
    return {
        input: "src/index.ts",
        plugins: plugins,
        external: function (id) {
            const externalPatterns = [/@fremtind\/jkl-/, /packages\/.*-react\/build/, /node_modules/];
            // Any packages that are either a) patched by us, or b) small and used only by one or two packages
            // should be excluded from the external-list so they are bundled on export
            const internalPatterns = [/@nrk\/core/];
            return (
                externalPatterns.some((pattern) => pattern.test(id)) &&
                !internalPatterns.some((pattern) => pattern.test(id))
            );
        },
    };
}

function configWithOutput(config, output) {
    return Object.assign({}, config, { output });
}

export default [
    configWithOutput(config(defaultPlugins), { file: `${outputFolder}/cjs/index.js`, format: "commonjs" }),
    configWithOutput(config(defaultPlugins), { file: `${outputFolder}/esm/index.js`, format: "esm" }),
    configWithOutput(config(defaultPlugins), { file: `${outputFolder}/browser/index.js`, format: "esm" }),
    configWithOutput(config(uglifiedPlugins), { file: `${outputFolder}/esm/index.min.js`, format: "esm" }),
    configWithOutput(config(uglifiedPlugins), { file: `${outputFolder}/browser/index.min.js`, format: "esm" }),
];
