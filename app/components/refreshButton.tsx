import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { FetcherWithComponents } from "@remix-run/react";
import { CryptoInfo } from "~/helpers/fetchFromAPI";
import RefreshIcon from '@mui/icons-material/Refresh';

export function RefreshButton(props: { fetcher: FetcherWithComponents<CryptoInfo[]> }) {
    return (
        <Box sx={{ display: "flex", justifyContent: "flex-end", }}>
          <props.fetcher.Form method="post">
            <IconButton aria-label="refresh" onClick={() => props.fetcher.load("/crypto")}>
              <RefreshIcon fontSize='large' />
            </IconButton>
          </props.fetcher.Form>
        </Box>
    );
}