import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { CircleUserRound, Menu } from "lucide-react";
import MobileNavLinks from "./MobileNavLinks";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-orange-500" />
        </SheetTrigger>
        <SheetHeader>
          <SheetContent className="space-y-4">
            <SheetTitle>
              {isAuthenticated ? (
                <span className="flex items-center font-bold gap-2">
                  <CircleUserRound className="text-orange-500" />
                  {user?.name}
                </span>
              ) : (
                <span>Welcome to Food Ocean</span>
              )}
            </SheetTitle>
            <Separator />
            <SheetDescription className="flex flex-col gap-4">
              {isAuthenticated ? (
                <MobileNavLinks />
              ) : (
                <Button
                  onClick={() => loginWithRedirect()}
                  className="flex-1 font-bold bg-orange-500"
                >
                  Log In
                </Button>
              )}
            </SheetDescription>
          </SheetContent>
        </SheetHeader>
      </Sheet>
    </>
  );
};

export default MobileNav;
