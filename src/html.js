// @flow
import * as React from 'react';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    // $FlowIgnore
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

type Props = {
  body: string,
  headComponents: React.Node,
  postBodyComponents: React.Node,
  preBodyComponents: React.Node,
};

const HTML = (props: Props) => {
  const { body, headComponents, postBodyComponents, preBodyComponents } = props;
  let css;
  if (process.env.NODE_ENV === `production`) {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: stylesStr }}
      />
    );
  }
  return (
    <html lang="en">
      <head>
        {headComponents}
        {css}
      </head>
      <body>
        {preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
