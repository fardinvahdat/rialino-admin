import HttpFactory from "../../factory";

class Users extends HttpFactory {
  async getUsers(params: any) {
    try {
      return await this.call(
        `users`,
        {
          method: "get",
          params: params,
        },
        { setToken: true }
      );
    } catch (e) {
      console.log(e);
      throw e
    }
  }
}

export default Users;
