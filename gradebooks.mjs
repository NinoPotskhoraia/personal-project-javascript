import Pupils from "./pupils.mjs";
import Teachers from "./teachers.mjs";
import Groups from "./groups.mjs";
import Subject from "./subject.mjs";

export default class Gradebooks{
     gbmap = new Map();
     #counter = 0;
    constructor(groups, teachers, lms){
        this.groups = groups;
        this.teacher = teachers;
        this.lms = lms;
    }

    add(groupId){
       const id = 'GB' + this.#counter++;
       const group = this.groups.gmap.get(groupId);
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

    addRecord(id, record){
      if (id === undefined || typeof id !== "string") {
        throw new TypeError("invalid id");
      }
  
    if (!this.gbmap.has(id)) {
      throw new Error("invalid id")
    }
      if(typeof record === undefined) {
        throw new Error("parameter is required");
      }
    if (typeof record !== "object" || Array.isArray(record)) {
        throw new TypeError("parameter type is not object");
      }
    if (Object.keys(record).length !== 5) {
        throw new Error("object is invalid");
      }
      if (
        typeof record.pupilId === 'undefined' ||
        typeof record.teacherId === 'undefined' ||
        typeof record.subjectId === 'undefined' ||
        typeof lesson === 'undefined' ||
        typeof mark === 'undefined'
      ) {
        throw new Error('object parameters are invalid');
      }

      if(typeof record.pupilId !== 'string' ||
         typeof record.teacherId !== 'string' ||
         typeof record.subjectId !== 'string' ||
         typeof record.lesson !== 'number' ||
         typeof record.mark !== 'number'){
          throw new Error('invalid parameters');
         }
      const gb = this.gbmap.get(id);
      gb.records.push(record);
      return record;
    }

    // read(id, pupilId){
    //   if (id === undefined || typeof id !== "string") {
    //     throw new TypeError("invalid id");
    //   }
  
    // if (!this.gbmap.has(id)) {
    //   throw new Error("invalid id");
    // }

    // const pupil = this.
    // }

    readAll(gbId){
      if (gbId === undefined || typeof gbId !== "string") {
        throw new TypeError("invalid id");
      }
  
    if (!this.gbmap.has(gbId)) {
      throw new Error("invalid id");
    }
      const pupilsArr = [];
      this.gbmap.forEach(gb => {
        if(gb.id === gbId){
          pupilsArr.push(gb.pupils);
        }
      });

      return pupilsArr;
    }

    clear(){
      this.gbmap.clear();
    }


}