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

 

  // 台北旅遊api資料
  var dataUrl= "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=30&$format=JSON"
  var xhr = new XMLHttpRequest()
  xhr.open('GET',dataUrl, true)
  xhr.send()
  xhr.onload = function(){
      var data = JSON.parse(this.responseText);
      console.log(data);
      var taiper_view = document.getElementById('taiper_view');
      var str = '';
      
      for(item in data){
        console.log(item);
        
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
        taiper_view.innerHTML +=str;
      }
  }
  // 台北美食api資料
  var dataUrl= "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/Taipei?$top=30&$format=JSON"
  var xhr = new XMLHttpRequest()
  xhr.open('GET',dataUrl, true)
  xhr.send()
  xhr.onload = function(){
      var data = JSON.parse(this.responseText);
      console.log(data);
      var taiper_food = document.getElementById('taiper_food');
      var str = '';
      
      for(item in data){
        // console.log(item);
        
        // str=
        // `
        // <a href="${data[item].WebsiteUrl}">
        //         <div class="view_card">
        //             <img src="${data[item].Picture.PictureUrl1}">
        //             <div class="view_text">
        //                 <div>${data[item].Name}</div>
        //                 <p>${data[item].DescriptionDetail}</p>
        //             </div>
        //         </div>
        //     </a>
        // `
        // taiper_food.innerHTML +=str;
      }
  }