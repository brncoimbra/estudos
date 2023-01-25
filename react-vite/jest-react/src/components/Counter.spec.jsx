import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("should init with counter zero", () => {
    render(<Counter initialCount={0} />);

    const value = screen.getByTestId("countNumber").textContent;

    expect(value).toEqual("Count: 0");
  });

  it("should increment 1 when click at increment button", () => {
    render(<Counter initialCount={0} />);

    const buttonIncrement = screen.getByRole("button", { name: "Increment" });

    expect(buttonIncrement).toBeEnabled();

    fireEvent.click(buttonIncrement);

    expect(screen.getByTestId("countNumber").textContent).toEqual("Count: 1");
  });

  it("should decrement 1 when click at decrement button", () => {
    render(<Counter initialCount={0} />);

    const buttonDecrement = screen.getByRole("button", { name: "Decrement" });

    expect(buttonDecrement).toBeEnabled();

    fireEvent.click(buttonDecrement);

    expect(screen.getByTestId("countNumber").textContent).toEqual("Count: -1");
  });

  it("should restart count to zero when click at restart button", () => {
    render(<Counter initialCount={0} />);

    const buttonRestart = screen.getByRole("button", { name: "Restart" });

    expect(buttonRestart).toBeEnabled();

    fireEvent.click(buttonRestart);

    expect(screen.getByTestId("countNumber").textContent).toEqual("Count: 0");
  });

  it("should switch signs when click at switch signs button", () => {
    render(<Counter initialCount={0} />);

    const buttonSwitchSigns = screen.getByRole("button", {
      name: "Switch Signs",
    });

    expect(buttonSwitchSigns).toBeEnabled();

    fireEvent.click(buttonSwitchSigns);

    expect(screen.getByTestId("countNumber").textContent).toEqual("Count: 0");
  });
});
