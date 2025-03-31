import { motion } from "framer-motion"
import { useState } from "react"

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(document.documentElement.classList.contains("dark"));

  const toggleSwitch = () => {
    isOn 
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
    setIsOn(!isOn)
  }

  return (
    <button
      className={"flex items-center w-15 h-8 rounded-full p-1 cursor-pointer transition-all duration-300 bg-[#c8c5c5] justify-start dark:bg-[#1E1E1E] dark:justify-end dark:border-none"}
      onClick={toggleSwitch}
    >
      <motion.div
        className="w-6 h-6 bg-[#FFFFFF] dark:bg-[#FF0000] rounded-full"
        layout
        transition={{
          type: "spring",
          duration: 0.2,
          bounce: 0.2,
        }}
      />
    </button>
  )
}