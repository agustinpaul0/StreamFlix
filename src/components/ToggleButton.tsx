import { motion } from "framer-motion"
import { useState } from "react"

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => setIsOn(!isOn)

  return (
    <button
      className={`w-15 h-8 rounded-full flex items-center p-1 cursor-pointer transition-all duration-300 ${
        isOn ? "bg-[#1E1E1E] justify-end" : "bg-[#FFFFFF] justify-start"
      }`}
      onClick={toggleSwitch}
    >
      <motion.div
        className="w-6 h-6 bg-[#FF0000] rounded-full"
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