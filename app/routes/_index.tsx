import * as React from 'react';
import { useLoaderData, } from '@remix-run/react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider'
import { getCryptoInfo } from '~/data';
import { WebsiteTitle } from '~/components/websiteTitle';
import { CryptoCards } from '~/components/cryptoCards';

export const loader = async () => {
  const cryptoInfo = await getCryptoInfo();
  console.log(cryptoInfo);
  return { cryptoInfo }
}

export default function Index() {
  const { cryptoInfo } = useLoaderData<typeof loader>();
  return (
    <React.Fragment>
      <WebsiteTitle />
      <CryptoCards cryptoInfo={cryptoInfo} />
    </React.Fragment>
  );
}
