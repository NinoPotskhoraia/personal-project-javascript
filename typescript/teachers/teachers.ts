export type emailsObj = {
    primary:boolean,
    email:string
}

export type phoneObj ={
    primary:boolean,
    phone:string
}

export type subjectObj ={
    subject:string
}

export interface DefaultTeacher{
    name:{
        first:string,
        last:string
    },
    dateOfBirth:string,
    emails:emailsObj[],
    phones:phoneObj[],
    sex:string,
    subject:subjectObj[],
    description?:string
}



export class Teachers{
    private _counter = 0;
     tmap = new Map();
  
private isDate(date:string):void{
        if(isNaN(Date.parse(date))){
            throw new Error('dateOfBirth parameter must be a date string');
          }
    }
private hasId(id:string):void {
        if (!this.tmap.has(id)) {
            throw new Error("invalid id")
          };
    }   
  
add(teacher:DefaultTeacher){
    this.isDate(teacher.dateOfBirth)
      const id:string = 'T' + this._counter++;
      this.tmap.set(id, teacher);
      return id;
     }
  
     read(id:string){
     
    
        return {...this.tmap.get(id), id};
     }
  
  
update(id:string, update:DefaultTeacher){

    this.isDate(update.dateOfBirth);
  
    this.hasId(id);
    
  
      const teacher = this.read(id);
      delete teacher.id;
      this.tmap.set(id, {
          ...teacher,
          ...update
      });
  
      return id;
     }
  
     remove(id:string) {
    this.hasId(id);
  
      this.tmap.delete(id);
    }
     };