import { useReducer } from 'react'

const Actions =  {
    COUNT: 'countChange',
    LOADING: 'loadingChange',
    EMP: 'empChange',
    STUDENT: 'studentChange'
}

const initialState = {
    count: 0,
    loading: false,
    empId: [15, 20, 25],
    studentData: {
        name: "Pawan",
        age: 25,
        sex: "Male",
    }
}

function reducer(state, action) {
    switch(action.type) {
        case Actions.COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case Actions.LOADING:
            return {
                ...state,
                loading: state.loading == false ? true : false
            }
        case Actions.EMP:
            return {
                ...state,
                empId: [Math.random().toFixed() * 10, Math.random().toFixed() * 10, Math.random().toFixed() * 10]
            }
        case Actions.STUDENT:
            return {
                ...state,
                studentData: {
                    ...state.studentData,
                    age: state.studentData.age + 1
                }
            }
        default:
            return state
            
    }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <p>Data Check</p>
      <div>{JSON.stringify(state)}</div>
      <br />
      <button onClick={() => dispatch({type: Actions.COUNT })}>Count Change</button> 
      <button onClick={() => dispatch({type: Actions.LOADING })}>Loading Change</button> 
      <button onClick={() => dispatch({type: Actions.EMP})}>Employee Change</button> 
      <button onClick={() => dispatch({type: Actions.STUDENT }) }>Student Change</button> 
    </div>
  )
}

export default UseReducer
