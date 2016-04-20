var groceryList = [
		{ 
			name: "strawberries",
			price: 2.99
		},
		{	name: "yogurt",
			price: 3.49
		},
		{	name: "juice",
			price: 1.99
		},
		{	name: "bagels",
			price: 2.49
		}
	];

var total = 0;

var list = document.getElementById("list");
groceryList.forEach(function(item){
var newItem = document.createElement("li");
newItem.innerText += item.name + ": " + item.price;
list.appendChild(newItem);
});








