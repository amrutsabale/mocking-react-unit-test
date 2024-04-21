import { useEffect, useState } from "react";

export function useSubscribedUsers() {
  const [subscribedUsers, setSubscribedUsers] = useState();
  const [loading, setLoading] = useState();

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("testHostname/users");
      const users = await response.json();
      setSubscribedUsers(users);
    } catch (error) {
      console.error(error);
      setSubscribedUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { subscribedUsers, loading };
}
