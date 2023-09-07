const { createStore } = require("redux");
// 1. state
// 2. dispatch action
// 3. reducer
// 4. store - getStore(), dispatch(), subscribe();

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = "ADD_USER"
// state
const initialCounterState = {
    count: 0,
}
const initialUserState = {
    user: [{ name: "mokhlesur" }],
}
// action
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}
const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}
// payload

const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: "shakil" }
    }
}
// reducer function
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        // 
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        // 
        default:
            state;
    }
}
// store
// create store
const store=createStore(counterReducer);
// subscribe store
store.subscribe(()=>{
    console.log(store.getState());
})
// dispatch action
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())