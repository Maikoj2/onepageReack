import { motion } from "framer-motion";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const SocialICon = () => {
  return (
    <div className="social-icon">
    <motion.a whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 1.1 }} href="" > <FaFacebook className="img"></FaFacebook>                       </motion.a>
    <motion.a whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 1.1 }} href="" ><FaTwitter className="img"></FaTwitter></motion.a>
    <motion.a whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 1.1 }} href="" ><FaInstagram className="img"></FaInstagram></motion.a>

</div>
  )
}
