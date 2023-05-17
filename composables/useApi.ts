export default function useApi() {
  // 登入相關
  const signin = (data) => useFetch('/signin', { method: 'POST', body: JSON.stringify(data) });
  const signup = (data) => useFetch('/signup', { method: 'POST', body: JSON.stringify(data) });

  // 會員中心
  const getUserDetail = () =>
    useFetch('/me/user').catch(() => {
      navigateTo('/users/signin');
    });
  const putUserDetail = (data) =>
    useFetch('/me/user', { method: 'PUT', body: JSON.stringify(data) });
  const getProject = (projectId: string) =>
    useFetch(`/projects/${projectId}`, {method: 'GET'});
  return {
    signin,
    signup,
    getUserDetail,
    putUserDetail,
    getProject
  };
}
