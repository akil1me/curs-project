import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

type AuthFormProps = {
  title: string;
  link: string;
  onSubmit: () => void;
  confirm?: React.ReactElement;
  socialNetwork?: React.ReactElement;
};

export const AuthForm: React.FC<AuthFormProps> = ({
  title,
  onSubmit,
  link,
  confirm,
  socialNetwork,
}) => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex-auto max-w-md">
        <h1 className="text-2xl text-center mb-6">{title}</h1>
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
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
              Or <Link to={"/" + link}>{link} now!</Link>
            </span>
          </Form.Item>
          {socialNetwork}
        </Form>
      </div>
    </div>
  );
};
