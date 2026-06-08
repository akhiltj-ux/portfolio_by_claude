"use client";

import { useEffect, useState, type MouseEvent } from "react";
import type { Heading } from "@/lib/mdx";
import styles from "./WorkToc.module.css";

type Props = {
  headings: Heading[];
};

// Must match the `scroll-margin-top` on .heading in MdxElements.module.css —
// both represent the sticky header's height plus breathing room.
const SCROLL_OFFSET = 100;

export default function WorkToc({ headings }: Props) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const updateActiveHeading = () => {
      let currentId = "";
      for (const { id } of headings) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= SCROLL_OFFSET) {
          currentId = id;
        }
      }
      setActiveId(currentId);
    };

    updateActiveHeading();
    window.addEventListener("scroll", updateActiveHeading, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveHeading);
  }, [headings]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={styles.toc}>
      <ul className={styles.list}>
        {headings.map(({ id, text, level }) => (
          <li
            key={id}
            className={`${styles.item} ${level === 3 ? styles.nested : ""}`}
          >
            <a
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`${styles.link} ${activeId === id ? styles.active : ""}`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
