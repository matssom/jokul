/* There are no types for core-toggle, so we have to use ts-ignore
Hopefully someone (us?) will write types for it sometime soon */
// @ts-ignore: wait for nrk to supply types
import CoreToggle from "@nrk/core-toggle/jsx";
import React, { FC, ReactNode, useState } from "react";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import { ExpandArrow } from "./ExpandArrow";
import { DataTestAutoId } from "@fremtind/jkl-core";

export interface AccordionItemProps extends DataTestAutoId {
    title: string;
    children: ReactNode;
    startExpanded?: boolean;
    className?: string;
    onClick?: (e: React.MouseEvent, isOpen: boolean) => void;
}

export const AccordionItem: FC<AccordionItemProps> = ({
    children,
    title,
    className,
    startExpanded = false,
    onClick,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(startExpanded);
    const [elementRef] = useAnimatedHeight(isOpen);
    const onToggle = (e: Event) => {
        if (e.defaultPrevented) {
            return;
        }
        setIsOpen(!isOpen);
    };

    return (
        <div
            data-testid="jkl-accordion-item"
            className={cn("jkl-accordion-item", className, {
                "jkl-accordion-item--expanded": isOpen,
            })}
            {...rest}
        >
            <button
                className="jkl-accordion-item__title"
                type="button"
                onClick={(e) => {
                    if (onClick) {
                        onClick(e, !isOpen);
                    }
                }}
            >
                <span className="jkl-accordion-item__title-text">{title}</span>
                <ExpandArrow className="jkl-accordion-item__title__arrow" expanded={isOpen} />
            </button>
            <CoreToggle
                ref={elementRef}
                data-testid="jkl-accordion-item__content-wrapper"
                className="jkl-accordion-item__content-wrapper"
                hidden={!isOpen}
                onToggle={onToggle}
            >
                <div className="jkl-accordion-item__content">{children}</div>
            </CoreToggle>
        </div>
    );
};
