import React, { Component } from 'react';
import Aspects from './Aspects'
import Roller from './Roller'
import CharacterSheet from './CharacterSheet'
import {approaches} from '../constants/constants'
import {aspects} from './Aspects'
import { db, base } from '../firebase'
import CharactersList from './CharactersList'
//
// const character = {
//   name: 'Player1',
//   character: 'SOME CHAR NAME',
//   aspects: ['Lazy', 'Impulsive', 'Smart'],
//   approaches: approaches,
//   fatePoints: 3,
//   refresh: '',
//   stunts: ['Because I am awesome, +2 on forcefull attack', 'Once per session i get to call mom', 'unoriginal', 'words'],
//   stress: [false, false, false],
//   consequences: {
//     mild: ' yes',
//     moderate: 'no ',
//     severe: ' okay'
//   }
// }
//
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {

    return (
      <div>
        <h1> Fate </h1>
        <CharactersList />
      </div>
    );
  }
}

// <Roller />
// <Aspects />
// <CharacterSheet character={character} />


export default App;
