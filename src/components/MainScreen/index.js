import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import Menu from '../../containers/Menu';
import User from '../../containers/User';
import Role from '../../containers/Role';
import Url from '../../containers/Url';
import Mod from '../../containers/Mod';

const {
  Sider, Content, Footer
} = Layout;


class component extends Component {
  render() {
    return (
      <div>
        <Layout>
            <Sider
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
              }}
            >
              <Menu />
            </Sider>
            <Content
              style={{
                marginLeft: 200,
                minWidth: 1000,
                marginBottom: 20,
              }}
            >
              <Switch>
                <Route
                    path="/user"
                    component={User}
                />
                <Route
                    path="/role"
                    component={Role}
                />
                <Route
                    path="/mod"
                    component={Mod}
                />
                <Route
                    path="/url"
                    component={Url}
                />
              </Switch>
            </Content>
        </Layout>
      </div>
    );
  }
}

export default component;