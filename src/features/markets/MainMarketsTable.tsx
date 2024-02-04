import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import MarketsTableHeader from "./MarketsTableHeader";
import MarketsTableRows from "./MarketsTableRows";

interface MainMarketsTableProps {
  label: string;
}

export default function MainMarketsTable({ label }: MainMarketsTableProps) {
  const [favorites, setFavorites] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");

  return (
    <div className="border-slate-200 dark:border-stone-700 border-solid border rounded-lg mx-8 ">
      <div className="flex p-4 text-xs xs:text-sm border-b-slate-200 dark:border-b-stone-700 border-b-solid border-b dark:text-white">
        <button
          className={`flex gap-2 items-center justify-center p-2 hover:text-main transition-colors duration-300 ${
            favorites && "text-main"
          }`}
          onClick={() => setFavorites(true)}
        >
          <span className="text-yellow-500">
            <FaStar />
          </span>{" "}
          Favorites
        </button>
        <button
          className={`flex gap-2 items-center justify-center p-2 hover:text-main transition-colors duration-300 ${
            !favorites && "text-main"
          }`}
          onClick={() => setFavorites(false)}
        >
          All Cryptos
        </button>
      </div>
      <div className="p-2">
        <MarketsTableHeader onFilter={setFilter} filter={filter} />
        <MarketsTableRows
          label={label}
          onFilter={setFilter}
          filter={filter}
          favorites={favorites}
        />
      </div>
      <div></div>
    </div>
  );
}
