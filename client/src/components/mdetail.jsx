'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {withRouter} from 'react-router'
import * as Actions from '../actions'

class mdetail extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {ui, lang, actions, router} = this.props
    return (
      <div className='mdetail'>
        <div></div>
        <button onClick={e=>router.push('/mconsole')}>Check</button>
      </div>
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
)(withRouter(mdetail))