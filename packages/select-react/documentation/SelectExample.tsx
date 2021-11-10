import React, { useState, ChangeEvent, FocusEvent, useRef, useEffect, VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Select, NativeSelect } from "../src";
import { LabelVariant } from "@fremtind/jkl-core";

export const SelectExample: VFC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const C = boolValues && boolValues["Native"] ? NativeSelect : Select;

    const values = [
        { value: "apple", label: "Apple" },
        { value: "samsung", label: "Samsung" },
        { value: "google", label: "Google og utvalgte partnere" },
        { value: "LG", label: "LG" },
    ];
    const [value, setValue] = useState<string>();
    const universalSetValue = (input: string | ChangeEvent<HTMLSelectElement> | undefined) => {
        let eventValue;
        if (typeof input === "string") {
            eventValue = input;
        } else if (input) {
            eventValue = input.target.value;
        }
        setValue(eventValue);
        console.log("Change: ", eventValue);
    };

    const errorLabel = boolValues && boolValues["Med feil"] ? "Beskrivende feilmelding" : undefined;
    const helpLabel = boolValues && boolValues["Med hjelpetekst"] ? "Hjelpsom beskjed" : undefined;
    const variant = choiceValues && (choiceValues["Etikettvariant"] as LabelVariant);
    const searchAble = boolValues && boolValues["Med søk"];

    const selectRef = useRef<HTMLSelectElement>(null);
    useEffect(() => {
        const select = selectRef.current;
        select?.addEventListener("change", (e: unknown) =>
            console.log("Verdi fra selectRef:", (e as ChangeEvent<HTMLSelectElement>).target.value),
        );
        return () => {
            select?.removeEventListener("change", (e: unknown) =>
                console.log("Verdi fra selectRef:", (e as ChangeEvent<HTMLSelectElement>).target.value),
            );
        };
    }, [selectRef]);
    const onFocus = (input: string | FocusEvent<HTMLSelectElement> | undefined) => {
        console.log("Focus: ", input);
    };
    const onBlur = (input: string | FocusEvent<HTMLSelectElement> | undefined) => {
        console.log("Blur: ", input);
    };

    return (
        <C
            ref={selectRef}
            id="produsent"
            name="produsent"
            forceCompact={boolValues && boolValues["Kompakt"]}
            inverted={boolValues && boolValues["Invertert"]}
            variant={variant}
            label="Hvilket merke er telefonen?"
            items={values}
            value={value}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            onChange={universalSetValue}
            searchable={searchAble}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
};

export const selectCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<${!!boolValues?.["Native"] ? "NativeSelect" : "Select"}
    ref={selectRef}
    id="produsent"
    name="produsent"
    forceCompact={${!!boolValues?.["Kompakt"]}}
    inverted={${!!boolValues?.["Invertert"]}}
    variant="${choiceValues?.["Etikettvariant"]}"
    label="Hvilket merke er telefonen?"
    helpLabel=${!!boolValues?.["Med hjelpetekst"] ? `"Hjelpsom beskjed"` : `{undefined}`}
    errorLabel=${!!boolValues?.["Med feil"] ? `"Beskrivende feilmelding"` : `{undefined}`}
    items={[
        { value: "apple", label: "Apple" },
        { value: "samsung", label: "Samsung" },
        { value: "google", label: "Google og utvalgte partnere" },
        { value: "LG", label: "LG" },
    ]}
    value={value}
    onChange={setValue}
    searchable={${!!boolValues?.["Med søk"]}}
    onFocus={onFocus}
    onBlur={onBlur}
/>
`;