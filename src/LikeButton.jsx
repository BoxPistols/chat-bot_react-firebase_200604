import React from "react"

// functional component
const LikeButton = (props) => {
  return <button className="likeButton">いいね: {props.count}</button>
}

export default LikeButton
