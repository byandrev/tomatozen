import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import TaskElement from "../../components/TaskElement";
// import userEvent from "@testing-library/user-event";

describe("TaskElement", () => {
  const el = <TaskElement id={1} text={"Task Example"} isCompleted={false} />;

  test("Render title", () => {
    render(el);
    const taskEl = screen.getByText("Task Example").parentElement;
    expect(taskEl).toBeInTheDocument();
  });

  test("Show icon delete on mouse enter", async () => {
    render(el);
    const taskEl = screen.getByText("Task Example").parentElement;
    fireEvent.mouseEnter(taskEl);
    expect(screen.queryByRole("button")).not.toEqual(null);
  });

  test("Hide icon delete on mouse leave", async () => {
    render(el);
    const taskEl = screen.getByText("Task Example").parentElement;
    fireEvent.mouseLeave(taskEl);
    expect(screen.queryByRole("button")).toEqual(null);
  });
});