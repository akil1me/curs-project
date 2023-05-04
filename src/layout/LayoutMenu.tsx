import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusCircleOutlined,
  SettingOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Icon } from "@iconify/react";

import { Avatar, Button, Drawer, Layout, Menu, Select, Switch } from "antd";
import React, { useEffect, useState } from "react";

import type { MenuProps } from "antd/es/menu";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Dark, Light } from "../components";
import { RootState, setUser } from "../store";
import "./latout-menu.scss";
const { Header, Sider, Content } = Layout;

const getLanguage: string = localStorage.getItem("language") || "ru";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/",
    icon: <HomeOutlined />,
    label: <Link to="">home</Link>,
  },
  {
    key: "/reviews",
    icon: <VideoCameraOutlined />,
    label: <Link to="reviews">my reviews</Link>,
  },
  {
    key: "/add-reviews",
    icon: <PlusCircleOutlined />,
    label: <Link to="add-reviews"> add reviews</Link>,
  },
];

export const LayoutMenu: React.FC = () => {
  const loacation = useLocation();
  const [keys, setKeys] = useState<string>(loacation.pathname);
  const [language, setLanguage] = useState<string>(getLanguage);
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setKeys(loacation.pathname);
    localStorage.setItem("language", language);
  }, [keys, language, loacation.pathname]);

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
              selectedKeys={[keys]}
              onSelect={(e) => setKeys(e.key)}
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
            selectedKeys={[keys]}
            onSelect={(e) => setKeys(e.key)}
            items={items}
            onClick={() => setOpen(false)}
          />
        </Drawer>
      </div>
    </Layout>
  );
};
