const intState = {
    name: '',
    gender: '',
    location: '',
    school:'',
    major:'',
    occupation:'',
    religion:'',
    message:'',
    
}

export const formReducer = (state = intState, action) => {
 if(action.reset) {
  return state
}
 return { ...state, [action.name]: action.value }
}
