import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MyCounterApp } from "./MyCounterApp";

describe('MyCounterApp', () => {
    test('should render the component ', () => {
        render(<MyCounterApp />);
        // heading engloba los h (encabezados) lever: 1 es el h1
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(`Contador: 10`);

        expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
    });
    test('should increment the counter', () => {
        render(<MyCounterApp />);
        const button = screen.getByRole('button', { name: '+1' });
        const labelH1 = screen.getByRole('heading', { level: 1 });
        // cuando se hace click en el boton
        fireEvent.click(button);
        // esperamos que el texto del h1 sea 11
        expect(labelH1.innerHTML).toContain(`Contador: 11`);
    });
    test('should decrement the counter', () => {
        render(<MyCounterApp />);
        const button = screen.getByRole('button', { name: '-1' });
        const labelH1 = screen.getByRole('heading', { level: 1 });
        // cuando se hace click en el boton
        fireEvent.click(button);
        // esperamos que el texto del h1 sea 9
        expect(labelH1.innerHTML).toContain(`Contador: 9`);
    });
    test('should reset the counter', () => {
        render(<MyCounterApp />);
        const button = screen.getByRole('button', { name: 'Reset' });
        const labelH1 = screen.getByRole('heading', { level: 1 });
        // cuando se hace click en el boton
        fireEvent.click(button);
        // esperamos que el texto del h1 sea 10
        expect(labelH1.innerHTML).toContain(`Contador: 10`);
    });
});