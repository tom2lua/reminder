import {
  required,
  confirmed,
  email,
  alpha_num,
  alpha_spaces
} from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'
import axios from 'axios'

const baseUrl = 'https://backend-tom2lua.herokuapp.com/api'

extend('required', {
  ...required,
  message: 'This field is required'
})

extend('email', {
  ...email,
  message: 'This field must be a valid email'
})

extend('confirmed', {
  ...confirmed,
  message: 'Your confirm password did not matched'
})

extend('min', {
  params: ['min', 'fieldName'],
  validate(value, { min, fieldName }) {
    if (value.length < min)
      return `The ${fieldName} must be atleast ${min} characters long`
    else return true
  }
})

extend('alpha_num', {
  ...alpha_num,
  message: 'This field can only contain letters and numbers'
})

extend('alpha_spaces', {
  ...alpha_spaces,
  message: 'This field can only contain letters'
})

extend('unique', {
  params: ['fieldName'],
  async validate(value, { fieldName }) {
    try {
      const response = await axios.post(`${baseUrl}/users/${fieldName}`, {
        value
      })
      if (response.data) {
        return `Your ${fieldName} have been taken`
      }
      return true
    } catch (error) {
      return 'Server error'
    }
  }
})
