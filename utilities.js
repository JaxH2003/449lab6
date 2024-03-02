function rando() {
    const names =  ['Jack', 'Steve', 'Billy', 'Jacob', 'John', 'Lilly', 'Emily', 'Hannah', 'Bob', 'Oscar'];
    return {
        get name() {
            return names[Math.floor(Math.random()* names.length)];
        },
    }
}