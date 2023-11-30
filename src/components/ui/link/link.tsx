import React, { forwardRef } from "react";
import NextLink from "next/link";
import classNames from "classnames/bind";

import styles from "./link.module.scss";

import type { Props } from "./props";

const cx = classNames.bind(styles);

export const Link = forwardRef<HTMLAnchorElement, Props>(
  (
    {
      isExternal = false,
      children,
      href = "#",
      level = "paragraph",
      color = "black",
      underline = false,
      iconType,
      className,
      ...rest
    },
    ref
  ) => {
    const linkClass = cx(
      "link",
      `link_level_${level}`,
      color && [`link_color_${color}`],
      iconType && [`link_icon_${iconType}`],
      underline && "link_underline",
      className
    );
    return (
      <>
        {isExternal ? (
          <a
            className={linkClass}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...rest}
            ref={ref}
          >
            {children}
          </a>
        ) : (
          <NextLink className={linkClass} href={href} ref={ref}>
            {children}
          </NextLink>
        )}
      </>
    );
  }
);

Link.displayName = "Link";
