import { useSubscribedUsers } from "./useSubscribedUsers";

const SampleComponent = () => {
  const { subscribedUsers, loading } = useSubscribedUsers();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (subscribedUsers?.length === 0) {
    return <div>No subscribed users</div>;
  }
  return <div>Subscribers: {subscribedUsers?.length}</div>;
};

export default SampleComponent;
