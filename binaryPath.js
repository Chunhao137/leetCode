// root = { val: 1,
//   right: { val: 3, right: null, left: null },
//   left: 
//    { val: 2,
//      right: { val: 6, right: null, left: null },
//      left: { val: 5, right: null, left: null } } }

var binaryTreePaths = function(root) {
    var result =[], 
        path=[]; 
    binaryTreePathsRecur(root,path, result);
    return result; 
}

var binaryTreePathsRecur = function(node,path,result){
    if(node===null){
        return 
    }
    if(!node.left && !node.right){
        var ans=""
        for(var i=0; i<path.length;i++){
            ans+=path[i].val+"->"
        }
        result.push(ans+node.val)
    }
    if(node.left){
        path.push(node);
        binaryTreePathsRecur(node.left,path,result);
        path.pop()
    }
    if(node.right){
        path.push(node);
        binaryTreePathsRecur(node.right,path,result)
        path.pop(); 
    }
}
