import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Drawer, Layout, Menu, Select } from "antd";
import React, { useEffect, useState } from "react";

import { Link, Outlet } from "react-router-dom";

import "./latout-menu.scss";

const { Header, Sider, Content } = Layout;

const getKeys: string = localStorage.getItem("keys") || "1";
const getLanguage: string = localStorage.getItem("language") || "ru";

const items = [
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
];

export const LayoutMenu: React.FC = () => {
  const [keys, setKeys] = useState<string>(getKeys);
  const [language, setLanguage] = useState<string>(getLanguage);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("keys", keys);
    localStorage.setItem("language", language);
  }, [keys, language]);

  return (
    <Layout className="h-screen">
      <Sider
        className="p-2 hidden md:block"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
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
              selectedKeys={[keys]}
              onSelect={(e) => setKeys(e.key)}
              items={items}
            />
          </div>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header className="px-6 flex items-center justify-between bg-slate-300 mb-5">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "hidden md:block trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger md:hidden",
              onClick: () => setOpen(true),
            }
          )}

          <div>
            <Select
              value={language}
              onChange={(e) => setLanguage(e)}
              options={[
                { value: "ru", label: "Russian" },
                { value: "en", label: "English" },
                { value: "uz", label: "Uzbek" },
              ]}
            />
            <Button type="link">Log out</Button>
          </div>
        </Header>
        <Content className="content">
          <Outlet />
        </Content>
      </Layout>

      <div>
        <Drawer
          style={{ backgroundColor: "#001529FF" }}
          title={
            <div className="flex items-center justify-between ">
              <p className="text-gray-200">Basic Drawer</p>

              <Button
                onClick={() => setOpen(false)}
                className="border-none text-gray-200"
              >
                ✕
              </Button>
            </div>
          }
          placement="left"
          open={open}
          closable={false}
          onClose={() => setOpen(false)}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={[keys]}
            onSelect={(e) => setKeys(e.key)}
            items={items}
            onClick={() => setOpen(false)}
          />
        </Drawer>
      </div>
    </Layout>
  );
};
