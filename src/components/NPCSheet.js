import React, { Component } from 'react';

let testNPC = {
  name: 'Harry Potter',
  description: 'The boy who lived, \n He has messy hair and green eyes, \n A lightning scar crosses his forehead.',
  strengths: ['Plot armour', 'The power of Friendship', 'Expelliarmus'],
  stress: [false, true, false],
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
    return(
      <div>
        <p> HI </p>
        <p> Name: {this.state.npc.name} </p>
        <p> Description: {this.state.npc.description} </p>
        <p> Stress Points: {displayStressPoints} </p>
        <p> Strengths: </p>
        <ul> {displayStrengths} </ul>
        <button onClick={this.increaseStressPoints}> + </button>
        <button> - </button>*/
      </div>
    )
  }

  increaseStressPoints = () => {
    let index = 0
    for (let i = 0; i < this.state.npc.stress.length; i++) {
      if (!this.state.npc.stress[i]) {
        index = i;
        break;
      }
    }
    
    this.setState((previousState) => {
      let npc = previousState.npc;
      npc.stress[index] = true
      return {npc: npc}
    })
  }
  /*increaseStressPoints = () => {
    let arrayOfStressPoints = this.state.stress.map((stressPoint, index) => {
      if (!stressPoint){
        stressPoint = true
        this.setState(
          {stress[index]: stressPoint}
        ))
      }
    }
  )
}
<button onClick={this.increaseStressPoints}> + </button>
<button> - </button>*/

}

export default NPCSheet
