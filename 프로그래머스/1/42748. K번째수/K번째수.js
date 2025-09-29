function solution(array, commands) {
    return commands.map(([start, end, i]) => {
        // const slice = array.slice(start-1, end);
        // const sorted = 
        return array.slice(start-1, end).sort((a,b) => a-b).at(i-1) ?? 0;
    });
}