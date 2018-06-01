import React, { Component } from 'react';
import { db, base } from '../firebase'
import CharacterSheet from './CharacterSheet'

class CharactersList extends Component {
  constructor(props){
    super(props)

    this.state = {
      characters: []
    }
  }

  componentDidMount(){
    base.syncState('characters', {
      context: this,
      state: 'characters',
      asArray: true
    });
  }


  render(){
    const charList = this.state.characters.map(char => {
      return <CharacterSheet charId={char.key} />
    })
    return(
      <ul>
        {charList}
      </ul>
    )
  }

  // create = () => {
  //
  //   this.setState({
  //     characters: this.state.characters.concat(char) //updates Firebase and the local state
  //   });
  //
  //r}
  //
}
export default CharactersList
