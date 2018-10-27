window.onload = function() {
	const name = 'BCIT';

	const check = () => {
		if (name.includes('CI')) { console.log('found CI') }
	}

	check();
}