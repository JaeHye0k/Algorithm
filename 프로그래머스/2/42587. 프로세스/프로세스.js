function solution(priorities, location) {
    const processes = priorities.map((e,i) => ({location: i, value: e}));
    const excutedProcesses = simulation(processes);
    return excutedProcesses.findIndex(process => process.location === location) + 1;
}

function simulation(processes) {
    const excutedProcesses = [];
    while (processes.length){
        const maxValue = processes.reduce((acc, cur) => {
            if(acc < cur.value) return cur.value;
            else return acc;
        }, 0)
        const i = processes.findIndex((e) => e.value === maxValue);
        const sliced = processes.slice(0, i+1);
        const rest = processes.slice(i+1);
        excutedProcesses.push(sliced.pop());
        processes = [...rest, ...sliced];
    }
    return excutedProcesses;
}

/*
    1. priorities의 각각의 원소의 원래 인덱스와 원소의 값을 객체로 저장 ex) {location: 0, value: 2}
    2. 시뮬레이션 진행
        2.1. 가장 큰 원소의 인덱스(i)를 구한다.
        2.2. 0 ~ i(포함) 까지를 자른다.
        2.3. 자른 배열을 pop하면 가장 큰 원소가 추출된다.
        2.4. 추출된 원소를 실행된 프로세스 배열에 push 한다.
        2.5. 자른 배열을 priorities 뒤에 붙인다.
    3. 실행된 프로세스 배열을 확인해서 원소의 location 프로퍼티가 location 과 일치하는 원소를 찾는다.
    4. 해당 원소의 인덱스를 반환한다.
*/