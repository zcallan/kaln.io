import { h, Component } from 'preact';


class App extends Component {
  render({ children }) {
    return (
      <main>
        {children}
      </main>
    );
  }
}

export default App;
