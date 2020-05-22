import { User } from './user';

export class UserWToken {
    private user: User;
    private token: String;

    constructor(
        user?: any
    ){
        if (user) {
            this.user = user.user ? new User(user.user) : new User();
            this.token = user.token ? user.token : "";
          } else {
            this.user = new User();
            this.token = "";
          }
    }

    public getUser(){
      return this.user;
    }

    public getToken(){
      return this.token;
    }
}
