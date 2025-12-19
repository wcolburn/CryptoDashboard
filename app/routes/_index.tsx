import * as React from 'react';
import { useFetcher } from '@remix-run/react';
import { CryptoInfo, getCryptoInfo } from '~/data';
import { WebsiteTitle } from '~/components/websiteTitle';
import { CryptoCards } from '~/components/cryptoCards';
import { LoadCryptoInfo } from '~/components/loadCryptoInfo';

export default function Index() {
  const fetcher = useFetcher<CryptoInfo[]>();
  return (
    <React.Fragment>

      <WebsiteTitle />

      <LoadCryptoInfo fetcher={fetcher} />

      {fetcher.data && <CryptoCards cryptoInfo={fetcher.data} />}
      
    </React.Fragment>
  );
}
