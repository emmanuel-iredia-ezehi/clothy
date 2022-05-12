import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TopSellingProducts from ".";

describe("TopSellingProducts", () => {
  it("should render weddiing dress image", () => {
    render(<TopSellingProducts />);

    const SellingProducts = screen.getByTestId("wedding dress");

    expect(SellingProducts).toBeInTheDocument();
  });

  it("should render sneaker image", () => {
    render(<TopSellingProducts />);

    const SellingProducts = screen.getByTestId("allstar");

    expect(SellingProducts).toBeInTheDocument();
  });

  it("should render watch image", () => {
    render(<TopSellingProducts />);

    const SellingProducts = screen.getByTestId("patek");

    expect(SellingProducts).toBeInTheDocument();
  });
});
