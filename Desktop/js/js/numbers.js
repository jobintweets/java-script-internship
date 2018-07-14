function checkPrime(){
   num=getInput();

    flag=true;
    if(num<2)
    flag=false;
    for(i=2;i<=Math.sqrt(num);i++){
        if(num%i==0)
        {
            flag=false;
            break;

        }
        
    }
    if (flag){
        showResult(num + "is prime");
}
else{
    showResult(num + "is not prime");
}
  
    


}
function factorial(){
   num=getInput();
   var res=0;
   for(i=1;i<=num;i++){
       res+=num*i;

   }
   showResult(res + "is the factorial" + "of number " + num);

}


function factors(){
    num=getInput();
    output="";
    for(i=1;i<=num;i++)
    {
        if(num%i==0)
        output+= i+" ";
    }
    showResult('factors are: '  + output);

}
function fibonacci(){
num=getInput();
output='';
if(num==1)
output+='0';

else if(num==2)
output+='0 1';
else{

output+="0 1";
var a=0
var b=1;
for(i=3;i<=num;i++){
    c=a+b;
    a=b;
    b=c;
    output+='' + c;

}
}
showResult(output);


}
function showResult(message){
    document.getElementById('result').innerHTML="<h4>" + message + "</h4>";

}
function getInput(){
    res=document.getElementById('num').value;
    return res;
}