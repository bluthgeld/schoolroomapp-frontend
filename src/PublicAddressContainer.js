import React, { Component } from 'react'
import SentAnnouncementRow from './SentAnnouncementRow.js'
import ReceivedAnnouncementRow from './ReceivedAnnouncementRow.js'
import CreateAnnouncement from './CreateAnnouncement.js'
import {withRouter} from 'react-router-dom'

class PublicAddressContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      sent: [],
      received: []
    }
  }

  componentDidMount() {
    console.log(this.props)
  fetch(`http://localhost:3000/ann/${this.props.currentUser.id}`)
  .then(res => res.json())
  .then(announcements => {
    this.setState({
      sent: announcements.initiator_relationships,
      received: announcements.receiver_relationships
    })
  })
}

  render() {

    let compose;

    if (this.props.currentUser.user_type === "educator") {
      compose = <CreateAnnouncement currentUser={this.props.currentUser} />;
      } else {
        compose = <h5>You Do Not Have Access to this Tool</h5>;
      }

    return (
      <div>
        <h2>Public Address System</h2>
           <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="received-tab" data-toggle="tab" href="#received" role="tab" aria-controls="Received" aria-selected="false">Received</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="sent-tab" data-toggle="tab" href="#sent" role="tab" aria-controls="Sent" aria-selected="false">Sent</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="compose-tab" data-toggle="tab" href="#compose" role="tab" aria-controls="Contact" aria-selected="false">Compose</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane show active" id="received" role="tabpanel" aria-labelledby="received-tab">

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
                  {this.state.received.map(announcement => <ReceivedAnnouncementRow
                    announcement={announcement}
                    user={this.props.currentUser}
                    key={announcement.id}
                    />)}
                </tbody>
              </table>

            </div>
            <div class="tab-pane" id="sent" role="tabpanel" aria-labelledby="sent-tab">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Priority</th>
                    <th scope="col">Recipient</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Date</th>
                    <th scope="col"># Replies</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.sent.map(announcement => <SentAnnouncementRow
                    announcement={announcement}
                    user={this.props.currentUser}
                    key={announcement.id}
                    />)}
                </tbody>
              </table>
            </div>
            <div class="tab-pane" id="compose" role="tabpanel" aria-labelledby="compose-tab">

              {compose}

            </div>
          </div>
      </div>
    )
  }
}

export default withRouter(PublicAddressContainer)
