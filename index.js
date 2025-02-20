// Name:	Alexander Gabriel A. Aranes
// Section:	CMSC 100 C-3L


// Functions

// Checks if the input passwords are valid
function validatePassword(pw1, pw2){
	// Non-iterative conditions
	if(pw1 != pw2) return false;
	if(pw1.length != pw2.length) return false;

	// All conditions that must be met
	var hasNum = false;
	var hasUpper = false;
	var hasLower = false;

	pw1.split('').forEach((c,i)=>{	// converts pw1 to array and use forEach to iterate
		if(isNaN(c) && (c === c.toUpperCase())) hasUpper = true;
		if(isNaN(c) && (c === c.toLowerCase())) hasLower = true;
		if(!isNaN(c)) hasNum = true;
	});
	return (hasNum && hasUpper && hasLower);
}

// Reverses a password string
function reversePassword(pw){
	let reversedPw = '';			// initialize an empty string
	for(let i=pw.length-1; i>=0; i--){	// add all char from the back into
		reversedPw += pw[i];		// the empty str
	}
	return reversedPw;
}

// Stores the passwords on an object
function storePassword(username, pw1, pw2){
	const userCred = {
		name: username,
		newpassword: pw1
	}
	// If pw is valid, reverse the newpassword property
	if(validatePassword(pw1, pw2)) userCred.newpassword = reversePassword(pw1);
	return userCred;
}


// Sample Runs
console.log(storePassword("John", "passwordKoto", "passwordKoto"));	// no number
console.log(storePassword("John", "PASS12345", "PASS12345"));		// no lowercase
console.log(storePassword("John", "pass12345", "pass12345"));		// no uppercase
console.log(storePassword("John", "Pass123", "Pass12345"));		// too short
console.log(storePassword("Alex", "MyBestPassword101", "MyBestPassword101"));	// valid
console.log(storePassword("John", "Pass1234", "Pass1234"));		// valid
