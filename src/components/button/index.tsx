import React from 'react';

interface ButtonProps {
  label: string;
  classes ?: string
}

const Button: React.FC<ButtonProps> = ({ label, classes }) => {
  return (
    <button className={`text-xs bg-[#567B95] text-white px-2 py-1 rounded uppercase font-semibold ${classes} `}>
      {label}
    </button>
  );
};

export default Button;
