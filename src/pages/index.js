// @flow
import * as React from 'react';
import Link from 'gatsby-link';
import { Helmet } from 'react-helmet';

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Welcome</title>
    </Helmet>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/what-to-expect/">
      Go to <strong>What To Expect</strong>
    </Link>
  </React.Fragment>
);

export default IndexPage;
