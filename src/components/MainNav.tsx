import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const MainNav = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      className="font-bold text-orange-500 hover:bg-white hover:text-green-500"
      variant="ghost"
      onClick={async () => await loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default MainNav;
