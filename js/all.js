var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-right",
        prevEl: ".swiper-left",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

let select = document.getElementById('search_select');
let search_a = document.getElementById('search_a');
search_a.addEventListener('click',(e)=>{
  e.preventDefault();
  
  let place = search_select.place.value;
  if(place ==='taipei'){
    window.location.href='taipei/';
  }
  if(place ==='newTaipei'){
    window.location.href='NewTaipei/';
  }
  if(place ==='tainan'){
    window.location.href='Tainan/';
  }
  if(place ==='kaohsiung'){
    window.location.href='Kaohsiung/';
  }
})