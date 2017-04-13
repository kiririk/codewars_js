function sumTheTreeValues(root){
	return root.value + (root.left !== null ? sumTheTreeValues(root.left) : 0)
					  + (root.right !== null ? sumTheTreeValues(root.right) : 0);
}

var simpleNode = {value: 11, left: {value: 0, left: null, right: null}, 
							 right: {value: 0, left: null, 
							 				   right: {value: 1, left: null, right: null}}}
console.log(sumTheTreeValues(simpleNode));

// return !root ? 0 : root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);

// function sumTheTreeValues(root){
//   var val=root.value;
//   if (root.left!=null) val+=sumTheTreeValues(root.left);
//   if (root.right!=null) val+=sumTheTreeValues(root.right);
//   return val
// }

// const sumTheTreeValues=root=>!root?0:root.value+sumTheTreeValues(root.left)+sumTheTreeValues(root.right)