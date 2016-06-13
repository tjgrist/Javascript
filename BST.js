"use strict"

var tree = new Tree(15);

function Node(inputNumber){
	this.value = inputNumber;
	this.leftNode = null;
	this.rightNode = null;
}
function Tree(firstNodeValue){
    this.headNode = new Node(firstNodeValue);
    console.log("headnode: ", this.headNode.value);

    this.loadTree = function(){
    	var nums = [3,5,14,15,21,11,7,2,1,4,6,16,17,18,19,36];
		for(var i in nums){
			tree.addNode(nums[i])
		}
		tree.findNode(nums[6]);
    }

    this.addNode = function(value){
        var currentNode = this.headNode;
        var isAdded = false;
        if (currentNode == null){
            currentNode = new Node(value);
            console.log("Created headNode: ", currentNode.value);
        }
        else{
            do {
                if (value <= currentNode.value){
                    if (currentNode.leftNode == null){
                        currentNode.leftNode = new Node(value);
                        console.log(value + " was added to the left of " + currentNode.value);
                        isAdded = true;
                    }
                    else{
                        currentNode = currentNode.leftNode;
                    }
                }
                else if (value >= currentNode.value){
                    if (currentNode.rightNode == null){
                        currentNode.rightNode = new Node(value);
                        console.log(value + " was added to the right of " + currentNode.value);
                        isAdded = true;
                    }
                    else{
                        currentNode = currentNode.rightNode;
                    }
                }
            }while(isAdded != true);
        }
    }
    this.findNode = function(nodeValue){
        var found = false;
        var searchNode = this.headNode;
        if (nodeValue == searchNode){
            console.log("This is the node value of the head of the tree.");
        }
        console.log("Searching for: " + nodeValue);
        do {
            if (nodeValue <= searchNode.value){
                console.log("Encountered: " + searchNode.value + " went left/");
                searchNode = searchNode.leftNode;
                if(searchNode.value === nodeValue){
                    console.log("Found " + nodeValue);
                    found = true;
                }
            }
            else if (nodeValue >= searchNode.value){
                console.log("Encountered: " + searchNode.value + " went right/");
                searchNode = searchNode.rightNode;
                if (searchNode.value === nodeValue){
                    console.log("Found " + nodeValue );
                    found = true;
                }
            }
        }while( found != true);
    }
    this.balanceTree = function(){
        var balanced = false;
        var currentNode = this.headNode;
        while (currentNode.leftNode != null){
        	currentNode = currentNode.leftNode;
        }
        this.headNode = currentNode;
        //if (currentNode.)
	}
}	

function startReadline(){
	var readline = require('readline');

	var rli = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
	});
	return rli;
}

var getUserTree = function(tree, rli){
	rli.question('', function(answer) {
  	if (answer === 'q'){
  		return rli.close();
  	}
  	else {
  		tree.addNode(answer);
  		getUserTree(tree, rli);
  	}
});
}
var rli = startReadline();
getUserTree(tree, rli);

tree.loadTree();

//tree.balanceTree();