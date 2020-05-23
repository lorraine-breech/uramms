export class Professor{
    private _id: String;
    private firstName: String;
    private middleName: String;
    private lastName: String;
    private employeeNumber: String;
    private position: String;
    private title: String;
    private departmentId: String;
    private collegeId: String;
    private panelMemberAccountId: String;
    private otherUserAccountType: String; // 'department chair' 'dean' 'college secretary'
    
    
    constructor(
        professor?: any
    ){
        if(professor){
            this._id = professor._id;
            this.firstName = professor.firstName ? professor.firstName : "";
            this.middleName = professor.middleName ? professor.middleName : "";
            this.lastName = professor.lastName ? professor.lastName : "";
            this.employeeNumber = professor.employeeNumber ? professor.employeeNumber : "";
            this.position = professor.position ? professor.position : "";
            this.title = professor.title ? professor.title : "";
            this.departmentId = professor.departmentId ? professor.departmentId : "";
            this.collegeId = professor.collegeId ? professor.collegeId : "";
            this.panelMemberAccountId = professor.panelMemberAccountId ? professor.panelMemberAccountId : "";
            this.otherUserAccountType = professor.otherUserAccountType ? professor.otherUserAccountType : "";
        } else{
            this.firstName = "";
            this.middleName = "";
            this.lastName = "";
            this.employeeNumber = "";
            this.position = "";
            this.title = "";
            this.departmentId = "";
            this.collegeId = "";
            this.panelMemberAccountId = "";
            this.otherUserAccountType = "";
        }
    }

    
}