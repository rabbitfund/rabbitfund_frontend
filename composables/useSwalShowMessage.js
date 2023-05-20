export default function () {
    const nuxtApp = useNuxtApp()
    const schema = {
        // 'auth/email-already-in-use': '此email已被註冊',
    }
    const showErrorMessage = (errorMessage) => {
        const condition = Object.keys(schema).find((item) => String(errorMessage).includes(item))
        nuxtApp.$swal.fire({
            icon: 'error',
            title: condition ? schema[condition] : '發生錯誤',
        })
    }

    return {
        showErrorMessage,
    }
}
