import React from "react"
const Article = (props) => {
  let PublishState = ""
  if (props.isPublished) {
    PublishState = "公開"
  } else {
    PublishState = "非公開"
  }
  /*
    functional component
    子コンポネント<-親の値から受け取る
  */
  return (
    <div className="article__lay">
      <h2>{props.title}</h2>
      <p>{props.order}</p>
      <p>{PublishState}</p>
      <p>{props.name}</p>
    </div>
  )
}
export default Article
