import { getCryptoInfo } from "~/helpers/fetchFromAPI";

export async function loader() {
  return await getCryptoInfo();
}