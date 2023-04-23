export default function useApi() {
  // 登入相關
  const signin = (data) => useFetch('/signin', { method: 'POST', body: JSON.stringify(data) });
  const signup = (data) => useFetch('/signup', { method: 'POST', body: JSON.stringify(data) });

  // 會員中心
  const getUserDetail = () =>
    useFetch('/me/user').catch(() => {
      navigateTo('/signin');
    });
  const postUserDetail = (data) =>
    useFetch('/me/user', { method: 'POST', body: JSON.stringify(data) });
  return {
    signin,
    signup,
    getUserDetail,
    postUserDetail
  };
}
