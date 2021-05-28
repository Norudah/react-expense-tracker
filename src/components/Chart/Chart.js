import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  // Model of the empty chartBars by month and their values
  const monthBars = [
    { month: "Jan", value: 0 },
    { month: "Fév", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Avr", value: 0 },
    { month: "Mai", value: 0 },
    { month: "Jui", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aou", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Déc", value: 0 },
  ];

  // Update the chartBars with the real values
  props.expenses.forEach((expense) => {
    const monthIndex = expense.date.getMonth();
    monthBars[monthIndex].value += expense.amount;
  });

  // Get maximum value among the expenses we've got.
  const expensesValues = props.expenses.map((expense) => +expense.amount);
  const maxValue = Math.max(...expensesValues);

  // Create one ChartBar per month inside monthBars with the calculated data
  const chartBars = monthBars.map((chartBar) => (
    <ChartBar
      key={chartBar.month}
      label={chartBar.month}
      value={chartBar.value}
      maxValue={maxValue}
    />
  ));

  return <div className="chart">{chartBars}</div>;
};

export default Chart;
