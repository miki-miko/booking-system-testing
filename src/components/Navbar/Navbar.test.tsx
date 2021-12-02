/* eslint-disable */

import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("should render if component exist", () => {
    render(<Navbar />);
    const navbarTitle = screen.getByText("Restaurant Booking");
    expect(navbarTitle).toBeInTheDocument();
  });

  it("renders correctly", () => {
    const tree = render(<Navbar />);
    expect(tree).toMatchSnapshot();
  });
});
