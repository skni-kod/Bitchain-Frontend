import { useEffect } from "react";
import { CryptoDataObject } from "../../pages/Details";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { useDailyVote } from "../../features/CryptoDetails/useDailyVote";
import { useGetDailyVotes } from "../../features/CryptoDetails/useGetDailyVotes";
import Spinner from "../Spinner";
interface CryptoDailyRatingProps {
  crypto: CryptoDataObject;
}

export default function CryptoDailyRating({ crypto }: CryptoDailyRatingProps) {
  const addDailyVote = useDailyVote();
  const { data, isSuccess, refetch } = useGetDailyVotes(crypto.data.symbol);

  useEffect(() => {
    refetch();
  }, [crypto.data.symbol, refetch]);

  return (
    <div className=" p-4 mt-8">
      <p className="text-lg text-bgDark dark:text-bgWhite">
        How do you feel about {crypto.data.name} today?
      </p>
      <div className="flex justify-start items-center gap-5 mt-3">
        <button
          className="flex justify-center items-center px-3 py-2 bg-bgWhite1 dark:bg-bgDark1 text-bgDark dark:text-bgWhite  rounded-lg gap-2 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300"
          onClick={() =>
            addDailyVote({ action: "good", symbol: crypto.data.symbol })
          }
        >
          <AiFillLike /> Good
        </button>
        <button
          className="flex justify-center items-center px-3 py-2 bg-bgWhite1 dark:bg-bgDark1 text-bgDark dark:text-bgWhite  rounded-lg gap-2 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300"
          onClick={() =>
            addDailyVote({ action: "bad", symbol: crypto.data.symbol })
          }
        >
          <AiFillDislike /> Bad
        </button>
      </div>
      {isSuccess ? (
        <>
          <div className="w-full flex justify-between items-center mt-6 dark:text-white ">
            <p className="flex justify-center items-center gap-3 text-sm">
              <AiFillLike /> Good{" "}
              <span className="text-green-500">{data.good}</span>
            </p>
            <p className="flex justify-center items-center gap-3 text-sm">
              <AiFillDislike /> Bad{" "}
              <span className="text-red-500">{data.bad}</span>
            </p>
          </div>
          <div className="w-full flex justify-center items-center gap-3 mt-3">
            <div
              className="bg-green-500 h-4 rounded-lg transition-all duration-200"
              style={{
                width: `${
                  data.good === 0 && data.bad === 0
                    ? 50
                    : (data.good / (data.bad + data.good)) * 100
                }%`,
              }}
            ></div>
            <div
              className="bg-red-500 h-4 rounded-lg transition-all duration-200"
              style={{
                width: `${
                  data.good === 0 && data.bad === 0
                    ? 50
                    : (data.bad / (data.bad + data.good)) * 100
                }%`,
              }}
            ></div>
          </div>
        </>
      ) : (
        <Spinner type="full" />
      )}
      <p></p>
    </div>
  );
}
