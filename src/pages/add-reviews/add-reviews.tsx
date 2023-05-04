import { Button } from "antd";
import { ReviewsForm } from "../../components";

export const AddReviews: React.FC = () => {
  return (
    <>
      Add Reviews
      <ReviewsForm
        button={
          <Button className="bg-blue-500" type="primary" htmlType="submit">
            Submit
          </Button>
        }
      />
    </>
  );
};
