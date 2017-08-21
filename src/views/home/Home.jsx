import './home.scss';
import { h, Component } from 'preact';
import { Button } from 'views/generic';


class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Callan Delbridge</h1>

        <div>
          <Button
            href="//uni.kaln.io"
            externalLink
          >
            Uni
          </Button>

          <Button
            href="//files.kaln.io"
            externalLink
          >
            Files
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
