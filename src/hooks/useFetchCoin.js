import { useQuery } from "@tanstack/react-query";
import { fecthCoinDetails } from "../services/fetchCOinDetails";
import currencyStore from "../state/store";

function useFetchCoin(coinId) {
  const { currency } = currencyStore();

  const {
    isError,
    isLoading,
    data: coin,
  } = useQuery({
    queryKey: ["coin", coinId],
    queryFn: () => fecthCoinDetails(coinId),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  return {
    currency,
    isError,
    isLoading,
    coin,
  };
}

export default useFetchCoin;
