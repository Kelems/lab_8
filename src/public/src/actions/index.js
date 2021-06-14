export const toFriends = user => {
  return {
    type: "ADD_TO_FRIENDS",
    payload: user.name.title + " " + user.name.first + " " + user.name.last
  };
};
export const delFriend = friend => {
  return {
    type: "DELETE_FROM_FRIENDS",
    payload: friend
  };
};
export const isFriend = user => {
  return {
    type: "CHECK",
    payload: user
  };
};
