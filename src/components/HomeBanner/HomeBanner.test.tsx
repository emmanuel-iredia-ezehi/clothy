import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeBanner from ".";

describe("HomeBanner", () => {
  it("renders the shop button in the homebanner component", () => {
    render(<HomeBanner />);

    const showHeader = screen.getByTestId("shop now");

    expect(showHeader).toBeInTheDocument();
  });
});
