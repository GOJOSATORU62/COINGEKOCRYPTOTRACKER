import { useState } from "react";
import { fecthCoinData } from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";

function CoinTable() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => fecthCoinData(page, "usd"),
    // retry: 2,
    // retryDelay: 1000,
    cacheTime: 1000 * 60 * 2,
  });

  if (isLoading) {
    return <div> Loading....</div>;
  }

  if (isError) {
    return <div>Error:{error.message}</div>;
  }

  return (
    <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto ">
      <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center">
        {/* {Header of the tabel} */}

        <div className="basis-[35%]">Coin</div>

        <div className="basis-[25%]">Price</div>

        <div className="basis-[20%]">24h change</div>

        <div className="basis-[20%]">Market Cap</div>
      </div>

      <div className="flex flex-col w-[80vw] mx-auto">
        {data &&
          data.map((coin) => {
            return (
              <div
                key={coin.id}
                className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between"
              >
                <div className="flex items-center justify-start gap-3 basis-[35%], ">
                  <div className="w-[5rem] h-[5rem]">
                    <img src={coin.image} className="w-full h-full " />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-3xl">{coin.name}</div>
                    <div className="text-xl">{coin.symbol}</div>
                  </div>
                </div>

                <div className="basis-[25%]">{coin.current_price}</div>
                <div className="basis-[20%]">{coin.price_change_24h}</div>
                <div className="basis-[20%]">{coin.market_cap}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CoinTable;