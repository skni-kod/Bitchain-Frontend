import { useEffect, useRef, MutableRefObject } from "react";

interface UseClickOutsideProps {
  close: () => void;
}

export function useClickOutside({ close }: UseClickOutsideProps): MutableRefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [close]);

  return ref;
}
