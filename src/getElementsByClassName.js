// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// video solution:


var getElementsByClassName = function (className, node) {
  var nodes = [];
  //this tells it where to start, instead of making a function and calling it on the document.body
  node = node || document.body;


  //compare node's classname with className input
  // the if I had in my solution still works!
  var parts = node.className.split(' ');
  if (parts.indexOf(className) >= 0) {
    //if matched, save node. 
    nodes.push(node);

  }

  //iterate over children
  for (var i = 0; i < node.children.length; i++) {
    //for each child invoke this function recursively
    var childResults = getElementsByClassName(className, node.children[i]);
    nodes = nodes.concat(childResults);
  }


  return nodes;
};
// // But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className) {

//     // your code here
//     //we are going to return an array that contains all elements with the specified class.  
//      var nodeList = [];

//      //define the function applied to the node and to it's children:

//      function test(node) {
//         if (node.classList && node.classList.contains(className)) {

//             nodeList.push(node);
//         }

//         //I adapted the part below from Douglas Crockford's "Walking the DOM", which taught me how to check all siblings of a parent node:
//         //     var walk_the_DOM = function walk(node, test) {
// //     test(node);
// //     node = node.firstChild;
// //     while (node) {
// //         walk(node, test);
// //         node = node.nextSibling;
// //     }
// // };
//if the first node checked doesn't meet the condition, then you go to the first Child of that node.
//while that first child exists you test it again going back up to the if.  

//          node = node.firstChild;
//     while (node) {
//         test(node);

//         //It'll recurse through all of the children from the first node, and when there are no more children, 
//         //it'll skip to the next sibling. this ensures you are doing depth, and also covering all the siblings 
//         // The recursive part will dig depth-first, leaving various while loops in the call stack to iterate over the siblings of each level. 
//         // When the recursion hits the base condition (node == falsy), the deepest while will advance to the next iteration, thus walking the deepest node's next sibling's descendants
//         node = node.nextSibling;
//     }


//     }





//     // this is basically setting the context of "this" inside the test function.  there was no way to specify that the you should run the
//     //test on which node.  this starts it off on the whole document.body. could have also done: function(test, node=document.body). (not correct syntax but point is give the function a second paramater to take node instead of calling it here)
//     test(document.body);

//     //either empty or has results. 

//     return nodeList;
// };
