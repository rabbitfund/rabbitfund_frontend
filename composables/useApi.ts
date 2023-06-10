import { lazy } from 'yup';

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
  const getMyOrder = (page: number) => useFetch(`/me/orders?page=${page}`, { method: 'GET' });
  const getOwnerProjectDetail = (projectId: string) =>
    useFetch(`/owner/projects/${projectId}`, {
      method: 'GET',
      server: false,
      transform: (_projects) => _projects.data
    });
  const getOwnerProjectSupporters = (projectId: string) =>
    useFetch(`/owner/projects/${projectId}/supporters`, {
      method: 'GET',
      server: false,
      transform: (_supporters) => _supporters.data
    });
  const getOwnerProjectStatus = (projectId: string) =>
    useFetch(`/owner/projects/${projectId}/status`, {
      method: 'GET',
      server: false,
      transform: (_status) => _status.data
    });
  const getProjectsSupporters = (projectId: string) =>
    useFetch(`/owner/projects/${projectId}/supporters`, {
      method: 'GET',
      server: false,
      globalLoading: false,
      lazy: true,
      transform: (_supporters) => _supporters.data
    });

  const getProjects = (page: number, tag: string) =>
    useFetch(`/projects?page=${page}&tag=${tag}`, {
      method: 'GET',
      server: false,
      globalLoading: false
    });
  const getProject = (projectId: string) =>
    useFetch(`/projects/${projectId}`, { method: 'GET', server: false });
  const getProjectOption = (projectId: string, optionId: string) =>
    useFetch(`/projects/${projectId}/options/${optionId}`, { method: 'GET', server: false });
  const getProjectOptions = (projectId: string) =>
    useFetch(`/projects/${projectId}/options`, { method: 'GET', server: false });
  const getOwnerProject = () => useFetch(`/owner/projects`, { method: 'GET' });

  // 訂單
  const postOrder = (data) => useFetch('/orders', { method: 'POST', body: JSON.stringify(data) });
  const getOrder = (orderId: string) =>
    useFetch(`/order/${orderId}`, { method: 'GET', server: false });

  return {
    signin,
    signup,
    getUserDetail,
    putUserDetail,
    getProjects,
    getProject,
    getProjectOption,
    getProjectOptions,
    getMyOrder,
    getOwnerProject,
    getOwnerProjectDetail,
    getOwnerProjectSupporters,
    getOwnerProjectStatus,
    getProjectsSupporters,
    postOrder,
    getOrder
  };
}
