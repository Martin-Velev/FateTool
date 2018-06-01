import React, { Component } from 'react';

class ApproachesList extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let approaches = this.props.approaches.map((approach) => {
      return <li> {approach.name} +{approach.modifier} </li>
    })
    return(
      <ul>
        {approaches}
      </ul>
    )
  }
}
export default ApproachesList
