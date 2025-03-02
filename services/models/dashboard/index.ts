import HttpFactory from "../../factory";

class Dashboard extends HttpFactory {
  async Dashboard(params: any) {
    try {
      return await this.call(
        `dashboard`,
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

export default Dashboard;
