export const useApi = () => {
  const config = useRuntimeConfig();
  const { API_BASE } = config.public;

  // 登入相關
  const signin = (data) =>
    useFetch(`${API_BASE}/signin`, { method: 'POST', body: JSON.stringify(data), server: false });
  const signup = (data) =>
    useFetch(`${API_BASE}/signup`, { method: 'POST', body: JSON.stringify(data) });

  // 會員中心
  const getUserDetail = () =>
    useFetch(`${API_BASE}/me/user`, { server: false }).catch(() => {
      navigateTo('/users/signin');
    });
  const putUserDetail = (data) =>
    useFetch(`${API_BASE}/me/user`, { method: 'PUT', body: JSON.stringify(data) });
  const getMyOrder = (page) => useFetch(`${API_BASE}/me/orders?page=${page}`, { method: 'GET' });
  const getOwnerProjectDetail = (projectId) =>
    useFetch(`${API_BASE}/owner/projects/${projectId}`, {
      method: 'GET',
      transform: (_projects) => _projects.data
    });
  const getOwnerProjectSupporters = (projectId) =>
    useFetch(`${API_BASE}/owner/projects/${projectId}/supporters`, {
      method: 'GET',
      transform: (_supporters) => _supporters.data
    });
  const getOwnerProjectStatus = (projectId) =>
    useFetch(`${API_BASE}/owner/projects/${projectId}/status`, {
      method: 'GET',
      transform: (_status) => _status.data
    });
  const getProjectsSupporters = (projectId) =>
    useFetch(`${API_BASE}/owner/projects/${projectId}/supporters`, {
      method: 'GET',
      globalLoading: false,
      lazy: true,
      transform: (_supporters) => _supporters.data
    });

  const getProjects = (page, tag) =>
    useFetch(`${API_BASE}/projects?page=${page}&tag=${tag}`, {
      method: 'GET',
      globalLoading: false
    });
  const getProject = (projectId) =>
    useFetch(`${API_BASE}/projects/${projectId}`, { method: 'GET' });
  const getProjectOption = (projectId, optionId) =>
    useFetch(`${API_BASE}/projects/${projectId}/options/${optionId}`, { method: 'GET' });
  const getProjectOptions = (projectId) =>
    useFetch(`${API_BASE}/projects/${projectId}/options`, { method: 'GET' });
  const getOwnerProject = () => useFetch(`${API_BASE}/owner/projects`, { method: 'GET' });

  // 訂單
  const postOrder = (data) =>
    useFetch(`${API_BASE}/orders`, { method: 'POST', body: JSON.stringify(data) });
  const getOrder = (orderId) => useFetch(`${API_BASE}/order/${orderId}`, { method: 'GET' });

  const uploadImage = (formdata) =>
    useFetch(`${API_BASE}/upload/image`, { method: 'POST', body: formdata });

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
    getOrder,
    uploadImage
  };
};
