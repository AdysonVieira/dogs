import React from 'react';

const Comment = ({comment}) => {
  return (
    <li style={{lineHeight: '1.6rem', paddingBlock: '0.4rem'}}>
      <p>{comment.comment_author}: {comment.comment_content}</p>
    </li>
  )
}

export default Comment