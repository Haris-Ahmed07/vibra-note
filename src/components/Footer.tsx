"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import footerData from "@/data/footer.json" assert { type: 'json' };

const iconMap: { [key: string]: JSX.Element } = {
  facebook: <FaFacebook className="inline mr-2" />,
  twitter: <FaTwitter className="inline mr-2" />,
  instagram: <FaInstagram className="inline mr-2" />,
  youtube: <FaYoutube className="inline mr-2" />,
  'map-pin': <FaMapMarkerAlt className="inline mr-2" />,
  mail: <FaEnvelope className="inline mr-2" />,
  phone: <FaPhone className="inline mr-2" />
};

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerData.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700">
                {section.title}
              </h3>
              
              {section.links ? (
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link 
                        href={link.href} 
                        className="hover:text-white transition-colors duration-200 flex items-center"
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {link.icon && iconMap[link.icon]}
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-3">
                  {section.info?.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-white mr-2 mt-1">
                        {iconMap[item.icon]}
                      </span>
                      {item.href ? (
                        <Link 
                          href={item.href}
                          className="hover:text-white transition-colors duration-200"
                        >
                          {item.text}
                        </Link>
                      ) : (
                        <span>{item.text}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p> {new Date().getFullYear()} Music School. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;