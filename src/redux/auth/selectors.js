import {createSelector} from 'reselect'

function getCurrentUser(state) {
  return state.authUser
}

export const selectUser = createSelector(
  getCurrentUser,
  (currUser) => currUser.user,
)

export const selectLoadingStatus = createSelector(
  getCurrentUser,
  (currUser) => currUser.loading,
)
