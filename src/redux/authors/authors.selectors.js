import { createSelector } from 'reselect';

const selectAuthor = state => state.author;

export const selectCurrentAuthor = createSelector(
  [selectAuthor],
  author => author.currentAuthor
);

export const selectIsErrorWhileFetchingA = createSelector(
  [selectAuthor],
  author => !!author.errorMessage 
)

export const selectIsAuthorFetching = createSelector(
  [selectAuthor],
  author => author.isFetching
);

export const selectIsAuthorLoaded = createSelector(
  [selectAuthor],
  author => !!author.currentAuthor
);


