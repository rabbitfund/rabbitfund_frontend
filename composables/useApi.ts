export default function useApi() {
  // 登入相關
  const signin = (data) =>
    useFetch('/signin', { method: 'POST', body: JSON.stringify(data) })
      .then((res) => {
        alert('登入成功');
        return res;
      })
      .catch((err) => {
        alert('登入失敗');
        throw err;
      });
  const signup = (data) =>
    useFetch('/signup', { method: 'POST', body: JSON.stringify(data) })
      .then((res) => {
        alert('註冊成功');
        return res;
      })
      .catch((err) => {
        alert('註冊失敗');
        throw err;
      });

  // 會員中心
  const getUserDetail = () =>
    useFetch('/me/user').catch(() => {
      navigateTo('/signin');
      alert('token 過期，請重新登入');
    });
  const putUserDetail = (data) =>
    useFetch('/me/user', { method: 'PUT', body: JSON.stringify(data) })
      .then((res) => {
        alert('修改成功');
        return res;
      })
      .catch((err) => {
        alert('修改失敗');
        throw err;
      });
  return {
    signin,
    signup,
    getUserDetail,
    putUserDetail
  };
}
