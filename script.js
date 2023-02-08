
const array =  [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

function Node(value){
    this.value = value;
    this.add = function(){
        let add = {
            value: value,
            left: null,
            right: null
        }
        return add;
    }
}

function Tree(array, root){

}

function buildTree(array){
    let i = 0;
    const initial = new Node(array[0]);
    let tree = { root: null };
    tree.root = initial.add();
    console.log(tree.root.value);//
    console.log(array.length)//
    
    for (i++;i<array.length;i++){ //counts through array by index number (starts at 1)
        const next = new Node(array[i]);
        let curr = tree.root;
        let placed = false;
        while(placed == false){
            if (array[i] < curr.value && curr.left != null){
            curr = curr.left;
            }
            else if (array[i] >= curr.value && curr.right != null){
                curr = curr.right;
            }
            if (array[i] < curr.value && curr.left == null){
                curr.left = next.add();
                placed = true;
                break;
            }
            else if (array[i] >= curr.value && curr.right == null){
                curr.right = next.add();
                placed = true;
                break;
            }
        }
        

        // console.log(create.add())
    }
    console.log(tree)



    
}

buildTree(array);


