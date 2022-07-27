import { motion } from "framer-motion";
import { Col } from "react-bootstrap";


export const Cards = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
         <motion.div
      initial={{ opacity: 0 ,scale: 0.5 }}
      animate={{ opacity: 1 , scale: 1  }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        </motion.div>

    </Col>
  )
}
