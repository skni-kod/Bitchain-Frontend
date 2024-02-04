import { useRef } from "react";
import { useUserWidth } from "../../hooks/useUserWidth";
import { VscTriangleDown } from "react-icons/vsc";

interface MarketsTableHeader {
  onFilter: (value: string) => void;
  filter: string;
}

export default function MarketsTableHeader({
  onFilter,
  filter,
}: MarketsTableHeader) {
  const width = useUserWidth();
  const counter = useRef<number>(0);
  const prevFilter = useRef<string>("");

  function onChangeFilter(filterType: string) {
    if (prevFilter.current !== filterType) {
      counter.current = 0;
    }

    switch (counter.current) {
      case 0:
        onFilter(`${filterType}Desc`);
        console.log(counter.current, filter);
        break;
      case 1:
        onFilter(`${filterType}Asc`);
        console.log(counter.current, filter);
        break;
      case 2:
        onFilter("");
        console.log(counter.current, filter);
        break;
      default:
        break;
    }
    prevFilter.current = filterType;
    counter.current = (counter.current + 1) % 3;
  }

  return (
    <div className="flex p-4 text-gray items-center justify-between text-xs xs:text-sm">
      <div className="w-[260px]">
        <p>Trading Pair</p>
      </div>
      {width > 1024 ? (
        <>
          <button
            className="w-[130px] flex justify-end gap-2 p-2 ml-3"
            onClick={() => onChangeFilter("price")}
          >
            <p className="text-right">Price(USDT)</p>
            <div className="flex flex-col justify-center items-center ">
              <span
                className={`block w-fit rotate-180 text-[11px] translate-y-[1px] ${
                  filter === "priceAsc" && "text-main"
                }`}
              >
                <VscTriangleDown />
              </span>
              <span
                className={`block w-fit text-[11px] -translate-y-[1px] ${
                  filter === "priceDesc" && "text-main"
                }`}
              >
                <VscTriangleDown />
              </span>
            </div>
          </button>
          <button
            className="w-[130px] flex justify-end gap-2 p-2 ml-3"
            onClick={() => onChangeFilter("percent")}
          >
            <p className="text-right">24h Change</p>
            <div className="flex flex-col justify-center items-center ">
              <span
                className={`block w-fit rotate-180 text-[11px] translate-y-[1px] ${
                  filter === "percentAsc" && "text-main"
                }`}
              >
                <VscTriangleDown />
              </span>
              <span
                className={`block w-fit text-[11px] -translate-y-[1px] ${
                  filter === "percentDesc" && "text-main"
                }`}
              >
                <VscTriangleDown />
              </span>
            </div>
          </button>
          <button
            className="w-[130px] flex justify-end gap-2 p-2 ml-3"
            onClick={() => onChangeFilter("vol")}
          >
            <p className="text-right">24h Vol.</p>
            <div className="flex flex-col justify-center items-center ">
              <span
                className={`block w-fit rotate-180 text-[11px] translate-y-[1px] ${
                  filter === "volAsc" && "text-main"
                }`}
              >
                <VscTriangleDown />
              </span>
              <span
                className={`block w-fit text-[11px] -translate-y-[1px] ${
                  filter === "volDesc" && "text-main"
                }`}
              >
                <VscTriangleDown />
              </span>
            </div>
          </button>

          <button
            className="w-[130px] flex justify-end gap-2 p-2 ml-3"
            onClick={() => onChangeFilter("mCap")}
          >
            <p className="text-right">Market Cap</p>
            <div className="flex flex-col justify-center items-center ">
              <span
                className={`block w-fit rotate-180 text-[11px] translate-y-[1px] ${
                  filter === "mCapAsc" && "text-main"
                }`}
              >
                <VscTriangleDown />
              </span>
              <span
                className={`block w-fit text-[11px] -translate-y-[1px] ${
                  filter === "mCapDesc" && "text-main"
                }`}
              >
                <VscTriangleDown />
              </span>
            </div>
          </button>

          <div className="w-[130px]">
            <p className="text-right">Action</p>
          </div>
        </>
      ) : (
        <div className="flex ">
         <button
            className="w-[130px] flex justify-end gap-2 p-2 ml-3"
            onClick={() => onChangeFilter("price")}
          >
            <p className="text-right">Price(USDT)</p>
            <div className="flex flex-col justify-center items-center ">
              <span
                className={`block w-fit rotate-180 text-[11px] translate-y-[1px] ${
                  filter === "priceAsc" && "text-main"
                }`}
              >
                <VscTriangleDown />
              </span>
              <span
                className={`block w-fit text-[11px] -translate-y-[1px] ${
                  filter === "priceDesc" && "text-main"
                }`}
              >
                <VscTriangleDown />
              </span>
            </div>
          </button>
          <div className="hidden sm:flex justify-end items-center w-[130px] ml-6 ">
            <p className="text-right">Action</p>
          </div>
        </div>
      )}
    </div>
  );
}
