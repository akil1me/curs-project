import { LikeFilled, MessageOutlined, StarFilled } from "@ant-design/icons";
import { Avatar, Image, List, Rate } from "antd";
import { Link } from "react-router-dom";
import { IconText } from "./reviews-item-actions";

type ReviewsItemProps = {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
};

export const ReviewsItem: React.FC<ReviewsItemProps> = ({
  title,
  href,
  description,
  content,
  avatar,
}) => {
  return (
    <List.Item
      className="flex-col-reverse  md:flex-row mb-6 "
      style={{ padding: 0, paddingBottom: 20 }}
      key={title}
      actions={[
        <IconText
          icon={
            <Rate
              allowHalf
              onChange={(e) => console.log(e, title)}
              defaultValue={0}
            />
          }
          text=""
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
            className="object-cover"
            width={300}
            height={200}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        </div>
      }
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar} />}
        title={
          <div className="flex items-center">
            <Link to={href}>{title}</Link>
            <span>
              <StarFilled className="ml-3 mr-1 align-middle text-yellow-400" />
              <span className="text-xs">4.4</span>
            </span>
          </div>
        }
        description={description}
      />
      {content}
    </List.Item>
  );
};
