import { useState } from "react";
import currencyStore from "../state/store";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistoricData } from "../services/fetchCoinHistoricData";

function useFetchCoinHistory(coinId) {
  const { currency } = currencyStore();

  const [days, setDays] = useState(7);
  const [interval, setCoinInterval] = useState("daily");

  const {
    data: historicData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coinHistoricData", coinId, currency, days, interval],
    queryFn: () => fetchCoinHistoricData(coinId, interval, days, currency),
    cacheTime: 2 * 60 * 1000,
    staleTime: 2 * 60 * 1000,
  });

  return {
    historicData,
    isLoading,
    isError,
    setDays,
    setCoinInterval,
    days,
    currency,
  };
}

export default useFetchCoinHistory;
