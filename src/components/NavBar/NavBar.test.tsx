import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from ".";

describe("NavBar", () => {
  it("render the navbar component", () => {
    render(<NavBar />);

    const displayHeader = screen.getByTestId(/header/i);

    expect(displayHeader).toBeInTheDocument();
  });

  it("render the phone text", () => {
    render(<NavBar />);

    const displayHeader = screen.getByTestId(/phone/i);

    expect(displayHeader).toBeInTheDocument();
  });

  it("render the links section", () => {
    render(<NavBar />);

    const displayHeader = screen.getByTestId(/links/i);

    expect(displayHeader).toBeInTheDocument();
  });

  it("render the email section", () => {
    render(<NavBar />);

    const displayHeader = screen.getByTestId("email");

    expect(displayHeader).toBeInTheDocument();
  });
});
