import { useState } from "react";
import Link from "../Link/Link";
import { GrMenu } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const fakeRoutes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/portfolio", name: "Portfolio" },
    { id: 5, path: "/contact", name: "Contact" },
  ];

  return (
    <nav>
      <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
        {open === true ? <AiOutlineClose /> : <GrMenu />}
      </div>
      <ul className="md:flex gap-4">
        {fakeRoutes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
}
