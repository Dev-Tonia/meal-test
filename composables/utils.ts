import { toast } from "vue3-toastify";

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return formattedDate // Output: 04/05/2024
}
export const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? 'PM' : 'AM';

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
}


export const customToast = (message: string, success: boolean) => {
  if (success) {
    return toast.success(message, {
      autoClose: 1500,
    });
  } else {
    return toast.error(message, {
      autoClose: 1500,
    });
  }
}

export const generatePassword = (length = 12, useUppercase = true, useDigits = true, useSpecialChars = false) => {

  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = useUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
  const digits = useDigits ? '0123456789' : '';
  const specialChars = useSpecialChars ? '!@#$%^&*()_+-=[]{}|;:,.<>?' : '';
  const allChars = lowercase + uppercase + digits + specialChars;

  let password = [
    lowercase[Math.floor(Math.random() * lowercase.length)],
    useUppercase ? uppercase[Math.floor(Math.random() * uppercase.length)] : '',
    useDigits ? digits[Math.floor(Math.random() * digits.length)] : '',
    useSpecialChars ? specialChars[Math.floor(Math.random() * specialChars.length)] : ''
  ];

  for (let i = password.length; i < length; i++) {
    password.push(allChars[Math.floor(Math.random() * allChars.length)]);
  }

  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  return password.join('');
}
