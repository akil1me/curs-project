import { Button, Space } from "antd";

export const IconText = ({
  icon,
  text,
  typeDanger,
}: {
  icon: React.ReactNode;
  text: string;
  typeDanger?: boolean;
}) => (
  <Space className="mb-4">
    <Button danger={typeDanger} className="h-auto outline-none border-none">
      {icon}
      {text && <span className="ml-3">{text}</span>}
    </Button>
  </Space>
);
