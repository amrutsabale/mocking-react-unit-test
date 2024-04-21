import { render, screen } from "@testing-library/react";
import SampleComponent from "./SampleComponent";
import * as customHooks from "./useSubscribedUsers";
it("renders SampleComponent corectly", () => {
  const MOCK_USERS = [
    { name: "Amrut Sabale" },
    { name: "Amey Kulkarni" },
    { name: "Mangesh Khandale" },
  ];
  jest.spyOn(customHooks, "useSubscribedUsers").mockImplementation(() => ({
    loading: false,
    subscribedUsers: MOCK_USERS,
  }));
  render(<SampleComponent />);
  expect(screen.getByText("Subscribers: 3")).toBeVisible();
});
