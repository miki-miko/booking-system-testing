/* eslint-disable */

import {
  screen,
  render,
  waitFor,
  fireEvent,
  act,
} from "../../test-utils/testUtils";
import user from "@testing-library/user-event";
import * as actions from "../../store/slices/tablesSlice";

import TableFilter from "./TableFilter";
import { TableI } from "../../Interfaces";

describe("TableFilter", () => {
  const filteredTablesSelectorSpy = jest.spyOn(
    actions,
    "filteredTablesSelector"
  );
  const tablesSelectorSpy = jest.spyOn(actions, "tablesSelector");
  const capacitySelectorSpy = jest.spyOn(actions, "capacitySelector");
  const locationSelectorSpy = jest.spyOn(actions, "locationSelector");

  beforeEach(() => {
    filteredTablesSelectorSpy.mockReset().mockReturnValue(new Array<TableI>());
    tablesSelectorSpy.mockReset().mockReturnValue([]);
    capacitySelectorSpy.mockReset().mockReturnValue(0);
    locationSelectorSpy.mockReset().mockReturnValue("");
  });

  test("testing Capacity  Select, should find the Table with the values selected", () => {
    render(<TableFilter handleTables={() => {}} />);

    act(() => {
      const capacitySelect = screen.getByLabelText("tables-capacity");

      expect(capacitySelect).toBeInTheDocument();

      fireEvent.change(capacitySelect, { target: { value: 8 } });

      waitFor(() =>
        expect(screen.getByRole("option", { name: "8" })).toBeInTheDocument()
      );

      fireEvent.change(capacitySelect, { target: { value: 8 } });

      waitFor(() =>
        expect(screen.getByRole("option", { name: "8" })).toBeInTheDocument()
      );
    });
  });

  test("testing Capacity  Select, should find the Table with the values selected", () => {
    render(<TableFilter handleTables={() => {}} />);

    act(() => {
      const capacitySelect = screen.getByLabelText("tables-capacity");
      const locationSelect = screen.getByLabelText("tables-location");
      expect(capacitySelect).toBeInTheDocument();
      expect(locationSelect).toBeInTheDocument();
      fireEvent.change(capacitySelect, { target: { value: 8 } });
      fireEvent.change(locationSelect, { target: { value: "Patio" } });
      waitFor(() =>
        expect(screen.getByRole("option", { name: "8" })).toBeInTheDocument()
      );
      waitFor(() =>
        expect(
          screen.getByRole("option", { name: "Patio" })
        ).toBeInTheDocument()
      );
    });
  });
});
