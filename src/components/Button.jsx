const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
      ? `${backgroundColor} ${textColor} ${borderColor}`
      : 'bg-coral-red text-white border-coral-red'}
      rounded-full ${fullWidth && 'w-full'}'}`}
      >
        {label}
      {iconURL && <img 
        src={iconURL}
        width={20}
        height={20}
        alt="arrow right icon"
        className="ml-2 rounded-full"
      />}
    </button>
  )
}

export default Button