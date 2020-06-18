import { createSelector } from 'reselect'

const stateDirectory = state => state.directory

export const selectDirectorySection = createSelector(
  [stateDirectory],
  directory => directory.sections
)