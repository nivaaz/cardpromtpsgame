"use client";
import { useState } from "react";
import { cardsData } from "./cardsData";

export default function Home() {
  const [cardIndex, setCardIndex] = useState(0);

  function shuffleCard() {
    setCardIndex(Math.floor(Math.random() * cardsData.length));
  }

  return (
    <div className="grid bg-green-50 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="my-4 py-4 px-8 rounded">
          <div className="border-green-500 p-4rounded">
            <p className="text-xl font-bold lowercase text-green-700">
              {cardsData[cardIndex].sign}
            </p>
            <p className="py-8 text-3xl ">{cardsData[cardIndex].prompt}</p>
            <p className="text-gray-600 ">
              {" "}
              Bonus: {cardsData[cardIndex].bonus}
            </p>
          </div>
          <button
            onClick={shuffleCard}
            className="font-bold lowercase w-full mt-4 px-4 py-4 bg-green-500 text-white rounded"
          >
            Shuffle
          </button>
        </div>
      </main>
    </div>
  );
}
