const tabs=document.querySelectorAll('figure')
const tabContent= document.querySelectorAll('.movie')
const cinema= document.querySelector('.cinema')
const seats=document.querySelectorAll('.row .seat:not(occcupied)')
const total =document.getElementById('total')
const count=document.getElementById('count')

const movieSelect = document.getElementById('options');


 
let ticketPrice = +movieSelect.value
console.log(ticketPrice)

// show movie details
function showTab(tabIndex){
    tabs.forEach(function(tab,i){
        if(tabIndex===i){
            tab.classList.add('active')
        }
        else{
            tab.classList.remove('active')
        }
    })
    tabContent.forEach(function(movie){
        movie.style.display ="none"
        
    })
    tabContent[tabIndex].style.display="block"
}
showTab(2)


//update selected seats
function updateSelectedSeats(){
    const selectedSeats= document.querySelectorAll('.row .seat.selected')

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat)); //get indexes of selected seats
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex)); //save to local storage
    
    const selectedCount=selectedSeats.length
    count.innerText= selectedCount
    total.innerText = selectedCount * ticketPrice
     
}
//saving movie data
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem("Price",moviePrice)
    localStorage.setItem("Movie",movieIndex)

}
//populating UI with saved data
function populateUI(){
   const selectedSeats= JSON.parse(localStorage.getItem('selectedSeats')) 
   if(selectedSeats.length !== 0 && selectedSeats !== null){
    seats.forEach(function(seat,index){
        if(selectedSeats.indexOf(index) > -1){
            seat.classList.add('selected')
        }
    })
   }
   const selectedMovieIndex=localStorage.getItem('Movie')
   if(selectedMovieIndex !==null){
       movieSelect.selectedIndex=selectedMovieIndex
   }
  
}
//movie selected price update
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value)
    updateSelectedSeats();
  });


// the cinema
cinema.addEventListener('click', (e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
        updateSelectedSeats()
        
        
    }
})
populateUI()
updateSelectedSeats()
