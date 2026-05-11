import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";
import { describe, expect, test } from "vitest";

describe("useCounter", () => {
    const incialState = 10;
    
  test("should initialize with default value of 10", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(incialState);
  });
  test("should increment counter when handleAdd is called", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.handleAdd();
    });
    expect(result.current.counter).toBe(incialState + 1);
  });
  test("should decrement counter when handleSubtract is called", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.handleSubtract();
    });
    expect(result.current.counter).toBe(incialState - 1);
  });
  test("should reset counter when handleReset is called", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.handleReset();
    });
    expect(result.current.counter).toBe(incialState);
  });
});
