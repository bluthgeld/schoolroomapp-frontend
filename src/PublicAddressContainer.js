import React, { Component } from 'react'
import AnnouncementRow from './AnnouncementRow'
import AnnouncementContainer from './AnnouncementContainer'
import CreateAnnouncement from './CreateAnnouncement'

class PublicAddressContainer extends Component {

  constructor() {
    super()

    this.state = {
      announcements: []
    }
  }

  componentDidMount() {
  fetch('http://localhost:3000/announcements')
  .then(res => res.json())
  .then(announcements => {
    this.setState({
      announcements: announcements
    })
  })
}

  render() {
    return (
      <div>
        <h2>Public Address System</h2>
        <h3>Send Announcement</h3>
        <CreateAnnouncement />
        <h3>Received</h3>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Priority</th>
                <th scope="col">Sender</th>
                <th scope="col">Subject</th>
                <th scope="col">Date</th>
                <th scope="col"># Replies</th>
              </tr>
            </thead>
            <tbody>
              {this.state.announcements.map(announcement => <AnnouncementRow
                announcement={announcement}
                key={announcement.id}
                />)}
            </tbody>
          </table>
          <h3>Sent</h3>
        <AnnouncementContainer />
      </div>
    )
  }
}

export default PublicAddressContainer
