export default function () {
  const nuxtApp = useNuxtApp();
  const schema = {
    // 'auth/email-already-in-use': '此email已被註冊',
    'No token provided.': {
      message: '請先登入',
      callback() {
        nuxtApp.$router.push('/users/signin');
      }
    },
    找不到贊助紀錄: {
      message: '找不到贊助紀錄'
    },
    Unauthorized: {
      message: '請先登入',
      callback() {
        nuxtApp.$router.push('/users/signin');
      }
    }
  };
  const showErrorMessage = (errorMessage) => {
    const condition = Object.keys(schema).find((item) => String(errorMessage).includes(item));
    nuxtApp.$swal
      .fire({
        icon: 'error',
        title: condition ? schema[condition]?.message : '發生錯誤'
      })
      .then((result) => {
        if (result.isConfirmed) {
          schema[condition]?.callback && schema[condition].callback();
        }
      });
  };

  const showSuccessMessage = (successTitle, successText) => {
    nuxtApp.$swal.fire({
      icon: 'success',
      title: successTitle,
      text: successText
    });
  };

  return {
    showErrorMessage,
    showSuccessMessage
  };
}
