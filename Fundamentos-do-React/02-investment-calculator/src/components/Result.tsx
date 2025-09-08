import {calculateInvestmentResults, formatter} from "../util/investment.js"
const HEADER_DATAS = ["Year", "Investment Value", "Interest (Year)" ,"Total Interest", "Invested Capital"]

export default function Result({values}){
    console.log(values)
    const investmentResults = calculateInvestmentResults(values)
    console.log(investmentResults)
    const initialInvestment = investmentResults[0].valueEndOfYear - investmentResults[0].interest - investmentResults[0].annualInvestment;
    return(
        <table id="result">
            <thead>
                <tr>
                    {HEADER_DATAS.map((datas, index)=>
                        <th key={index}>{datas}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                    {
                        investmentResults.map((row) => {
                        
                        const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
                        const investedCapital = row.valueEndOfYear - totalInterest;
                        return (
                            <tr key={row.year}>
                                <td>{row.year}</td>
                                <td>{formatter.format(row.valueEndOfYear)}</td>
                                <td>{formatter.format(row.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(investedCapital)}</td>
                                
                            </tr>
                        )} )}
                    
            </tbody>
        </table>
    )
}