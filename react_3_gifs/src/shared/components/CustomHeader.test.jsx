import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { CustomHeader } from "./CustomHeader";

describe("GifsApp", () => {
  const title = "Buscador de gifs";
  const description = "descubre y comparte el gif perfecto";

  test("should render the title correctly", () => {
    render(<CustomHeader title={title} />);
    // comprobamos que en la pagina este nuestro texto del titulo
    expect(screen.getByText(title)).toBeDefined();
  });

  test("should render the description correctly", () => {
    render(<CustomHeader  description={description} />);
    // comprobamos que en la pagina este nuestro texto de la descripcion
    expect(screen.getByText(description)).toBeDefined();
    // comprobamos que en la pagina haya un parrafo
    expect(screen.getByRole("paragraph")).toBeDefined();
    // comprobamos que el parrafo tenga el texto correcto
    expect(screen.getByRole("paragraph").innerHTML).toBe(description);
  });

  test("should not render description when not provided", () => {
    // obtenemos el componente completo
    const { container } = render(<CustomHeader title={title} />);
    // obtenemos el div con la clase especifica
    const divElement = container.querySelector(".content-center");
    // si existe el div anterior cogemos el h1
    const h1 = divElement?.querySelector("h1");
    // comprobamos que el h1 tenga el texto correcto
    expect(h1?.innerHTML).toBe(title);
    // si existe el div anterior cogemos el p
    const p = divElement?.querySelector("p");
    // comprobamos que el p sea null
    expect(p).toBeNull();
  });
});
