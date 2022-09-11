// Select DOM Elements
const container = document.querySelector('.container'),
select_btn = container.querySelector('.select_btn')
const search_box = document.querySelector('input')
const options = document.querySelector('.options')

// array of districts
const districts = [
    'Tuticorin',
    'Chennai',
    'Chengalpattu',
    'Coimbatore',
    'Ariyalur',
    'Cuddalore',
    'Dharmapuri',
    'Dindigul',
    'Erode',
    'Kallakurichi',
    'Kanchipuram',
    'Kanyakumari',
    'Karur',
    'Krishnagiri',
    'Madurai',
    'Nagapattinam',
    'Namakkal',
    'Nilgiris',
    'Perambalur',
    'Pudukkottai' ,            
    'Ranipet',
    'Ramanathapuram',
    'Salem',
    'Tiruchirappalli',
    'Tirunelveli',
    'Tirupathur',
    'Tiruppur',
    'Tiruvallur',
    'Tiruvannamalai',
    'Tiruvarur',
    'Vellore',
    'Theni',
    'Viluppuram',
    'Thanjavur',
    'Tenkasi',
    'Sivaganga',
    'Virudhunagar'
]

// toggle btn
select_btn.addEventListener('click', () => {
    container.classList.toggle('active')
})

function addDistrict() {
    options.innerHTML = ''
    districts.forEach((district) => {
    // adding array value insert in li
      let li = `<li onclick="updateName(this)">${district}</li>`
      options.insertAdjacentHTML('beforeend', li)
    })
}
addDistrict() 

// updateName insert the name
function updateName(selectLi) {
    search_box.value = ''
    addDistrict()
    container.classList.remove('active')
    select_btn.firstElementChild.innerHTML = selectLi.innerHTML
}

// search_box
search_box.addEventListener('keyup', () =>{ 
    let arr = [] // create emty array
    let selectitem = search_box.value
    arr = districts.filter((data) => {
        return data.toLowerCase().startsWith(selectitem)

    }).map((data) =>  `<li onclick="updateName(this)">${data}</li>`).join('')
    
    // error
   options.innerHTML = arr ? arr : 'Oops! District not found'
})
