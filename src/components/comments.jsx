import React, { useEffect } from "react";
import { orderBy } from "lodash";
import CommentsList from "./comments/commentsList";
import AddCommentForm from "./comments/addCommentForm";
// import { useComments } from "../../hooks/useComments";
import { useDispatch, useSelector } from "react-redux";
import {
  createComment,
  deleteComment,
  getComments,
  getCommentsLoadingStatus,
  loadCommentsList
} from "../store/comments";
import { useParams } from "react-router-dom";
import { getCurrentUserId } from "../store/users";

const Comments = () => {
  const { itemId } = useParams();
  const currentUserId = useSelector(getCurrentUserId());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCommentsList(itemId));
  }, [itemId]);

  const isLoading = useSelector(getCommentsLoadingStatus());
  // const { createComment } = useComments();
  const comments = useSelector(getComments());

  const handleSubmit = (data) => {
    // createComment(data);
    dispatch(createComment(data, itemId, currentUserId));
  };

  const handleRemoveComment = (id) => {
    dispatch(deleteComment(id));
  };

  const sortedComments = orderBy(comments, ["created_at"], ["desc"]);

  return (
    <div className="container container-fix mt-2">
      <div className="card mb-2">
        <div className="card-body ">
          <AddCommentForm onSubmit={handleSubmit} />
        </div>
      </div>
      {sortedComments.length > 0 && (
        <div className="card mb-3">
          <div className="card-body ">
            <h2>Отзывы</h2>
            <hr />
            {!isLoading ? (
              <CommentsList
                comments={sortedComments}
                onRemove={handleRemoveComment}
              />
            ) : (
              "loading..."
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
