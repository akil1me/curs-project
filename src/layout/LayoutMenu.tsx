import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Icon } from "@iconify/react";

import { Avatar, Button, Drawer, Layout, Menu, Select, Switch } from "antd";
import React, { useEffect, useState } from "react";

import { Link, NavLink, Outlet } from "react-router-dom";
import { Dark, Light } from "../components";
import "./latout-menu.scss";
import type { MenuProps, MenuTheme } from "antd/es/menu";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setUser } from "../store";
const { Header, Sider, Content } = Layout;

const getKeys: string = localStorage.getItem("keys") || "1";
const getLanguage: string = localStorage.getItem("language") || "ru";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

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
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("keys", keys);
    localStorage.setItem("language", language);
  }, [keys, language]);

  const logout = () => {
    dispatch(setUser({ user: null, token: null }));
  };

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
              items={items}
              defaultSelectedKeys={[keys]}
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

          <div className="flex items-center">
            <div className="hidden sm:block">
              <Switch
                className="relative overflow-hidden bg-slate-400"
                checkedChildren={<Dark />}
                unCheckedChildren={<Light />}
                onChange={(e) => console.log(e)}
              />
              <Select
                className="mx-3"
                value={language}
                onChange={(e) => setLanguage(e)}
                options={[
                  { value: "ru", label: "Russian" },
                  { value: "en", label: "English" },
                  { value: "uz", label: "Uzbek" },
                ]}
              />
            </div>
            <Button className="sm:hidden h-auto text-2xl mr-2 ">
              <SettingOutlined className="relative -top-1" />
            </Button>
            {user ? (
              <Button onClick={logout} className="h-auto" type="link">
                <strong className="hidden sm:inline-block">Logout</strong>
                <Icon
                  className="sm:hidden text-3xl"
                  icon="ant-design:logout-outlined"
                />
              </Button>
            ) : (
              <Button className="h-auto" type="link">
                <Link to={"/login"}>
                  <strong className="hidden sm:inline-block">Login</strong>
                  <Icon
                    className="sm:hidden text-3xl"
                    icon="ant-design:login-outlined"
                  />
                </Link>
              </Button>
            )}
          </div>
        </Header>
        <Content className="content">
          <Outlet />
        </Content>
      </Layout>

      <div>
        <Drawer
          style={{ backgroundColor: "#001529FF" }}
          width={"85%"}
          title={
            <div className="flex items-center justify-between ">
              <p className="text-gray-200">User</p>

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
