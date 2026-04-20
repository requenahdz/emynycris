import { useCallback, useEffect, useMemo, useState } from "react";

type TimeBreakdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type Mode = "countdown" | "elapsed";

type UseCountdownInput = {
  day: number;
  month: number;
  year: number;
  hour?: number;
  minute?: number;
  second?: number;
};

const breakdown = (ms: number): TimeBreakdown => {
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
};

export function useCountdown({ day, month, year, hour = 0, minute = 0, second = 0 }: UseCountdownInput) {
  const targetTimestamp = useMemo(() => {
    return new Date(year, month - 1, day, hour, minute, second).getTime();
  }, [day, hour, minute, month, second, year]);

  const compute = useCallback((): { mode: Mode; time: TimeBreakdown } => {
    const now = Date.now();
    const diff = targetTimestamp - now;
    if (diff >= 0) {
      return { mode: "countdown", time: breakdown(diff) };
    }
    return { mode: "elapsed", time: breakdown(now - targetTimestamp) };
  }, [targetTimestamp]);

  const [{ mode, time }, setState] = useState<{ mode: Mode; time: TimeBreakdown }>(() => compute());

  useEffect(() => {
    const timer = setInterval(() => {
      setState(compute());
    }, 1000);

    return () => clearInterval(timer);
  }, [compute]);

  return { mode, time };
}

