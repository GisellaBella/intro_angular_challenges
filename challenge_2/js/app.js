console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
// app.controller("WelcomeController", WelcomeController);

// function WelcomeController(){
//   this.full_name = "YOUR NAME"
// }


app.controller("WelcomeController", WelcomeController);

function WelcomeController(){
	this.full_name ="Gisella";
	this.age="48";
	this.city="Saratoga Springs";
	this.state="NY";
	this.shout = function(name){
	    return name.toUpperCase() + "!";
		};

}

  app.controller("ClassController", ClassController);

function ClassController(){
	this.class_name ="Big Nick's Cult Of Zebulon";
	this.enrolled_students="10";
	this.start_date="10/31/2016";
	this.end_date="02/01/2017";
	this.daysRemaining = function (){
		var end = Date.parse(this.end_date);
		var todays_date = Date.now();
		console.log("today" + todays_date);		
		console.log("end" + end);
	    var days_left = (end - todays_date)/(1000*60*60*24);
	    return days_left;
		};

}

       // <li>Class Name: {{ "class_name" }}</li>
       //  <li>Students: {{ "enrolled_students" }}</li>
       //  <li>Start: {{ "start_date" }}</li>
       //  <li>End: {{ "end_date" }}</li>
       //  <!-- HINT: Create a daysRemaining() function in your controller that calculate this -->
       //  <li>Days Left: {{ "daysRemaining()" }}</li>

