import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import { CryptoInfo } from "~/data";
import { CryptoCardHeader } from "./cryptoCardHeader";
import { CryptoCardBody } from "./cryptoCardBody";

export function CryptoCards(props: { cryptoInfo: CryptoInfo[] }) {
    return (
        <div style={{ backgroundColor: "royalblue", padding: 10 }}>
            <Box
                sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 3,
                }}
            >
                {
                    props.cryptoInfo.map((crypto) => (
                        <Card key={crypto.id}>

                            <CryptoCardHeader cryptoName={crypto.name} cryptoSymbol={crypto.symbol} />

                            <Divider />

                            <CryptoCardBody exchange_rate_USD={crypto.exchange_rate_USD} exchange_rate_BTC={crypto.exchange_rate_BTC} />

                        </Card>
                    ))
                }   
            </Box>
        </div>
    );
}