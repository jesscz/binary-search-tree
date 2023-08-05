

function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
    this.add = function(){
        let add = {
            value,
            left: null,
            right: null
        }
        return add;
    }
}


function Tree(root){
    let tree = { root: null }; //create tree base
    const array =  [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

    this.getArr = function(){
        return array;
    }
    this.getTree = function(){
        console.log(tree)
        return tree;
    }

    this.prepTree = function(){
        let sorted = array.sort((a,b)=>(a-b)) //sort array in ascending order
        let final = []; //final array with no duplicates 
        for (let i = 0; i  < sorted.length; i++){ //remove duplicates in array
            if (final.indexOf(sorted[i]) === -1){ //if value doesn't exist in the final array
                final.push(sorted[i]); //add that value to the final array
            }
        }
        this.buildTree(final)
    }

    this.buildTree = function(array, curr = tree.root){
        
        let len = Math.round(array.length/2) - 1;
        console.log(len)
        const initial = new Node(array[len])
        curr = initial.add();
       
        
        if(len >= 1){
            curr.left = this.buildTree(array.slice(0, len), curr.right);
            curr.right = this.buildTree(array.slice(len+1,array.length), curr.left);
        }
        console.log(array.slice(0, len));
        console.log(array.slice(len+1,array.length));
        console.log(tree)
        return tree;
    }

    this.buildTreeU = function(){ //builds unbalanced binary tree
        const initial = new Node(array[0]);
        tree.root = initial.add(); //add initial value to tree
        let i = 0; 
        
        for (i++;i<array.length;i++){ //counts through array by index number (starts at 1)
            const next = new Node(array[i]);
            let curr = tree.root; //starting with the value at the root
            let placed = false;
            while(placed == false){ //loop through the tree until the right spot (it is null/available)
                if (array[i] < curr.value && curr.left != null){
                curr = curr.left;
                }
                else if (array[i] > curr.value && curr.right != null){
                    curr = curr.right;
                }
                if (array[i] == curr.value){ //does not allow duplicates in the binary tree
                    break;
                }
                if (array[i] < curr.value && curr.left == null){
                    curr.left = next.add();
                    placed = true;
                    break;
                }
                else if (array[i] > curr.value && curr.right == null){
                    curr.right = next.add();
                    placed = true;
                    break;
                }
            }
        }
        console.log(tree.root)
        return tree.root;
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
        console.log(array)

    }
    


}



// buildTree(array);
const tree = new Tree();

// tree.prettyPrint(tree.buildTreeU());
// tree.insert(1211);
// tree.prettyPrint(tree.buildTree(tree.getArr()));
tree.prepTree();
tree.getTree();