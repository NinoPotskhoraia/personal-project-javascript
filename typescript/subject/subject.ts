export interface DefaultSubject{
  title:string,
  lessons:number,
  description?:string
}



export class Subject{
    private _counter:number = 0;
    private _id:string;
    constructor(obj:DefaultSubject){
      
        Object.assign(this, obj);
       this._id = 'S' + this._counter++;
}



get id(){
  return this._id;
}

        
}