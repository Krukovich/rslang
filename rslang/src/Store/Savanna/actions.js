export const CHANGE_MINIGAMESAVANNA_STATS = 'CHANGE_MINIGAMESAVANNA_STATS';
export const CHANGE_MINIGAMEAUDIOCALL_STATS = 'CHANGE_MINIGAMEAUDIOCALL_STATS';

export const setSavannaStats = (minigameSavannaStats) => ({
  type: CHANGE_MINIGAMESAVANNA_STATS,
  payload: minigameSavannaStats,
});

export const setAudioCallStats = (minigameAudioCallStats) => ({
  type: CHANGE_MINIGAMEAUDIOCALL_STATS,
  payload: minigameAudioCallStats,
});