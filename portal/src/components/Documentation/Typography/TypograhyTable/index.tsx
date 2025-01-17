import React, { VFC, useState } from "react";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import "./TypographyTable.scss";
import { TableHeader } from "./TableHeader";
import { ExampleRow, TypographyLevels } from "./ExampleRow";

const levels: TypographyLevels[] = [
    "Title",
    "Heading 1",
    "Heading 2",
    "Heading 3",
    "Heading 4",
    "Heading 5",
    "Body",
    "Bold",
    "Small",
];

export const TypographyExample: VFC = () => {
    const [isCompact, setIsCompact] = useState(false);
    const toggleCompact = () => setIsCompact(!isCompact);

    return (
        <>
            <table
                className="jkl-typography-table jkl-spacing-xl--top"
                {...(isCompact ? { "data-compactlayout": true } : {})}
            >
                <TableHeader />
                <tbody>
                    {levels.map((level) => (
                        <ExampleRow key={level} level={level} />
                    ))}
                </tbody>
            </table>
            <ToggleSwitch className="jkl-spacing-2xl--top" pressed={isCompact} onClick={toggleCompact}>
                Kompakt
            </ToggleSwitch>
        </>
    );
};
