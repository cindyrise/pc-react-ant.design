import React from "react";
import { connect } from "react-redux";
import { Layout, Icon } from "antd";
import classnames from "classnames";
import { bindActionCreators } from 'redux'
import { Route, Switch } from "react-router-dom";
const { Footer } = Layout;
import UserList from '../pages/user/list';

export default class UserTpl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.match,1213213,this.props);
  }
  componentWillReceiveProps(nextProps) {
  }
  render() {
    const { match } = this.props;
    let { pathname, hash } = window.location;
    const { isInIframe, isSiderShow } = this.state;
    return (
      <Layout>
        <div style={{minHeight: "900px", padding: "15px" }}>
        <Switch>
            <Route exact path={`${match.path}`} component={UserList}></Route>
            {/* <Route  path={`${match.path}/profile`} component={Profile}></Route> */}
        </Switch>
        </div>
      </Layout>
    );
  }
}
