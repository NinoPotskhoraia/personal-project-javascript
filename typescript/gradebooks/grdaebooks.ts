import {Groups} from "../groups/groups.js";
import {Teachers} from "../teachers/teachers.js";
import {LMS} from "../lms/lms.js";

export interface recordObj{
  pupilId: string,
  teacherId: string,
  subjectId: string,
  lesson: 1,
  mark: 9

}

export type Read={
    name:string,
    records:recordObj
}

export class Gradebooks{
    gbmap = new Map();
    private _counter = 0;
    private _groups:Groups;
    private _teachers:Teachers;
    private _lms:LMS;
   constructor(groups:Groups, teachers:Teachers, lms:LMS){
       this._groups = groups;
       this._teachers = teachers;
       this._lms = lms;
   }

   add(groupId:string):string{
      const id = 'GB' + this._counter++;
      const group:Groups = this._groups.gmap.get(groupId);
      let GB = {
       id: id,
       groupId: `${groupId}`,
       room: `${group.room}`,
       pupils: `${group.pupils}`,
       records: []
      };

      this.gbmap.set(id, GB);
      return id;
   }

   addRecord(id:string, record:recordObj):recordObj{
 
   if (!this.gbmap.has(id)) {
     throw new Error("invalid id")
   }
     const gb = this.gbmap.get(id);
     gb.records.push(record);
     return record;
   }

   read(id:string, pupilId:string){
 
   if (!this.gbmap.has(id)) {
     throw new Error("invalid id");
   }

   const gradebook = this.gbmap.get(id);
   const pupils = gradebook.pupils;
   if(pupils.filter(pupil => pupil.id === pupilId).length === 0){
    throw new Error('not a valid pupil id');
  };
  
   pupils.forEach(pupil => {
       let obj:Read={
          
       }
       obj.name = `${pupil.name.first} ${pupil.name.last}`,
       obj.records = gradebook.records;

   });

   return obj;
   }

   readAll(gbId:string){
 
   if (!this.gbmap.has(gbId)) {
     throw new Error("invalid id");
   }

   const gradeBook = this.gbmap.get(gbId);
   return [...gradeBook.pupils];

   }

   clear(){
     this.gbmap.clear();
   }


}