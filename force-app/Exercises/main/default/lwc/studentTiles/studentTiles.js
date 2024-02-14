import { LightningElement,api } from 'lwc';

export default class StudentTiles extends LightningElement {
    selectedStudentId = '';
    @api studentList = [];

    handleStudentSelected(event){
        this.selectedStudentId=event.detail.studentId;
        }



}