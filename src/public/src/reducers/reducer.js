const State = {
  friends: []
};

export default function(state = State, action) {
  switch (action.type) {
    case "ADD_TO_FRIENDS":
      {
        const found = state.friends.some(
          () => state.friends.indexOf(action.payload) >= 0
        );
        if (!found)
          return {
            ...state,
            friends: [...state.friends, action.payload]
          };
      }
      break;
    case "DELETE_FROM_FRIENDS": {
      return {
        ...state,
        friends: state.friends.filter(friends => friends !== action.payload)
      };
    }
    default:
      return state;
  }
}
