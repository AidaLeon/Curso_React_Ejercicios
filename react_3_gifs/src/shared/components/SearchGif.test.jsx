import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { SearchGif } from "./SearchGif";

describe("SearchGif", () => {
  test("should render searchbar correctly", () => {
    const { container } = render(<SearchGif handleSearch={() => {}} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByRole("textbox")).toBeDefined();
    expect(screen.getByRole("button")).toBeDefined();
  });

  test("should call handleSearch with the correct value after 700ms", () => {
    const handleSearchMock = vi.fn();

    render(<SearchGif handleSearch={handleSearchMock} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(button);

    waitFor(() => {
      expect(handleSearchMock).toHaveBeenCalled();
      expect(handleSearchMock).toHaveBeenCalledWith("test");
    });
  });
});
