const data = [
  {
    name: 'john',
    age: '32',
    gender: 'male',
    lookingFor: 'female',
    location: 'Norway',
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    name: 'halima',
    age: '34',
    gender: 'female',
    lookingFor: 'male',
    location: 'drrway',
    image: 'https://randomuser.me/api/portraits/women/26.jpg'
  },
  {
    name: 'john doe ',
    age: '43',
    gender: 'male',
    lookingFor: 'female',
    location: 'North way',
    image: 'https://randomuser.me/api/portraits/men/25.jpg'
  },
  {
    name: 'alisha',
    age: '54',
    gender: 'female',
    lookingFor: 'male',
    location: 'Norway',
    image: 'https://randomuser.me/api/portraits/women/32.jpg'
  },
  {
    name: 'johd khan',
    age: '52',
    gender: 'male',
    lookingFor: 'female',
    location: 'Norway south',
    image: 'https://randomuser.me/api/portraits/men/72.jpg'
  },
]
// cal for iterator
const profile = profileIterator(data);
// call first profile
nextProfile();
// Next event
document.getElementById('next').addEventListener('click',nextProfile)
function nextProfile(){
  const currentProfile = profile.next().value;
  if(currentProfile !== undefined){
  document.getElementById('profileDisplay').innerHTML = 
  `<li>Name: ${currentProfile.name}</li>
  <li>Age: ${currentProfile.age}</li>
  <li>Location: ${currentProfile.location}</li>
  <li>Preference: ${currentProfile.gender}looking for ${currentProfile.lookingFor}</li>`;
  document.getElementById('imageDisplay').innerHTML = 
  `<img src="${currentProfile.image}" alt="Profile">`
}else{
  window.location.reload();
}
}

function profileIterator(profile){
  let index =0;
  return{
    next: function(){
    return index < profile.length ? 
    {value: profile[index++], done: false} :
    {done: true};
    }
  }
}
