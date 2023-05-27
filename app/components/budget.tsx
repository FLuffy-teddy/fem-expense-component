import Image from "next/image";
import data from "../api/data.json";

export default function Budget() {
  const total = 0;

  return (
    <div className="flex">
      <div className="soft-red flex justify-end p-4 my-2 rounded-xl">
        <div className="flex flex-col">
          <h1 className="text-xl">My balance</h1>
          <h2 className="text-5xl">${total}</h2>
        </div>
        <Image src="/logo.svg" height={50} width={50} alt="Logo" />
      </div>
      <div className="cream p-4 rounded-xl">
        <h2 className="text-5xl dark-brown">
          Spending - Last 7 days
        </h2>
      </div>
    </div>
  );
}
