import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Avatar, Select, Button } from "antd";

import { Link, Outlet } from "react-router-dom";

import "./latout-menu.scss";

const { Header, Sider, Content } = Layout;

export const LayoutMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(window.screen.width < 600);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="h-screen">
      <Sider className="p-2" trigger={null} collapsible collapsed={collapsed}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <Link className="py-5 block" to={"/"}>
              <Avatar
                className="object-cover w-full"
                shape="square"
                icon={<UserOutlined />}
              />
            </Link>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: <Link to="">home</Link>,
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: <Link to="reviews">reviews</Link>,
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
              ]}
            />
          </div>

          <Select
            defaultValue="lucy"
            options={[
              { value: "ru", label: "Russian" },
              { value: "en", label: "English" },
              { value: "uz", label: "Uzbek" },
            ]}
          />
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="px-6 flex items-center justify-between"
          style={{ background: colorBgContainer }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <Button>Log out</Button>
        </Header>
        <Content
          className="my-6 mx-4 p-6"
          style={{
            background: colorBgContainer,
          }}
        >
          {" "}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
