import HttpFactory from "../../factory";

class Purchases extends HttpFactory {
  async getBulkList(params: any) {
    try {
      return await this.call(
        `purchase/bulk${params?('$'+params):''}`,
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
  async getLuxuryList(params: any) {
    try {
      return await this.call(
        `purchase/luxury${params?('$'+params):''}`,
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
  async getConversationById(id: any) {
    try {
      return await this.call(
        `purchase/${id}/messages`,
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
  async storeConversation(id: any,body:any) {
    try {
      return await this.call(
        `purchase/${id}/`,
        {
          method: "post",
          body
        },
        { setToken: true }
      );
    } catch (e) {
      console.log(e);
      throw e
    }
  }
}

export default Purchases;
