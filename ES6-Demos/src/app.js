import color_logger from './utils/color_logger'

const p = color_logger('app.js')


p.magenta('Hello ES6 !!!');
p.magenta('Hello ES6','!!!');


/* -------
     let
   ------- */

//try{

	/*let hobbie = 'robots'
	if(true){
		let hobbie = 'robots'
	}
	
	p.cyan('hobbie: ',hobbie)*/	

	
	/*for(let i=0 ; i < 10 ; i++){
		p.green('i:',''+i)
	}
	p.magenta('outside loop:',i);*/

/* let type = 'Humanoid'

 while (true) {
   let type = 'Android'
   p.info('type: ',type)
   break
 }

 p.info('type: ',type)*/


/* -------
    const
   ------- */
/*
	 
	const API_KEY = 'eiueryf80we7yhfwenf'
	const PI = Math.PI
	 
//	PI = 123
	
*/

/* -------------------
     template strings
   ------------------- */
	
 /*let robot = 'Optimus Prime'
 let dayjob = 'Truck'
 
 p.info(`Not everyone knows me as ${robot}, people think I'm a ${dayjob}`)*/
 
/* p.info("Not everyone knows me as "+robot+", people think I'm a "+dayjob)*/
 

/* -------------------
    multiline strings
   ------------------- */
/*
 let multiline = `
 we
 can
 finally
 have
 multiline
 strings!!!
 `
 p.info('multiline:',multiline)*/
 
/* ES5....
  let multiline = " we"+
                 "can"+
                 "finally"+
                 "have"+
                 "multiline"+
                 "strings!!!"*/

 	
	

/* -----------------------
    class, extends, super
   ----------------------- */
/*
 class Robot{
     
   constructor () {
     p.magenta('Robot constructor')
     this.type = 'Robot'
     this.name = 'name'
     this._weight = '40kg'
   }
     
   identify() {
     p.info(`Hi! my name is ${this.name} and I am a ${this.type} `)
   }
     
   get weight() {
        return this._weight;
   }
   set weight (kg) {
       if(kg > 80){
          throw new Error('I have my limits too you know....') 
       }else{
           this._weight = kg
       }  
    }
     
 }*/

/*
  let robot = new Robot()
  robot.weight = 20
  robot.identify()*/

/*
 class Humanoid extends Robot {
   constructor () {
     p.magenta('Humanoid constructor')
     super()
     this.type = 'Humanoid'
	 this.name = 'Asimo'
   }
 }

 let robot = new Humanoid()
 robot.identify()
	
 */
/* -----------------------
      default arguments
   ----------------------- */
/*

function bot( type = 'Household' ) {
  p.info('bot type:',type)
}

bot()
 
*/

/* -----------------------
       arrow functions
   ----------------------- */
/*
 let robots = [{type:'medical'	,model:'Surgent'},
 			   {type:'household',model:'Roomba'},
 			   {type:'military' ,model:'Fire-fighter'},
 			   {type:'military' ,model:'Cargo-carrier'},
 			   {type:'household',model:'Webcam-watcher'},
 			   {type:'household',model:'Lawn-mower'}]
 
 let hr = robots.filter(function(robot){
   return robot.type === 'household'
 })
 
 p.dir('Household Robots:',hr)
*/

 /*
 class RoboStore {
	 
   constructor () {
	 this.location = 'Tel-Aviv'
	 this.robots   = [  {type:'medical'	,model:'Surgent'},
						{type:'household',model:'Roomba'},
						{type:'military' ,model:'Fire-fighter'},
						{type:'military' ,model:'Cargo-carrier'},
						{type:'household',model:'Webcam-watcher'},
						{type:'household',model:'Lawn-mower'}  ]
   }
   greet(msg) {
     setTimeout( ()=> {
       p.info(`People of ${this.location} ${msg}`)
     }, 1000)
   }
   getByType(type){
	   return this.robots.filter((robot)=>{
   			return robot.type === type
 	   })
   }
   printBotNames(){
	   this.robots.forEach((bot)=>{
		   p.info(`I am a ${bot.model} and I am from ${this.location}`)
	   })
   }
 }
	
 var store = new RoboStore()
 store.greet('we need more bots!!!') 

 let hr = store.getByType('household')
 p.dir('Household Robots:',hr)

 store.printBotNames()
 */
	
/* -----------------------------
       destructuring  Objects
   ----------------------------- */
/*
 let cat  = 'Garfield'
 let role = 'sleep'
 
 //variables => object
 let home = { cat, role }
 
 p.dir('home:',home)*/

 /* 
 //ES5 - 1
 var home = {
     cat:'Garfield',
     role:'sleep'
 }*/
 
/* 
//ES5 - 2
var home = {} //new Object()
 home.cat = 'Garfield'
 home.role = 'sleep'
 */
 
 
/* let friends = { type: 'animated', many: 2 }
 //object = > variables
 let { type , many } = friends
 
 p.magenta(many, type)*/


/* let person = {
	 name     : "Johnney",
	 age      : 43,
	 location : "Tel Aviv"
 }*/ 
 
//simple
// p.info('person.age: ',person.age);
// p.info('person["age"]: ',person['age']);
 
// let { age } = person;
// p.info('age: ',age);
 
 //let { age : personAge } = person;
 //p.info('personAge: ',personAge);
 
// -- dynamic key...
//let key = "age";
//	
//let { [key] : keyAge} = person;
//p.info('keyAge: ',keyAge);

/* -----------------------------
       destructuring  Arrays
   ----------------------------- */
/*let numbers = [1,2,3,4]

let first  = numbers[0]
let second = numbers[1]*/

//let [first,second]  = numbers
//p.info(first,second);

//let [first,second,,fourth]  = numbers
//p.info(`${first}, ${second}, ${fourth}`)

/*let [first,second,...theRest]  = numbers
p.info(`${first}, ${second}, ${theRest}`)*/
 	

/* -------------------
     rest parameters
   ------------------- */
	//take any number of arguments 
	//arguments scope exists only in regular functions...
	
	/*function sum(){  
		p.dir('arguments:',arguments)
	}	
    sum(2,8,7,33)*/

	/*function sum(...args){  
		p.dir('args:',args)
		return args.reduce((prev,curr) => prev + curr)
	}	
    p.info('sum:',sum(2,8,7,33))*/
	
	/*let multiplyBy = (multiplier, ...numbers) => {  
		p.info('multiplier:',multiplier)
		p.info('numbers:',numbers)
		return numbers.map((n) => {
			return multiplier * n
		})
	}	
    p.magenta('multiplyBy:',multiplyBy(2,8,7,33))*/
	
/* -------------------
     spread operator
   ------------------- */
/*	let numbers = [3,6,11,7]
	
	let max = Math.max(3,6,11,7)
	
	//let max = Math.max(numbers)
	//let max = Math.max.apply(null,numbers)
	//let max = Math.max(...numbers)
	
	//let more_numbers = [4,6,1,9,...numbers,5,2]
	
	//let max = Math.max(...more_numbers)
	
	p.magenta('max:',max)*/
	

//}catch(err){
//	p.error(err);
//}



// practice - http://es6katas.org/

const bob = {name: 'Bob'};
const alice = {name: 'Alice'};
p.magenta(bob.name)
const foundAt = [bob, alice].findIndex(({name:{length:l}}) => length > 3);
p.magenta('foundAt:',foundAt)
