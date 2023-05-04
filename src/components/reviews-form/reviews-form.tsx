import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Tags } from "../tags";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values: any) => {
  console.log(values);
};

type defaultValue = {
  name: string;
};

interface ReviewsFormProps {
  button?: React.ReactNode;
  defaultValue?: defaultValue;
}

export const ReviewsForm: React.FC<ReviewsFormProps> = ({
  button,
  defaultValue,
}) => {
  const [tags, setTags] = useState<string[]>([]);
  console.log(tags);

  return (
    <Form
      {...layout}
      name="review"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      <Form.Item name={"name"} label="Name" rules={[{ required: true }]}>
        <Input defaultValue={defaultValue?.name} />
      </Form.Item>
      <Form.Item name={"artName"} label="Art Name" rules={[{ type: "email" }]}>
        <Input />
      </Form.Item>
      <Form.Item name={"group"} label="Group">
        <Input />
      </Form.Item>
      <Form.Item name={"tags"} label="Tags">
        <Tags setTags={setTags} tags={tags} />
      </Form.Item>
      <Form.Item name={"introduction"} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Image" name={"file"}>
        <Upload
          type="drag"
          name="file"
          listType={"picture"}
          maxCount={1}
          method={"post"}
          accept={".png,.jpeg,.ico,.svg,.jpg,.webp,.raw,.psd"}
        >
          <Button icon={<UploadOutlined />}>Upload image</Button>
        </Upload>
      </Form.Item>
      <Form.Item name={"Rating"} label="Rating">
        <InputNumber max={10} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        {button}
      </Form.Item>
    </Form>
  );
};
