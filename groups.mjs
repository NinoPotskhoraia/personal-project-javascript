import Pupils from "./pupils.mjs";

export default class Groups{
    #counter = 0;
    gmap = new Map();

    add(room){
    if (room === undefined || typeof room !== "number") {
         throw new TypeError("invalid parameter");
    }

    const id = 'G' + this.#counter++;
    this.gmap.set(id, {room});
    return id;
    }

    addPupil(id, pupil){
        if (id === undefined || typeof id !== "string") {
            throw new TypeError("invalid id");
          }
      
        if (!this.gmap.has(id)) {
            throw new Error('not a valid group');
        }

        if(typeof pupil === 'undefined' || !pupil instanceof Pupils){
            throw new Error('not a valid pupil');
        }
         const group = this.gmap.get(id);
         group.pupils = [];
         group.pupils.push(pupil);
         return pupil;
    }


    removePupil(groupId, pupilId){
        if (groupId === undefined || pupilId === undefined) {
            throw new Error("two parameters are required");
       }
        if (typeof groupId !== "string" || typeof pupilId !== 'string') {
           throw new TypeError("both parameter must a string");
       }
      
      if (!this.gmap.has(groupId)) {
              throw new Error('invalid id');
          }

       let group = this.gmap.get(groupId);
       if(group.pupils === undefined){
        throw new Error('there are no pupils in this group');
       }
       if(group.pupils.filter(pupil => pupil.id === pupilId).length === 0){
        throw new Error('there is no such pupil in this group');
       }
       
     let slicedArr = group.pupils.map((pupil, index, array) => {
        if(pupil.id === pupilId){
         array.slice(index, index+1);
        }
       });

       group.pupils = slicedArr;

    }

    update(id, roomObj){
    if (id === undefined || roomObj === undefined) {
        throw new Error("two parameters are required");
    }
    if (typeof id !== "string") {
        throw new TypeError("first parameter is not a string");
    }
      
    if (!this.gmap.has(id)) {
        throw new Error('invalid id');
    }

    if (typeof roomObj !== "object" || Array.isArray(roomObj)) {
        throw new TypeError(" second parameter type must be an object");
      }
    if (Object.keys(roomObj).length !== 1) {
        throw new Error("object is invalid");
      }
    if(roomObj.room === 'undefined' || typeof roomObj.room !== 'number'){
        throw new TypeError('property must be of type number');
    }

    const group = this.gmap.get(id);
    group.room = roomObj.room;
    return group;


    }

    read(id){
    if (id === undefined || typeof id !== "string") {
        throw new TypeError("invalid id");
    }
      
    if (!this.gmap.has(id)) {
        throw new Error('not a valid group');
    }
     

    const group = this.gmap.get(id);
    return {id, ...group};

    }

    readAll(){
    if(arguments.length){
         throw new Error('function does not recive arguments');}
    
    return Array.from(this.gmap)
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

const room = 236;
const groups = new Groups();
const groupId = groups.add(room);
console.log(groupId);

console.log(groups.update(groupId, {room:238}));
console.log(groups.addPupil(groupId, pupil));
console.log(groups.read(groupId));
console.log(groups.readAll());
// console.log(groups.removePupil(groupId, pupil.id));
// const room2 = 237;
// const groups2 = new Groups();
// const groupId2 = groups2.add(room2);
// console.log(groupId2);


