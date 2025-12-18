import * as React from 'react';
import type { MetaFunction } from '@remix-run/node';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const meta: MetaFunction = () => [
  { title: 'Crypto Dashboard' },
  { name: 'description', content: 'This website displays current cryptocurrency info.' },
];

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
