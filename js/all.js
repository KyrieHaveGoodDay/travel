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
  search_a.addEventListener('click', (e) => {
      e.preventDefault();

      let place = search_select.place.value;
      if (place === 'taipei') {
          window.location.href = '../taipei/';
      }
      if (place === 'newTaipei') {
          window.location.href = '../NewTaipei/';
      }
      if (place === 'tainan') {
          window.location.href = '../Tainan/';
      }
      if (place === 'kaohsiung') {
          window.location.href = '../Kaohsiung/';
      }
  })

  // 台北旅遊api資料
  var dataUrl= "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=30&$format=JSON"
  var xhr = new XMLHttpRequest()
  xhr.open('GET',dataUrl, true)
  xhr.send()
  xhr.onload = function(){
      var data = JSON.parse(this.responseText);
      console.log(data);
      var nav_home = document.getElementById('nav_home');
      var str = '';
      
      for(item in data){
        
        str=
        `
        <a href="${data[item].WebsiteUrl}">
                <div class="view_card">
                    <img src="${data[item].Picture.PictureUrl1}">
                    <div class="view_text">
                        <div>${data[item].Name}</div>
                        <p>${data[item].DescriptionDetail}</p>
                    </div>
                </div>
            </a>
        `
        nav_home.innerHTML +=str;
      }
  }
  