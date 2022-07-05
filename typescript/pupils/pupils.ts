export type phonesObj ={
    primary:boolean,
    phone:string
}

export interface name{
    name:{ first:string,
    last:string}

}

export interface DefaultPupil extends name{
    dateOfBirth:string,
    phones:phonesObj[],
    sex:string,
    description?:string
}



export class Pupils{
    _counter = 0;
    pmap = new Map();

private _isDate(date:string):void{
        if(isNaN(Date.parse(date))){
            throw new Error('dateOfBirth parameter must be a date string');
          }
    }
    
private _hasId(id:string):void {
        if (!this.pmap.has(id)) {
            throw new Error("invalid id")
          };
    }
  
    add(pupil:DefaultPupil){
     const id:string = 'P' + this._counter++;
     this._isDate(pupil.dateOfBirth);
     this.pmap.set(id, pupil);
     return {id:id, ...pupil};
    }
 
    read(id:string){
    
    this._hasId(id);
    const valid = this.pmap.get(id);
    return valid ? {id, ...valid} : null;
    }
 
 
    update(id:string, update:DefaultPupil){
    this._hasId(id);
    const pupil = this.read(id);
     delete pupil.id;
     this.pmap.set(id, {
         ...pupil,
         ...update
     });

     return this.pmap.get(id);
    }
 
    remove(id:string) {
    this._hasId(id);
 
     this.pmap.delete(id);
   }
}




