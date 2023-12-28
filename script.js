//your JS code here. If required.
function getFormvalue() {
    //Write your code here
	let input1 = document.getElementById("status");
	let input2 = document.getElementById("enterBtn");

	document.addEventListener("click" , function() {
		input1.textContent = "Entered Metaverse";
		var h1Element = document.createElement("h1");
		h1Element.textContent = input1.textContent;

	})
}

