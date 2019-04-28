import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import 'what-input';
import Header from 'src/components/Header/Header';
import Main from 'src/components/Main/Main';
import Footer from 'src/components/Footer/Footer';
import fragmentIdentifiers from 'src/constants/fragmentIdentifiers';
import utilityClasses from 'src/constants/utilityClasses';
import 'backpack.css';
import 'src/assets/css/index.css';
import './Layout.css';

export default function Layout(props) {
  const { children } = props;

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            defaultTitle={data.site.siteMetadata.title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          >
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Helmet>
          <a
            className={utilityClasses.hideVisually}
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
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
