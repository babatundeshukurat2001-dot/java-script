function grade(score){
if(score >= 70){
return "A";
}
else if(score >= 60){
return "B"
}
else if(score >= 50){
return "c";
}
else if (score >= 40){
return "D"
}
else{
return "F"
}
}
console.log(grade(50));
