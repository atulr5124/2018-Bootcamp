window.setTimeout(function() {
	var todos = [];
	var input = prompt("What would you like to do?");

	while(input != "quit") {
		if(input === "list") {
			listTodo();
		} else if (input === "new") {
			addTodo();
		}  else if(input === "delete") {
			deleteTodo();
		}
		input = prompt("What would you like to do?");
	}

	console.log("Exiting. Bye!");

	function addTodo() {
		var newtodo = prompt("Enter new todo");
		todos.push(newtodo);
		console.log(newtodo+" added to list");
	}

	function deleteTodo() {
		var index = prompt("Enter index of ToDo to delete?");
		var deleted = todos.pop(todos[index]);
		//todos.splice(index,1);
		console.log(deleted+" has been removed.");
	}

	function listTodo() {
		console.log("*********");
		todos.forEach(function(todo){
			console.log(todos.indexOf(todo)+": "+todo);
		});
		console.log("*********");
	}
}, 500);