
var swiper = new Swiper(".mySwiper", {
   
    navigation: {
        nextEl: ".swiper-right",
        prevEl: ".swiper-left",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on:{
        slideNextTransitionStart: function(swiper){
            gsap.to('.search',{duration:0.3 , x:-2000})
          },
        slideNextTransitionEnd: function(){
            // gsap.to('.search',{clearProps:"all" })
            gsap.to('.search',{duration:0.8 , ease:'bounce.out' , x:0  })
        },
        slidePrevTransitionEnd: function(swiper){
            gsap.to('.search',{duration:0.1 , x:-10 , repeat:3 , yoyo:true})
          },
      },
  });

 

  // 台北旅遊api資料
  var dataUrl= "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=30&$format=JSON"
  var xhr = new XMLHttpRequest()
  xhr.open('GET',dataUrl, true)
  xhr.send()
  xhr.onload = function(){
      var data = JSON.parse(this.responseText);
    //   console.log(data);
      var taiper_view = document.getElementById('taiper_view');
      var str = '';
      
      for(item in data){
        // console.log(item);
        
        str=
        `
        <a href="${data[item].WebsiteUrl}">
                <div class="view_card">
                    <img src="${data[item].Picture.PictureUrl1}" alt="${data[item].Picture.PictureDescription1}">
                    <div class="view_text">
                        <div>${data[item].Name}</div>
                        <p style="color:#000; margin-bottom:10px;">${data[item].Level}</p>
                        <p>${data[item].DescriptionDetail}</p>
                    </div>
                </div>
            </a>
        `
        taiper_view.innerHTML +=str;
      }
  }
  // 台北住宿api資料
  var dataUrl= "https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/Taipei?$top=30&$format=JSON"
  var xhr = new XMLHttpRequest()
  xhr.open('GET',dataUrl, true)
  xhr.send()
  xhr.onload = function(){
      var data = JSON.parse(this.responseText);
    //   console.log(data);
      var taiper_home = document.getElementById('taiper_home');
      var str = '';
      
      for(item in data){
        // console.log(item);
        
        str=
        `
        <a href="${data[item].WebsiteUrl}">
                <div class="view_card">
                    <img src="${data[item].Picture.PictureUrl1}" alt="店家未提供照片">
                    <div class="view_text">
                        <div>${data[item].Name}</div>
                        <p style="color:#000; margin-bottom:10px;">${data[item].Class}</p>
                        <p>${data[item].Description}</p>
                      
                    </div>
                </div>
            </a>
        `
        taiper_home.innerHTML +=str;
      }
  }
   // 台北精選遊程api資料
   var dataUrl= "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/Taipei?$top=30&$format=JSON"
   var xhr = new XMLHttpRequest()
   xhr.open('GET',dataUrl, true)
   xhr.send()
   xhr.onload = function(){
       var data = JSON.parse(this.responseText);
       console.log(data);
       var taiper_featured = document.getElementById('taiper_featured');
       var str = '';
       
       for(item in data){
         // console.log(item);
         
         str=
         `
         <a href="${data[item].WebsiteUrl}">
                 <div class="view_card">
                     <img src="${data[item].Picture.PictureUrl1}" alt="店家未提供照片">
                     <div class="view_text">
                         <div>${data[item].Name}</div>
                         <p style="color:#000; margin-bottom:10px;">${data[item].Location}</p>
                         <p>${data[item].Description}</p>
                     </div>
                 </div>
             </a>
         `
         taiper_featured.innerHTML +=str;
       }
   }