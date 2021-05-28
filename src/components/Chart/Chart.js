import "./Chart.css";

import ChartBar from "./ChartBar";

// Model of the empty chartBars by month and their values
const monthBars = [
  { month: "Janvier", value: 0 },
  { month: "Février", value: 0 },
  { month: "Mars", value: 0 },
  { month: "Avril", value: 0 },
  { month: "Mai", value: 0 },
  { month: "Juin", value: 0 },
  { month: "Juillet", value: 0 },
  { month: "Aout", value: 0 },
  { month: "Septembre", value: 0 },
  { month: "Octobre", value: 0 },
  { month: "Novembre", value: 0 },
  { month: "Décembre", value: 0 },
];

const Chart = (props) => {
  // Update the chartBars with the real values
  props.expenses.forEach((expense) => {
    const monthIndex = expense.date.getMonth();
    monthBars[monthIndex].value += expense.amount;
  });

  const maxTotalExpense = 1000;

  const chartBars = monthBars.map((chartBar) => (
    <ChartBar
      key={chartBar.month}
      label={chartBar.month}
      value={chartBar.value}
      maxValue={maxTotalExpense}
    />
  ));

  return <div className="chart">{chartBars}</div>;
};

export default Chart;
