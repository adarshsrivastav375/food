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
import { Menu } from "lucide-react";

const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-orange-500" />
        </SheetTrigger>
        <SheetHeader>
          <SheetContent className="space-y-4">
            <SheetTitle>
              <span>Welcome to Food Ocean</span>
            </SheetTitle>
            <Separator />
            <SheetDescription className="flex">
              <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
            </SheetDescription>
          </SheetContent>
        </SheetHeader>
      </Sheet>
    </>
  );
};

export default MobileNav;
