window.onload = function() {
	document.getElementsByTagName('h1')[0].onclick = function() {
		console.log(this.innerHTML);
	}
}