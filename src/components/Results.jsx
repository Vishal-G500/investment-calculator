import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({input}){
 const resultsData = calculateInvestmentResults(input);
 const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].annualInvestment - resultsData[0].interest;
 console.log(resultsData);
    return (
        <table id="result">
          <thead>
            <tr>
                <td>Year</td>
                <td>Investment Value</td>
                <td>Interest(Year)</td>
                <td>Total Interest</td>
                <td>Invested Capital</td>
            </tr>
          </thead>
          <tbody>
            {resultsData.map((yearData) => {
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                const totalInvestedCapital = yearData.valueEndOfYear - totalInterest;
                return (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalInvestedCapital)}</td>
                    </tr>
                );                
            })}
            
          </tbody>
        </table>
    );
}