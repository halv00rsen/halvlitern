import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { Button } from "~/components/Button";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Halvlitern" }];
};

export default function Index() {
  return (
    <Link to='/veileder'>
      <Button>Veileder</Button>
    </Link>
  );
}
