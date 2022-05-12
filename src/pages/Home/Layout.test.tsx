import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import "@testing-library/jest-dom";

describe("Layout", () => {
  it("should render  layout", () => {
    render(<Layout />);

    expect(screen.getByTestId("homepage-layout")).toBeInTheDocument();
  });

  it("should render sidebar", () => {
    render(<Layout />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  it("should render main-content", () => {
    render(<Layout />);

    expect(screen.getByTestId("main-content")).toBeInTheDocument();
  });
});
