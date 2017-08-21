import { h, Component } from 'preact';


class App extends Component {
  render({ children }) {
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default App;
