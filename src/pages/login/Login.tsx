import { Button } from "antd";
import { AuthForm } from "../../components";
import { FacebookOutlined, GooglePlusOutlined } from "@ant-design/icons";

export const Login: React.FC = () => {
  const onSubmit = (): void => {};
  return (
    <AuthForm
      title={"Log in"}
      onSubmit={onSubmit}
      link="register"
      socialNetwork={
        <div className="flex flex-col">
          <Button
            type="primary"
            htmlType="button"
            danger
            className=" h-auto"
            icon={<GooglePlusOutlined className="text-xl" />}
            style={{ marginBottom: 20 }}
          >
            Sign in google accunt
          </Button>

          <Button
            type="primary"
            htmlType="button"
            className="bg-blue-500 h-auto"
            icon={<FacebookOutlined className="text-xl" />}
          >
            Sign in facebook accunt
          </Button>
        </div>
      }
    />
  );
};
