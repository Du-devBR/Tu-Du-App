import { ChangeEvent, useState } from "react";
import { PasswordValidation } from "./interface";

export const usePasswordValidation = (): [PasswordValidation, (event: ChangeEvent<HTMLInputElement>) => void] => {
  const [passwordValidation, setPasswordValidation] = useState<PasswordValidation>({
    upperCase: false,
    lowerCase: false,
    number: false,
    lenght: false,
    specialChar: false,
  })

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPasswordValidation({
      upperCase: /[A-Z]/.test(password),
      lowerCase: /[a-z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[!@#$%^&*]/.test(password),
      lenght: password.length >= 8,
    });
  };
  
  return[passwordValidation,  handlePasswordChange]
}
