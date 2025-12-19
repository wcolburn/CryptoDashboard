import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export function CryptoCardHeader(props: { cryptoName: string, cryptoSymbol: string }) {
    return (
        <CardContent>
            <Typography variant='h6'>
                {props.cryptoName ? props.cryptoName : props.cryptoSymbol}
            </Typography>
            <Typography variant='subtitle2'>
                {props.cryptoSymbol}
            </Typography>
        </CardContent>
    );
}