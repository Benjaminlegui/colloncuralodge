import { motion } from "framer-motion";

const Header = ({ tag: Tag, text, className }) => {
    return <motion.div initial={{ opacity: 0, y: 80}} whileInView={{ opacity: 1, y: 0}} viewport={{ once: true }} transition={{ duration: .5}}><Tag className={className}>{text}</Tag></motion.div>
}

export default Header;