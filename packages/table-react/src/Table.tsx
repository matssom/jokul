import cx from "classnames";
import React, { DetailedHTMLProps, forwardRef, TableHTMLAttributes } from "react";
import { TableContextProvider } from "./tableContext";

export interface TableProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    compact?: boolean;
    /** Bryt ned til en stablet listevisning på små skjermer. NB: husk å sette `data-th` på hver celle! */
    collapseToList?: boolean;
    /** Setter width: 100% */
    fullWidth?: boolean;
}

const Table = forwardRef<HTMLTableElement, TableProps>(
    ({ className, compact = false, collapseToList = false, fullWidth = false, ...rest }, ref) => {
        return (
            <TableContextProvider state={{ compact, collapseToList }}>
                <table
                    className={cx("jkl-table", className, {
                        ["jkl-table--full-width"]: fullWidth,
                        ["jkl-table--collapse-to-list"]: collapseToList,
                    })}
                    {...rest}
                    ref={ref}
                />
            </TableContextProvider>
        );
    },
);

Table.displayName = "Table";

export { Table };
