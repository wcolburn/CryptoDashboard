import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export function CryptoCardBody(props: { exchange_rate_USD: string, exchange_rate_BTC: string }) {
    return (
        <CardContent>
            
            <Typography variant='body1' fontWeight={'bold'}>
                Conversions:
            </Typography>

            <Typography variant='body1' sx={{ fontFamily: "monospace" }}>
                USD: {props.exchange_rate_USD}
            </Typography>

            <Typography variant='body1' sx={{ fontFamily: "monospace" }}>
                BTC: {props.exchange_rate_BTC}
            </Typography>

        </CardContent>
    );
}