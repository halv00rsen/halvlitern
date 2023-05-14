import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { Button } from "~/components/Button";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Halvlitern" }];
};

export default function Index() {
  return (
    <div className='grid gap-8 justify-items-center'>
      <Link to='/veileder'>
        <Button>Finn en bar</Button>
      </Link>
      <Link to='/registrer'>
        <Button>Registrer besøk</Button>
      </Link>
      <Link to='/quiz' hidden>
        <Button>Quiz</Button>
      </Link>
    </div>
  );
}
