import { ScaleLoader } from "react-spinners";
import useDarkMode from "../hooks/useDarkMode";

interface SpinnerProps {
  type: "button" | "full";
}

export default function Spinner({ type }: SpinnerProps) {
  const { isDarkMode } = useDarkMode();

  if (type === "button") {
    return (
      <div className="flex justify-center items-center">
        <ScaleLoader color="white" height={15.5} width={4.5} />
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <ScaleLoader color={isDarkMode ? "white" : "#0a0b0d"} />
      </div>
    );
  }
}
