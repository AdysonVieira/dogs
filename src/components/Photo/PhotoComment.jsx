import React from 'react';
import PhotoCommentInput from './PhotoCommentInput';
import styles from './PhotoComment.module.css'
import { useSelector } from 'react-redux';


const PhotoComment = (props) => {
  const [comments, setComments] = React.useState(() => props.comments)
  const { isLogged } = useSelector((state) => state.user)
  const containerComments = React.useRef();

  React.useEffect(() => {
    containerComments.current.scrollTop = containerComments.current.scrollHeight;
  }, [comments])


  return (
    <>
      <ul
        ref={containerComments} 
        className={styles.comments}>
          {comments.map((comment) => (
            <li style={{lineHeight: '1.6rem', paddingBlock: '0.4rem'}} key={comment.comment_ID}>
              <p>{comment.comment_author}: {comment.comment_content}</p>
            </li>
          ))}
      </ul>
      {isLogged && <PhotoCommentInput id={props.photo.id} setComments={setComments} />}
    </>
  )
}

export default PhotoComment