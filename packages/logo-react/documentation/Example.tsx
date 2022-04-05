import React from "react";
import { DevExample } from "../../../doc-utils";
import { LogoExample, logoExampleKnobs } from "./LogoExample";
import "../../logo/logo.scss";

export default function Client() {
    return <DevExample component={LogoExample} knobs={logoExampleKnobs} />;
}
