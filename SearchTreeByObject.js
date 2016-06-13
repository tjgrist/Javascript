function Node(data){
	this.data = data;
	this.leftNode = null;
	this.rightNode = null;
}
function Tree(node){
	this.headNode = node;
	console.log("headNode: ", this.headNode.data);

	this.append = function(node){
		var currentNode = this.headNode;
		var added = false;
		
	}
}