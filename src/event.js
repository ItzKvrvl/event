const event={
    title: "Koncert zespołu X",
    date: "2024-06-15",
    location: "Warszawa",
};

console.log(event.title);
console.log(event.date);
console.log(event.location);
console.log();

//-----------------
const participant={};
participant.name="Karol";
participant.email="xyz@123.com";

console.log(participant.name);
console.log(participant.email);
console.log();
//------------------

const events=[
    {
        title: "Koncert zespołu Y",
        date: "2024-07-20",
        location: "Kraków",
    },
    {
        title: "Festiwal Filmowy",
        date: "2024-08-05",
        location: "Gdańsk",
    },
    {
        title: "Wystawa Sztuki",
        date:  "2024-09-10",
        location: "Wrocław",
    }
];

events.push(
    {
        title: "Seminarium o JavaScript",
        date: "2024-10-15",
        location: "Łódź"
    });
console.log(events.length);
console.log();

events.slice(3,4);
events.shift();
console.log(events.length);
console.log(events);
console.log();

events.forEach(date => console.log("Daty: "+date.date));