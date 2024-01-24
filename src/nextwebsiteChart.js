import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as CharJS } from "chart.js/auto";
// Import the BankData
import BankData from "./BankData";
import CivilDepo from "./CivilDepo";
import EverestDepo from "./EverestDepo";
import InvtDepo from "./InvtDepo";
const BankAData = CivilDepo;
const BankBData = EverestDepo;
const BankCData = InvtDepo;
const mapData = (bankData) => {
  return bankData.values.map((value, index) => ({
    quarter: bankData.quarter[index],
    value: parseFloat(value) || 0,
  }));
};

const bankAData = mapData(BankAData);
const bankBData = mapData(BankBData);
const bankCData = mapData(BankCData);
function LineChart() {
  const data = {
    labels: bankAData.map((item) => item.quarter),
    datasets: [
      {
        label: "Civil Bank",
        data: bankAData.map((item) => item.value),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Everest Bank",
        data: bankBData.map((item) => item.value),
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
      {
        label: "Investment Bank",
        data: bankCData.map((item) => item.value),
        fill: false,
        borderColor: "rgb(150, 19, 72)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div style={{ width: 900 }}>
      <h2>Line Chart</h2>
      <Line data={data} />
    </div>
  );
}

export default LineChart;
