import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from "next/image";
 function ContactUs() {
  return (
    <footer className="p-30 bg-purple-100 grid grid-cols-3 gap-4">
      <div>
      <Image
              src={"/images/logo/logo.png"}
              width={150}
              height={150}
              className="absolute ml-15 -translate-x-1/2 -translate-y-1/2 rounded-full"
              alt="profile"
            />
       
        <p className="text-black mt-15 text-2xl  ">If you have any questions do not hesitate to contact us. Our email is: doolabcare@gmail.com
        </p>
        <div className="flex space-x-2 mt-10">
          <FaFacebook className="text-blue-600"size={50} />
          
          <FaInstagram className="text-pink-400 ms-10 " size={50} />
        </div>
      </div>

      <div className='ml-33'>
        <h2 className="text-xl font-bold text-black">Quick Links</h2>
        <ul className="space-y-5 mt-7 text-2xl text-black">
          {[ 'About Us','Services', 'Contact Us'].map(link => (
            <li key={link}><a href="#" >{link}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-black">Adresse</h2>
        <address className="mt-7 not-italic text-2xl text-black">
          Siège de Agence de Design,<br/>
          Route de Aéroport,<br/>
          Émirats Arabes Unis
        </address>
      </div> 
    </footer> 
  );
}
export default ContactUs;