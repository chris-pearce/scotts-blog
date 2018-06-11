// @flow
import { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import 'src/assets/css/index.css';
import { Footer, Header, MasterLayout, Main } from 'src/components';
import { FRAGMENT_INDENTIFIERS, UTILITY_CLASSES } from 'src/constants';

if (typeof window !== 'undefined') {
  require('what-input');
}

type Props = {
  children: Function,
  data: {
    site: {
      siteMetadata: {
        title: string,
      },
    },
  },
};

const Root = (props: Props) => {
  const { children, data } = props;
  const { title } = data.site.siteMetadata;

  if (!children) return null;

  return (
    <Fragment>
      <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <a
        className={UTILITY_CLASSES.hideVisually}
        href={`#${FRAGMENT_INDENTIFIERS.main}`}
      >
        Skip to the main content
      </a>
      <MasterLayout>
        <Header />
        <Main>{children()}</Main>
        <Footer />
      </MasterLayout>
    </Fragment>
  );
};

export default Root;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
