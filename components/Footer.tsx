import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ColumnProps = {
  title: string;
  Links: Array<string>;
};
const FooterColumn = ({ title, Links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {Links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);
const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex itmes-start flex-col">
          <Image
            alt="flexibbble"
            src="/logo-purple.svg"
            height={38}
            width={115}
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibbble is the world's leading community for creatives to share ,
            grow, and get hired .
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            Links={footerLinks[0].links}
          />

          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              Links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              Links={footerLinks[2].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[3].title}
            Links={footerLinks[3].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              Links={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              Links={footerLinks[5].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[6].title}
            Links={footerLinks[6].links}
          />
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        {" "}
        <p>@ 2023 Flexibbble. All rights reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">12,365 </span> Projects
          submited
        </p>
      </div>
    </footer>
  );
};

export default Footer;
