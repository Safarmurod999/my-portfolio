import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Transition = ({ children }) => {
  return (
    <motion.div
      className="slide-in"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
