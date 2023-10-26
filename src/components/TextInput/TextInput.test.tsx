import { render, screen } from "@testing-library/react";
import { TextInput } from ".";

describe("TextInput", () => {
  it("renders without crashing", () => {
    render(<TextInput label="Label" name="name" />);

    const input = screen.getByLabelText("Label");

    expect(input).toBeInTheDocument();
  });
});
