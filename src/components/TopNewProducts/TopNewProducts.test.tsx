import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TopNewProducts from ".";

describe("TopNewProducts", () => {
  it("renders the slipper image", () => {
    render(<TopNewProducts />);

    const slipper = screen.getByTestId("slipper");

    expect(slipper).toBeInTheDocument();
  });

  it("renders the suitcase image", () => {
    render(<TopNewProducts />);

    const slipper = screen.getByTestId("suitcase");

    expect(slipper).toBeInTheDocument();
  });

  it("renders the baby clothes image", () => {
    render(<TopNewProducts />);

    const slipper = screen.getByTestId("baby clothes");

    expect(slipper).toBeInTheDocument();
  });
});
