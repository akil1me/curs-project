import { Link } from "react-router-dom";
import { ReviewsTable } from "../../components";
import { Button } from "antd";

export const UserReviews: React.FC = () => {
  return (
    <>
      <Link className="inline-block mb-3" to="/add-reviews">
        <Button type="link">+ Add Reviews</Button>
      </Link>
      <ReviewsTable />
    </>
  );
};
