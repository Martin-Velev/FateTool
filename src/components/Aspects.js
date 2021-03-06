import React, { Component } from 'react';
import AspectsList from './AspectsList'

let someVar = 'boobs'
export const aspects = [
  `It\'s ${someVar} raining`,
  'It\'s tits falling from the sky',
  'Everything is on ice'
]

class Aspects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      aspects: aspects,
      newAspect: ''
    }
  }

  render() {
    const aspectsList = this.state.aspects.map((aspect) => {
      return <p> {aspect} </p>
    })
    return(
      <div>
        <AspectsList aspects = {this.state.aspects} />
        <textarea value={this.state.newAspect} onChange={this.handleNewAspectChange} />
        <button onClick={this.createNewAspect}> + </button>
      </div>

    )
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

}

export default Aspects
