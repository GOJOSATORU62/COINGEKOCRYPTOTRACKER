import { useEffect, useState } from "react";
import { fecthCoinData } from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";

function CoinTable() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => fecthCoinData(page, "usd"),
    retry: 2,
    retryDelay: 1000,
    cacheTime: 1000 * 60 * 2,
  });

  useEffect(() => {
    if (data) {
      console.log(data.data);
    }
  }, [data]);

  if (isLoading) {
    return <div> Loading....</div>;
  }

  if (isError) {
    return <div>Error:{error.message}</div>;
  }

  return (
    <>
      Coin Table <button onClick={() => setPage(page + 1)}>Click</button>
      {page}
    </>
  );
}

export default CoinTable;
