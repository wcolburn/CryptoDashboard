import * as React from 'react';
import { useLoaderData, } from '@remix-run/react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { getAll } from '~/data';

export const loader = async () => {
  const cryptoInfo = await getAll();
  console.log(cryptoInfo);
  return { cryptoInfo };
}

export default function Index() {
  const { cryptoInfo } = useLoaderData<typeof loader>();
  return (
    <React.Fragment>
      {
        cryptoInfo.map((crypto) => (
          <Card>
            <CardContent>
              <Typography variant='h5'>
                {crypto.name}
              </Typography>
              <Typography variant='body2'>
                {crypto.symbol}
              </Typography>
            </CardContent>
          </Card>
        ))
      }     
    </React.Fragment>
  );
}
