//your JS code here. If required.
function ArrayProcess(){
	const initialPromise = new Promise((resolve)=>{
	setTimeOut(()=>{
	const ArrayNumber = [1,2,3,4];
			resolve(AarrayNumber);// pass this array to the next .then()
		},3000);
	});

	//now i am going to start chaining promise process yaha se
	initialPromise.then((AarrayNumber)=>{        // First .then() receives the numbers array
// Create another promise for filtering even numbers
		return new Promise((resolve)=>{
// Filter out odd numbers; keep even ones only
	const even = ArrayNumber.filter((num)=>{//num is the current number in the array being checked.
// num is not declared manually like let num = ....
// It is declared implicitly as a parameter of the function passed into .filter().		
		return num % 2 === 0;
				});
			setTimeout(()=>{
				// Display the even numbers (e.g., 2, 4) in the output div
				document.getElementById("output").textContent = even.join(",");
				// Pass the even numbers to the next .then()
                resolve(even);
			},1000);
		});
		
	}).then((even)=>{
		// Create another promise for multiplying by 2
		return new Promise((resolve)=>{
		const doubleNumber = even.map((num)=>{
			return num*2;
		});
			setTimeout(()=>{
				document.getElementById("output").textContent = doubleNumber.join(",");
				 // Resolve the final result (not needed further, but good practice)
              resolve(doubledNumber);
			},2000);
			
		});
	});
	
}
  window.onload = ArrayProcess;




