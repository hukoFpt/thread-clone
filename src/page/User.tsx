import { useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams<{ userId: string }>();

  console.log("User ID:", userId); // Debugging log

  return (
    <div>
      <h1>User Page</h1>
      <p>User ID: {userId}</p>
      {/* Add logic to fetch and display user information based on userId */}
    </div>
  );
};

export default UserPage;