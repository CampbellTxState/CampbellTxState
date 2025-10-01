// document.write("Where is my JS code?");
// window.alert(5+6);
// window.alert('5 + 6');
// document.write('<h1>A heading</h1>');
// document.write('<p>A sentence.</p>');
// const x = "web";
// const y = "mapping";
// const out = x + y;
// document.write(out);
// A prompt box is used to prompt users to input a value before entering a page.
// let user_name = window.prompt("Please enter your name", "Type your name here");
// document.write(user_name);
// user_name = window.prompt("Please enter your name", "Type your name here");
// if (user_name && user_name.trim() !== "") {
//   document.getElementById("greeting").textContent = "Hello, welcome " + user_name + "!";
// } else {
//   document.getElementById("greeting").textContent = "Hello, welcome!";
// }
// //This sets the date to todays date
// var today = new Date();
// //Tells us the year of the websites creation
// var year = today.getFullYear();
// //Shows the text"copyright" and the copyright symbol
// document.getElementById("copyright").innerHTML = "Copyright &copy; " + year;
function welcome()
{
let a = "Please enter your name.";
let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt(a, b);
message = "<h1>Hello, welcome to my webpage, " + user_name + "!<h1>"
return message
}
// document.getElementById("greeting").textContent = welcome()
document.write(welcome());
