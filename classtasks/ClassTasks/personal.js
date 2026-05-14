
const personal = {
name:"Kemi",
age : 24,
};
const professional ={
role : "Designer",
company : "TachCrop",
};
const merged = {...personal, ... professional};
console.log(merged);
