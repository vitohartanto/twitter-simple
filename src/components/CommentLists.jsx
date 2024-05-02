import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function CommentLists({ comments }) {
  return (
    <div>
      {comments?.map((comment) => <Comment key={comment.id} comment={comment} />)}
    </div>
  );
}

CommentLists.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  comments: PropTypes.array,
};

CommentLists.defaultProps = {
  comments: null, // Provide a default value
};

export default CommentLists;
