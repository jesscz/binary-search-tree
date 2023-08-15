const array =  [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const array = [64, 47, 9]
// const array = [37, 89, 4, 5]
//  [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345] = sorted array with no duplicates



function Node(value, left = null, right = null){
    return {
        value: value,
        left: left,
        right: right
    }
}


function Tree(array){
    let tree = { root: null }; //create tree base

    this.getArr = function(){
        return array;
    }

    this.getTree = function(){
        console.log(tree)
        return tree;
    }

    this.prepTree = function(){ //returns sorted array with no duplicates
        let sorted = array.sort((a,b)=>(a-b)) //sort array in ascending order
        let final = []; //final array with no duplicates 
        for (let i = 0; i  < sorted.length; i++){ //remove duplicates in array
            if (final.indexOf(sorted[i]) === -1){ //if value doesn't exist in the final array
                final.push(sorted[i]); //add that value to the final array
            }
        }
        return final;
    }

    this.prettyPrint = function(node, prefix = '', isLeft = true){ //this function is copied from the odin project
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }

    this.buildTree = function(arr, start = 0, end = arr.length - 1){ //builds balanced binary tree
        if (start > end) return null;
        
        let mid = Math.floor((start + end) / 2);
        let node = Node(arr[mid]);
        
        node.left = this.buildTree(arr, start, mid - 1);
        node.right = this.buildTree(arr, mid + 1, end);
        
        return node;
    }

    this.insert = function(value){ //adds value to be inserted to the array (which the tree is built from)
        // const next = new Node(value);
        // let curr = tree.root;
        // let placed = false;
        // console.log(next)
        // while (curr.right != null){
        //     curr = curr.right;
        // }
        // curr.right = next.add()
        array.push(value);
        // console.log(array)

    }


}


const tree = new Tree(array);


tree.prettyPrint(tree.buildTree(tree.prepTree()));