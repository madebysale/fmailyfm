import React from 'react'

const MOnth = () => {

    function createQuarterMonthsArray(startDate, endDate) {
        const quarters = [];
      
        // loop through each year between the start and end dates
        for (let year = startDate.getFullYear(); year <= endDate.getFullYear(); year++) {
          // loop through each quarter of the year
          for (let quarter = 0; quarter < 4; quarter++) {
            const quarterStartDate = new Date(year, quarter * 3, 1);
            const quarterEndDate = new Date(year, (quarter + 1) * 3, 0);
      
            // add the quarter to the array
            quarters.push({
              year: year,
              quarter: quarter + 1,
            //   months: getQuarterMonths(quarterStartDate, quarterEndDate)
            });
          }
        }
      
        return quarters;
      }
      

      const startDate = new Date('2022-01-01');
      const endDate = new Date('2023-12-31');
      const quarters = createQuarterMonthsArray(startDate, endDate);


  return (
    <div>
    {quarters.map((quarter, index) => (
      <div key={index}>
        <h3>{quarter.year} Q{quarter.quarter}</h3>
        <ul>
          {quarter.months.map((month, index) => (
            <li key={index}>{month}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  )
}

export default MOnth