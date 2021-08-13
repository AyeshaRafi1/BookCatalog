import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectAddBook = createSelector(
  [selectUser],
  user => user.addBook
)

export const selectDeleteBook = createSelector(
  [selectUser],
  user => user.deleteBook
)
