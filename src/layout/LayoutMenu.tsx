import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu, Select, theme } from "antd";
import React, { useEffect, useState } from "react";

import { Link, Outlet } from "react-router-dom";

import "./latout-menu.scss";

const { Header, Sider, Content } = Layout;

const getKeys: string = localStorage.getItem("keys") || "1";
const getLanguage: string = localStorage.getItem("language") || "ru";

export const LayoutMenu: React.FC = () => {
  const [keys, setKeys] = useState<string>(getKeys);
  const [language, setLanguage] = useState<string>(getLanguage);
  const [collapsed, setCollapsed] = useState(window.screen.width < 600);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    localStorage.setItem("keys", keys);
    localStorage.setItem("language", language);
  }, [keys, language]);

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
              defaultSelectedKeys={[keys]}
              onSelect={(e) => setKeys(e.key)}
              items={[
                {
                  key: "1",
                  icon: <HomeOutlined />,
                  label: <Link to="">home</Link>,
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: <Link to="reviews">my reviews</Link>,
                },
              ]}
            />
          </div>

          <Select
            value={language}
            onChange={(e) => setLanguage(e)}
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
          className="content"
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
