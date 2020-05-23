export class Student {
    private _id: String;
    private firstName: String;
    private middleName: String;
    private lastName: String;
    private studentNumber: String;
    private year: number;

    constructor(
        student?: any
    ){
        if (student) {
            this._id = student._id;
            this.firstName = student.firstName ? student.firstName : "";
            this.middleName = student.middleName ? student.middleName : "";
            this.lastName = student.lastName ? student.lastName : "" ;
            this.studentNumber = student.studentNumber ? student.studentNumber : "";
            this.year = student.year ? student.year : null;
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
