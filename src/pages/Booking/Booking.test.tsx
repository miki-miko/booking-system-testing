/* eslint-disable */

import { render, screen, waitFor } from "../../test-utils/testUtils";
import user from "@testing-library/user-event";

import Booking from "./Booking";

function clickBookItButton() {
  user.click(
    screen.getByRole("button", {
      name: /book now/i,
    })
  );
}

describe("Booking", () => {
  // test("redirect to /shows when transaction is completed", () => {
  //   const { history } = render(<Booking />, {
  //     preloadedState: {
  //       user: { userDetails: { email: "test@test.com" } },
  //       tickets: { transactionStatus:.completed },
  //     },
  //   });

  //   expect(history.location.pathname).toBe("/shows");
  // });

  test("should open the Form and write inside the inputs", () => {
    // Arrange
    const jsdomAlert = window.alert; // remember the jsdom alert
    window.alert = () => {}; // provide an empty implementation for window.alert

    const openFunc = jest.fn();

    render(<Booking />);

    const firstNameInput = screen.getByPlaceholderText("Name");
    const surnameInput = screen.getByPlaceholderText("Surname");
    const emailInput = screen.getByPlaceholderText("Email");
    const phoneNumberInput = screen.getByPlaceholderText("Phone Number");

    expect(firstNameInput).toBeInTheDocument();

    user.type(firstNameInput, "Michelangelo");
    user.type(surnameInput, "Rossi");
    user.type(emailInput, "michelangelo.rossi@gmail.com");
    user.type(phoneNumberInput, "3463939399");

    clickBookItButton();

    waitFor(() => expect(openFunc).toHaveBeenCalled());

    waitFor(() =>
      expect(screen.getByText(/select a table/i)).toBeInTheDocument()
    );

    window.alert = jsdomAlert; // restore the jsdom alert
  });
});
