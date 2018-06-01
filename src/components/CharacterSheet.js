import React, { Component } from 'react';
import AspectsList from './AspectsList'
import ApproachesList from './ApproachesList'
import { db, base } from '../firebase'

class CharacterSheet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character: null,
      addAspectMode: false,
      newAspect: ''
      // refresh: '',
      // stress: [false, false, false],
      // consequences: {
      //   mild: ' yes',
      //   moderate: 'no ',
      //   severe: ' okay'
    }
  }

  componentDidMount() {
    base.syncState(`characters/${this.props.charId}`, {
      context: this,
      state: 'character',
      asArray: false
    })
  }

  render() {
    if (!this.state.character) {
      return ''
    }
    let stuntsList = this.state.character.stunts.map((stunt) => {
      return <li> {stunt} </li>
    })

    return(
      <div>
        <h1> {this.state.character.character} </h1>
        <div> Played by {this.state.character.name} </div>

        <input onChange={() => console.log('check')} type="checkbox" checked={true}  />

        <div> {this.state.character.fatePoints} </div>
        <button onClick={() => this.alterFatePoints(1)}> + </button>
        <button onClick={() => this.alterFatePoints(-1)}> - </button>
        <p> Aspects </p>
        <AspectsList onDeleteAspect={this.deleteAspect} aspects={this.state.character.aspects}/>
        {this.state.addAspectMode ?
          (
            <div>
              <input onChange={this.handleNewAspectChange} value={this.state.newAspect}/>
              <button onClick={this.addAspect}> Confirm </button>
            </div>
          ) :
          (
            <button onClick={this.showCreateAspectField}> New Aspect </button>
          )
        }
        <p> Approaches </p>
        <ApproachesList approaches={this.state.character.approaches} />
        <p> Stunts </p>
        <ul>
          {stuntsList}
        </ul>
      </div>
    )
  }

  deleteAspect = (aspectIndex) => {
    this.setState((previousState) => {
      let newCharacter = previousState.character
      newCharacter.aspects.splice(aspectIndex, 1)
      return {character: newCharacter}
    })
  }

  handleNewAspectChange = (event) => {
    this.setState({newAspect: event.target.value})
  }

  addAspect = () => {
    this.setState(previousState => {
      let newCharacter = this.state.character
      newCharacter.aspects.push(previousState.newAspect)
      return {
        character: newCharacter,
        newAspect: '',
        addAspectMode: false
      }
    })
  }

  showCreateAspectField = () => {
    this.setState({
      addAspectMode: true
    })
  }

  alterFatePoints = (amount) => {
    this.setState(
      (previousState) => {
        let char = previousState.character
        char.fatePoints = char.fatePoints + amount
        return {
          char
        }
      }
    )
  }

}

export default CharacterSheet
