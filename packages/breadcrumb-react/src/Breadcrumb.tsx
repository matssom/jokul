import React, { ReactNode } from "react";
import cn from "classnames";

export interface BreadcrumbProps {
    className?: string;
    children: ReactNode;
}

export const Breadcrumb = ({ className, children, ...rest }: BreadcrumbProps): JSX.Element => {
    const numberOfChildren = React.Children.count(children);
    return (
        <nav aria-label="Sti" className={cn("jkl-breadcrumb", className)} {...rest}>
            <ol className="jkl-breadcrumb__list">
                {React.Children.map(children, (child, index) => {
                    const isLastElement = index + 1 === numberOfChildren;
                    return (
                        <>
                            {React.isValidElement(child)
                                ? React.cloneElement(child, {
                                      isLastElement,
                                  })
                                : child}
                            {!isLastElement && (
                                <span className="jkl-breadcrumb__item-separator" aria-hidden="true">
                                    ›
                                </span>
                            )}
                        </>
                    );
                })}
            </ol>
        </nav>
    );
};