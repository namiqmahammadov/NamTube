export const API_KEY='AIzaSyAbP2V7IYxHw-eGoHa_QJR-vLqI7Fv1klk'

 export const value_converter=(value)=>{
if(value>=1000000){
return Math.floor(value/1000000)+"M";


}
else if(value>=1000){
    return Math.floor(value/1000)+"K";
}
else{
    return value;
}
}