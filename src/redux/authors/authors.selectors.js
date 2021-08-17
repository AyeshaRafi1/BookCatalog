import { createSelector } from 'reselect';

const selectAuthor = state => state.author;

export const selectallAuthor = createSelector(
  [selectAuthor],
  author => author.allAuthors
);

export const selectIsErrorWhileFetchingA = createSelector(
  [selectAuthor],
  author => !!author.errorMessage 
)

export const selectIsAuthorsFetching = createSelector(
  [selectAuthor],
  author => author.isFetching
);


