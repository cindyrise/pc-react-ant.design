import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Layout, Menu, Breadcrumb } from "antd";
import { homeAction } from "./aciton";
import { isEmpty } from "lodash";
import moment from "moment";
moment.locale("zh-cn");
import assign from "object-assign";
import "./style.scss";
import BarChart from '../../components/charts/barChart';
import LineChart from '../../components/charts/lineChart';
import MapChart from '../../components/charts/mapChart';
import ScatterChart from '../../components/charts/scatterChart';
import PieChart from '../../components/charts/pieChart';
import {barOption,lineOption,mapOption,scatterOption,pieOption} from '../../constants/option';


const { Header, Content, Footer } = Layout;
const mapState = state => ({
  homeData: state.home.homeData,
  userData: state.home.userData,
  navData: state.home.navData
});
const mapDispatch = dispatch => ({
  getHomeData(params) {
    dispatch(homeAction.getHomeData(params));
  },
  getUserData(params) {
    dispatch(homeAction.getUserData(params));
  },
  getNavData(params) {
    dispatch(homeAction.getNavData(params));
  }
});

@connect(mapState, mapDispatch)
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barOption:barOption,
      config:{}
    };
  }
  componentDidMount() {
    this.props.getHomeData({});
    this.setChart();
  }
 setChart=()=>{
  this.setState({barOption,
    config:{
    height:'300px',
    handle:this.clickBar
  }})
 }
  componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) {
    return this.props != nextProps || this.state != nextState;
  }
  clickBar=(data)=>{
    if(data.componentType === 'xAxis'){
      console.log('xAxis',data)
    }
    console.log('点击触发啦',data)
  }
  render() {
    const {barOption,config}=this.state;
    return (
      <Layout className="layout">
          <div  style={{
              color: "red",
              fontSize: "24px",
              marginTop: "230px",
              textAlign: "center"
            }}
          >
           恭喜，home主页新建成功,DIY YOUE CODE!!!. 
           <a href="/home">noauth</a>
           <BarChart option={barOption} config={config}/>
           <br/>
           <LineChart option={lineOption} config={config}/>
           <br/>
           <MapChart option={mapOption} conifg={config}/>
           <br/>
           <ScatterChart option={scatterOption} conifg={config}/>
           <br/>
           <PieChart option={pieOption} conifg={config}/>
          </div>
      </Layout>
    );
  }
}
