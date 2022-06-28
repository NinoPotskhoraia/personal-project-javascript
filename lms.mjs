import Subject from './subject.mjs';
export default class LMS {
    map = new Map();

    add(subject){
        if(subject instanceof Subject){
           this.map.set(subject.id, subject);
        }else{
            throw new Error('not a valid subject');
        }
        return subject.id;
        
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
         }
    }

    readAll(){
            if(arguments.length){
             throw new Error('function does not recive arguments');}
             let arr = [];
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


const history = new Subject({
    title: 'History',
    lessons: 24
  });
  const math = new Subject({
    title: 'history',
    lessons:34
  })
const lms = new LMS();
console.log(lms.add(history));
console.log(lms.add(math));
// console.log(lms.remove(history));
console.log(lms.verify(history));
console.log(lms.readAll());