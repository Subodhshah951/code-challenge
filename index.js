/*Coding Challenge  #1
 
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
  Your tasks:
   1. Store Mark's and John's mass and height in variables
   2. Calculate both their BMIs using the formula (you can even implement both 
      versions)
   3. Create a Boolean variable 'markHigherBMI' containing information about 
      whether Mark has a higher BMI than John.
  Test data:
      Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
              m tall.
      Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
              m tall*/
//data1
// const massMark=78;
// const heightMark= 1.69;
// const massjohn= 92;
// const heightjohn=1.95;
// //formula
// const BMIMark= massMark/heightjohn**2;
//  const BMIJohn=massjohn/(heightjohn*heightjohn);
//  const markHigherBMI= BMIMark>BMIJohn;
//  console.log(
//     BMIMark,BMIJohn,markHigherBMI
//  );
//  //data 2
//  const massMark2=95;
// const heightMark2= 1.88;
// const massjohn2= 85;
// const heightjohn2=1.76;
// //formula
// const BMIMark2= massMark2/heightjohn2**2;
//  const BMIJohn2=massjohn2/(heightjohn2*heightjohn2);
//  const markHigherBMI2= BMIMark2>BMIJohn2;
//  console.log(
//     BMIMark2,BMIJohn2,markHigherBMI2
//  );

//............................................................................//
//Coding Challenge  #2
/* Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
    Your tasks:
      1. Print a nice output to the console, saying who has the higher BMI. The message 
         is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
      2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
         BMI (28.3) is higher than John's (23.9)!"
        
        Hint: Use an if/else statement*/

//data1
/*const massMark = 78;
const heightMark = 1.69;
const massjohn = 92;
const heightjohn = 1.95;
//formula
const BMIMark = (massMark / heightjohn ** 2).toFixed(1);
const BMIJohn = (massjohn / (heightjohn * heightjohn)).toFixed(1);

// const roundeBMI=BMIMark.toFixed(1);
// console.log("Rounde BMI:"+ roundeBMI);



//  console.log(BMIMark,BMIJohn)
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn}`);
} else if (BMIMark < BMIJohn) {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's BMI ${BMIMark}`);
} else {
  console.log(`Mark's BMI ${BMIMark} and  John's BMI ${BMIJohn} are same`);
}
console.log(BMIJohn);
console.log(BMIMark);
*/

//********************************************************************************//
//Coding Challenge  #3

/*There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
       Your tasks:
          1. Calculate the average score for each team, using the test data below
          2. Compare the team's average scores to determine the winner of the competition, 
             and print it to the console. Don't forget that there can be a draw, so test for that 
             as well (draw means they have the same average score)
          3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
             team only wins if it has a higher score than the other team, and the same time a 
             score of at least 100 points. Hint: Use a logical operator to test for minimum 
             score, as well as multiple else-if blocks  
          4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
             both teams have the same score and both have a score greater or equal 100 
             points. Otherwise, no team wins the trophy
          Test data:
            Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
            Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123*/

// const scoreDolphins=(96+108+89)/3;
// const scoreKoalas=(88+91+110)/3;
// console.log(scoreDolphins,scoreKoalas);
// if(scoreDolphins>scoreKoalas){
//    console.log('Dolphins win the trophy');
// }else if(scoreKoalas>scoreDolphins){
//    console.log('Koalas win the trophy');
// }else if(scoreDolphins===scoreKoalas){
//    console.log('both win the trophy');
// }

//bonus1

/* const scoreDolphins=(97+112+67)/3;
            const scoreKoalas=(78+95+110)/3;
             console.log(scoreDolphins,scoreKoalas);
            if(scoreDolphins>scoreKoalas && scoreDolphins>=100){
               console.log('Dolphins win the trophy');
            }else if(scoreKoalas>scoreDolphins && scoreKoalas>=100){
               console.log('Koalas win the trophy');
            }else if(scoreDolphins===scoreKoalas && scoreDolphins>=100 && scoreKoalas >= 100){
               console.log('both win the trophy');
            } else{
               console.log('No one wins the trophy');*/

// Coding Challenge  #4

/*Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
		Your tasks:
			1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
				this. It's not allowed to use an if/else statement   (If it's easier for you, you can 
				start with an if/else statement, and then try to convert it to a ternary 		
				operator!)
			2. Print a string to the console containing the bill value, the tip, and the final value 
				(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
				316.25”
		Test data:
				Data 1: Test for bill values 275, 40 and 430
		Hints:
			To calculate 20% of a value, simply multiply it by 20/100 = 0.2
			Value X is between 50 and 300, if it's >= 50 && <= 300
--------------------------------------------------------------------------------------------------------------------------*/

const bill=   430;
const tip = bill<=300 && bill>=50 ? bill * 0.15 : bill*0.2;
//“The bill was 275, the tip was 41.25, and the total value 316.25”
console.log(`The bill was ${bill},the tip was ${tip}, and the total value ${bill + tip}`);
// ...........................................................................................
// //test
// const number = 7;
// //for(let i=0;i<number.length;i++)
// const odd = `${number} is odd`;
// const even = `${number} is even`;
// const result = number % 2 === 0 ? console.log(even) : console.log(odd);
// console.log(result);
// {
//    console.log(number + "is even")
// }else {
//    console.log(number + "is old")
// }



