import React, { Component } from 'react'
import ReplyCard from './ReplyCard.js'
import AnnouncementCard from './AnnouncementCard.js'

class AnnouncementContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      announcement: {},
      annId: 0,
      replies: [],
      body: ""
    }
  }

    componentDidMount() {
    fetch(`http://localhost:3000/announcements/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(announcement => {
      this.annHead(announcement)
    })
  }

  annHead = (announcement) => {
    let h = {}
    let replies = []
    h.receiver_id = announcement.receiver_id
    h.picture = announcement.initiator.picture
    h.last_name = announcement.initiator.last_name
    h.first_name = announcement.initiator.first_name
    h.body = announcement.body
    h.subject = announcement.subject
    h.date = announcement.created_at
    announcement.messages.forEach(reply => {
      let r = {}
      r.picture = reply.sender.picture
      r.last_name = reply.sender.last_name
      r.first_name = reply.sender.first_name
      r.body = reply.body
      r.date = reply.created_at
      r.id = reply.id
      replies.push(r)
    })
    this.setState({
      announcement: h,
      replies: replies,
    })
  }

  handleChange = (event) => {
    this.setState({
      body: event.target.value
    })
  }

  handleSubmit = (event) => {

    event.preventDefault();
    fetch('http://localhost:3000/messages' , {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
        body: JSON.stringify({
        announcement_id: this.props.match.params.id,
        sender_id: this.state.announcement.receiver_id,
        body: this.state.body
      })
    })
    .then(response => response.json())
    .then(message => this.getMessage(message))

  }

  getMessage = (message) => {
    let r = {}
    r.picture = message.sender.picture
    r.last_name = message.sender.last_name
    r.first_name = message.sender.first_name
    r.body = message.body
    r.date = message.created_at
    r.id = message.id
    let newReplies = [...this.state.replies, r]
    this.setState({
      replies: newReplies
    })
    alert("Your Reply Has Been Sent!")
  }


  render() {
    return (
      <div>
        <AnnouncementCard announcement={this.state.announcement} />
        <h3>Replies</h3>
        {this.state.replies.map(replyObj => <ReplyCard
          replyObj={replyObj}
          key={replyObj.id}
          />)}

        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Reply to this Announcement</label>
            <textarea class="form-control" value={this.state.body} onChange={this.handleChange} rows="3" />
          </div>
          <button type="submit" class="btn btn-primary">Reply</button>
        </form>
      </div>
    )
  }

}

export default AnnouncementContainer
