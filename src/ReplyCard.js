import React from 'react'

const ReplyCard = (props) => {
  return (

    <div class="card mb-3 w-75 mx-auto">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src={props.replyObj.picture} class="card-img" style={{width: "200px"}}alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text">From: {props.replyObj.first_name} {props.replyObj.last_name}</p>
            <p class="card-text">{props.replyObj.body}</p>
            <p class="card-text"><small class="text-muted">Sent on: {props.replyObj.date}</small></p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ReplyCard
