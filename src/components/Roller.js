import React, { Component } from 'react';
import {approaches} from '../constants/constants'

class Roller extends Component {
  constructor(props){
    super(props)
    this.state = {
      characterRollResult: '',
      npcRollResult: '',
      selectedApproachModifier: approaches[0].modifier,
      manualModifier: '',
    }
  }
  render(){
    const approachesList = approaches.map((approach) => {
    return <option value={approach.modifier} > {approach.name} + {approach.modifier}</option>
  }
  )
    return(
      <div>
      <select
        value={this.state.selectedApproachModifier}
        onChange={this.onApproachSelected}
      >
        {approachesList}
      </select>
      <button onClick={this.rollForCharacter}> Roll for character </button>
      {this.state.characterRollResult}
      <br />
      <input value={this.state.manualModifier} onChange={this.onManualModifierChange} />
      <button onClick={this.rollForNpc}> Roll for npc </button>
      {this.state.npcRollResult}
      <br />
      <p> Difference = {this.state.characterRollResult - this.state.npcRollResult}</p>
      </div>
    )
  }
  rollForCharacter = () => {
    const rollResult = this.roll(this.state.selectedApproachModifier)
    this.setState({
      characterRollResult: rollResult
    })
  }

  rollForNpc = () => {
    const rollResult = this.roll(this.state.manualModifier)
    this.setState({
      npcRollResult: rollResult
    })
  }

  onManualModifierChange = (event) => {
    this.setState({
      manualModifier: event.target.value
    })
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
export default Roller
