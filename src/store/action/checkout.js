import { CHECKOUT_BOOKING, SUBMIT_BOOKING } from '../types'
import axios from 'config/axios'

export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload
  })
}

export const submitBooking = (payload) => () => {
  return axios.post(`/booking-page`,
    payload,{
      headers: { contentType: "multipart/form-data" },
    }
  )
}