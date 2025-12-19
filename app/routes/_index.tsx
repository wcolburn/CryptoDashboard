import * as React from 'react';
import { useLoaderData, } from '@remix-run/react';
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
