import { Button, Space } from "antd";

export const IconText = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <Space className="mb-4">
    <Button className="h-auto outline-none border-none">
      {icon}
      {text && <span className="ml-3">{text}</span>}
    </Button>
  </Space>
);
