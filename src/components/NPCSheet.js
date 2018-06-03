import React, { Component } from 'react';

let testNPC = [
  {name: 'Harry Potter'},
  {description: 'The boy who lived, \n He has messy hair and green eyes, \n A lightning scar crosses his forehead.'},
  {strengths: ['Plot armour', 'The power of Friendship', 'Expelliarmus']}
]

class NPCSheet extends Component {
  constructor(props){
    super(props)
    this.state = {
      characterName: testNPC[0].name,
      characterDescription: testNPC[1].description,
      stress: [true, false, false],
    }
  }

  render(){
    let currentStressPoint
    let displayStressPoints = []
    let stressPoints = this.state.stress.map((stressPoint) => {
      currentStressPoint = (stressPoint ? 'X' : 'O')
      displayStressPoints.push(currentStressPoint)
      return displayStressPoints
      }
    )
    let displayStrengths = testNPC.strengths.map((strength) => {
      <li> strength </li>
    })
    return(
      <div>
        <p> HI </p>
        <p> Name: {this.state.characterName} </p>
        <p> Description: {this.state.characterDescription} </p>
        <p> Stress Points: {displayStressPoints} </p>
        <p> Strengths: </p>
        <ul> {displayStrengths} </ul>
      </div>
    )
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
