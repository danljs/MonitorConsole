'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Chart from 'chart.js'
import {withRouter} from 'react-router'
import * as Actions from '../actions'

class mconsole_cell extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      pie: {},
      url: props.url,
      col_num: props.col_num,
      row_num: props.row_num
    }
  }
  componentDidMount() {
    this.createCanvas()
    this.timer = setInterval(
      ()=>this.props.actions.request({
        url: this.state.url, 
        col_num: this.state.col_num, 
        row_num: this.state.row_num
      }), 
      Math.floor((Math.random() * 1000) + 2001))
  }
  componentDidUpdate() {}
  
  componentWillUnmount(){
    clearInterval(this.timer)
  }

  componentWillReceiveProps(nextProps){
    nextProps.ui.target.col_num === this.state.col_num 
    && nextProps.ui.target.row_num === this.state.row_num ? this.updateCanvas(nextProps.ui.data) : ''
  }
  
  updateCanvas(data){
    this.state.pie.config.data
    this.state.pie.config.data.datasets[0].data = data
    this.state.pie.update()
  }

  createCanvas(){
    var config = {
      type: 'pie',
      data: {
        datasets: [
        {
          data: [0, 0, 0, 0],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
          ],
        }
        ],
        labels: [
          "Red",
          "Green",
          "Yellow",
          "Grey",
          "Dark Grey"
        ]
      },
      options: { 
        responsive: true,
        legend: {
          display: false
        }
      }
    };
    var ctx = this.refs.canvas.getContext("2d")
    this.setState({ pie: new Chart(ctx, config) })
  }

  render() {
    const { ui, lang, actions ,router } = this.props
    return (
      <div className='cell'>
        <button onClick={e =>this.props.actions.request({url: this.state.url, col_num: this.state.col_num, row_num: this.state.row_num})}>Refresh</button>
        <canvas ref='canvas' width='160' height='160'/>
        <button onClick={e=>router.push('/mdetail')}>Check</button>
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
)(withRouter(mconsole_cell))