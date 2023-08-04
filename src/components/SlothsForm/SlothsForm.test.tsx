import { render, screen } from "@testing-library/react";
import SlothsForm from "./SlothsForm";

describe("Given a SlothsForm component", () => {
  describe("When it receives text input", () => {
    test("Then it should render the textbox field'", () => {
      render(<SlothsForm />);

      const inputField = screen.getByRole("textbox", { name: /name/i });

      expect(inputField).toBeInTheDocument();
    });
  });

  describe("When it receives a url label ", () => {
    test("Then it should show a url label with the name 'Picture URL:'", () => {
      const urlLabel = "textbox";

      render(<SlothsForm />);

      expect(screen.getByRole(urlLabel, { name: /url/i })).toBeInTheDocument();
    });
  });
});
