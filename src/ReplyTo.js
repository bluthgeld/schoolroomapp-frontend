import React, { Component } from 'react'

class ReplyTo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      body: ""
    }

  }

  handleChange = (event) => {
    this.setState({
      body: event.target.value
    })
  }

  handleSubmit = (event) => {
    alert(this.state.body);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Reply to this Announcement</label>
          <textarea class="form-control" value={this.state.body} onChange={this.handleChange} rows="3" />
        </div>
        <button type="submit" class="btn btn-primary">Reply</button>
      </form>
    )
  }

}

export default ReplyTo
