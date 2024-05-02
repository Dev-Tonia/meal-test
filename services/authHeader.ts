export default function authHeader() {
  const token = useCookie('userToken')?.value;
  
  if (token) {
    return { Authorization: 'Bearer ' + token };
  } else {
    return {};
  }
}