import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class SectionContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      classroom: []
    }
  }

  componentDidMount() {
  fetch(`http://localhost:3000/sections/1`)
  .then(res => res.json())
  .then(sections => {
    
    this.setState({
      classroom: sections.initiator_relationships,
    })
  })
}

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default withRouter(SectionContainer)
