import HttpFactory from '../factory';

// export default AuthModule;

class ReportModule extends HttpFactory {

    async functions(params: object) {
        try {
            return  await this.call("/messages/userStore/transactions", {
                method: "GET",
                params: params
            }, {setToken: true})
        } catch (e) {
            // fetchErrorNotification("application")
            console.log(e)
            throw new Error("error in get user")
        }
    }
}

export default ReportModule