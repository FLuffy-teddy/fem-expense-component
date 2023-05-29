'use client'

import Image from "next/image";
import data from "../api/data.json";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);

export const options = {
  responsive: true,
};

export default function Budget() {
  const balanceThisMonth = 0;
  const percentDifference = 0;
  let sum = 0;
  let callBackIncrement = 0;

  data.forEach(function() {
    sum += data[callBackIncrement].amount;
    callBackIncrement++;
  });

  const dayLabel:string[] = data.map((list) => list.day);
  const amountPerDay:number[] = data.map((list) => list.amount);

  const barData = {
    labels: dayLabel,
    legend: {
      display: false
    },
    datasets: [{
      data: amountPerDay,
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)',
      ],
      borderWidth: 1
    }]
  };
  

  return (
    <div className="flex flex-col">
      <div className="bg-soft-red flex justify-between p-4 my-2 rounded-xl">
        <div className="flex flex-col">
          <h1 className="text-xl">My balance</h1>
          <h2 className="text-5xl">${balanceThisMonth}</h2>
        </div>
        <Image src="/logo.svg" height={65} width={65} alt="Logo" />
      </div>
      <div className="bg-cream p-4 rounded-xl">
        <h3 className="text-5xl text-dark-brown">Spending - Last 7 days</h3>
        <div className="w-full">
        <Bar options={options} data={barData} />
        </div>
        <div className="border-t-2 border-medium-brown flex justify-between pt-4">
          <div className="flex flex-col justify-center">
            <p className="text-medium-brown text-xl">Total this month</p>
            <h4 className="text-5xl text-dark-brown">${sum}</h4>
          </div>
          <div className="flex flex-col content-end justify-center">
            <h5 className="text-2xl text-dark-brown">{percentDifference}</h5>
            <p className="text-medium-brown text-xl">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
