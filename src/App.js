import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
  render() {
      const characters = [
        {
          'name': 'Tamara',
          'job': 'Seamstress'
        },
        {
          'name': 'Mac',
          'job': 'Ethical hacker'
        },
        {
          'name': 'Lily',
          'job': 'Master herbalist'
        },
        {
          'name': 'Dylan',
          'job': 'Bartender'
        }
      ];

      return (
        <div className="container">
          <Table characterData={characters} />
        </div>
    );
  }
}

export default App;
