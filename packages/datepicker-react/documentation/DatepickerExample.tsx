import React, { useState, VFC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { LabelVariant } from "@fremtind/jkl-core";
import { DatePicker } from "../src";

export const datepickerExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Utvidet velger", "Compact", "Med feil", "Med hjelpetekst"],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 0,
        },
    ],
};

const monthsIsh = (num: number) => {
    const raw = 1000 * 60 * 60 * 24 * (num * 30 - 5);
    return raw < 0 ? 12 + raw : raw;
};

export const DatepickerExample: VFC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const helpLabel =
        boolValues && boolValues["Med hjelpetekst"] ? "Du vil være forsikret fra denne datoen" : undefined;
    const errorLabel = boolValues && boolValues["Med feil"] ? "Du kan ikke velge en dato som har vært" : undefined;
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);

    const [value, setValue] = useState<Date | undefined>(undefined);

    return (
        <DatePicker
            label="Velg startdato for forsikringen"
            extended={boolValues && boolValues["Utvidet velger"]}
            forceCompact={boolValues && boolValues["Compact"]}
            variant={variant}
            errorLabel={errorLabel}
            name="datepicker"
            helpLabel={helpLabel}
            disableBeforeDate={new Date(Date.now() - monthsIsh(14))}
            disableAfterDate={new Date(Date.now() + monthsIsh(14))}
            value={value}
            onFocus={(date) => {
                console.log("hello from onFocus", date);
                setValue(date);
            }}
            onBlur={(date) => {
                console.log("hello from onBlur", date);
                setValue(date);
            }}
            onChange={(date, _, meta) => {
                console.log("hello from onChange", date, _, meta);
                setValue(date);
            }}
            onKeyDown={(date, _) => {
                console.log("hello from onKeyDown", date, _);
                setValue(date);
            }}
        />
    );
};

export const datepickerExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<DatePicker
    label="Velg startdato for forsikringen"
    variant="${choiceValues?.["Variant"] || "small"}"${
    boolValues?.["Med feil"]
        ? `
    errorLabel="Du kan ikke velge en dato som har vært"`
        : ""
}${
    boolValues?.["Med hjelpetekst"]
        ? `
    helpLabel="Du vil være forsikret fra denne datoen"`
        : ""
}${
    boolValues?.["Utvidet velger"]
        ? `
    extended`
        : ""
}${
    boolValues?.["Compact"]
        ? `
    forceCompact`
        : ""
}
/>
`;
