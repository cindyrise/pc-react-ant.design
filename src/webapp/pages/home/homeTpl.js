import React from "react";
import { connect } from "react-redux";
import { Layout, Icon } from "antd";
import classnames from "classnames";
const { Footer } = Layout;


export default class HomeTpl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <Layout>
         <div  style={{width:"100%",fontSize:"24px",textAlign:"center"}}>home</div>
         <div>
         {this.props.children || "Ooops! we're working on it"}
         </div>
        <Footer style={{ textAlign: "center" }}>
          home ©2016 Created by charles
        </Footer>
      </Layout>
    );
  }
}
