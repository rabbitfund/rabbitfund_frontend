import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
  state: () => ({
    user_id: '',
    project_id: '',
    project_price: 0,
    option_id: '',
    order_option_quantity: 0,
    order_extra: 0,
    order_total: 0,
    order_note: '',
    payment_method: '',
    invoice_type: '', // ["紙本發票", "電子載具", "三聯式發票"]
    invoice_carrier: ''
  }),
  actions: {
    setOrder(orderData: any) {
      this.user_id = orderData.user_id;
      this.project_id = orderData.project_id;
      this.project_price = orderData.project_price;
      this.option_id = orderData.option_id;
      this.order_option_quantity = orderData.order_option_quantity;
      this.order_extra = orderData.order_extra;
      this.order_total = orderData.order_total;
      this.order_note = orderData.order_note;
      this.payment_method = orderData.payment_method;
      this.invoice_type = orderData.invoice_type;
      this.invoice_carrier = orderData.invoice_carrier;
    }
  }
});