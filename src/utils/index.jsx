import { useEffect, useRef } from 'react';

export const useSetInterval = (cb, time, enabled) => {
  const cbRef = useRef(null);
  useEffect(() => {
    cbRef.current = cb;
  });
  useEffect(() => {
    if (enabled) {
      const interval = setInterval(() => cbRef.current(), time);
      return () => clearInterval(interval);
    }
  }, [time, enabled]);
};
