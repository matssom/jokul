import React from "react";
import { DevExample } from "../../../doc-utils";
import { MessageBoxExample, messageBoxExampleKnobs } from "./MessageBoxExample";
import "../../message-box/message-box.scss";

export default function Client() {
    return <DevExample component={MessageBoxExample} knobs={messageBoxExampleKnobs} />;
}
