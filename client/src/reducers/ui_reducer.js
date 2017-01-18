'use strict'
import { INITIAL, ADD, REMOVE, PRINT, SELECT, REFRESH} from '../actions/index'

const initialState = {
  category: [],
  rows: [],
  data: {},
  target: { col_num: 0, row_num: 0 }
}
export default (state = initialState, action) => {
  let new_state = {}

  switch (action.type) {
    case INITIAL:
      return {
        category: [
          { url: 'http://localhost:3000/cell1' },
          { url: 'http://localhost:3000/cell2' },
          { url: 'http://localhost:3000/cell2' },
          { url: 'http://localhost:3000/cell3' },
          { url: 'http://localhost:3000/cell3' },
          { url: 'http://localhost:3000/cell3' },
          { url: 'http://localhost:3000/cell4' }
        ],
        rows: [new_row(1)]
      }

    case ADD:
      new_state = Object.assign({}, state)
      new_state.rows.push(new_row(state.category.length))
      return new_state

    case REMOVE:
      new_state = Object.assign({}, state)
      new_state.rows.splice(action.row_num, 1)
      return new_state

    case REFRESH: 
      new_state = Object.assign({}, state)
      new_state.data = action.value.data
      new_state.target = { col_num: action.value.col_num, row_num: action.value.row_num }
      return new_state
    default:
      return state
  }
}

let new_row = length => ({
    items: Array.apply(null,{length: length}).map(() => ({})),
    quatity: 1,
    amount: 0
})
