"use client";

import Image from "next/image";

interface SocialLink {
  id: string;
  title: string;
  url: string;
  icon: string;
  altText: string;
}

export default function SocialPage() {
  const socialLinks: SocialLink[] = [
    {
      id: "261652",
      title: "Official Whatsapp Laksana Business Park",
      url: "[Link]",
      icon: "/images/landing/wa.png",
      altText: "Official Whatsapp Laksana",
    },
    {
      id: "261685",
      title: "GitHub @ [User]",
      url: "[Link]",
      icon: "/images/landing/github.png",
      altText: "GitHub @ [User]",
    },
    {
      id: "261686",
      title: "Credly @ [User]",
      url: "[Link]",
      icon: "/images/landing/credly.png",
      altText: "Credly @ [User]",
    },
    {
      id: "261687",
      title: "HackerRank @ [User]",
      url: "[Link]",
      icon: "/images/landing/hackerrank.png",
      altText: "HackerRank @ [User]",
    },
    {
      id: "261688",
      title: "Replit @ [User]",
      url: "[Link]",
      icon: "/images/landing/replit.png",
      altText: "Replit @ [User]",
    },
    {
      id: "261689",
      title: "Instagram @ [User]",
      url: "[Link]",
      icon: "/images/landing/instagram.png",
      altText: "Instagram @ [User]",
    },
    {
      id: "261690",
      title: "Facebook @ [User]",
      url: "[Link]",
      icon: "/images/landing/facebook.png",
      altText: "Facebook @ [User]",
    },
  ];

  return (
    <div className="min-h-full flex-h-center" id="background_div">

      {/* Canvas Background Overlay */}
      <canvas id="bg-canvas" className="background-overlay">
        
      </canvas>

      {/* Main Content */}
      <div className="mt-[10rem] page-full-wrap relative">
        {/* Profile Image */}
        <div className="flex-both-center">
          <Image
            src="/images/landing/logo.png"
            alt="Profile Picture"
            width={96}
            height={96}
            className="display-image"
            priority
          />
        </div>

        {/* Page Title */}
        <h2 className="page-title page-text-color page-text-font mt-16 text-center">
          Laksana Business Park
        </h2>
        <h3 className="page-bioline page-text-color page-text-font mt-4 text-center">
          Kawasan Industri dan Pergudangan Terpadu berlokasi di Utara Tangerang.
        </h3>

        {/* Social Links Container */}
        <div className="mt-24">
          {socialLinks.map((link) => (
            <div key={link.id} className="page-item-wrap relative">
              <div className="page-item flex-both-center absolute"></div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="page-item-each py-10 flex-both-center"
                href={link.url}
                data-id={link.id}
                data-type="page_item"
              >
                <Image
                  src={link.icon}
                  alt={link.altText}
                  width={100}
                  height={100}
                  className="link-each-image"
                />
                <span className="item-title text-center">{link.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
