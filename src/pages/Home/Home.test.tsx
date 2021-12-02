/* eslint-disable */

import { act, render, screen, waitFor } from "../../test-utils/testUtils";
import * as actions from "../../store/slices/tablesSlice";

import Home from "./Home";
import Table from "../../components/Table/Table";

describe("Home", () => {
  const filteredTablesSelectorSpy = jest.spyOn(
    actions,
    "filteredTablesSelector"
  );
  const tablesSelectorSpy = jest.spyOn(actions, "tablesSelector");
  const loadingSelectorSpy = jest.spyOn(actions, "loadingSelector");

  beforeEach(() => {
    filteredTablesSelectorSpy.mockReset().mockReturnValue([]);
    tablesSelectorSpy.mockReset().mockReturnValue([]);
    loadingSelectorSpy.mockReset().mockReturnValue(false);
  });

  test("should display relevant Table information fetched from the server", async () => {
    // Arrange

    render(<Home />);

    const card = screen.findByLabelText("card");
    waitFor(() => expect(card).toBeInTheDocument());
  });

  test("should delete a Table", async () => {
    render(
      <Table
        table={{
          id: 0,
          name: "",
          img: "",
          capacity: 0,
          isAvailable: false,
          location: "",
        }}
      />
    );

    act(() => {
      const tableCardName = screen.getByLabelText("card-title");
      expect(tableCardName).toBeInTheDocument();
    });
  });
});
