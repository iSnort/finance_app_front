import { testIncomeStatementData } from "./testData"

const data = testIncomeStatementData;

interface Props {};

type Company = (typeof data)[0];

const confings = [
    {
        label: "Year",
        render: (company: Company) => company.acceptedDate
    },
    {
        label: "Cost of Renevue",
        render: (company: Company) => company.costOfRevenue
    }
]

const Table = (props: Props) => {

    const renderedRows = data.map((company) => {
        return (
            <tr key={company.cik} >
                {
                    confings.map((val: any) => {
                        return(
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">{val.render(company)}</td>
                        )
                    })
                }
            </tr>
        )
    });

    const renderHeaders = confings.map((config: any) => {
        return (
            <th key={config.label} className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {config.label}
            </th>
        )
    })

    return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <table>
            <thead className="min-w-full divide-y divide=gray-200 m-5">
                {renderHeaders}
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    </div>
  )
}

export default Table