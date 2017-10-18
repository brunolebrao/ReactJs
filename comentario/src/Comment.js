import React, {Component} from 'react'

export class Comment extends Component {
  render() {
    return (
      <p
        class='alert alert-light'>{this.props.comment.comment}</p>
    )
  }
}

export default Comment
