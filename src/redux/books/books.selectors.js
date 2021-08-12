import { createSelector } from 'reselect';

const selectBook = state => state.book;

export const selectCurrentBook = createSelector(
  [selectBook],
  book => book.currentBook
);

export const selectIsBookFetching = createSelector(
  [selectBook],
  book => book.isFetching
);

export const selectIsBookLoaded = createSelector(
  [selectBook],
  book => !!book.currentBook
);

export const selectIsHidden = createSelector(
  [selectBook],
  book => book.hidden
);

