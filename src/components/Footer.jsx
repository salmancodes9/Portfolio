import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import signatureSVG from "../assets/images/signatures/sign.svg";

const Footer = () => {
  const Socials = [
    { icon: Github, href: "https://github.com/yourusername" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
    { icon: Twitter, href: "https://twitter.com/yourusername" },
    { icon: Instagram, href: "https://instagram.com/yourusername" },
    { icon: Mail, href: "mailto:your.email@example.com" },
  ];
  return (
    <>
      <div className=" flex justify-between bg-amber-0 max-w-7xl mx-auto px-28 py-10 text-black ">
        <section id="left-side " className="">
          <div className="">
            <h1 className=" flex flex-col jus leading-none m-0 font-black text-2xl tracking-tighter flex bg-amber-00">
              SalmanNissar <strong className="bg-lack ml-4"></strong>
            </h1>
            <h6 className=" m-0 text-xs  tracking-tighter bg-amber-00 ">
              Code for World Wide Web
            </h6>
            

            <div className="flex gap-4 mt-8 shake-hover">
              {Socials.map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <div>
              <img
                src={signatureSVG}
                alt="Signature"
                className="w-32 h-auto"
                style={{ filter: "hue-rotate(210deg) saturate(1.5)" }}
              />
              <p className="text-xs mt-8">
                @ 2025 Salman Nissar. All rights reserved.
              </p>
              <p>Render timing coming soon</p>
            </div>
          </div>
        </section>
        <section id="right_side " className="bg-amber-00 mx-auto ">
          <div>
            <h1 className="mt-4 ">Sitemap</h1>

            <ul className="  flex gap-6 mt-6  ">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
