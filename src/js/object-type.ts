console.groupCollapsed('*** Object Type ***');

enum Gender {
    MALE = 'Male', FEMALE = 'FEMALE'
}

// Object type: can define properties of object
const person : {
    name: string;
    age: number; // number type
    nickname: string; // string type
    hobbies: string[]; // array of type string
    favouriteActivity: any[]; // array of any type
    role: [number, string]; // tuple : fixed length array
    gender: Gender // ENUM
} = {
    name: 'Ankit',
    age: 26,
    nickname: 'Anku',
    hobbies: ['swimming', 'programming'],
    favouriteActivity : ['trekking'],
    role: [2, 'author'],
    gender: Gender.MALE
}

console.log(person.nickname);

for (let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

console.log(person.gender);

console.groupEnd();