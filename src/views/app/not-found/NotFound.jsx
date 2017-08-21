import './notFound.scss';
import { h } from 'preact';
import { Link } from 'preact-router';


const NotFound = () => (
  <div className="not-found">
    <h1>Not found</h1>
    <Link href="/">Home</Link>
  </div>
);

export default NotFound;
