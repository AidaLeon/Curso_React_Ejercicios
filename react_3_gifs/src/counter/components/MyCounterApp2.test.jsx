import { MyCounterApp } from "./MyCounterApp"; 
import { render } from "@testing-library/react";
import { describe } from "vitest";
import { expect, test, vi, beforeEach } from "vitest";
import { screen, fireEvent } from "@testing-library/react";

const handleAddMock= vi.fn();
const handleSubtractMock= vi.fn();
const handleResetMock= vi.fn();

vi.mock("../hooks/useCounter", () => ({
    useCounter: () => ({
        counter: 10,
        handleAdd: handleAddMock,
        handleSubtract: handleSubtractMock,
        handleReset: handleResetMock,
    }),
}));

describe("MyCounterApp", () => {

    // limpiar mocks, limpiar valores cada vez que se haga un test
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('should render the component', () => {
        render(<MyCounterApp />);

        expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(`Contador: 10`);
        expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
        expect(screen.getByRole("button", { name: "-1" })).toBeDefined();
        expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();
        
    });
    test('should call handleAdd if button is clicked', () => {
        render(<MyCounterApp />);

        const button = screen.getByRole("button", { name: "+1" });

        fireEvent.click(button);

        expect(handleAddMock).toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();
        expect(handleSubtractMock).not.toHaveBeenCalled();
        
    }); 
    test('should call handleSubtract if button is clicked', () => {
        render(<MyCounterApp />);

        const button = screen.getByRole("button", { name: "-1" });

        fireEvent.click(button);

        expect(handleSubtractMock).toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();
        expect(handleAddMock).not.toHaveBeenCalled();

    });
    test('should call handleReset if button is clicked', () => {
        render(<MyCounterApp />);

        const button = screen.getByRole("button", { name: "Reset" });

        fireEvent.click(button);

        expect(handleResetMock).toHaveBeenCalled();
        expect(handleAddMock).not.toHaveBeenCalled();
        expect(handleSubtractMock).not.toHaveBeenCalled();
    });
});