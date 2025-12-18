export type CryptoAPIInfo = {
    id: string,
    symbol: string,
    name: string,
    source: string,
    ohlc_available_from: string,
    history_available_from:string,
}

export type CryptoInfo = {
    id: string,
    symbol: string,
    name: string,
}

export async function getCryptoNamesAndSymbols(): Promise<CryptoInfo[]> {
    // Fetch from public API
    const url = `http://api.freecryptoapi.com/v1/getCryptoList`;
    const response = await fetch(url, {
        headers: {
            "accept": "*/*",
            "Authorization": `Bearer ${process.env.API_KEY}`
        }
    });
    if (!response.ok) {
        throw new Error("Issue fetching from freecryptoapi.");
    }

    // Parse into JSON
    const json_data = await response.json();
    console.log(json_data);
    if (json_data.result == undefined) {
        throw new Error("Missing expected crypto data.")
    }

    const cryptoData = json_data.result.splice(0, 30);

    // Map the crypto info we want into an array and return it
    const cryptoList: CryptoInfo[] = cryptoData.map((crypto: CryptoAPIInfo) => ({
        id: crypto.id,
        symbol: crypto.symbol,
        name: crypto.name
    }));

    return cryptoList;
}