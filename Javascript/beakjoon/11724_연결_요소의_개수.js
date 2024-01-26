const fs = require('fs');
const input = fs.readFileSync('./Javascript/ex.txt').toString().trim().split("\n");
const [n,m] = input[0].split(" ").map(Number);
const graph = input.slice(1).map(e=>e.split(" ").map(Number));
graph.unshift([]);
const visited = Array(n+1).fill(false);
let result = 0;

function dfs(graph,v,visited){
    while(!visited[v]){
        visited[v] = true;
        v = graph[v][1]; 
    }
    return true;
}

for(let i=1; i<=m; i++){
    const [u,v] = graph[i];
    if(!visited[u]){
        if(dfs(graph,u,visited)) result += 1;
    }
}
console.log(result);
