import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
// import { LoaderExample } from "./LoaderExample";
import { SkeletonLoaderExample } from "./SkeletonLoaderExample";
import "@fremtind/jkl-loader/loader.css";
import "@fremtind/jkl-loader/skeleton-loader.css";

// renderExample(<DevExample component={LoaderExample} />, document.getElementById("app"));
renderExample(<DevExample component={SkeletonLoaderExample} />, document.getElementById("app"));
