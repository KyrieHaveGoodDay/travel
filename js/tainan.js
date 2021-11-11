// 台南景點api
var new_tainan_url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Tainan?$top=30&$format=JSON"
var xhr = new XMLHttpRequest()
xhr.open('GET', new_tainan_url, true)
xhr.send()
xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    // console.log(data);
    var tainan_view_list = document.getElementById('tainan_view_list');
    var str = '';

    for (item in data) {
        // console.log(item);

        str =
            `
         <a href="${data[item].WebsiteUrl}">
                <div class="view_card">
                <img src="${data[item].Picture.PictureUrl1}" alt="店家未提供照片">
                    <div class="view_text">
                        <div>${data[item].Name}</div>
                        <p style="color:#000; margin-bottom:10px;">${data[item].Phone}</p>
                        <p style="color:#000; margin-bottom:10px;">${data[item].OpenTime}</p>
                        <p>${data[item].DescriptionDetail}</p>
                    </div>
                </div>
            </a>
         `
         tainan_view_list.innerHTML += str;
    }
}

// 台南食物api
var tainan_food_url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/Tainan?$top=30&$format=JSON"
var xhr = new XMLHttpRequest()
xhr.open('GET', tainan_food_url, true)
xhr.send()
xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    // console.log(data);
    var tainan_food_list = document.getElementById('tainan_food_list');
    var str = '';

    for (item in data) {
        // console.log(item);

        str =
            `
      <a href="${data[item].WebsiteUrl}">
             <div class="view_card">
             <img src="${data[item].Picture.PictureUrl1}" alt="店家未提供照片">
                 <div class="view_text">
                 
                     <div>${data[item].Name}</div>
                     <p style="color:#000; margin-bottom:10px;">${data[item].Address}</p>
                     <p style="color:#000; margin-bottom:10px;">${data[item].OpenTime}</p>
                     <p>${data[item].Description}</p>
                 </div>
             </div>
         </a>
      `
      tainan_food_list.innerHTML += str;
    }
}

// 台南住宿api
var tainan_home_url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/Tainan?$top=30&$format=JSON"
var xhr = new XMLHttpRequest()
xhr.open('GET', tainan_home_url, true)
xhr.send()
xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    // console.log(data);
    var tainan_home_list = document.getElementById('tainan_home_list');
    var str = '';

    for (item in data) {
        // console.log(item);

        str =
            `
      <a href="${data[item].WebsiteUrl}">
             <div class="view_card">
             <img src="${data[item].Picture.PictureUrl1}" alt="店家未提供照片">
                 <div class="view_text">
                 
                     <div>${data[item].Name}</div>
                     <p style="color:#000; margin-bottom:10px;">${data[item].Address}</p>
                     <p>${data[item].ParkingInfo}</p>
                 </div>
             </div>
         </a>
      `
      tainan_home_list.innerHTML += str;
    }
}

// // 台南精選api
var tainan_featured_url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/Tainan?$top=30&$format=JSON"
var xhr = new XMLHttpRequest()
xhr.open('GET', tainan_featured_url, true)
xhr.send()
xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    console.log(data);
    var tainan_featured_list = document.getElementById('tainan_featured_list');
    var str = '';

    for (item in data) {
        // console.log(item);

        str =
            `
      <a href="${data[item].WebsiteUrl}">
             <div class="view_card">
             <img src="${data[item].Picture.PictureUrl1}" alt="店家未提供照片">
                 <div class="view_text">
                 
                     <div>${data[item].Name}</div>
                     <p style="color:#000; margin-bottom:10px;">${data[item].Address}</p>
                     <p>${data[item].Organizer}</p>
                 </div>
             </div>
         </a>
      `
      tainan_featured_list.innerHTML += str;
    }
}