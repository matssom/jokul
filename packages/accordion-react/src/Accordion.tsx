import cn from "classnames";
import React, { FC } from "react";
import { DataTestAutoId } from "@fremtind/jkl-core";

export interface AccordionProps extends DataTestAutoId {
    className?: string;
}

export const Accordion: FC<AccordionProps> = ({ className, ...rest }) => {
    return <div data-testid="jkl-accordion" className={cn("jkl-accordion", className)} {...rest} />;
};
