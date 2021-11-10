import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { TextInput } from "@fremtind/jkl-text-input-react";
import {
    Close,
    CheckMark,
    Plus,
    Search,
    Hamburger,
    Calendar,
    ArrowUpRight,
    ArrowUp,
    ArrowDown,
    ArrowRight,
    ArrowLeft,
    Info,
    Error,
    Warning,
    Success,
} from "../src";
import { IconExample } from "./internal/IconExample";
import { variants } from "../src/icons/types";
import { IconsExampleGrid } from "./internal/IconsExampleGrid";

export const choiceProps = [
    {
        name: "Variant",
        values: ["inherit", "small", "medium", "large"],
        defaultValue: 1,
    },
    {
        name: "Farge",
        values: ["inherit", "info", "advarsel", "feil", "suksess"],
        defaultValue: 0,
    },
];

export const IconsExample: React.FC<ExampleComponentProps> = ({ choiceValues }) => {
    const allIcons = [
        Close,
        CheckMark,
        Plus,
        Search,
        Hamburger,
        Calendar,
        ArrowUpRight,
        ArrowUp,
        ArrowDown,
        ArrowRight,
        ArrowLeft,
        Info,
        Error,
        Warning,
        Success,
    ];

    const colorValue = choiceValues ? choiceValues["Farge"] : "inherit";
    const color = colorValue === "inherit" ? undefined : colorValue;
    const variant = choiceValues ? (choiceValues["Variant"] as variants) : "small";

    const [fontSize, setFontSize] = useState("1rem");

    return (
        <div style={{ width: "100%" }}>
            {variant === "inherit" && (
                <TextInput
                    label="Sett fontstørrelse"
                    variant="small"
                    className="jkl-spacing-l--top jkl-spacing-l--bottom"
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                />
            )}
            <IconsExampleGrid style={{ fontSize }} columns="four" color={color}>
                {allIcons.map((Ico) => (
                    <IconExample key={Ico.name} renderIcon={() => <Ico variant={variant} />} name={Ico.displayName} />
                ))}
            </IconsExampleGrid>
        </div>
    );
};