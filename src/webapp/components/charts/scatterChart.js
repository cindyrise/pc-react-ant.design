import React from 'react'

import echarts from './index'
import 'echarts/lib/chart/scatter'
import {fromJS} from 'immutable'
import ReactResizeDetector from 'react-resize-detector';

export default class ScatterChart extends React.Component {
  
  constructor(props) {
    super(props)
  }
  
  initChart=()=> {
    const { option={},config={handle:''}} = this.props;
    const{ chart }=this.state;
    chart.showLoading();
    chart.off('click');
    if(typeof config.handle=='function' ){
      chart.on('click',config.handle.bind(this));
    }
    chart.setOption(option);
    chart.hideLoading();
    window.addEventListener('resize',()=>{chart.resize()});
  }
  shouldComponentUpdate(nextProps,nextState){
    if(fromJS(nextProps)==fromJS(this.props)){
      return false
    }else{
      return true;
    }
  }
  componentDidMount(){
    let chart=echarts.init(this.id,'walden',{renderer: 'svg'});
    this.setState({chart},()=>{
      this.initChart();
    });
    setTimeout(()=>{  chart.resize();},0);
  }
  componentDidUpdate() {
    this.initChart()
  }
  componentWillUnmount(){
    const{ chart }=this.state;
    window.removeEventListener('resize',()=>{chart.resize()});
    chart.dispose();
  }
  onResize=(data)=>{
    const { chart } = this.state;
    chart.resize();
  }
  render() {
    let { height="300px",width="100%"} = this.props.config||{};
    return <div>
    <div ref={id => (this.id = id)}style={{width, height}} />
    <ReactResizeDetector  handleWidth handleHeight onResize={this.onResize.bind(this)}/>
   </div>
  }
}


