import React, { Component } from 'react';
import Aspects from './Aspects'
import Roller from './Roller'
import CharacterSheet from './CharacterSheet'
import {approaches} from '../constants/constants'
import {aspects} from './Aspects'

const character = {
  name: 'Player1',
  character: '...',
  aspects: aspects,
  approaches: approaches,
  fatePoints: 3,
  refresh: '',
  stuns: ['some', 'random', 'unoriginal', 'words'],
  stress: [false, false, false],
  consequences: {
    mild: ' yes',
    moderate: 'no ',
    severe: ' okay'
  }
}

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
        <Roller />
        <Aspects />
        <CharacterSheet character={character} />
      </div>
    );
  }
}

export default App;
