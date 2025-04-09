import React from "react";
import Button from "../../components/Button";

export default function RootLayout({ children }) {
  return (
    <div>
    
      <main>{children}</main>

            <Button />
    </div>
  );
}
