const tabs=document.querySelectorAll('figure')
const tabContent= document.querySelectorAll('.movie')
const cinema= document.querySelector('.cinema')
const seats=document.querySelectorAll('.row .seat:not(occcupied)')
const total =document.getElementById('total')
const count=document.getElementById('count')
const tickets=document.querySelectorAll('button')

 


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
    const selectedCount=selectedSeats.length
    count.innerText= selectedCount
    return selectedCount
     
}
//movie selected

//button values
function ticketPrice(index){
    tickets.forEach(function(tick){
        total.innerText= updateSelectedSeats()* tick.value
    })
    
}

// the cinema
cinema.addEventListener('click', (e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
        updateSelectedSeats()
        ticketPrice()
        
    }
})
