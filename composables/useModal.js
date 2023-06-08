import { Modal } from 'flowbite';

// export default function(targetModal) {
export function useModal(targetModal) {
  const modalOptions = {
    backdropClasses: 'bg-grey-600 bg-opacity-40 fixed inset-0 z-40'
  }

  const modal = ref(null);

  onMounted(() => {
    modal.value = new Modal(targetModal.value, modalOptions);
  });

  const openModal = () => {
    modal.value.show();
  }

  const closeModal = () => {
    modal.value.hide();
  }

  return {
    openModal,
    closeModal,
  }
}