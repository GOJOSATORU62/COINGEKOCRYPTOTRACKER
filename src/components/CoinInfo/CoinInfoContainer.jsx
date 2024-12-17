import { useState } from "react";
import CoinInfo from "./CoinInfo";
import currencyStore from "../../state/store";
import { useQuery } from "@tanstack/react-query";
import PageLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";
import { fetchCoinHistoricData } from "../../services/fetchCoinHistoricData";

function CoinInfoContainer({ coinId }) {
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

  if (isLoading) {
    return <PageLoader />;
  }

  if (isError) {
    return <Alert message="Error fetching data" type="error" />;
  }

  return (
    <CoinInfo
      historicData={historicData}
      days={days}
      setDays={setDays}
      interval={interval}
      setCoinInterval={setCoinInterval}
      currency={currency}
    />
  );
}

export default CoinInfoContainer;
