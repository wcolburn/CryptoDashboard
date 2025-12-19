import * as React from 'react';
import { useFetcher } from '@remix-run/react';
import { CryptoInfo } from '~/data';
import { WebsiteTitle } from '~/components/websiteTitle';
import { CryptoCards } from '~/components/cryptoCards';
import { LoadCryptoInfo } from '~/components/loadCryptoInfo';
import { RefreshButton } from '~/components/refreshButton';

export default function Index() {
  const fetcher = useFetcher<CryptoInfo[]>();
  return (
    <React.Fragment>

      <WebsiteTitle />

      <RefreshButton fetcher={fetcher} />

      <LoadCryptoInfo fetcher={fetcher} />

      {fetcher.data && fetcher.state !== 'loading' && <CryptoCards cryptoInfo={fetcher.data} />}
      
    </React.Fragment>
  );
}
