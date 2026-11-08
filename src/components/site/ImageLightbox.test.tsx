import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ImageLightboxProvider, LightboxImage } from "./ImageLightbox";

afterEach(cleanup);

function setup() {
  render(<ImageLightboxProvider><LightboxImage src="/portrait.jpg" alt="Portrait" /></ImageLightboxProvider>);
  return screen.getByRole("button", { name: "Expand image: Portrait" });
}

describe("Site image expansion", () => {
  it("opens the original image and locks background scrolling", () => {
    fireEvent.click(setup());
    expect(screen.getByRole("img", { name: "Portrait" })).toHaveAttribute("src", "/portrait.jpg");
    expect(document.body).toHaveAttribute("data-scroll-locked");
  });

  it("closes using the labelled close control and restores keyboard focus", async () => {
    const trigger = setup();
    fireEvent.click(trigger);
    fireEvent.click(screen.getByRole("button", { name: "Close expanded image" }));
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    expect(trigger).toHaveFocus();
    expect(document.body).not.toHaveAttribute("data-scroll-locked");
  });

  it("closes when the area outside the image is clicked", async () => {
    fireEvent.click(setup());
    fireEvent.click(screen.getByRole("dialog"));
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
  });

  it("closes with Escape", async () => {
    fireEvent.click(setup());
    fireEvent.keyDown(document, { key: "Escape" });
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
  });

  it.each(["Enter", " "])("opens using the %s key", (key) => {
    fireEvent.keyDown(setup(), { key });
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("does not close when the expanded image is clicked", () => {
    fireEvent.click(setup());
    fireEvent.click(screen.getByRole("img", { name: "Portrait" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});