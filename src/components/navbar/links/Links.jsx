"use client";

import { useState } from "react";
import NavLink from "./navLink/navLink"
import styles from "./links.module.css"
import Image from "next/image"

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/"
    },
    {
      title: "Blog",
      path: "/blog"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Contact",
      path: "/contact"
    }
  ]

  const[open, setOpen] = useState(false);

  //TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map(link => <NavLink item={link} key={link.title} />)}
      {/* {session ? (
        <>
          {isAdmin && <NavLink item={{title: "Admin", path: "/admin" }} />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{title: "Login", path: "/login"}} />
      )} */}
      <Image className={styles.menuButton} src="/menu.png" alt="menu" width={30} height={30} onClick={() => setOpen((prev) => !prev)} />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
    // <div>
    //   {links.map(link => <Link href={link.path} key={link.title}>{link.title}</Link>)}
    // </div>
  )
}

export default Links