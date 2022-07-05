import {Subject} from "../subject/subject.js";

export type SubjectContent<T> = T & {id:string}

 export class LMS {
   map = new Map();

    add(subject:Subject){
        this.map.set(subject.id, subject);
        
        return subject.id;
        
    }


    remove(subject:Subject){
       
    this.map.delete(subject.id);
        
    }

    verify(subject:Subject){
        if(this.map.has(subject.id)){
            return true;
         }
    }

    readAll(){
           let arr:SubjectContent<Subject>[] = [];
             this.map.forEach(subject => {
                for (let [key, value] of this.map.entries()) {
                    if (value === subject) {
                      subject = {id: subject.id, ...subject};
                    }
                }
                arr.push(subject);
            });
    

            return arr;
    }
}
