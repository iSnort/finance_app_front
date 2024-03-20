import { useOutletContext } from "react-router";
import { CompanyBalanceSheet, CompanyCashFlow } from "../../company";
import { useEffect, useState } from "react";
import { getBalanceSheet } from "../../api";
import RatioList from "../RatioList/RatioList";

type Props = {};

const config = [
    {
      label: "Date",
      render: (company: CompanyCashFlow) => company.date,
    },
    {
      label: "Operating Cashflow",
      render: (company: CompanyCashFlow) => company.operatingCashFlow,
    },
    {
      label: "Investing Cashflow",
      render: (company: CompanyCashFlow) =>
        company.netCashUsedForInvestingActivites,
    },
    {
      label: "Financing Cashflow",
      render: (company: CompanyCashFlow) =>
        company.netCashUsedProvidedByFinancingActivities,
    },
    {
      label: "Cash At End of Period",
      render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
    },
    {
      label: "CapEX",
      render: (company: CompanyCashFlow) => company.capitalExpenditure,
    },
    {
      label: "Issuance Of Stock",
      render: (company: CompanyCashFlow) => company.commonStockIssued,
    },
    {
      label: "Free Cash Flow",
      render: (company: CompanyCashFlow) => company.freeCashFlow,
    },
  ];

const BalanceSheet = (props: Props) => {
    const ticker = useOutletContext<string>();
    // set the state type as a [] if you want to make a table from the data
    const [balanceSheet, setBalanceSheet] = useState<CompanyBalanceSheet>();

    useEffect(() => {
        const getData = async () => {
            const result = await getBalanceSheet(ticker);
            setBalanceSheet(result?.data[0]);
        };

        getData();
    }, []);

  return (
    <>
        {
            balanceSheet 
            ? (
                <>
                    <RatioList config={config} data={balanceSheet} />
                </>
            ) 
            : 
            (
                <h1>Company not found!</h1>
            )
        }
    </>
  )
}

export default BalanceSheet