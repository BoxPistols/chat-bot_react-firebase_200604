import React from "react"

const LikeButton = (props) => {
  return <button className="likeButton">いいね: {props.count}</button>
}

export default LikeButton
