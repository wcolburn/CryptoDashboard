import { getCryptoInfo } from "~/data";

export async function loader() {
  return await getCryptoInfo(); // uses API key safely
}