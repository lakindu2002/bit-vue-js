import { render } from "@testing-library/vue";
import { BasicButton, BlueButton, ButtonWithCustomGoodByeWorldLabel } from "./button.composition";

it("should render with the correct text", () => {
  const { getByText } = render(BasicButton);
  const rendered = getByText("Hello World");
  expect(rendered).toBeTruthy();
});

it("should render button with label Hello World with the blue color", () => {
  const { getByText } = render(BlueButton);
  const rendered = getByText("Hello World");
  expect(rendered.style.background).toBe('blue');
});


it("should render button with label Goodbye World", () => {
  const { getByText } = render(ButtonWithCustomGoodByeWorldLabel);
  const rendered = getByText("Goodbye World");
  expect(rendered).toBeTruthy();
});

