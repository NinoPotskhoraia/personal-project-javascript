export default class Subject{
    #counter = 0;
    #id;
    constructor(obj){
        if (obj === undefined) {
            throw new TypeError("parameter is required");
          }
        if (typeof obj !== "object" || Array.isArray(obj)) {
            throw new TypeError("parameter type is not object");
          }
        if (Object.keys(obj).length < 2) {
            throw new Error("object is invalid");
          }
        if(
            typeof obj.title !== "string" ||
            typeof obj.lessons !== "number"
          ) {
            throw new TypeError("parameters are invalid: parameters must include title - a string and lessons - a number");
          }
        if(obj.description && typeof obj.description !== "string"){
           throw new TypeError("description property must be a string")
        }
        Object.assign(this, obj);
       this.#id= 'S' + this.#counter++;
}



get id(){
  return this.#id;
}

        
}






