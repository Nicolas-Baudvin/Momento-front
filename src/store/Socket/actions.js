export const NEW_SOCKET_TAB = "action/NEW_SOCKET_TAB";
export const DELETE_SOCKET_TAB = "action/DELETE_SOCKET_TAB";
export const INVITE_TO_TAB = "action/INVITE_TO_TAB";
export const CONNECT_TO_FRIEND_TAB = "action/CONNECT_TO_TAB";
export const NEW_GUEST = "action/NEW_GUEST";

export const connectToTab = (payload) => ({
  type: CONNECT_TO_FRIEND_TAB,
  payload
});

export const invitToTab = (payload) => ({
  type: INVITE_TO_TAB,
  payload
});

export const newSocketTab = (payload) => ({
  type: NEW_SOCKET_TAB,
  payload
});

export const deleteSocketTab = (payload) => ({
  type: DELETE_SOCKET_TAB,
  payload
});

export const newGuest = () => (userData) => ({
  type: NEW_GUEST,
  userData
});
