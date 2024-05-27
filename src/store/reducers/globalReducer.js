const initState = {
    upvotes: 0,
    downvotes: 0,
    allMemes: [],
    hotMemes: []
}

export const memReducer = (state = initState, action) => {
    switch(action.type) {
        case "UP-VOTE": {
            return {...state, upvotes: initState.upvotes + 1}
        }
        case "DOWN-VOTE": {
            return {...state, downvotes: action.payload}
        }
        case "ALL-MEMES": {
            return {...state, allMemes: action.payload}
        }
        case "HOT-MEMES": {
            return {...state, hotMemes: action.payload}
        }
        default:
            return state;
    }
}