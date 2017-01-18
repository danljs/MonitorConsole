'use strict'
import React from 'react'
import { connect } from 'react-redux'
import MConsoleCell from './mconsole_cell'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

class mconsole_row extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { ui, row_num, actions } = this.props
    return (
      <li className='row'>
      {
        ui.category.map((c,i)=>
          <div key={i} className={'item' + i}>
            <MConsoleCell url={c.url} row_num={row_num} col_num={i}/>
          </div>
        )
      }
      </li>
    )
  }
}
let mapStateToProps = state =>({
  lang: state.lang,
  ui: state.ui
})

let mapDispatchToProps = dispatch =>({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mconsole_row)