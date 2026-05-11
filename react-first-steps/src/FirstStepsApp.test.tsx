import { describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: () => <div data-testid="ItemCounter"/>,
}))
describe("FirstStepsApp", () => {
  test("should must snapchot", () => {

    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();

  });

  test("should render the correct number of ItemCounter components", () => {

    render(<FirstStepsApp />);

    const ItemCounterElements = screen.getAllByTestId("ItemCounter");

    expect(ItemCounterElements.length).toBe(3);

  });
});