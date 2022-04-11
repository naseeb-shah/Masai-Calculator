
		var arr=[]
		function show(val)
		{
			 var sai=document.getElementById('out').value+val;
			 console.log(sai)
			 document.getElementById('out').value=sai
		}
		
		
		function solve()
		{
			let x = document.getElementById("out").value
			let y = eval(x)
			arr.push(y)
			document.getElementById("out").value = y
			console.log(arr)
		}
		
		
		function shah()
		{
			
			document.getElementById("out").value = ""
		}
		var i=0
	function sa(){
		document.getElementById("out").value=arr[i]
		i++
		if(i==arr.length){
			alert('You have seen all the results!')
			i=0
		}
	}

	
