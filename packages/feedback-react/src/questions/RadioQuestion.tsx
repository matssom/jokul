import React, { ChangeEventHandler, useEffect, useMemo, useRef } from "react";
import { RadioButton, RadioButtonGroup } from "@fremtind/jkl-radio-button-react";
import { QuestionProps } from "../types";
import { useFollowUpContext } from "../followup/followupContext";
import { useMainQuestionContext } from "../main-question/mainQuestionContext";

export const RadioQuestion: React.VFC<QuestionProps> = ({ label, name, options, helpLabel, autoFocus = false }) => {
    const followupContext = useFollowUpContext();
    const feedbackContext = useMainQuestionContext();
    const context = followupContext || feedbackContext;

    const numOptions = options?.length || 0;

    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (autoFocus && ref.current) {
            ref.current.focus();
        }
    }, [autoFocus, ref]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const option = options?.find((option) => option.value.toString() === e.target.value);
        context?.setCurrentValue(option);
    };

    const selectedValue = useMemo(
        () =>
            Array.isArray(context?.currentValue)
                ? context?.currentValue[0].value.toString()
                : context?.currentValue?.value.toString(),
        [context?.currentValue],
    );

    if (!context) {
        console.error("Questions must be used inside a Followup or Feedback context provider");
        return null;
    }

    return (
        <RadioButtonGroup
            legend={label}
            labelProps={{ variant: "large" }}
            name={name || label}
            inline={numOptions < 3}
            value={selectedValue || ""}
            onChange={handleChange}
            helpLabel={helpLabel}
        >
            {options?.map((option, i) => (
                <RadioButton
                    ref={i === 0 ? ref : undefined}
                    key={`${name || label}${option.value}`}
                    label={option.label}
                    value={String(option.value)}
                />
            ))}
        </RadioButtonGroup>
    );
};
