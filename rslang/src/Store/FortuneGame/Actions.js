export const CHANGE_MINIGAMEFORTUNE_STATS = 'CHANGE_MINIGAMEFORTUNE_STATS';

export const setFortuneStats = (minigameFortuneStats) => ({
    type: CHANGE_MINIGAMEFORTUNE_STATS,
    payload: minigameFortuneStats,
});
