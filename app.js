
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("toggle");
    });







let btn = document.querySelector('.reviewbtn');
let formbtn = document.querySelector('.submitbtn');
let form = document.querySelector('.formcontainer');
let reviewContainer = document.querySelector('.review-container');


btn.addEventListener('click', () => {
    form.style.display = 'block';
    btn.style.display = 'none';
});


formbtn.addEventListener('click', (event) => {
    event.preventDefault(); 

 
    let name = document.querySelector('#name').value;
    let rating = document.querySelector('#rating').value; 
    let reviewText = document.querySelector('#review').value; 

    let reviewlist = document.createElement('div');
    reviewlist.classList.add('review-box');
    
    if (name==="" || rating==="" || reviewText===""){
        alert("Form must be Completed Properly")
        return

    }

    reviewlist.innerHTML = `
        <h3> ${name}</h3>
        <div class="rating">Rating: ${rating}/5</div>
        <p class="review-text">${reviewText}</p>
    `;


    reviewContainer.prepend(reviewlist);

    
    document.querySelector('#name').value = "";
    document.querySelector('#rating').value = "";
    document.querySelector('#review').value = "";

  
    form.style.display = 'none';
    btn.style.display = 'block';
});



// -----silder-section------

const logos = document.querySelector('.logos');
const clone = logos.innerHTML;
logos.innerHTML += clone; // Duplicate the entire set of logos
