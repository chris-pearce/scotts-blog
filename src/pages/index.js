// @flow
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/what-to-expect/">
      Go to <strong>What To Expect</strong>
    </Link>
  </div>
);

export default IndexPage;
