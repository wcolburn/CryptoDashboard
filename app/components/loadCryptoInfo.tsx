import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "@remix-run/react";
import { useState } from "react";

// Displays a button on first-load of the website to display the dashboard
export function LoadCryptoInfoButton() {
  const [loading, setLoading] = useState(false);
    return (
      <Box sx={{ justifyContent: "center", display: "flex", }}>
        {
          !loading 
            ? 
              <Link to={'/crypto'}>
                <Button
                  variant="contained"
                  onClick={() => setLoading(true)}
                >
                  Get Crypto Info
                </Button>
              </Link>
            :
              <CircularProgress />
        }
      </Box>
    );
}