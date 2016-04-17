var subject=['Damn Daniel back at it again with the','rest in pieces','illunimati confirmed:','john cena ate','My cat was hit by a','I got 99 problems and all of them are','when i met you in the'];
var subjectPlural=['plants','people','hackers','memes', 'cans', 'millennials','john cena','Donald Drumpf','Tumblr'];
var jokes=[]
var jokes_dict={}
var cnt=0
var highestScore=0
function chooseWord(){
subject1=subject[Math.floor(Math.random()*subject.length)];
subject2=subjectPlural[Math.floor(Math.random()*subjectPlural.length)];
}
function simpleSentence(){
chooseWord();
sentence=subject1+"  "+subject2;
document.getElementById("myHeader").innerHTML = sentence;
}
function addToList(){
var subj = document.getElementById("input1").value;
subject.push(subj);
document.getElementById("input1").value = "";
}
function addToList2(){
var ver= document.getElementById("input2").value;
verb.push(ver);
document.getElementById("input2").value = "";
}
function addToList3(){
var subjp = document.getElementById("input1").value;
subject.push(subjp);
document.getElementById("input3").value = "";
}
function Submit(){  
jokes.push(sentence);
jokes_dict[ sentence] = 0;
console.log(jokes_dict)
document.getElementById("myHeader").innerHTML = "Create a New Sentence";
if(jokes.length>0){
 document.getElementById("new1p").innerHTML= jokes[jokes.length-1];
}
if(jokes.length>1){
document.getElementById("new2p").innerHTML = jokes[jokes.length-2];
}
if(jokes.length>2){
document.getElementById("new3p").innerHTML = jokes[jokes.length-3];
}
if(jokes.length>3){
document.getElementById("new4p").innerHTML = jokes[jokes.length-4];
}
}
function refresh(){
orderDict();
console.log(Final);
if(Final.length>0){
 document.getElementById("pop1p").innerHTML= Final[0];
}
if(jokes.length>1){
document.getElementById("pop2p").innerHTML = Final[1];
}
if(jokes.length>2){
document.getElementById("pop3p").innerHTML = Final[2];
}
if(jokes.length>3){
document.getElementById("pop4p").innerHTML = Final[3];
}
}
function orderDict(){
var popordjokes= Object.keys(jokes_dict).map(function(key) {
    return [key, jokes_dict[key]];});
popordjokes.sort(function(first, second) {
    return second[1] - first[1];});
	Final=popordjokes.slice(0, 5);
}
function upvote(clickedId){
console.log(clickedId+'p')
joke1up=document.getElementById(clickedId+'p').innerHTML
jokes_dict[joke1up]=jokes_dict[joke1up]+1
console.log(jokes_dict[joke1up])
}
function downvote(clickedId){
joke1down=document.getElementById(clickedId+'p').innerHTML
jokes_dict[joke1up]=jokes_dict[joke1up]-1
console.log(jokes_dict[joke1down])
}