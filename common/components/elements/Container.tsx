"use client";

import { motion, MotionProps } from "framer-motion";

interface ContainerProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "", ...props }: ContainerProps) => {
  return (
    <motion.div className={`mt-20 p-8 lg:mt-0 ${className}`} {...props}>
      {children}
    </motion.div>
  );
};

export default Container;
