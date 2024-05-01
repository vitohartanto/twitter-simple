import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentLists = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

CommentLists.propTypes = {
  comments: PropTypes.array,
};

export default CommentLists;
