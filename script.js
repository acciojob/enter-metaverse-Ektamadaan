//your JS code here. If required.
function getFormvalue() {
    //Write your code here
	let input1 = document.getElementById("status");
	let input2 = document.getElementById("enterBtn");

	input2.addEventListener("click" , function() {
		input1.textContent = "Entered Metaverse";
		input1.tagName = "h1";
	})
}

