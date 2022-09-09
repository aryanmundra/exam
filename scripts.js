
fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3').then((data)=>{
  return data.json();
}).then((completedata)=>{
  let data1 ="";
  completedata.map((values)=>{
      data1+=`<div class = "cards">
      <div class="card">
      <div class="card__image"></div>
      <div class="card__content">
      <h4> Title </h4>
        <p> ${values.title}</p>
        <h4> Body </h4>
        <p> ${values.body}</p>
      </div>
      <div class="card__info">
      </div>
    </div>
    </div>`
  });
  document.getElementById("cardsnew").innerHTML=data1;

  
}).catch((err)=>{
  console.log(err);
})




function validate(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var feedback_title = document.getElementById("feedback_title").value;
  var message_box = document.getElementById("message_box").value;
  var ele = document.getElementsByName('gender');          
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  alert("Form Submitted Successfully!");
  return true;
  
}

function my_function() {

  console.log('Name: '+document.getElementById('name').value ) ;
  console.log('Email: '+document.getElementById('email').value);
  console.log('Feedback title: '+document.getElementById('feedback_title').value);
  console.log('Message: '+document.getElementById('message_box').value);
  

}






var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}