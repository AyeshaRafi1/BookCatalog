import { createSelector } from 'reselect';

const selectBook = state => state.book;

export const selectOtherBooksByAuthor = createSelector(
  [selectBook],
  book => book.otherBooksByAuthor
);

export const selectIsAuthorFetching = createSelector(
  [selectBook],
  book => book.isFetchingA
);

export const selectIsOtherBooksLoaded = createSelector(
  [selectBook],
  book => !!book.otherBooksByAuthor
);

export const selectCurrentBook = createSelector(
  [selectBook],
  book => book.currentBook
);

export const selectIsErrorWhileFetching = createSelector(
  [selectBook],
  book => !!book.errorMessage 
)

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


