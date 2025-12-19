import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { FetcherWithComponents } from "@remix-run/react";
import { CryptoInfo } from "~/data";

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