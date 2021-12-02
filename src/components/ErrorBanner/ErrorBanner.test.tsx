/* eslint-disable */

import { act, render, screen, waitFor } from "../../test-utils/testUtils";
import * as actions from "../../store/slices/tablesSlice";

import user from "@testing-library/user-event";
import ErrorBanner from "./ErrorBanner";

describe("ErrorBanner", () => {
  const errorSelectorSpy = jest.spyOn(actions, "errorSelector");
  const filteredTablesSelectorSpy = jest.spyOn(
    actions,
    "filteredTablesSelector"
  );
  const tablesSelectorSpy = jest.spyOn(actions, "tablesSelector");

  beforeEach(() => {
    errorSelectorSpy.mockReset().mockReturnValue(true);
    filteredTablesSelectorSpy.mockReset().mockReturnValue([]);
    tablesSelectorSpy.mockReset().mockReturnValue([]);
  });

  test("testing Capacity and Location Selects, should find the Table with the values selected", async () => {
    // render(<ErrorBanner message={""} handleErrorBanner={() => {}} />);

    render(<ErrorBanner message={""} />);

    const closeButton = await screen.findByLabelText("close-button");

    expect(closeButton).toBeInTheDocument();

    waitFor(() => user.click(closeButton));

    waitFor(() => expect(errorSelectorSpy).toHaveBeenCalledTimes(1));
    waitFor(() => expect(filteredTablesSelectorSpy).toHaveBeenCalledTimes(2));
    waitFor(() => expect(tablesSelectorSpy).toHaveBeenCalledTimes(1));
  });
});
