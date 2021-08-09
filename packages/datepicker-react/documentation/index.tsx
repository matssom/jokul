import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";
import "@fremtind/jkl-icon-button/icon-button.min.css";

// Import actual example and component stylesheet (specific for this component):
import { Example } from "./Example";
import "@fremtind/jkl-datepicker/datepicker.css";
import "@fremtind/jkl-text-input/text-input.css";
import "@fremtind/jkl-select/select.css";

renderExample(
    <DevExample
        component={Example}
        knobs={{
            boolProps: ["Utvidet velger", "Kompakt", "Med feil", "Med hjelpetekst", "Invertert"],
            choiceProps: [
                {
                    name: "Variant",
                    values: ["small", "medium", "large"],
                    defaultValue: 1,
                },
            ],
        }}
    />,
    document.getElementById("app"),
);
