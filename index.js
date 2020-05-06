const tab=document.querySelectorAll('figure')
const tabContent= document.querySelectorAll('.movie')

// show movie details
function showTab(tabIndex){
    tab.forEach(function(tab,i){
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
