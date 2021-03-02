interface Monument {
  name: string;
  heightInMeters: number;
}

// decleration of the array of type Monument
const monuments: Monument[] = [];

monuments.push({
  name: "Statue of liberty",
  heightInMeters: 46,
});

monuments.push({
  name: "Peter the greate",
  heightInMeters: 96,
});

monuments.push({
    name:'Angle of North',
    heightInMeters:20
});

monuments.push({
    name:'Angle of South',
    heightInMeters:10
});

function findTheHeighest(a:Monument, b:Monument){
    if ( a.heightInMeters > b.heightInMeters) return -1;
    if ( a.heightInMeters < b.heightInMeters) return 1;
    return 0;
}

let heighestMonument = monuments.sort(findTheHeighest)

console.log(`The heighest monument is ${heighestMonument[0].name}`)
