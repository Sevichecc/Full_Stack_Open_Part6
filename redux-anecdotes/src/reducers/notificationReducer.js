import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'render here notification...',
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    removeNotification(state, action) {
      return ''
    }
  }
})

export const { setNotification, removeNotification} = notificationSlice.actions
export default notificationSlice.reducer

export const updateNotification = (info, seconds) => {
  return dispatch => {
    dispatch(setNotification(info))
    setTimeout(()=>dispatch(removeNotification()), seconds * 1000)
  }
}