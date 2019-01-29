// import React, {Component} from 'react';
// import Table from './Table';
//
// class App extends Component {
//   state = {
//     characters: [
//       {
//         'name': 'Tamara',
//         'job': 'Seamstress'
//       },
//       {
//         'name': 'Mac',
//         'job': 'Ethical hacker'
//       },
//       {
//         'name': 'Lily',
//         'job': 'Master herbalist'
//       },
//       {
//         'name': 'Dylan',
//         'job': 'Bartender'
//       }
//     ]
//   };
//
//   removeCharacter = index => {
//     const { characters } = this.state;
//
//     this.setState({
//       characters: characters.filter((character, i) => {
//         return i !== index;
//       })
//     });
//   }
//
// render() {
//   const { characters } = this.state;
// }
//
//       return (
//         <div className="container">
//           <Table
//             characterData={characters}
//             removeCharacter={this.removeCharacter}
//           />
//         </div>
//     );
// }
//
// export default App;

import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    state = {
        characters: [
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
        ]
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
            </div>
        );
    }
}

export default App;
