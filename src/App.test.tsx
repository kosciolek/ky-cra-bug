import ky from "ky";
import React, { useEffect } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  const Comp = () => {
    useEffect(() => {
      ky
        .get("https://api.exchangerate.host/latest")
        .then((r) => {
          console.log('no shortcut status', r.status);
          return r.json();
        })
        .then((data) => console.log("no shortcut", data));

      (async () => {

        console.log(
          "json shortcut",
          await ky.get("https://api.exchangerate.host/latest").json()
        );
      })();
    }, []);

    return null;
  };

  render(<Comp />);

  await new Promise((res) => setTimeout(res, 500));
}, 20000);
