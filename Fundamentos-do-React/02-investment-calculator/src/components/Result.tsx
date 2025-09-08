import {calculateInvestmentResults, formatter} from "../util/investment"
const HEADER_DATAS = ["Year", "Investment Value", "Interest (Year)" ,"Total Interest", "Invested Capital"]

export default function Result({values}){
    console.log(values)
    const investmentResults = calculateInvestmentResults(values)
    console.log(investmentResults)
    return(
        <table id="result">
            <thead>
                <tr>
                    {HEADER_DATAS.map((datas, index)=>
                        <td key={index}>{datas}</td>
                    )}
                </tr>
            </thead>
            <tbody>
                    {
                        investmentResults.map((row, rowIndex)=>
                            <tr key={rowIndex}>
                                <td>{row.year}</td>
                                <td>{formatter.format(row.valueEndOfYear)}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        )
                    }
            </tbody>
        </table>
    )
}