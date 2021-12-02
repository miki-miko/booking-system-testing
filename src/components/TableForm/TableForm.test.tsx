/* eslint-disable */

import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "../../test-utils/testUtils";
import user from "@testing-library/user-event";
import TableForm from "./TableForm";

describe("TableForm", () => {
  const onClick = jest.fn();
  const anotherClick = jest.fn();

  test("onSubmit is called when all the fields pass validation", async () => {
    render(
      <TableForm
        show={true}
        handleClose={anotherClick}
        onInputChange={() => {}}
        addPost={onClick}
      />
    );

    const submitButton = screen.getByLabelText("submit-button");

    const form = screen.getByText(/add new table/i);

    expect(form).toBeInTheDocument();

    const tableNameInput = screen.getByPlaceholderText("Enter a table name");
    const tableLocationInput = screen.getByPlaceholderText(
      "Enter the location name"
    );
    const tableImageInput = screen.getByPlaceholderText("Enter the image link");
    const tableCapacityInput = screen.getByPlaceholderText(
      "Enter the capacity of the table"
    );

    expect(tableNameInput).toBeInTheDocument();

    user.type(tableNameInput, "Table 7");
    user.type(tableLocationInput, "Patio");
    user.type(
      tableImageInput,
      "https://images.pexels.com/photos/238377/pexels-photo-238377.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    );
    user.type(tableCapacityInput, "6");

    fireEvent.click(submitButton);
  });

  test("error when submitting the form with Empty string", async () => {
    render(
      <TableForm
        show={true}
        handleClose={anotherClick}
        onInputChange={() => {}}
        addPost={onClick}
      />
    );

    act(() => {
      const submitButton = screen.getByLabelText("submit-button");

      fireEvent.click(submitButton);

      expect(submitButton).toHaveBeenCalled;

      const form = screen.getByText(/add new table/i);

      expect(form).toBeInTheDocument();

      const tableNameInput = screen.getByPlaceholderText("Enter a table name");
      const tableLocationInput = screen.getByPlaceholderText(
        "Enter the location name"
      );
      const tableImageInput = screen.getByPlaceholderText(
        "Enter the image link"
      );
      const tableCapacityInput = screen.getByPlaceholderText(
        "Enter the capacity of the table"
      );

      fireEvent.click(submitButton);

      user.type(tableNameInput, "");
      user.type(tableLocationInput, "");
      user.type(tableImageInput, "");
      user.type(tableCapacityInput, "");

      waitFor(() => {
        expect(tableNameInput).toHaveErrorMessage(
          "Please provide a valid table name"
        );
        expect(tableLocationInput).toHaveErrorMessage(
          "Please provide a valid location"
        );
        expect(tableImageInput).toHaveErrorMessage(
          "Please provide a valid image link"
        );
        expect(tableCapacityInput).toHaveErrorMessage(
          "Please provide a valid positive number"
        );
      });
    });
  });

  test("the close Button is working", async () => {
    render(
      <TableForm
        show={true}
        handleClose={anotherClick}
        onInputChange={() => {}}
        addPost={onClick}
      />
    );
    const closeButton = screen.getByLabelText("close-button");
    fireEvent.click(closeButton);
    waitFor(() => expect(closeButton).toHaveBeenCalled());
  });
});
