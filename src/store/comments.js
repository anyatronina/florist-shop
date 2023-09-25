import { createSlice } from "@reduxjs/toolkit";
import commentService from "../services/comment.service";
import { nanoid } from "nanoid";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    commentsRequested: (state) => {
      state.isLoading = true;
    },
    commentsReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    commentsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    commentsRemove: (state, action) => {
      state.entities = state.entities.filter((c) => c._id !== action.payload);
    },
    commentsUpdated: (state) => {
      state.isLoading = false;
    },
    commentCreated: (state, action) => {
      state.entities.push(action.payload);
    }
  }
});

const { reducer: commentsReducer, actions } = commentsSlice;
const {
  commentsRequested,
  commentsReceived,
  commentsRequestFailed,
  commentsRemove,
  // commentsUpdated,
  commentCreated
} = actions;

export const loadCommentsList = (itemId) => async (dispatch) => {
  dispatch(commentsRequested());
  try {
    const { content } = await commentService.getComments(itemId);
    dispatch(commentsReceived(content));
  } catch (error) {
    dispatch(commentsRequestFailed(error.message));
  }
};

export const createComment =
  (data, itemId, currentUserId) => async (dispatch) => {
    const comment = {
      ...data,
      _id: nanoid(),
      pageId: itemId,
      created_at: Date.now(),
      userId: currentUserId
    };

    try {
      const { content } = await commentService.createComment(comment);
      dispatch(commentCreated(content));
    } catch (error) {
      dispatch(commentsRequestFailed(error.message));
    }
  };

export const deleteComment = (commentId) => async (dispatch) => {
  // dispatch(commentsRequested());
  try {
    const { content } = await commentService.removeComment(commentId);
    if (content === null) {
      dispatch(commentsRemove(commentId));
    }
    // dispatch(commentsUpdated());
  } catch (error) {
    dispatch(commentsRequestFailed(error.message));
  }
};

export const getComments = () => (state) => state.comments.entities;
export const getCommentsLoadingStatus = () => (state) =>
  state.comments.isLoading;

export default commentsReducer;
