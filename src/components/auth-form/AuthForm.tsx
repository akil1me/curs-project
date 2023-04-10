import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeftOutlined,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";

type AuthFormProps = {
  title: string;
  link: string;
  onSubmit: () => void;
  confirm?: React.ReactElement;
  socialNetwork?: React.ReactElement;
  username?: React.ReactElement;
};

export const AuthForm: React.FC<AuthFormProps> = ({
  title,
  onSubmit,
  link,
  confirm,
  socialNetwork,
  username,
}) => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="relative h-screen flex justify-center px-4 items-center">
      <Link
        className="absolute top-1 md:top-7 left-4 md:left-7 text-blue-400 border-blue-400 hover:border-b-2 transition-all"
        to="/"
      >
        <ArrowLeftOutlined className="align-middle mr-3" />{" "}
        <span className="hidden md:inline-block">Go to home</span>
      </Link>
      <div className="flex-auto max-w-md">
        <h1 className="text-2xl text-center mb-6">{title}</h1>
        <Form
          name="auth"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          {username}
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {confirm}

          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-blue-500">
              {title}
            </Button>
            <span className="float-right">
              Or{" "}
              <Link className="text-blue-500" to={"/" + link}>
                {link} now!
              </Link>
            </span>
          </Form.Item>
          {socialNetwork}
        </Form>
      </div>
    </div>
  );
};
