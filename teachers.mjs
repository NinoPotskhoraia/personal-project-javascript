export default class Teachers{
  #counter = 0;
   tmap = new Map();

   add(teacher){
    const id = 'T' + this.#counter;
    this.tmap.set(id, teacher);
    return id;
   }

   read(id){
    if (id === undefined || typeof id !== "string") {
        throw new TypeError("error: invalid id");
      }
  
    if (!this.tmap.has(id)) {
        return null;
    }
  
      return {...this.tmap.get(id), id};
   }


   update(id, update){
    if (id === undefined || typeof id !== "string") {
        throw new TypeError("error: invalid id");
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
    return this.tmap;
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