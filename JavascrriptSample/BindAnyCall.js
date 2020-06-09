let name1={
    firstname:"Suthagar",
    lastName:"Thambikannu",
    fullname:function(){
        console.log(this.firstname+' '+this.lastName)
    }
}
let name2={
    firstname:"Nayomi",
    lastName:"Suthagar",
}
name1.fullname();
name1.fullname.call(name2);
//***********************************************************************************************************/
let name3={
    firstname:"Suthagar",
    lastName:"Thambikannu",
}
const fullname=function(hometown,state){
    console.log(this.firstname+' '+this.lastName+' from '+hometown+' , '+state)
}
let name4={
    firstname:"Nayomi",
    lastName:"Suthagar",
}
fullname.call(name3,'chennai','Tamilnadu');//first argument is this
fullname.call(name4,'chennai','Tamilnadu');

//***********************************************************************************************************/
fullname.apply(name3,['Apply chennai','Tamilnadu']); //first argument is this and arraylist for aruguments of function
fullname.apply(name4,['chennai','Tamilnadu']);
//bind
let myfullname=fullname.bind(name3,'Bind chennai','Tamilnadu');

console.log(myfullname);
myfullname();