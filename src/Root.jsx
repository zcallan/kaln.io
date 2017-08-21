import { h, render } from 'preact';
import { Router } from 'preact-router';
import { App, NotFound, Home } from 'views';


const Root = (
  <App>
    <Router>
      <Home path="/" />
      <NotFound default />
    </Router>
  </App>
);

render( Root, document.getElementById( 'root' ));
