import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { FetcherWithComponents } from "@remix-run/react";
import { CryptoInfo } from "~/helpers/fetchFromAPI";

// Displays a button on first-load of the website to display the dashboard
export function LoadCryptoInfo(props: { fetcher: FetcherWithComponents<CryptoInfo[]> }) {
    return (
        <Box sx={{ justifyContent: "center", display: "flex", }}>
        {!props.fetcher.data && props.fetcher.state === "idle" && (
          <Button
            variant="contained"
            onClick={() => props.fetcher.load("/crypto")}
          >
            Get Crypto Info
          </Button>
        )}

        {props.fetcher.state === "loading" && <CircularProgress />}
      </Box>
    );
}