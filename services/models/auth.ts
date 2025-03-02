import HttpFactory from '../factory';

// export default AuthModule;

class AuthModule extends HttpFactory {
    async login(body: any){
        try {
            return  await this.call("auth/login", 
                    {
                        method: "post",
                        body
                    }
                )
        } catch (e) {
            // fetchErrorNotification("application")
            console.log(e)
            return e
        }
    }
}

export default AuthModule