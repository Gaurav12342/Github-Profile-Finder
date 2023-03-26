import { FC, useCallback, useEffect, useState } from "react";

export const useDebounce = (value: string, milisecond: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), milisecond || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, milisecond]);

  return debouncedValue;
};
