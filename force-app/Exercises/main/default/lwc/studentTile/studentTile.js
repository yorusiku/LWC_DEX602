import { LightningElement, api } from 'lwc';

export default class StudentTile extends LightningElement {

    @api student = {
        Name : '[JY]',
        PhotoUrl : '/services/images/photo/003B0FakePictId',
    };
    @api selectedStudentId = '';
    @api setSelectedStudent(studentId) {
        this.selectedStudentId = studentId;
        }

    get tileSelected() {
        return (this.isSelectedStudentId === this.studentId) ? "tile selected" : "tile";
    }
    
    studentClick(){
        const evt = new CustomEvent('studentselected', {
            bubbles: true, composed: true,
            detail: { studentId: this.student.Id }
            });
            this.dispatchEvent(evt);
        }


}