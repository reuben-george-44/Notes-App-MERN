import { motion } from "motion/react";

const cardVariants = {
  initialLine: {
    opacity: 0,
    x: -30,
  },
  finalLine: {
    opacity: 1,
    scaleX: 5,
    originX: 0,
    transition: { delay: 1, duration: 2 },
  },
};

const CardLine = () => {
  return(
    <motion.div
        variants={cardVariants}
        initial="initialLine"
        animate="finalLine"
      >
        -
    </motion.div>
  )
}

const Read = () => {
  return (
    <motion.div
      drag
      dragSnapToOrigin
      initial={{ y: -100 }}
      animate={{ y: 0, rotate: -20 }}
      transition={{
        y: { duration: 1, type: "spring", stiffness: 200, damping: 5 },
        rotate: { delay: 1, duration: 2 },
      }}
      className="bg-amber-300 w-2/3 flex flex-col items-center rounded-4xl pt-[10%] bg-gradient-to-br from-amber-200 to-amber-400"
    >
      <div>READ</div>
      <CardLine/>
      <CardLine/>
    </motion.div>
  );
};

const Write = () => {
  return (
    <motion.div
      drag
      dragSnapToOrigin
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        y: { duration: 1, type: "spring", stiffness: 200, damping: 5 },
      }}
      className="relative bg-amber-300 w-2/3 flex   flex-col items-center rounded-4xl pt-[5%] bg-gradient-to-br from-amber-200 to-amber-400"
    >
      <div>WRITE</div>
      <CardLine/>
      <CardLine/>
    </motion.div>
  );
};

const Update = () => {
  return (
    <motion.div
      drag
      dragSnapToOrigin
      initial={{ y: -100 }}
      animate={{ y: 0, rotate: 20 }}
      transition={{
        y: { duration: 1, type: "spring", stiffness: 200, damping: 5 },
        rotate: { delay: 1, duration: 2 },
      }}
      className="bg-amber-300 w-2/3 flex flex-col items-center rounded-4xl pt-[10%] bg-gradient-to-br from-amber-200 to-amber-400"
    >
      <div>UPDATE</div>
      <CardLine/>
      <CardLine/>
    </motion.div>
  );
};

const Cards = () => {
  return (
    <>
      <Read />
      <Write />
      <Update />
    </>
  );
};

export default Cards;
