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
    debugger
    this.setState({
      classroom: sections,
    })
  })
}

  render() {
    return (
      <div>

      asdfas

      </div>
    )
  }
}

export default withRouter(SectionContainer)
