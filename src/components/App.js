import React, { Component } from 'react';
import {approaches} from '../constants/constants'
let someVar = 'boobs'
const aspects = [
  `It\'s ${someVar} raining`,
  'It\'s tits falling from the sky',
  'Everything is on fire'
]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      characterRollResult: '',
      npcRollResult: '',
      selectedApproachModifier: approaches[0].modifier,
      maualModifier: '',
      aspects: aspects,
      newAspect: ''
    }
  }

  render() {
    const approachesList = approaches.map((approach) => {
      return <option value={approach.modifier} > {approach.name} + {approach.modifier}</option>
    })
    const aspectsList = this.state.aspects.map((aspect) => {
      return <p> {aspect} </p>
    })
    return (
      <div>
        <h1> hello </h1>
        <select
          value={this.state.selectedApproachModifier}
          onChange={this.onApproachSelected}
        >
          {approachesList}
        </select>
        <button onClick={this.rollForCharacter}> Roll for character </button>
        {this.state.characterRollResult}
        <br />
        <input value={this.state.maualModifier} onChange={this.onManualModifierChange} />
        <button onClick={this.rollForNpc}> Roll for npc </button>
        {this.state.npcRollResult}
        <br />
        <p> Difference = {this.state.characterRollResult - this.state.npcRollResult}</p>
        {aspectsList}
        <textarea value={this.state.newAspect} onChange={this.handleNewAspectChange} />
        <button onClick={this.createNewAspect}> + </button>

      </div>
    );
  }

  rollForCharacter = () => {
    const rollResult = this.roll(this.state.selectedApproachModifier)
    this.setState({
      characterRollResult: rollResult
    })
  }

  rollForNpc = () => {
    const rollResult = this.roll(this.state.maualModifier)
    this.setState({
      npcRollResult: rollResult
    })
  }

  onManualModifierChange = (event) => {
    this.setState({
      maualModifier: event.target.value
    })
  }

  handleNewAspectChange = (event) => {
    this.setState({
      newAspect: event.target.value
    })
  }

  createNewAspect = () => {
    // this.state.aspects.push(this.state.newAspect)

    this.setState(
      (previousState) => {
        let aspects = previousState.aspects
        aspects.push(previousState.newAspect)
        return {
          aspects: aspects,
          newAspect: ''
        }
      }
    )
  }

  roll = (modifier) => {
    let sum = 0
    for (var i = 0; i < 4; i++) {
      const rand =  Math.floor((Math.random() * 3) - 1)
      sum = sum + rand
    }
    modifier = parseInt(modifier)
    return sum + modifier
  }

  onApproachSelected = (event) => {
    const selectedApproachModifier = event.target.value
    this.setState({selectedApproachModifier})
  }
}

export default App;
