import React from "react"
import Article from "./Article"
/*
  Class Component
  親コンポネント -> 子コンポネントに渡す=Article
  State: コンポネントの中で管理する変数
  - ローカルステート < > redux(グローバル)
  - propsとして子コンポネントに渡せる
*/
class Blog extends React.Component {
  /*
    setState()：
    render内では値を変更してはいけない > 再レンダーの防止
    ※ functional componentはStateを持てない = Class Componentで使う
    constructor内で宣言する
    オブジェクト型で記述 this.変数 = { key: value }
    関数にラップする
  */
  constructor(props) {
    super(props)
    this.state = {
      isPublished: false,
    }
  }

  toggleCheckPublished = () => {
    this.setState({
      isPublished: !this.state.isPublished,
    })
  }

  render() {
    const author = "おれおれ"
    return (
      <>
        <Article
          title="Props Titles"
          order={12}
          isPublished={this.state.isPublished}
          toggle={() => this.toggleCheckPublished()}
          name={author}
        />
      </>
    )
  }
}
export default Blog
