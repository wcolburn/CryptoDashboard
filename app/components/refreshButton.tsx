import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigation } from "@remix-run/react";
import RefreshIcon from '@mui/icons-material/Refresh';
import { CircularProgress } from "@mui/material";

export function RefreshButton() {
  const navigation = useNavigation();

    return (
      <Box sx={{ height: 48 }}>
          <Box sx={{ height: 48,
            width: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center", 
          }}>
            {
              !navigation.location ?
                <Link to={'/crypto'}>
                  <IconButton aria-label="refresh">
                    <RefreshIcon fontSize='large' />
                  </IconButton>
                </Link>
                : <CircularProgress size='2rem' />
            }
          </Box>
        </Box>
    );
}