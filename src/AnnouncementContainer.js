import React, { Component } from 'react'
import ReplyCard from './ReplyCard.js'
import ReplyTo from './ReplyTo.js'
import AnnouncementCard from './AnnouncementCard.js'

class AnnouncementContainer extends Component {

  constructor() {
    super()
    this.state = {
      announcement: {},
      annId: 0,
      replies: []
    }
  }

    componentDidMount() {
    fetch('http://localhost:3000/announcements/1')
    .then(res => res.json())
    .then(announcement => {
      this.annHead(announcement)
    })
  }

  annHead = (announcement) => {
    let h = {}
    let replies = []
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
      annId: announcement.id
    })
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

        <ReplyTo annId={this.state.annId} />

      </div>
    )
  }

}

export default AnnouncementContainer
