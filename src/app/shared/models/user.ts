export class User {
    private _id: String;
    private username: String;
    private password: String;
    private userType: String;
    private userTypeId: String;

    constructor(
        user?: any
    ){
        if (user) {
            this._id = user._id;
            this.username = user.username ? user.username : "";
            this.password =user.password ? user.password : "";
            this.userType = user.userType ? user.userType : "";
            this.userTypeId = user.userTypeId ? user.userTypeId : "";
          } else {
            this.username = "";
            this.password = "";
            this.userType = "";
            this.userTypeId = "";
          }
    }

    getUsername(){
      return this.username;
    }

    
}
