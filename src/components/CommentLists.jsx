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
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  comments: PropTypes.array,
};

export default CommentLists;
