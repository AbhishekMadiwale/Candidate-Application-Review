console.log('CV Screener App');
//  Arrya of Objects
const data = [
    {
        name: 'rohan',
        age: 22,
        city: 'pune',
        language: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/65.jpg'
    },
    {
        name: 'shubham',
        age: 28,
        city: 'bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/57.jpg'
    },
    {
        name: 'rutuja',
        age: 42,
        city: 'hyderabad',
        language: 'python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },
    {
        name: 'Anjali',
        age: 20,
        city: 'Mumbai',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
]

// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
            {
                value: profiles[nextIndex++], done: false
            }:
            {done: true}
        }
    }
}
const candidates = cvIterator(data);
nextCV()

// button Listerner
const next = document.getElementById('next')
next.addEventListener('click', nextCV)



function nextCV() {
    const CurrentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(CurrentCandidate != undefined){
    image.innerHTML = `<img src='${CurrentCandidate.image}'>`;

    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">name: ${CurrentCandidate.name}</li>
    <li class="list-group-item">Age: ${CurrentCandidate.age}</li>
    <li class="list-group-item">Lives in : ${CurrentCandidate.city}</li>
    <li class="list-group-item">Primary Works on ${CurrentCandidate.language}</li>
    <li class="list-group-item">Framework is ${CurrentCandidate.framework}</li>
  </ul>`
    }
    else
    {
        alert("End of application");
        window.location.reload()
    }
}