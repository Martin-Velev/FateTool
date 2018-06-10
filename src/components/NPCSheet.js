import React, { Component } from 'react';
let testNPC = {
  name: 'Harry Potter',
  description: 'The boy who lived, He has messy hair and green eyes, A lightning scar crosses his forehead.',
  strengths: ['Plot armour', 'The power of Friendship', 'Expelliarmus'],
  weaknesses: ['A biased bitch, prone to favoritism ', 'Impulsive without planning', 'Lazy as fuck', 'A boring character'],
  stress: [false, false, false]
}

class NPCSheet extends Component {
  constructor(props){
    super(props)

    this.state = {
      npc: testNPC
    }
  }

  render(){
    let displayStressPoints = this.state.npc.stress.map((currentStressPoint) => {
      return currentStressPoint ? 'X' : '0'
    })

    let displayStrengths = this.state.npc.strengths.map((strength) => {
      return <li> {strength} </li>
    })
    let displayWeaknesses = this.state.npc.weaknesses.map((weakness) => {
      return <li> {weakness} </li>
    })
    return(
      <div>
        <p> HI </p>
        <p> Name: {this.state.npc.name} </p>
        <p> Description: {this.state.npc.description} </p>
        <p> Stress Points: {displayStressPoints} </p>
        <p> Strengths: </p>
        <ul> {displayStrengths} </ul>
        <p> Weaknesses: </p>
        <ul> {displayWeaknesses} </ul>
        <button onClick={this.increaseStressPoints}> + </button>
        <button onClick={this.decreaseStessPoints}> - </button>
      </div>
    )
  }

  increaseStressPoints = () => {
    let index = 0
    for (let i = 0; i < this.state.npc.stress.length; i++) {
      if (!this.state.npc.stress[i]) {
        index = i
        break
      }
    }

    this.setState((previousState) => {
      let npc = previousState.npc;
      npc.stress[index] = true
      return {npc: npc}
    })
  }
  decreaseStressPoints = () => {
    let index = 0
    for (let i = this.state.npc.stress.length; i > 0; i--) {
      if (this.state.npc.stress[i]) {
        index = i
        break
      }
    }
    this.setState((previousState) => {
      let npc = previousState.npc
      npc.stress[index] = false
      return {npc: npc}
    })
  }

}

export default NPCSheet
