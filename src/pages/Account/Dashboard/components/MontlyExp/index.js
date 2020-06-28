import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';

defaults.global.legend.labels = false;
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Invested",
      data: [10000, 25000, 12000, 50000, 12000, 11500, 12000, 2500, 8000, 3500, 9000,],
      fill: true,
      backgroundColor: "#069801",
      borderColor: "rgba(75,192,192,1)",
      barPercentage: 0.5,
      barThickness: 10,
      maxBarThickness: 8,
      minBarLength: 2,
    },
    {
      label: "Withdrawn",
      data: [2500, 8000, 3500, 9000, 54000, 7980, 6750, 54000, 7980, 6750],
      barPercentage: 0.5,
      barThickness: 10,
      maxBarThickness: 8,
      minBarLength: 2,
      backgroundColor: '#FF7A00',
      borderColor: "#FF7A00"
    }
  ]
};

const options ={
  scales: {
    xAxes: [{
      gridLines: {
        offsetGridLines: true,
        display: false
      }
    }],
    yAxes: [{
      gridLines: {
        display: true
      }
    }],
  }
};
const MonthlyExpenditure = () => {
  return (
    <section className="slim-border-2 padding-horizontal-md margin-bottom-md bg-white expenditure">
      <div className="d-flex justify-content-s-between slim-border-bottom padding-vertical-sm">
        <h2 className="font-weight-500 font-style-normal font-lg">Montly Expenditure</h2>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center margin-right-sm">
            <div className="indicator green margin-right-sm" />
            <span className="font-sm font-weight-500">Invested</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="indicator orange margin-right-sm" />
            <span className="font-sm font-weight-500">Withdrawn</span>
          </div>
        </div>
      </div>
      <section className="linear-graph">
        <Bar data={data} options={options} height={100} />
      </section>
    </section>
  )
}

export default MonthlyExpenditure