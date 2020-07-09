export const CHANGE_MINIGAMESAVANNA_STATS = 'CHANGE_MINIGAMESAVANNA_STATS';
export const CHANGE_LEVEL = 'CHANGE_LEVEL';

export const setSavannaStats = (stats) => ({
  type: CHANGE_MINIGAMESAVANNA_STATS,
  payload: stats,
});

export const setSavannaLevel = (level) => ({
  type: CHANGE_LEVEL,
  payload: level,
});