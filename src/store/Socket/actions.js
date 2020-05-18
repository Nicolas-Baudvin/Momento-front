export const NEW_SOCKET_TAB = "action/NEW_SOCKET_TAB";
export const DELETE_SOCKET_TAB = "action/DELETE_SOCKET_TAB";
export const INVITE_TO_TAB = "action/INVITE_TO_TAB";
export const CONNECT_TO_FRIEND_TAB = "action/CONNECT_TO_TAB";
export const NEW_GUEST = "action/NEW_GUEST";
export const GUEST_LEAVE = "action/GUEST_LEAVE";
export const UPDATE_CURRENT_SOCKET = "action/UPDATE_CURRENT_SOCKET";
export const LEAVE_ROOM = "action/LEAVE_ROOM";
export const DISCONNECT_FROM_CHANNEL = "action/DISCONNECT_FROM_CHANNEL";
export const SEND_LISTS = "action/SEND_LISTS";
export const SEND_TASKS = "action/SEND_TASKS";
export const STORE_FRIEND_LISTS = "action/STORE_FRIEND_LISTS";
export const STORE_FRIEND_TASKS = "action/STORE_FRIEND_TASKS";
export const SEND_ACTIONS = "action/SEND_ACTIONS";


export const sendActions = (data) => ({
  type: SEND_ACTIONS,
  data
});

export const storeFriendTasks = (tasks) => ({
  type: STORE_FRIEND_TASKS,
  tasks
});

export const storeFriendLists = (lists) => ({
  type: STORE_FRIEND_LISTS,
  lists
});

export const sendLists = (lists) => ({
  type: SEND_LISTS,
  lists
});

export const sendTasks = (tasks) => ({
  type: SEND_TASKS,
  tasks
});

export const disconnectFromChannel = () => ({
  type: DISCONNECT_FROM_CHANNEL
});

export const updateCurrentSocket = (currentSocket) => ({
  type: UPDATE_CURRENT_SOCKET,
  currentSocket
});

export const guestLeave = (socketId) => ({
  type: GUEST_LEAVE,
  socketId
});

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

export const newGuest = (userData) => ({
  type: NEW_GUEST,
  userData
});

export const leaveRoom = (room) => ({
  type: LEAVE_ROOM,
  room
});
