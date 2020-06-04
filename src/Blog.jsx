import React from "react"
import Article from "./Article"
/*
  Class Component
  親コンポネント -> 子コンポネントに渡す=Article
*/
class Blog extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const author = "おれおれ"
    return (
      <>
        <Article
          title="Props Titles"
          order={12}
          isPublished={true}
          name={author}
        />
        <Article
          title="JSX Titles"
          order={8}
          isPublished={false}
          name="名無しさん"
        />
        <Article title="JavaScript" order={75} isPublished={true} name="Mike" />
      </>
    )
  }
}
export default Blog
