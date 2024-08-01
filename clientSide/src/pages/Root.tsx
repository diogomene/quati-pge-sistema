import { Outlet } from "react-router";
import { Toaster } from "sonner";

export function Root() {
  return (
    <div className="content-container">
      <Toaster />
      <Outlet />
    </div>
  );
}
