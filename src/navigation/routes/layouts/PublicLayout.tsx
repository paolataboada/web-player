import { Outlet } from "react-router-dom";
import PublicNavbar from "../../navbar/PublicNavbar";

const PublicLayout = () => {
  return (
    <div>
      <PublicNavbar />
      <div>
        <img></img>
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
