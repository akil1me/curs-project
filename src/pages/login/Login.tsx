import { Button, Modal } from "antd";
import { AuthForm, Values } from "../../components";
import { FacebookOutlined, GooglePlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { axiosInstans } from "../../api";
import { useDispatch } from "react-redux";
import { setUser } from "../../store";

export const Login: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const Modalerror = (data: string, status: "error" | "success") => {
    Modal[`${status}`]({
      title: data,
      okType: "default",
    });
  };

  const onSubmit = async ({ email, password }: Values) => {
    try {
      setLoading(true);
      const { data } = await axiosInstans.post("login", {
        email,
        password,
      });

      dispatch(setUser(data));
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
