import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from "next/image";

function ContactUs() {
  return (
    <footer id="contact-us" className="p-10 bg-purple-100 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="flex flex-col items-center md:items-start">
        <Image
          src="/images/logo/logo.png"
          width={150}
          height={150}
          className="rounded-full"
          alt="logo"
        />
        <p className="text-black mt-5 text-2xl text-center md:text-left">
          If you have any questions, do not hesitate to contact us. Our email is: doolabcare@gmail.com
        </p>
        <div className="flex space-x-4 mt-5">
          <FaFacebook className="text-blue-600" size={50} />
          <FaInstagram className="text-pink-400" size={50} />
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-xl font-bold text-black">Quick Links</h2>
        <ul className="space-y-5 mt-5 text-2xl text-black">
          {['About Us', 'Services', 'Testimonials'].map(link => (
            <li key={link}>
              <a href="#services" className="hover:text-purple-700">{link}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-xl font-bold text-black">Address</h2>
        <address className="mt-5 not-italic text-2xl text-black text-center md:text-left">
          Siège de Agence de Design,<br/>
          Route de Aéroport,<br/>
          Émirats Arabes Unis
        </address>
      </div>
    </footer>
  );
}

export default ContactUs;
