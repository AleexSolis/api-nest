import axios from "axios";

export const getSuperadmin = async () => {
  const users = await axios.get("http://localhost:3001/users/");
  if (!users) return false;
  return users.data.users.find(user => user.typeUser === 1);
};

export const createSuperadmin = async newUser => {
  const user = await createUser(newUser, 1);
  if (!user) return false;
  return user.data;
};

export const createUser = async (newUser, typeUser) => {
  const user = await axios.post(
    "http://localhost:3001/users/create",
    JSON.stringify({
      ...newUser,
      typeUser,
      state: 2
    }),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
  if (!user) return false;
  return user.data;
};
