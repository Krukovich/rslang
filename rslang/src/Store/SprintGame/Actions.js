export const CHANGE_MINIGAMESPRINT_STATS = 'CHANGE_MINIGAMESPRINT_STATS';

export const setSprintStats = (minigameSprintStats) => ({
    type: CHANGE_MINIGAMESPRINT_STATS,
    payload: minigameSprintStats,
});
