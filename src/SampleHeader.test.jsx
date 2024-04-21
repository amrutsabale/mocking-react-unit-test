import { render, screen } from "@testing-library/react";
import SampleHeader from "./SampleHeader.jsx";

jest.mock("./Tabs.jsx", () => ({
  Tabs: () => {
    return <div>Mocked Tabs</div>;
  },
}));

describe("Sample Header", () => {
  it("should render Header correctly", async () => {
    render(<SampleHeader />);
    expect(await screen.findByText("Header")).toBeVisible();
  });
});
