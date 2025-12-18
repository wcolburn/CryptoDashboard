import * as React from 'react';
import { useLoaderData, } from '@remix-run/react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const loader = async () => {
  const url = `http://api.freecryptoapi.com/v1/getCryptoList`;
  const response = await fetch(url, {
    headers: {
      "accept": "*/*",
      "Authorization": `Bearer ${process.env.API_KEY}`
    }
  });
  const json_data = await response.json();
  console.log(json_data);

  return [];
}

export default function Index() {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography variant='h5'>
            Header
          </Typography>
          <Typography variant='body2'>
            Body
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
