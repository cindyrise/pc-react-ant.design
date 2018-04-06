import React from "react";
import { connect } from "react-redux";
import { Layout, Icon } from "antd";
import classnames from "classnames";

import TopNav from "../../components/topnav";
import SiderNav from "../../components/siderNav";
import { globalAction } from "./action";
import "../../assets/styles/main.scss";
import { Route, Router, Switch,Redirect } from "react-router-dom";
import Home from "../home";
import HomeTpl from "../home/homeTpl";
import NoExist from "../except/404";
import NoAuth from "../except/403";
const { Footer } = Layout;

@connect(
  state => ({
    isFullScreen: false,
    theme: 1,
    navData: state.global.navData
  }),
  dispatch => ({
    getUserData(params) {
      dispatch(globalAction.getUserData(params));
    },
    getNavData(params) {
      dispatch(globalAction.getNavData(params));
    }
  })
)
export default class GlobalTpl extends React.Component {
  constructor(props) {
    super(props);
    this.props.getNavData({});
    this.props.getUserData({});
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.match,1213213,this.props);
  }
  componentWillReceiveProps(nextProps) {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
  }

  toggleSider = () => {
    const { isSiderShow } = this.state;
    this.setState({
      isSiderShow: !isSiderShow
    });
  };

  render() {
    //console.log(this.props.match,1213213,this.props);
    const { children, isFullScreen, theme, navData,match } = this.props;
    let { pathname, hash } = window.location;
    const { isInIframe, isSiderShow } = this.state;
    return (
      <Layout
        style={{ flexDirection: FRONT_CONF.isTopNav ? undefined : "row" }}
        className={classnames("g-dashbdapp", {
          "s-fullscreen": isFullScreen,
          "s-dark": theme === 2
        })}
      >
        {FRONT_CONF.isTopNav ? (
          <TopNav {...this.props} />
        ) : (
          <SiderNav
            curUrl={pathname + hash}
            navData={navData}
            isSiderShow={isSiderShow}
          />
        )}
        <div style={{minHeight: "900px", padding: "15px" }}>
         <Route exact path={`${match.path}`} component={HomeTpl}></Route>
         <Route path={`${match.path}/home`} component={HomeTpl}></Route>
         {/* {this.props.children||'无组件渲染'} */}
        </div>
        <Footer style={{ textAlign: "center" }}>
          home ©2016 Created by charles
        </Footer>
      </Layout>
    );
  }
}
