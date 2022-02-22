import React, { FC } from "react";
import { ExampleComponentProps, CodeExample } from "../../../doc-utils";
import { DescriptionList, DescriptionTerm, DescriptionDetail } from "../../description-list-react/src";

import {
    formatAvstand,
    formatFodselsnummer,
    formatKontonummer,
    formatKortnummer,
    formatNumber,
    formatTelefonnummer,
    formatValuta,
} from "../src";

export const FormattersExample: FC<ExampleComponentProps> = () => (
    <DescriptionList className="jkl-body">
        <DescriptionTerm>Fødselsnummer</DescriptionTerm>
        <DescriptionDetail>{formatFodselsnummer("01065100203")}</DescriptionDetail>
        <DescriptionTerm>Kortnummer</DescriptionTerm>
        <DescriptionDetail>{formatKortnummer("5457623898234113")}</DescriptionDetail>
        <DescriptionTerm>Kontonummer</DescriptionTerm>
        <DescriptionDetail>{formatKontonummer("44441155546")}</DescriptionDetail>
        <DescriptionDetail>{formatKontonummer("44441155546", { separator: "." })}</DescriptionDetail>
        <DescriptionTerm>Telefonnummer</DescriptionTerm>
        <DescriptionDetail>{formatTelefonnummer("98651731")}</DescriptionDetail>
        <DescriptionDetail>{formatTelefonnummer("22438634")}</DescriptionDetail>
        <DescriptionDetail>{formatTelefonnummer("81549300")}</DescriptionDetail>
        <DescriptionTerm>Avstand</DescriptionTerm>
        <DescriptionDetail>{formatAvstand("12000")}</DescriptionDetail>
        <DescriptionDetail>{formatAvstand("8000", { suffix: " per år" })}</DescriptionDetail>
        <DescriptionDetail>{formatAvstand("9,81", { unit: "meter", suffix: "/s" })}</DescriptionDetail>
        <DescriptionTerm>Valuta</DescriptionTerm>
        <DescriptionDetail>{formatValuta("127,5")}</DescriptionDetail>
        <DescriptionDetail>{formatValuta("5000", { suffix: "kr per måned" })}</DescriptionDetail>
        <DescriptionDetail>
            {formatValuta("859", { prefix: "kr", suffix: "", minimumFractionDigits: 2 })}
        </DescriptionDetail>
        <DescriptionTerm>Generelle tall</DescriptionTerm>
        <DescriptionDetail>{formatNumber("123")}</DescriptionDetail>
        <DescriptionDetail>{formatNumber("12345")}</DescriptionDetail>
        <DescriptionDetail>{formatNumber("1234567")}</DescriptionDetail>
        <DescriptionDetail>{formatNumber("12345,67")}</DescriptionDetail>
    </DescriptionList>
);

export default FormattersExample;

export const formattersExampleCode: CodeExample = `
<DescriptionList>
    <DescriptionTerm>Fødselsnummer</DescriptionTerm>
    <DescriptionDetail>{formatFodselsnummer("01065100203")}</DescriptionDetail>
    <DescriptionTerm>Kortnummer</DescriptionTerm>
    <DescriptionDetail>{formatKortnummer("5457623898234113")}</DescriptionDetail>
    <DescriptionTerm>Kontonummer</DescriptionTerm>
    <DescriptionDetail>{formatKontonummer("44441155546")}</DescriptionDetail>
    <DescriptionDetail>{formatKontonummer("44441155546", { separator: "." })}</DescriptionDetail>
    <DescriptionTerm>Telefonnummer</DescriptionTerm>
    <DescriptionDetail>{formatTelefonnummer("98651731")}</DescriptionDetail>
    <DescriptionDetail>{formatTelefonnummer("22438634")}</DescriptionDetail>
    <DescriptionDetail>{formatTelefonnummer("81549300")}</DescriptionDetail>
    <DescriptionTerm>Avstand</DescriptionTerm>
    <DescriptionDetail>{formatAvstand("12000")}</DescriptionDetail>
    <DescriptionDetail>{formatAvstand("8000", { suffix: " per år" })}</DescriptionDetail>
    <DescriptionDetail>{formatAvstand("9,81", { unit: "meter", suffix: "/s" })}</DescriptionDetail>
    <DescriptionTerm>Valuta</DescriptionTerm>
    <DescriptionDetail>{formatValuta("127,5")}</DescriptionDetail>
    <DescriptionDetail>{formatValuta("5000")}</DescriptionDetail>
    <DescriptionDetail>
        {formatValuta("859", { prefix: "kr", suffix: "", minimumFractionDigits: 2 })}
    </DescriptionDetail>
    <DescriptionTerm>Generelle tall</DescriptionTerm>
    <DescriptionDetail>{formatNumber("123")}</DescriptionDetail>
    <DescriptionDetail>{formatNumber("12345")}</DescriptionDetail>
    <DescriptionDetail>{formatNumber("1234567")}</DescriptionDetail>
    <DescriptionDetail>{formatNumber("12345,67")}</DescriptionDetail>
</DescriptionList>
`;
