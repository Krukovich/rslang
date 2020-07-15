import { createStore } from 'redux';

const initialState = {
    day: 'Mon',
    score: 25
}

const CHANGE_DAY = 'CHANGE_DAY';
const CHANGE_SCORE = 'CHANGE_SCORE';

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_DAY':
            return { ...state, day: action.payload };
        case 'CHANGE_SCORE':
            return { ...state, score: action.payload };    
    }
    return state;
}

const Store = createStore(reducer);

const changeDay = {
    type: CHANGE_DAY,
    payload: 'Tue'
};

const changeScore = {
    type: CHANGE_SCORE,
    payload: 50
};

const changeDayFunc = (newDay) => {
    return{
        type: CHANGE_DAY,
        payload: newDay 
    }  
};
const changeScoreFunc = (newScore) => {
    return{
        type: CHANGE_DAY,
        payload: newScore 
    }  
};

Store.dispatch(changeDay);
Store.dispatch(changeScore);
export default Store;