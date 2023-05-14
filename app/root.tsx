import type { LinksFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheet from "~/tailwind.css";
import { Title } from "./components/Title";

export const links: LinksFunction = () => {
  const links = [{ rel: "stylesheet", href: tailwindStylesheet }];
  if (cssBundleHref) {
    return [...links, { rel: "stylesheet", href: cssBundleHref }];
  }
  return links;
};

export default function App() {
  return (
    <html lang='no'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link
          rel='icon'
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🍺</text></svg>"
        ></link>
        <Meta />
        <Links />
      </head>
      <body className='min-h-screen bg-sky-100 mt-12'>
        <div className='grid gap-8 justify-items-center'>
          <Title level='1'>Halvlitern</Title>
          <div>
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
