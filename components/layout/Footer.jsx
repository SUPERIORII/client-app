import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 relative bottom-0 left-0 right-0">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                className="h-8 w-8"
                src="/images/logo.png"
                width={200}
                height={200}
                alt="logo"
                priority
              />
              <span className="text-sm lg:text-lg font-bold text-white">
                Ecorise Global Initiatives
              </span>
            </div>
            <p className="text-sm">
              Empowering communities to take action for a sustainable future.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-green-500 transition-colors">
                Home
              </Link>
              <Link
                href="/about-us"
                className="hover:text-green-500 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/get-involved"
                className="hover:text-green-500 transition-colors"
              >
                Get Involved
              </Link>
              <Link
                href="/contact"
                className="hover:text-green-500 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get Involved</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/get-involved#volunteer"
                className="hover:text-green-500 transition-colors"
              >
                Volunteer
              </Link>
              <Link
                href="/get-involved#advocate"
                className="hover:text-green-500 transition-colors"
              >
                Advocate
              </Link>
              <Link
                href="/get-involved#donate"
                className="hover:text-green-500 transition-colors"
              >
                Donate
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-500" />
                <span className="text-sm">info@egi25.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-500" />
                <span className="text-sm">+231-778-786-295</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-500" />
                <span className="text-sm">
                  Bongmine Bridge, Monrovia Liberia
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Ecorise Global Initiatives. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
