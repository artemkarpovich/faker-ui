import map from 'lodash/map';

export const normalizeEntry = (entry) => (
  {
    [entry.id]: {
      ...entry,
    },
  }
);

export const normalizeEntries = (entries) => (
  Object.assign({}, ...map(entries, entry => normalizeEntry(entry)))
);
