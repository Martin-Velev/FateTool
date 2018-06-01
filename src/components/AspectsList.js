import React, { Component } from 'react';

class PropertiesList extends Component {
  constructor(props){
    super(props)
  }

  render(){
    // let createsButton = null
    // let createAspectField = null
    // if (!this.state.addAspectMode) {
    //   createAspectButton = <button onClick={this.showCreateAspectField}> New Aspect </button>
    // } else {
    //   createAspectField = (
    //     <div>
    //       <input onChange={this.handleNewAspectChange} value={this.state.newAspect}/>
    //       <button onClick={this.addAspect}> Confirm </button>
    //     </div>
    //   )
    // }

    const aspectList = this.props.aspects.map((aspect, index) => {
      return <li> {aspect} <button onClick={() => this.props.onDeleteAspect(index)} > X </button> </li>
    })
    return(
      <ul>
       {aspectList}

      </ul>
    )
  }
}
export default AspectsList
