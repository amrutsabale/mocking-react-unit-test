import { fireEvent, render, screen } from "@testing-library/react";
import SimpleForm from "./SimpleForm";
import * as apiHandlerMethods from "./updateNameApi.js";

describe("Simple Form", () => {
  it("should save name successfully", async () => {
    jest.spyOn(apiHandlerMethods, "updateNameApi").mockImplementation(() =>
      Promise.resolve({
        username: "ironman",
      })
    );
    render(<SimpleForm />);
    const textInputField = screen.getByRole("textbox");
    fireEvent.change(textInputField, {
      target: {
        name: "username",
        value: "ironman",
      },
    });
    fireEvent.blur(textInputField);
    expect(await screen.findByText("ironman saved successfully")).toBeVisible();
  });
});
