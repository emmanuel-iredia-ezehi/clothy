import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from ".";

describe("Home", () => {
  it("should render the home page", () => {
    render(<Home />);

    const home = screen.getByTestId("homepage");

    expect(home).toBeInTheDocument();
  });
});
