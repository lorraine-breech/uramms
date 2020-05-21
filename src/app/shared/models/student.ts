export class Student {
    private _id: String;
    private firstName: String;
    private middleName: String;
    private lastName: String;
    private studentNumber: String;
    private year: number;

    constructor(
        user?: any
    ){
        if (user) {
            this._id = user._id;
            this.firstName = user.firstName ? user.firstName : "";
            this.middleName = user.middleName ? user.middleName : "";
            this.lastName = user.lastName ? user.lastName : "" ;
            this.studentNumber = user.studentNumber ? user.studentNumber : "";
            this.year = user.year ? user.year : null;
          } else {
            this.firstName = "";
            this.middleName = "";
            this.lastName = "";
            this.studentNumber = "";
            this.year = null;
          }
    }

    public getFirstName(){
        return this.getFirstName;
    }

    
}
