import React from 'react'


const AnnouncementCard = (props) => {
  return (
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src={props.announcement.picture} class="card-img" style={{width: "200px"}} alt="..." />
          <p class="card-text"></p>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Subject: {props.announcement.subject}</h5>
            <p class="card-text">From: {props.announcement.first_name} {props.announcement.last_name}</p>            
            <p class="card-text">{props.announcement.body}</p>
            <p class="card-text"><small class="text-muted">Sent on: {props.announcement.date}</small></p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default AnnouncementCard
