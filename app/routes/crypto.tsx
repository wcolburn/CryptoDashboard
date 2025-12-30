import { useLoaderData } from "@remix-run/react";
import { CryptoCards } from "~/components/cryptoCards";
import { RefreshButton } from "~/components/refreshButton";
import { getCryptoInfo } from "~/helpers/fetchFromAPI";

export async function loader() {
  const info = await getCryptoInfo();
  return { info };
}

export default function Crypto() {
  const { info } = useLoaderData<typeof loader>();

  return (
    <div>
      <RefreshButton />
      <CryptoCards cryptoInfo={info} />
    </div>
  );
}