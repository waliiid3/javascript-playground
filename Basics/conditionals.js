

let age = 25;
if (age<18){
    console.log("You are not eligible to sign up for this service.");
} else if (age >= 18 && age <= 65) {
    console.log("You are eligible to sign up for this service.");
} else {
    console.log("You are eligible for senior citizen benefits and getting retired");
    }


//Checking user role using switch statement
const userRole = 'admin';
 console.log(typeof (userRole));

switch (userRole) {
    case 'admin':
        console.log("Full access granted.");
        break; // Crucial! Prevents "fall-through" to the next case
    case 'editor':
    case 'author': // Combined cases sharing the same logic
        console.log("Content modification access granted.");
        break;
    default:
        console.log("Guest access restricted.");
    
}


