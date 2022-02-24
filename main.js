// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(F,L) {
    const User={
        firstName: F,
        lastName: L
      }
    return User;
}

function setAge(User,age){
    const User2={
        firstName: User.firstName,
        lastName: User.lastName,
        age: age

    }
  return User2;
}

function incrementAge(User){
    User.age+=1;
    return User;
}

function fixCar(car){
    car.needsMaintenance=false
    return car;
}

function addGrades(s,g){
    s.grades=s.grades.concat(g);
    return s;
}

function getDataType(o,k){
    for (const [key, value] of Object.entries(o)) {
        if (key==k){
            return typeof value;
        }
      }
    
}


function addTodo(t,nt){
    t.push(nt);
    return t ;
}

function addSong(p,n){
    p.songs=p.songs.concat(n);
    p.duration=p.duration+n.duration;
    return p;
}

function updateReportCard(r,g){
    r.grades=r.grades.concat(g);
    arr=r.grades;
    r.lowestGrade = Math.min(...arr);
    r.highestGrade= Math.max(...arr);
    r.averageGrade =arr.reduce((a,b) => a + b, 0) / arr.length;
    return r
}
//Test


// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
