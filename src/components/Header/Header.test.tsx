import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from ".";

describe("the header of the page", () => {
  it("renders the header page", () => {
    render(<Header />);

    const showHeader = screen.getByTestId(/logo/i);

    expect(showHeader).toBeInTheDocument();
  });

  it("renders the header page", () => {
    render(<Header />);

    const showHeader = screen.getByTestId(/search/i);

    expect(showHeader).toBeInTheDocument();
  });
});
