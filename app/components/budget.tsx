import Image from "next/image";
import data from "../api/data.json";

export default function Budget() {
  interface ExpenseType {
    day: string;
    amount: number;
  }
  const balanceThisMonth = 0;
  const totalThisMonth = 0;
  const percentDifference = 0;

  data.forEach(function (combine) {
    console.log(data[0].amount);
  });

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
        <div className="w-full h-32">
          <p className="text-5xl text-center">IMAGE</p>
        </div>
        <div className="border-t-2 border-medium-brown flex justify-between pt-4">
          <div className="flex flex-col justify-center">
            <p className="text-medium-brown text-xl">Total this month</p>
            <h4 className="text-5xl text-dark-brown">{totalThisMonth}</h4>
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
