import { useSearchParams } from "react-router-dom";

export default function WalletDecorationBar() {
  const [searchParams] = useSearchParams();
  return (
    <div
      className={`absolute right-0 top-9 bg-main w-[3px] h-10 transition-transform duration-500 ${
        searchParams.get("tab") === "1" && "translate-y-[68px]"
      } ${searchParams.get("tab") === "2" && "translate-y-[136px]"} ${
        searchParams.get("tab") === "3" && "translate-y-[204px]"
      } ${searchParams.get("tab") === "4" && "translate-y-[272px]"}`}
    ></div>
  );
}
