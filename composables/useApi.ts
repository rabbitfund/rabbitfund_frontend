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

  const getProjects = (page: number, tag: string) => 
    useFetch(`/projects?page=${page}&tag=${tag}`, { method: 'GET', server: false });
  const getProject = (projectId: string) => 
    useFetch(`/projects/${projectId}`, { method: 'GET', server: false });
  const getProjectOptions = (projectId: string) => 
    useFetch(`/projects/${projectId}/options`, { method: 'GET', server: false });
  
  return {
    signin,
    signup,
    getUserDetail,
    putUserDetail,
    getProjects,
    getProject,
    getProjectOptions
  };
}
