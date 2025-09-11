import Cards from "./Cards";
import LoginBox from "./LoginBox";
import '../index.css';
import { motion } from "motion/react";

const LoginPage = () => {
  return (
    <div className="fixed inset-0 bg-black flex font-mate">
      <div className="relative hidden lg:flex lg:w-6/12 justify-center items-center">
        <div className="relative flex justify-center min-h-1/3 min-w-2/3 text-4xl font-extrabold tracking-wider">
          <Cards/>
          <motion.div initial={{ opacity: 0}}
          animate={{opacity: 1}} transition={{delay:1, duration: 2}} className="absolute bottom-1/5">
            Your Notes
          </motion.div>
        </div>
      </div>

      <LoginBox/>
    </div>
  );
};

export default LoginPage;
