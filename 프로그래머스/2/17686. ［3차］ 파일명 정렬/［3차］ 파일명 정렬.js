function solution(files) {
    return files.sort(sortCb);
}

function toSplit(file) {
    const regex = /(^\D+)(\d{1,5})(.*$)/;
    return file.match(regex);
}

function sortCb(a, b) {
    a = toSplit(a).slice(1);
    b = toSplit(b).slice(1);
    
    if(a[0].toLowerCase() !== b[0].toLowerCase()) {
        return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
    } else if(parseInt(a[1]) !== parseInt(b[1])) {
        return parseInt(a[1]) - parseInt(b[1]);
    } else {
        return 0;
    }
}

/*
HEAD = \D
NUMBER = \d{1,5}
TAIL = .?
*/