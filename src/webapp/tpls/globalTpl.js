import React from "react";
import { connect } from "react-redux";
import { Layout, Icon } from "antd";
import classnames from "classnames";
import TopNav from "../components/topnav";
import SiderNav from "../components/siderNav";
import * as global from "../pages/global/action"
import { bindActionCreators } from 'redux'
import Home from "../pages/home";
import NoExist from "../pages/except/404";
import UserTpl from './userTpl';
import { Route, Switch,Redirect } from "react-router-dom";
const { Footer } = Layout;


@connect(
  state => ({ ...state.global }),
  dispatch => bindActionCreators({ ...global}, dispatch)
)
export default class GlobalTpl extends React.Component {
  constructor(props) {
    super(props);
    this.props.getNavData({});
    this.props.getUserData({});
    this.state = {};
  }

  componentDidMount() {
  }
  componentWillReceiveProps(nextProps) {
  }

  toggleSider = () => {
    const { isSiderShow } = this.state;
    this.setState({
      isSiderShow: !isSiderShow
    });
  };

  render() {
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
        <Switch>
            <Route exact path={`${match.path}`} component={Home}></Route>  
            <Route exact path={`${match.path}/user`} component={UserTpl}></Route> 
            <Route exact path={`${match.path}/noexist`} component={NoExist}></Route> 
            <Redirect to="/app/noexist" /> 
        </Switch>
        </div>
        <Footer style={{ textAlign: "center" }}>
          home ©2016 Created by charles
        </Footer>
      </Layout>
    );
  }
}
