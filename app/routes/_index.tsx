import * as React from 'react';
import { useLoaderData, } from '@remix-run/react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { getCryptoNamesAndSymbols, getExchangeRates } from '~/data';

export const loader = async () => {
  const cryptoInfo = await getCryptoNamesAndSymbols();
  // console.log(cryptoInfo);
  const exchangeInfo = await getExchangeRates([]);
  return { cryptoInfo }
}

export default function Index() {
  const { cryptoInfo } = useLoaderData<typeof loader>();
  return (
    <React.Fragment>
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: 4,
        }}
      >
        {
          cryptoInfo.map((crypto) => (
              <Card key={crypto.id}>
                <CardContent>
                  <Typography variant='h5'>
                    {crypto.name ? crypto.name : crypto.symbol}
                  </Typography>
                  <Typography variant='body2'>
                    {crypto.symbol}
                  </Typography>
                </CardContent>
              </Card>
          ))
        }   
      </Box>
    </React.Fragment>
  );
}
