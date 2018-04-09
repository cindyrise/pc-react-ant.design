import React from "react";
import { connect } from "react-redux";
import { Layout, Icon } from "antd";
import classnames from "classnames";
import Home from "../home";
import { Route, Router, Switch,Redirect } from "react-router-dom";
const { Footer } = Layout;

export default class HomeTpl extends React.Component {
  constructor(props) {
    super(props);
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

  };

  render() {
    const {match}=this.props;
    return (
      <Layout>
        <div style={{minHeight: "900px", padding: "15px" }}>
         <Home/>
        </div>
      </Layout>
    );
  }
}
