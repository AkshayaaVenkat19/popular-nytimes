import React from 'react';
import Button from '../../button';

const SignIn = () => {
  return (
    <div>
      <Button label="Sign In" classes="hidden lg:block" />
      <div
        className="font-bold text-gray-700 rounded-full bg-[#567B95] 
          items-center justify-center w-7 h-7  flex lg:hidden"
      >
        A
      </div>
    </div>
  );
};

export default SignIn;
