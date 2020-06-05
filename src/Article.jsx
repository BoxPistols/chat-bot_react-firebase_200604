import React from "react"
const Article = (props) => {
  /*   let PublishState = ""
  if (props.isPublished) {
    PublishState = "公開"
  } else {
    PublishState = "非公開"
  } */
  /*
    functional component
    子コンポネント<-親の値から受け取る
  */
  return (
    <div className="article__lay">
      <h2>タイトル：{props.title}</h2>
      <p>オーダー：{props.order}</p>
      <p onClick={() => props.change()}>著者名：{props.isName}</p>
      <p>
        <label htmlFor="check"> 公開：</label>
        <input
          id="check"
          type="checkbox"
          checked={props.isPublished}
          onClick={() => props.toggle()}
        />
      </p>
    </div>
  )
}
// <p>{PublishState}</p>
export default Article
