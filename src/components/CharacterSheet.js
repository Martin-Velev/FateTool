import React, { Component } from 'react';

class CharacterSheet extends Component {
  constructor(props) {
    super(props)


  }

  render() {
    console.log(this.props)
    return(
      <div>
        <h1> {this.props.character.name} </h1>
      </div>
    )
  }
}

export default CharacterSheet
