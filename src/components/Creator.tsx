import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import User, { UserInterface } from "../model/User";

interface CreatorProps {
  creatorId: string;
}

const Creator: React.FC<CreatorProps> = ({ creatorId }) => {
  const [user, setUser] = useState<UserInterface>();
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const userData = await User.getById(creatorId);
      setUser(userData);
      setLoading(false);
    };

    fetchData();
  }, [creatorId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const goToCreatorPage = () => {
    navigate(`/user/${user?.id}`);
  };

  return (
    <div className="flex" onClick={goToCreatorPage}>
      <img
        className="rounded-full"
        src={user?.avatar}
        alt="avatar"
        height={24}
        width={24}
      />
      <h1 className="font-bold">{user?.name}</h1>
    </div>
  );
};

export default Creator;
