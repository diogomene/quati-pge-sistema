import { Outlet } from "react-router";

export function Root() {
  return (
    <div className="content-container">
      <Outlet />
    </div>
  );
}
