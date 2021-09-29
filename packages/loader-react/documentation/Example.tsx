import React from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Loader } from "../src";
import "./styles.scss";

type LoaderVariant = "Standard" | "Inline" | "Kompakt inline";

export default function LoaderExample({ boolValues, choiceValues }: ExampleComponentProps) {
    const inverted = boolValues && boolValues["Invertert"];

    const variant = choiceValues && (choiceValues["Variant"] as LoaderVariant);
    let inline = false;
    let compact = false;
    switch (variant) {
        case "Inline":
            inline = true;
            break;
        case "Kompakt inline":
            inline = true;
            compact = true;
            break;
        case "Standard":
        default:
            break;
    }

    return (
        <div className="jkl-loader-example">
            <div>
                <Loader
                    negative={inverted}
                    inline={inline}
                    forceCompact={compact}
                    textDescription="Eksempelbeskrivelse for en loader"
                />
            </div>
        </div>
    );
}
