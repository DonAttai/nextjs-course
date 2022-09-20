import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
