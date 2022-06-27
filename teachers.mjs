export default class Teachers{
  #counter = 0;
   tmap = new Map();

  #objValidation(obj){
    if(typeof obj === undefined) {
      throw new TypeError("parameter is required");
    }
  if (typeof obj !== "object" || Array.isArray(obj)) {
      throw new TypeError("parameter type is not object");
    }
  if (Object.keys(obj).length < 6) {
      throw new Error("object is invalid");
    }
    if (
      typeof obj.name === 'undefined' ||
      typeof obj.dateOfBirth === 'undefined' ||
      typeof obj.emails === 'undefined' ||
      typeof obj.phones === 'undefined' ||
      typeof obj.sex === 'undefined' ||
      typeof obj.subjects === 'undefined'
    ) {
      throw new Error('object parameters are invalid');
    }

    if(obj.description && typeof obj.description !== 'string'){
      throw new TypeError('description must be a string');
    }

    if (typeof obj.name !== "object" || Array.isArray(obj.name))  {
      throw new TypeError(" object name must have a type object");
    }else if(typeof ({name:{first}}=obj) === 'undefined' ||
    typeof ({name:{first}}=obj) !== 'string'){
      throw new Error('object name parameter is invalid');
    }else if(typeof ({name:{last}}=obj) === 'undefined' ||
    typeof ({name:{last}}=obj) !== 'string'){
      throw new Error('object name parameter is invalid');
    }

    if(typeof obj.dateOfBirth !== 'string'){
      throw new TypeError('dateOfBirth parameter must be a date string');
    }else if(isNaN(Date.parse(obj.dateOfBirth))){
      throw new Error('dateOfBirth parameter must be a date string');
    }
    
    if (!Array.isArray(obj.emails))  {
      throw new TypeError("object emails parameter must be an array");
    }

    if(obj.emails.filter(value => {
      if(typeof value !== 'object' || Array.isArray(value)){
        return false;
      }else{
        return true;
      }}).length !== obj.emails.length){
        throw new Error('emails array must contain object');
      }

    if(obj.emails.forEach(email =>{
      if(email.primary === 'undefined' || typeof(email.primary !== 'boolean')){
       throw new Error('primary property should be true or false');
      }else if(email.email === 'undefined' || typeof(email.email !== 'string')){
        throw new Error('email must be a string');
      }
    }));

    if(obj.emails.filter(email => email.hasOwnProperty('primary')).length > 1){
      throw new Error('there can only be one primary email adress');
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
        if(phone.primary === 'undefined' || typeof(phone.primary !== 'boolean')){
         throw new Error('primary property should be true or false');
        }else if(phone.phone === 'undefined' || typeof(phone.phone !== 'string')){
          throw new Error('phone number must be a string');
        }
      }));
  
      if(obj.phones.filter(phone => phone.hasOwnProperty('primary')).length > 1){
        throw new Error('there can only be one primary phone number');
      }


    if( typeof obj.sex !== 'string'){
      throw new TypeError('object sex parameter must be a string');
    }

    if (!Array.isArray(obj.subjects))  {
      throw new TypeError("subjects parameter must be an array");
    }

    if(obj.subjects.filter(value => {
      if(typeof value !== 'object' || Array.isArray(value)){
        return false;
      }else{
        return true;
      }}).length !== obj.subjects.length){
        throw new Error('subjects array must contain object');
      }

    if(obj.subjects.forEach(subject =>{
      if(subject.subject === 'undefined' || typeof(subject.subject !== 'string')){
       throw new typeError('subject property should be a string');
      }
    }));
  }

   add(teacher){
    this.#objValidation(teacher);
    const id = 'T' + this.#counter;
    this.tmap.set(id, teacher);
    return id;
   }

   read(id){
    if (id === undefined || typeof id !== "string") {
        throw new TypeError("invalid id");
      }
  
    if (!this.tmap.has(id)) {
        return null;
    }
  
      return {...this.tmap.get(id), id};
   }


   update(id, update){

    this.#objValidation(update);
  if (id === undefined || update === undefined) {
      throw new Error("two parameters are required");
 }
  if (typeof id !== "string") {
     throw new TypeError("first parameter is not a string");
 }

if (!this.tmap.has(id)) {
        throw new Error('invalid id');
    }

    const teacher = this.read(id);
    delete teacher.id;
    this.tmap.set(id, {
        ...teacher,
        ...update
    });
   }

   remove(id) {
    if (id === undefined || typeof id !== "string" || !this.tmap.has(id)) {
      throw new TypeError("invalid id");
    }

    this.tmap.delete(id);
  }
   }









const teachers = new Teachers();
const clara = {
    "name": {
      "first": "string",
      "last": "string"
    },
    "dateOfBirth": "string", // format date
    "emails": [
      {
        "email": "string",
        "primary": "boolean"
      }
    ],
    "phones": [
      {
        "phone": "string",
        "primary": "boolean"
      }
    ],
    "sex": "string", // male or female
    "subjects": [
      {
        "subject": "string" // just name property of subject.
      }
    ],
    "description": "string",
  };

console.log(teachers.add(clara));

const tid = teachers.add(clara);

console.log(teachers.read(tid));
console.log(teachers.remove(tid));