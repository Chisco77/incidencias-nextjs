import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.tsx";
import FooterSmall from "components/Footers/FooterSmall.tsx";

export default function Auth({ children }) {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="h-screen flex justify-center items-center">
          <div
            className="h-screen flex justify-center items-center"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
