
// More Information about this assisngment is available in the README.md file

for ( var i = 1; i <= 100; i++ ){

    if (i % 3 == 0 && i % 5 == 0){
        output( "FizzBuzz");
    }
   else if ( i % 3 == 0){
        output("Fizz");
    }
    else if ( i % 5 == 0){
        output("Buzz");
    }
    else{
        output(i);
    }

}