export default class Pupils{
    #counter = 0;
    pmap = new Map();
    #objValidation(obj){
        if(typeof obj === undefined) {
          throw new TypeError("parameter is required");
        }
      if (typeof obj !== "object" || Array.isArray(obj)) {
          throw new TypeError("parameter type is not object");
        }
      if (Object.keys(obj).length < 4) {
          throw new Error("object is invalid");
        }
        if (
          typeof obj.name === 'undefined' ||
          typeof obj.dateOfBirth === 'undefined' ||
          typeof obj.phones === 'undefined' ||
          typeof obj.sex === 'undefined'
        ) {
          throw new Error('object parameters are invalid');
        }
    
        if(obj.description && typeof obj.description !== 'string'){
          throw new TypeError('description must be a string');
        }
    
        if (typeof obj.name !== "object" || Array.isArray(obj.name))  {
          throw new TypeError(" object name must have a type object");
        }else if(typeof obj.name.first === 'undefined' ||
        typeof obj.name.first !== 'string'){
          throw new Error('object name parameter is invalid');
        }else if(typeof obj.name.last === 'undefined' ||
        typeof obj.name.last !== 'string'){
          throw new Error('object name parameter is invalid');
        }
    
        if(typeof obj.dateOfBirth !== 'string'){
          throw new TypeError('dateOfBirth parameter must be a date string');
        }else if(isNaN(Date.parse(obj.dateOfBirth))){
          throw new Error('dateOfBirth parameter must be a date string');
        }
    
        if (!Array.isArray(obj.phones))  {
          throw new TypeError("object phones parameter must be an array");
        }else if(obj.phones.filter(value => {
          if(typeof value !== 'object' || Array.isArray(value)){
            return false;
          }else{
            return true;
          }}).length !== obj.phones.length){
            throw new Error('phones array must contain object');
          };
    
          if(obj.phones.forEach(phone =>{
            if(phone.primary === 'undefined' || typeof phone.primary !== 'boolean'){
             throw new Error('primary property should be true or false');
            }else if(phone.phone === 'undefined' || typeof phone.phone !== 'string'){
              throw new Error('phone number must be a string');
            }
          }));
      
          if(obj.phones.filter(phone => phone.primary === true).length > 1){
            throw new Error('there can only be one primary phone number');
          }
    
    
        if( typeof obj.sex !== 'string'){
          throw new TypeError('object sex parameter must be a string');
        }
      }
    
 
    add(pupil){
    this.#objValidation(pupil);
     const id = 'P' + this.#counter++;
     this.pmap.set(id, pupil);
     return {id:id, ...pupil};
    }
 
    read(id){
     if (id === undefined || typeof id !== "string") {
         throw new TypeError("invalid id");
       }

       const valid = this.pmap.get(id);
        return valid ? {id, ...valid} : null;
    }
 
 
    update(id, update){
    
    this.#objValidation(update);
    if (id === undefined || update === undefined) {
         throw new Error("two parameters are required");
    }
     if (typeof id !== "string") {
        throw new TypeError("first parameter is not a string");
    }
   
     if (!this.pmap.has(id)) {
         throw new Error('invalid id');
     }
 
     const pupil = this.read(id);
     delete pupil.id;
     this.pmap.set(id, {
         ...pupil,
         ...update
     });

     return this.pmap.get(id);
    }
 
    remove(id) {
     if (id === undefined || typeof id !== "string" || !this.pmap.has(id)) {
       throw new TypeError("invalid id");
     }
 
     this.pmap.delete(id);
   }
}

const james = {
    name: {
      "first": "string",
      "last": "string"
    },
    dateOfBirth: "2011-10-10T14:48:00", // format date
    phones: [
      {
        phone: "string",
        primary: true
      }
    ],
    sex: "string", // male OR female
    description: "string"
  }


const karen = {
    name:{
        first:'karen',
        last:'duham'
    },
    dateOfBirth:"2011-10-10T14:48:00",
    phones:[
        {
            phone:"2-030202",
            primary:true
        }
    ],
    sex:'female'
}
const pupils = new Pupils();
const pupil = pupils.add(james);
const pupil2 = pupils.add(karen);
// console.log(pupil2);
// console.log(pupil);
// console.log(pupil.id);
// console.log(pupil2.id);
// console.log(pupils.read(pupil.id));
// console.log(pupils.read(pupil2.id));
// // console.log(pupils.remove(pupil.id));
// console.log(pupils.update(pupil.id, karen));