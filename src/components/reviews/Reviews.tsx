import { List } from "antd";
import React from "react";

import { ReviewsItem } from "../reviews-item";
import "./reviews.scss";

const data = Array.from({ length: 4 }).map((_, i) => ({
  href: "/",
  title: `ant design part ${i}`,
  avatar: `https://joesch.moe/api/v1/random?key=${i}`,
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));

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
    renderItem={(item) => <ReviewsItem {...item} />}
  />
);
