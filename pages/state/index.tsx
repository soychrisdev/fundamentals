import SimpleState from "@/components/state/SimpleState";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import Link from "next/link";

export default function StatePage() {
  return (
    <div>
      <div className="flex">
        <Link href={"/"}>
          <Button>Go Back</Button>
        </Link>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1">
          <SimpleState />
          <Separator />
        </div>
      </div>
    </div>
  );
}
