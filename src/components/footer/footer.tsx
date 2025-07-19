import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Marketing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="grid grid-cols-4 justify-between gap-10 lg:grid-cols-6 lg:text-left">
            <div className="col-span-4 flex w-full flex-col justify-between gap-6 lg:col-span-2">
              <div>
                <span className="flex items-center gap-4">
                  <img
                    src="https://shadcnblocks.com/images/block/block-1.svg"
                    alt="logo"
                    className="h-11"
                  />
                  <p className="text-3xl font-semibold">Shadcnblocks</p>
                </span>
                <p className="text-muted-foreground mt-6">
                  A collection of 100+ responsive HTML templates for your
                  startup business or side project.
                </p>
              </div>
              <ul className="flex items-center space-x-6">
                <li className="hover:text-muted-foreground font-medium duration-200 hover:scale-110">
                  <a href="#">
                    <FaInstagram className="size-6" />
                  </a>
                </li>
                <li className="hover:text-muted-foreground font-medium duration-200 hover:scale-110">
                  <a href="#">
                    <FaFacebook className="size-6" />
                  </a>
                </li>
                <li className="hover:text-muted-foreground font-medium duration-200 hover:scale-110">
                  <a href="#">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li className="hover:text-muted-foreground font-medium duration-200 hover:scale-110">
                  <a href="#">
                    <FaLinkedin className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="col-span-2 md:col-span-1">
                <h3 className="mb-5 font-medium">{section.title}</h3>
                <ul className="text-muted-foreground space-y-4 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-4 md:col-span-2">
              <h3 className="mb-5 font-medium">Newsletter</h3>
              <div className="grid gap-1.5">
                <Label htmlFor="email">Subscribe to our newsletter</Label>
                <div className="flex w-full items-center space-x-2">
                  <Input type="email" placeholder="Email" />
                  <Button type="submit">Subscribe</Button>
                </div>
              </div>
              <p className="text-muted-foreground mt-1 text-xs font-medium">
                By submitting, you agree to our
                <a href="#" className="text-primary ml-1 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
          <div className="text-muted-foreground mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium lg:flex-row lg:items-center lg:text-left">
            <p>
              <span className="text-primary mr-1 font-bold">Shadcnblocks</span>
              © All rights reserved.
            </p>
            <p>Made with ❤️ by Shacnblocks</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
