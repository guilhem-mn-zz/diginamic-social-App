import React from 'react'
import { Layout, Menu } from 'antd';
import {
    FormOutlined,      //nouveau post ?
    HeartOutlined,     //Notifications
    MessageOutlined,   //Dms
    LogoutOutlined,    //déconnection
    SettingOutlined    //Paramètres

} from '@ant-design/icons';

const { Content, Sider } = Layout;

class FriendList extends React.Component {

    state = {
        collapsed: true,
    };
    
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
  
    render() {
        const { collapsed } = this.state;
        return (
            <div id="Layout">
            <Layout> 
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                </Sider>
                <Content 
                    style={{
                        margin: '24px 16px 0',
                        overflow: 'initial'
                    }}
                >
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                </Content>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        right: 0,
                    }}
                    collapsed={collapsed}
                    onCollapse={this.onCollapse}
                    collapsible
                >
                    <div id="sider">
                    <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={["2"]}
                    >
                        <Menu.Item
                            key="1"
                            icon={<FormOutlined/>}>
                            Posts
                        </Menu.Item>
                        <Menu.Item
                            key="2"
                            icon={<HeartOutlined/>}>
                            Notifications
                        </Menu.Item>
                        <Menu.Item
                            key="3"
                            icon={<MessageOutlined/>}>
                            Messages privés
                        </Menu.Item>
                        <Menu.Item
                            key="4"
                            icon={<LogoutOutlined/>}>
                            Se déconnecter
                        </Menu.Item>
                        <Menu.Item
                            key="5"
                            icon={<SettingOutlined/>}>
                            Paramètres
                        </Menu.Item>
                    </Menu>  
                    </div>              
                </Sider>
            </Layout>
            </div>
        )
    }
}

export default FriendList;