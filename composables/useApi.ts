export default function useApi() {
  const signin = (data) => useFetch('/signin', { method: 'POST', body: JSON.stringify(data) });
  const signup = (data) => useFetch('/signup', { method: 'POST', body: JSON.stringify(data) });
  return {
    signin,
    signup
  };
}
