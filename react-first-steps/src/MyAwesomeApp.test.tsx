import { describe,  expect,  test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";


describe("MyAwesomeApp", () => {
    test("should render firstName and lastName", () => {
        console.log(document.body);

        const { container } = render(<MyAwesomeApp />);
        
        // querySelector sirve para obtener un elemento del dom
        const h1 = container.querySelector("h1");
        const h3 = container.querySelector("h3");

        // cuidado con el toContain porque con tal que contenga la palabra le da por valida aunque haya mas cosas en el h1
        // innerHTML sirve para obtener el html
        expect(h1?.innerHTML).toContain("Aida");
        expect(h3?.innerHTML).toContain("León");
        
    });

    test("should render firstName and lastName  -- screen", () => {
        render(<MyAwesomeApp />);

        screen.debug();
        
        const h1= screen.getByTestId("firts-name-title");
        expect(h1.innerHTML).toContain("Aida");
        
    });

    test("should match snapshot", () => {
        const { container } = render(<MyAwesomeApp />);

        // toMatchSnapshot sirve para que siempre se vea como tienes tu html como lo tenias al hacer el test
        expect(container).toMatchSnapshot();
    });
    test("should match snapshot 2", () => {
        render(<MyAwesomeApp />);

        // toMatchSnapshot sirve para que siempre se vea como tienes tu html como lo tenias al hacer el test
        expect(screen.getByTestId("div-app")).toMatchSnapshot();
    });
});