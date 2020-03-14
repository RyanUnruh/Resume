// const resume = {
//             Name: 'Name: Ryan',
//         Career: 'Career: Software Developer',
//         Description:'this is a description',
//         interests:'football, coding, other interesting things',
//         PreviousExperience: 'test'}
//name, career field, description, interests, past positions,
//description of jobs, list of skills
var name = 'Ryan';
var career = 'Software Dev';
var aboutMe = 'i do stuff';
var pastPos = 'Videographer';
var skills = 'videos, ographing, vibing';
var ph = 'Place Holder';
function displayPosition(companyName, jobTitle, description) {
    console.log('Name: ' + companyName.toUpperCase(), 'Career: ' + jobTitle, 'Description: ' + description);
}
function displaySkill(skill, isCool) {
    if (isCool === true) {
        console.log("BAM: " + skill);
    }
    else {
        console.log(skill);
    }
}
console.log('Name: ' + name.toUpperCase());
console.log('Career: ' + career);
console.log('Description: I Am a software developer.' + '\n');
console.log("My Interests:");
console.log("* Videography");
console.log("* Swimming" + '\n');
displayPosition("Publix", 'clerk', "do stuff");
displayPosition("Target", "CEO", "sweep" + '\n');
console.log('My Skills:');
displaySkill("Playdough", false);
displaySkill("Pilot", true);
