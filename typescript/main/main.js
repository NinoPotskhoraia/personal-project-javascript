"use strict";
exports.__esModule = true;


const history = new Subject({
    title: 'History',
    lessons: 24
  });
  const math = new Subject({
    title: 'history',
    lessons:34
  })
const lms = new LMS();
// console.log(lms.add(history));
// console.log(lms.add(math));
// // console.log(lms.remove(history));
// console.log(lms.verify(history));
// console.log(lms.readAll());


const teachers = new Teachers();
const clara = {
    name: {
      first: "string",
      last: "string"
    },
    dateOfBirth: "2011-10-10T14:48:00", // format date
    emails: [
      {
        email: "string",
        primary: true
      }
    ],
    phones: [
      {
        "phone": "string",
        primary: true
      }
    ],
    sex: "string", // male or female
    subjects: [
      {
        subject: "string" // just name property of subject.
      }
    ],
    description: "string"
  };

  const kate =  {
    name: {
      first: "kate",
      last: "mckignon"
    },
    dateOfBirth: "2011-10-10T14:48:00", // format date
    emails: [
      {
        email: "string",
        primary: true
      }
    ],
    phones: [
      {
        "phone": "string",
        primary: true
      }
    ],
    sex: "female", // male or female
    subjects: [
      {
        subject: "math" // just name property of subject.
      }
    ]
  }


const tid = teachers.add(clara);
const tid2 = teachers.add(kate);
// console.log(tid);
// console.log(tid2);
// console.log(teachers.read(tid));
// console.log(teachers.read(tid2));
// console.log(teachers.update(tid, kate));
// console.log(teachers.remove(tid));

const pupils = new Pupils();
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

const room = 236;
const groups = new Groups();
const groupId = groups.add(room);
// console.log(groupId);

// console.log(groups.update(groupId, {room:238}));
// console.log(groups.addPupil(groupId, pupil));
// console.log(groups.addPupil(groupId, pupil2));
// console.log(groups.read(groupId));
// console.log(groups.readAll());
// const room2 = 237;
// const groups2 = new Groups();
// const groupId2 = groups2.add(room2);
// console.log(groupId2);

const pupilId = pupil.id;
const gradebooks = new Gradebooks(groups, teachers, lms);

const record = {
    pupilId: 'P0',
    teacherId: 'T0',
    subjectId: 'S0',
    lesson: 1,
    mark: 9
  };

  const gradebook = gradebooks.add(groupId);
  console.log(gradebook);
 console.log(gradebooks.addRecord(gradebook, record));
 const students = gradebooks.readAll(gradebook);
 console.log(students);