import Subject from './subject.mjs';

export default class LMS {
    map = new Map();

    add(subject){
        if(subject instanceof Subject){
           this.map.set(subject.id, subject.subject);
        }else{
            throw new Error('not a valid subject');
        }
        return this.map.keys();
    }


    remove(subject){
        if(subject instanceof Subject){
            this.map.delete(subject.id);
         }else{
             throw new Error('not a valid subject');
         }
    }

    verify(subject){
        if(subject instanceof Subject && this.map.has(subject.id)){
            return true;
         }else{
             throw new Error('not a valid subject');
         }
    }

    readAll(){
            if(arguments.length){
             throw new Error('function does not recive arguments');}
             let arr = [];
             this.map.forEach(subject => {
                for (let [key, value] of this.map.entries()) {
                    if (value === subject) {
                      subject.id = key;
                    }
                }
                arr.push(subject);
            });
    

            return arr;
    }
}


const history = new Subject({
    title: 'History',
    lessons: 24
  });
const lms = new LMS();
console.log(lms.add(history));
// console.log(lms.remove(history));
console.log(lms.verify(history));
console.log(lms.readAll());