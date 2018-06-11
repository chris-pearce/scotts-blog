// @flow
import * as React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Page not found</title>
    </Helmet>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist… the sadness.</p>
  </React.Fragment>
);

export default NotFoundPage;
