import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  draft: {
    name: '',
    email: '',
    message: '',
  },
  attachments: [],
  status: 'idle',
  error: null,
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateDraft(state, action) {
      state.draft = { ...state.draft, ...action.payload }
    },
    addAttachments(state, action) {
      state.attachments = action.payload
    },
    clearAttachments(state) {
      state.attachments = []
    },
    submitStart(state) {
      state.status = 'loading'
      state.error = null
    },
    submitSuccess(state) {
      state.status = 'succeeded'
      state.draft = initialState.draft
      state.attachments = []
    },
    submitFailure(state, action) {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export const {
  updateDraft,
  addAttachments,
  clearAttachments,
  submitStart,
  submitSuccess,
  submitFailure,
} = contactSlice.actions

export default contactSlice.reducer
