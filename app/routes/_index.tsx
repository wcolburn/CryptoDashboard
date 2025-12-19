import * as React from 'react';
import { useFetcher } from '@remix-run/react';
import { CryptoInfo } from '~/data';
import { WebsiteTitle } from '~/components/websiteTitle';
import { CryptoCards } from '~/components/cryptoCards';
import { LoadCryptoInfo } from '~/components/loadCryptoInfo';
import { RefreshButton } from '~/components/refreshButton';

export default function Index() {
  const fetcher = useFetcher<CryptoInfo[]>();
  console.log(fetcher.data);
  return (
    <React.Fragment>

      <WebsiteTitle />

      {/* Only display refresh button when there is currently crypto info displayed. */}
      { fetcher.data !== undefined && fetcher.state !== "loading" && <RefreshButton fetcher={fetcher} /> }

      {/* On initial screen, displays a button to fetch crypto info */}
      <LoadCryptoInfo fetcher={fetcher} />

      {/* Once the data is loaded, display the crypto info */}
      { fetcher.data && fetcher.state !== 'loading' && <CryptoCards cryptoInfo={fetcher.data} /> }
      
    </React.Fragment>
  );
}
