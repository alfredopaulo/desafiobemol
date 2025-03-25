import React, { useContext } from "react";
import { FeedbackContext } from "../../context/FeedbackContext";

const UsersPages = () => {
  const { users, loading } = useContext(FeedbackContext);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Users Pages</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPages;
