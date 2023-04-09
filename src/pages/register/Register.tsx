import { Form, Input } from "antd";
import { AuthForm } from "../../components";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

export const Register: React.FC = () => {
  const onSubmit = (): void => {};
  return (
    <AuthForm
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
