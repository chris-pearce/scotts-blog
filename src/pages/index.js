import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from 'src/components/Layout/Layout';

export default () => (
  <Layout>
    <Helmet>
      <title>Welcome</title>
    </Helmet>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/what-to-expect/">
      Go to <strong>What To Expect</strong>
    </Link>
  </Layout>
);
