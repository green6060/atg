import axios from 'axios'
import { setFlash } from './flash'

const ANNOUNCEMENTS = 'ANNOUNCEMENTS'
const ADD_ANNOUNCEMENT = 'ADD_ANNOUNCEMENT'
const EDIT_ANNOUNCEMENT = 'EDIT_ANNOUNCEMENT'
const DELETE_ANNOUNCEMENT = 'DELETE_ANNOUNCEMENT'

export const getAnnouncements = () => {
  return (dispatch) => {
    axios.get(`/api/announcements`)
      .then( res => {
        dispatch({ type: ANNOUNCEMENTS, announcements: res.data })
      })
        .catch( err => {
        dispatch(setFlash('Failed to retrieve announcements', 'red')) 
        })      
  }
}

export const addAnnouncement = (announcement) => {
  return(dispatch) => {
    axios.post(`/api/announcements`, { announcement })
    .then( res => { 
      dispatch({ type: ADD_ANNOUNCEMENT, announcement: res.data })
      dispatch(setFlash(`Announcement successfully added!`, 'green'))
    }).catch( err => {
        dispatch(setFlash('Could not add announcement. Please try again.', 'red'))
    })
  }
}

export const editAnnouncement = (announcement) => {
  return(dispatch) => {
    axios.put(`/api/announcements/${announcement.id}`, {announcement})
      .then( res => {
        dispatch({ type: EDIT_ANNOUNCEMENT, announcement: res.data })
        dispatch(setFlash(`Announcement successfully updated!`, 'green'))
      }).catch( () => {
        dispatch(setFlash('Could not update announcement. Please try again.', 'red'))
    })
  }
}

export const deleteAnnouncement = (announcement, history = {}) => {
  return(dispatch) => {
    axios.delete(`/api/announcements/${announcement.id}`)
      .then( res => {
        dispatch({ type: DELETE_ANNOUNCEMENT, id: announcement.id })
        history.push(`/announcements`)
        dispatch(setFlash(`Announcement successfully deleted!`, 'green'))
      }).catch( () => {
        dispatch(setFlash('Could not delete announcement. Please try again.', 'red'))
    })
  }
}

export default (state = [], action) => {
  switch(action.type) {
    case ANNOUNCEMENTS:
      return action.announcements
    case ADD_ANNOUNCEMENT:
      return [action.announcement, ...state]
    case EDIT_ANNOUNCEMENT:
      return state.map( a => {
        if(a.id === action.announcement.id)
          return action.announcement
        return a
      })
    case DELETE_ANNOUNCEMENT:
      return state.filter( a => a.id !== action.id )
    default: 
      return state
  }
}
