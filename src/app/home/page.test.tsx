import { render, screen } from "@testing-library/react";
import Home from "./page";
import '@testing-library/jest-dom'

describe("Home Page", () => {
  it("should have a header", () => {
    render(<Home />);

    const header = screen.getByRole("heading", { name: "Welcome!" });

    expect(header).toBeInTheDocument();
  });
});
