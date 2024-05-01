import Comment from './Comment';

const CommentLists = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default CommentLists;
