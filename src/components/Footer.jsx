import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import signatureSVG from "../assets/images/signatures/signblu.svg";

const Footer = () => {

  const renderTime = new Date() .toUTCString();
  const Socials = [
    { icon: Github, href: "https://github.com/yourusername" },
    { icon: Linkedin, href: "https://linkedin.com/in/salmancodes9" },
    { icon: Twitter, href: "https://twitter.com/yourusername" },
    { icon: Instagram, href: "https://instagram.com/yourusername" },
    { icon: Mail, href: "mailto:your.email@example.com" },
  ];
  return (
   <div className="bg-[#fff4e5]">
  <div className="max-w-7xl mx-auto px-30 py-10">
    <div className="grid grid-cols-[auto_1fr] gap-48">

      {/* LEFT  Side*/}
      <section>
        <div>
          <div className="flex items-start ">
            <div className="mt-4">
              <h1 className="font-black text-2xl tracking-tighter leading-none">
                SalmanNissar
              </h1>
              <h6 className="text-xs tracking-tighter">
                Code for World Wide Web
              </h6>
            </div>
            <img
              src={signatureSVG}
              alt="Signature"
              className="w-40 h-auto"
              style={{ filter: ""}}
            />
          </div>




          <div className="flex gap-4 mt-8">
            {Socials.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-500 hover:[transform:rotateY(360deg)] hover:text-[#7910ea]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-xs mt-8">
            © 2025 Salman Nissar. All rights reserved.
          </p>
          <p className=" text-xs ">Rendered at: {renderTime}</p>
        </div>
      </section>

      {/* RIGHT */}
      <section className="ml-32">
        <h1 className="mt-1 font-medium text-xl">Sitemap</h1>
        <ul className="flex gap-6 mt-6 text-sm underline text-[#4807ef]">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </section>

    </div>
  </div>
</div>

  );
};

export default Footer;
