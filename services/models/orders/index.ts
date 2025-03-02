import HttpFactory from "../../factory";

class Orders extends HttpFactory {
  async getOrdersList(params: any) {
    try {
      return await this.call(
        `orders`,
        {
          method: "get",
        },
        { setToken: true }
      );
    } catch (e) {
      console.log(e);
      throw e
    }
  }
  async getOrderById(id: any) {
    try {
      return await this.call(
        `orders/${id}`,
        {
          method: "get",
        },
        { setToken: true }
      );
    } catch (e) {
      console.log(e);
      throw e
    }
  }
}

export default Orders;
