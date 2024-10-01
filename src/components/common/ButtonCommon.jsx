import React from 'react'

const ButtonCommon = ({ button, className }) => {

  return (
    <button className={`p-[13px_16px] hover:bg-gradient-to-r hover:hofrom-deep-blue bg-deep-blue text-white rounded-[8px] font-inter font-semibold text-base leading-[19.36px] shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-purple-500 hover:scale-110 transition-all duration-300 ease-out ${className}`}>
      {button}
    </button>


  )
}

export default ButtonCommon