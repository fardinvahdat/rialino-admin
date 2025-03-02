import HttpFactory from "../../factory";

class AddToListModule extends HttpFactory {
  async getListPerCreator(params: any, id: number) {
    try {
      return await this.call(
        `add-to-list/list-per-creator/${+id}`,
        {
          method: "get",
          params: params,
        },
        { setToken: true }
      );
    } catch (e) {
      console.log(e);
      throw new Error("error in get list per creator");
    }
  }
  async addListPerCreator(body: any) {
    try {
      return await this.call(
        `add-to-list/store`,
        {
          method: "post",
          body,
        },
        { setToken: true }
      );
    } catch (e) {
      console.log(e);
      throw new Error("error in add list per creator");
    }
  }
  async updateListPerCreator(body: any) {
    try {
      return await this.call(
        `add-to-list/update`,
        {
          method: "post",
          body,
        },
        { setToken: true }
      );
    } catch (e) {
      console.log(e);
      throw new Error("error in update list per creator");
    }
  }
  async deleteListPerCreator(id: number) {
    try {
      return await this.call(
        `add-to-list/delete/${id}`,
        {
          method: "delete",
        },
        { setToken: true }
      );
    } catch (e) {
      console.log(e);
      throw new Error("error in delete list per creator");
    }
  }
}

export default AddToListModule;
