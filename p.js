						
const questionlist = ["How many continents are there?","What is the capital of India?","ap kyaa banna chate ho?"]
const optionslist = [["1.Four", "2.Nine", "3.Seven", "4.Eight"],["1.Chandigarh", "2.Bhopal", "3.Chennai", "4.Delhi"],["1.Software Engineering", "2.teacher", "3.criceter", "4.bussinessmen"]]
const solutionlist = [3, 4, 1] 
var fiftyfifty = [
['1.Four','3.seven'],['2.Bhopal','4.Delhi'],['1.Software Engineering','2.teacher']]
var count=0
let i =0;
console.log("kya ap  5050 lifeline  lena chate ho , to  enter kare  '5050' ")
for ( let i=0; i<question_list.length; i++){
    console.log(questionlist[i])
    for (let j=0;  j<optionsist[i].length; j++){
        console.log(optionslist[i][j])
    } 
    let user= (parseInt(prompt("enter your number option: ")))
    if (user === solutionlist[i]){
        console.log("badhai ho ap jit chuke ho ")
    }
    else if (user === 5050){
        if (count === 0){
            console.log(fiftyfifty[i])
            count=count+1
            let user1  = parseInt(prompt("apka answer btye : "))
            if (user1 == solutionlist[i]){
                console.log("badhai ho ! ,apka jabab shi hai ")
            }   
            else{
                console.log("ohh ! , apka jabab glt hai")
            }
    }
        else{
            console.log("apne 5050 use kr liya hai ap 5050 use nhi kar skte ")
        }  
    }
    else{
        console.log("apka jabab glt hai ")
        console.log("ap game se bhar ho chuke ho ")
        break
    }   
}

        
