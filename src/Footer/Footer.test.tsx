import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from ".";

describe("Footer", () => {
  it("should render footer", () => {
    render(<Footer />);

    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
