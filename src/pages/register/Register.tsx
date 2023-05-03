import { Form, Input, Modal } from "antd";
import { AuthForm, Values } from "../../components";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { axiosInstans } from "../../api";
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const Register: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const naviagate = useNavigate();
  const Modalerror = (
    data: string,
    status: "error" | "success",
    nav?: NavigateFunction
  ) => {
    Modal[`${status}`]({
      title: data,
      okType: "default",
      onOk() {
        nav && nav("/login");
      },
    });
  };
  const onSubmit = async ({ email, password, username }: Values) => {
    try {
      setLoading(true);
      const { data } = await axiosInstans.post("regitser", {
        email,
        password,
        username,
      });
      Modalerror(data.message, "success", naviagate);
    } catch (error: any) {
      Modalerror(error.response.data.message, "error");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthForm
      loading={loading}
      title={"Register"}
      onSubmit={onSubmit}
      link="login"
      confirm={
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          validateTrigger={"onChange"}
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("No password matches"));
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Confirm password"
          />
        </Form.Item>
      }
      username={
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
      }
    />
  );
};
