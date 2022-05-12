import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShowCase from ".";

describe.skip("the showcase of the page", () => {
  it("renders the showcase page", () => {
    render(<ShowCase />);

    const showHeader = screen.getByTestId("big sale");

    expect(showHeader).toBeInTheDocument();
  });

  it("renders the showcase page", () => {
    render(<ShowCase />);

    const showHeader = screen.getByTestId("winter offer");

    expect(showHeader).toBeInTheDocument();
  });

  it("renders the case page", () => {
    render(<ShowCase />);

    const showHeader = screen.getByTestId("chair collection");

    expect(showHeader).toBeInTheDocument();
  });
});
