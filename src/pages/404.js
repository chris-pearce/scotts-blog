// @flow
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'src/components/Layout/Layout';

export default function() {
  return (
    <Layout>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesnt exist… the sadness.</p>
    </Layout>
  );
}
