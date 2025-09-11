import { motion } from "motion/react";
import { GoogleLogin } from "@react-oauth/google";

function GoogleLoginButton() {
  return (
    <GoogleLogin
      onSuccess={(res) => {
        // res.credential is the Google ID Token
        console.log(res);
        
        fetch("http://localhost:5000/notes-app/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: res.credential }),
        })
          .then((r) => r.json())
          .then((data) => console.log("Login success:", data));
      }}
      onError={() => console.log("Login failed")}
      theme="filled_black"
      size="large"
      text="continue_with"
      shape="rectangular"
      width="100"
      logo_alignment="center"
    />
  );
}

const LoginBox = () => {
  return (
    <div className="w-full absolute inset-y-0 right-0 lg:w-6/12 flex justify-center items-center">
      <div className="bg-amber-300 rounded min-h-2/5 min-w-1/2 flex flex-col items-center justify-evenly">
        <div className="border-2 border-b-black rounded-md p-0.5 min-w-2/3">
          <input className="w-full" type="email" placeholder="Enter email: " />
        </div>
        <div className="border-2 border-b-black rounded-md p-0.5 min-w-2/3">
          <input
            className="w-full"
            type="password"
            placeholder="Enter password: "
          />
        </div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <button className="font-bold tracking-widest cursor-pointer">
            LOGIN
          </button>
        </motion.div>
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default LoginBox;
