import { LikeFilled, MessageOutlined } from "@ant-design/icons";
import { Avatar, Button, Image, List, Rate, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import "./reviews.scss";

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: "/",
  title: `ant design part ${i}`,
  avatar: `https://joesch.moe/api/v1/random?key=${i}`,
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));

const IconText = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <Space className="mb-4 ">
    <Button className="h-auto outline-none border-none">
      {icon}
      <span className="ml-3">{text}</span>
    </Button>
  </Space>
);

export const Reviews: React.FC = () => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        className="flex-col-reverse  md:flex-row mb-6 "
        style={{ padding: 0, paddingBottom: 20 }}
        key={item.title}
        actions={[
          <IconText
            icon={
              <Rate
                allowHalf
                onChange={(e) => console.log(e)}
                defaultValue={0}
              />
            }
            text="5"
            key="list-vertical-star-o"
          />,
          <IconText
            icon={<LikeFilled className="text-red-600 align-middle" />}
            text="156"
            key="list-vertical-like-o"
          />,
          <IconText
            icon={<MessageOutlined className="align-middle" />}
            text="we are gong... "
            key="list-vertical-message"
          />,
        ]}
        extra={
          <div className=" mb-7 md:mb-0">
            <Image
              className="object-cover max-w-full md:max-w-sm"
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          </div>
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<Link to={item.href}>{item.title}</Link>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);
