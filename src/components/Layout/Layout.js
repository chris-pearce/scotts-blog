// @flow
import * as React from 'react';
import { Helmet } from 'react-helmet';

import Header from 'src/components/Header/Header';
import Main from 'src/components/Main/Main';
import Footer from 'src/components/Footer/Footer';
import fragmentIdentifiers from 'src/constants/fragmentIdentifiers';
import utilClasses from 'src/constants/utilClasses';
import 'src/assets/css/index.css';
import 'Layout.css';

if (typeof window !== 'undefined') {
  require('what-input');
}

type Props = {
  children: React.Node,
  data: {
    site: {
      siteMetadata: {
        title: string,
      },
    },
  },
};

const Layout = (props: Props) => {
  const { children, data } = props;
  const { title } = data.site.siteMetadata;

  return (
    <>
      <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <a
        className={utilClasses.hideVisually}
        href={`#${fragmentIdentifiers.main}`}
      >
        Skip to the main content
      </a>
      <div className="c-master-layout">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
