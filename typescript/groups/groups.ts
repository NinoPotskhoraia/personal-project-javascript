import {Pupils} from "../pupils/pupils.js";

export type roomObj = {
    room:number;
}

export interface group {
    id:string,
    room:roomObj,
    pupils:object[];
}

export class Groups{
    _counter = 0;
    gmap = new Map();

    
    private _hasId(id:string):void {
        if (!this.gmap.has(id)) {
            throw new Error("invalid id")
          };
    }

    add(room:roomObj){
    const id:string = 'G' + this._counter++;
    let groupTemplate:group = {
        id:id,
        room: room,
        pupils:[]
    }

    this.gmap.set(id, groupTemplate);
    return id;
    }

    addPupil(groupId:string, pupil:Pupils){
     
     this._hasId(groupId);

       
         const group = this.gmap.get(groupId);
         group.pupils.push(pupil);
         return pupil;
    }


    removePupil(groupId:string, pupilId:string){
        
      this._hasId(groupId);

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

    update(id:string, roomObj:roomObj){

      
    this._hasId(id);

    const group = this.gmap.get(id);
    group.room = roomObj.room;
    return group;


    }


    read(id:string){
      
    this._hasId(id);
     

    const group = this.gmap.get(id);
    return {id, ...group};

    }

    

    readAll():object[]{
    
    return Array.from(this.gmap);
    }
}

