
        function check(){
            var resl=document.getElementById("num").value;
            if(resl%2==0)
            msg="number " + resl + " is even";
            else
            msg="number " + resl + " is odd";
            document.getElementById('res').innerHTML=msg;
        } 
        function check_unit(){
            var units=document.getElementById("unit").value;
            if(units>=0 && units<100)
            {
                amount=units*5;
                bill=50+amount;
            }
            
            else if( units>=100 && units<500)
            {
                amount=units*6;
            bill=50+amount;

            }
            
            else
            {
                amount=units*10;
                bill=50+amount;

            }
            document.getElementById("bill").innerHTML="current month bill is " +bill;

            
        }
            function check_salary(){
                var sal=document.getElementById('salary').value;
                if(sal<300000){
                    tax=0;
                
                }
            
                else if(sal>300000 && sal<800000)
            {
                tax=(sal*10)/100;
                
            }
            else if(sal>800000 && sal<1200000)
            {
                tax=(sal*20)/100;
                
            }
            else{
                tax=(sal*30)/100;
                
            }
            net_sal=sal-tax;
            document.getElementById('sal').innerHTML="the net salary after tax is " + net_sal;
            } 
            


            function multiples(lb,ub,num){

        for(i=lb;i<=ub;i++)
        {
            if(i%num==0)
            console.log(i);
        }

            }
            multiples(15,200,18);


        function sumeven(num){
            sum=0;
            for(i=2;i<=num;i+=2){
                sum=sum+i;
            }
            
            console.log('sum is ' + sum);
        }
        sumeven(10);

        function mul(lb,ub,n1,n2){

            for(i=lb;i<=ub;i++)
            {
                if(i%n1==0 && i%n2==0) 
                console.log("number divisible by both " + n1 + " and" +  n2 + "is " + i);
                
            }
            
    
                }
                mul(15,20,2,3);


                // to find prime numbers..
                function isPrime(num){
                    flag=true;
                    if(num<2)
                    flag=false;
                    for(i=2;i<=Math.sqrt(num);i++){
                        if(num%i==0)
                        flag=false;
                        break;
                    }
                    // if(flag){
                    //     console.log( num  + " num is prime " ) ;

                    // }
                    // else{
                    //     console.log(num + " is not prime " );
                    // }
                    return flag;


                }
    
// isPrime(5);
// isPrime(2);
// isPrime(1);
// isPrime(0);
// function printPrime(lb,ub){
//     for(i=lb;i<=ub;i++){
//         if(isPrime(i)){
//             console.log(i);
//         }
//     }
// }
// printPrime(3
//     ,30);

for(j=1;j<=10;j++){
    num=j;
    for(i=1;i<=10;i++){
        console.log(i + "*" + num + "=" + (num*i));
    }
    console.log("-------------------");
}




// print a pattern....

for(j=1;j<=5;j++){

data='';
    for(i=1;i<=j;i++)
    
    // in the inner for loop i always get initialized to 1...
    {
        data+=i + '';
    }
console.log(data);
}


console.log("reversed pattern");

for(j=5;j>=1;j--){
    // i in the inner for loop always get initialized to 1;
    data='';
        for(i=1;i<=j;i++)
        {
            data+=i + '';
        }
    console.log(data);
    }

    //pattern 3
    console.log('pattern3');


    
    for(i=0;i<3;i++){
data='';
for(j=0;j<3;j++){
    data+= i+""+j+ " ";
}
console.log(data);

    }