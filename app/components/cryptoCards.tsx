import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useLoaderData } from "@remix-run/react";
import { CryptoInfo, getCryptoInfo } from "~/data";

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
                        <CardContent>
                        <Typography variant='h6'>
                            {crypto.name ? crypto.name : crypto.symbol}
                        </Typography>
                        <Typography variant='subtitle2'>
                            {crypto.symbol}
                        </Typography>
                        </CardContent>
                        <Divider />
                        <CardContent>
                        <Typography variant='body1' fontWeight={'bold'}>
                            Conversions:
                        </Typography>
                        <Typography variant='body1' sx={{ fontFamily: "monospace" }}>
                            USD: {crypto.exchange_rate_USD}
                        </Typography>
                        <Typography variant='body1' sx={{ fontFamily: "monospace" }}>
                            BTC: {crypto.exchange_rate_BTC}
                        </Typography>
                        </CardContent>
                    </Card>
                ))
                }   
            </Box>
        </div>
    );
}