import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentInput from './PhotoCommentInput';


const PhotoComment = (props) => {
  const [comments, setComments] = React.useState(() => props.comments)
  const { logged } = React.useContext(UserContext);


  return (
    <>
      <ul style={{paddingInline: '2rem', overflowY: 'scroll'}}>
          {comments.map((comment) => (
            <li style={{lineHeight: '1.6rem', paddingBlock: '0.4rem'}} key={comment.comment_ID}>
              <p>{comment.comment_author}: {comment.comment_content}</p>
            </li>
          ))}
      </ul>
      {logged && <PhotoCommentInput id={props.photo.id} setComments={setComments} />}
    </>
  )
}

export default PhotoComment