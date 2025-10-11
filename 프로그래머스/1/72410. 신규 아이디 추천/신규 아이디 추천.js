function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id = new_id.replaceAll(/[^a-z\d-_\.]/g, '');
    new_id = new_id.replaceAll(/\.{2,}/g,'.');
    new_id = new_id.replaceAll(/(^\.|\.$)/g, '');
    new_id = new_id.trim() === '' ? 'a' : new_id;
    new_id = new_id.length >= 16 ? new_id.slice(0, 15).replaceAll(/(^\.|\.$)/g, '') : new_id;
    new_id = new_id.length <= 2 ? new_id.padEnd(3, new_id.at(-1)) : new_id;
    return new_id;
}

/**/