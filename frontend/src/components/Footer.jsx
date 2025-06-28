import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
   return (
    <div className="bg-[#FFF8F8] w-full py-10 px-6 text-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-2">Our Foundation</h2>
            <p className="max-w-xs">Empowering Farmers <br /> Fostering Rural Entrepreneurship</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-200"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-200"><FaTwitter /></a>
              <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-200"><FaLinkedinIn /></a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-1 text-sm">
              <li>Email: contact@ourngo.org</li>
              <li>Phone: +91 9876543210</li>
              <li>Address: 123 Hope Street, New Delhi, India</li>
            </ul>
          </div>

        </div>

        <div className="text-center text-sm text-white mt-10 border-t border-white/30 pt-6">
          <p>&copy; {new Date().getFullYear()} Our Foundation. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-80">Disclaimer: All the information provided on this website is for general informational purposes only and is subject to change without notice.</p>
        </div>
      </div>
   ); 
}

export default Footer;