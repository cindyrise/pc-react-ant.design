import React from 'react';
import { connect } from 'react-redux';
import { Layout, Icon, Dropdown, Menu } from 'antd';
import classnames from 'classnames';
import { Link } from "react-router-dom";
const { Header } = Layout;

const mapState = state => ({
  navData: state.global.navData,
  userData: state.global.userData
});
const mapDispatch = dispatch => ({});

@connect(mapState, mapDispatch)
export default class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps;
  }

  componentDidMount() {}

  logout() {
    this.props.history.push('/auth/login');
  }

  render() {
    const { navData, location, userData } = this.props;
    const { name,email,tel } = userData;
    const { pathname, hash } = location;
    const currentUrl = window.location.pathname + '#' + pathname;
    let navis = [];
    let settingNavi;
    navData && navData.forEach(navi => {
      if (navi.code === 'MENU_SETTING') {
        settingNavi = navi;
      }
      else {
        navis.push(navi);
      }
    });
    const userMenu = (<Menu>
      <Menu.Item style={{ overflow: 'hidden', textOverflow: '' }}>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{ tel }</span>
      </Menu.Item>
      <Menu.Item>
        <Link to="/user">用户中心</Link>
      </Menu.Item>
      <Menu.Item>
        <span onClick={ this.logout.bind(this) }>退出登录</span>
      </Menu.Item>
    </Menu>);
    const settingMenu = (<Menu>
      {settingNavi && settingNavi.children.map(o => <Menu.Item key={ o.code }>
        <Link to={ o.url || o.children[0].url }>{ o.name }</Link>
      </Menu.Item>)}
    </Menu>);

    const helpMenu = (<Menu style={{ left: -15 }}>
      <Menu.Item>
        <Link to="/app">联系我们</Link>
      </Menu.Item>
      <Menu.Item>
      <Link to="/app">帮助文档</Link>
      </Menu.Item>
    </Menu>)

    return <Header className="m-header">
      <div className="logo">
        <Link to="/app">
          <img src={ FRONT_CONF.COMPANY_LOGO } alt="EasyLogo"/>
        </Link>
      </div>
      <ul className="user f-fr">
        <li className="navitem">
          <Dropdown overlay={ userMenu } trigger={["click"]}>
            <a>{ name} <Icon type="down" /></a>
          </Dropdown>
        </li>
        <li className="navitem">
          <Dropdown overlay={ settingMenu } trigger={["click"]}>
            <a style={{marginRight: -30}}>
              <i style={{fontSize:'22px'}} className="iconfont icon-shezhi"></i>
            </a>
          </Dropdown>
        </li>
        <li className="navitem">
          <Dropdown overlay={ helpMenu } trigger={["click"]}>
             <a> <i  style={{fontSize:'22px'}} className="iconfont icon-bangzhu3"></i></a>
          </Dropdown>
        </li>
      </ul>
      <ul className="main">
        { navis.map(navi => {
          let url = navi.url;

          if(!url) {
            let nav = navi.children[0];
            while(!nav.url) {
              nav = nav.children[0];
            }
            url = nav.url;
          }

          return <li key={ navi.code } className={classnames('navitem', {
            active: currentUrl.indexOf(navi.url) !== -1||(currentUrl.indexOf('/alert')!=-1&&navi.url.indexOf('/alert')!=-1)
          })}>
            { navi.url ?
              <Link to={ url }>{ navi.name }</Link> :
              <Link to={ url }>{ navi.name }</Link>
            }
          </li>
        }) }
      </ul>
    </Header>
  }
}
