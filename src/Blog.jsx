import React from "react"
import Article from "./Article"

// Class Component
class Blog extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <Article />
      </>
    )
  }
}

export default Blog
