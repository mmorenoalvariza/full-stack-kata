import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import expect from "expect";
import userEvent from "@testing-library/user-event";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
describe("Renders search input", () => {
  beforeEach(() => {
    render(<App />);
  })
  it("THEN Expects Buscar is in the document", () => {
    expect(screen.getByPlaceholderText('Buscar')).toBeInTheDocument();
  })
  describe("Types to search", () => {
    beforeEach(() => {
      userEvent.type(screen.getByPlaceholderText('Buscar'), 'vittore')
    })
    it('THEN should display vittore centro', async () => {
      expect(await screen.findByText('Vittore - Centro')).toBeInTheDocument();
      expect(screen.getByText('79')).toBeInTheDocument();
      expect(screen.getByText(`Entre 15' y 30'`)).toBeInTheDocument();
    });
  })
})

