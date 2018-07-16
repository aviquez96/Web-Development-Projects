var nonReverse = [];

window.setTimeout(function() {

	printReverse([1,3,52,3,5,2,5]);
	console.log(nonReverse);

}, 500);


function printReverse(nonReverse) 
{
	var temp; 
	for (i = 0; i < nonReverse.length/2; i++)
	{
		temp = nonReverse[i];
		nonReverse[i] = nonReverse[length - i];
		nonReverse[length - i] = temp;
	}
}

