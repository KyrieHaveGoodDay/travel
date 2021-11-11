// 台南景點api
var kaohsiung_tainan_url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Kaohsiung?$top=30&$format=JSON"
var xhr = new XMLHttpRequest()
xhr.open('GET', kaohsiung_tainan_url, true)
xhr.send()
xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    // console.log(data);
    var kaohsiung_list_view = document.getElementById('kaohsiung_list_view');
    var str = '';

    for (item in data) {
        // console.log(item);

        str =
            `
         <a href="#">
                <div class="view_card">
                
                    <div class="view_text">
                        <div>${data[item].Name}</div>
                        <p style="color:#000; margin-bottom:10px;">${data[item].Address}</p>
                        <p style="color:#000; margin-bottom:10px;">${data[item].Phone}</p>
                        <p style="color:#000; margin-bottom:10px;">${data[item].OpenTime}</p>
                        <p>${data[item].DescriptionDetail}</p>
                    </div>
                </div>
            </a>
         `
         kaohsiung_list_view.innerHTML += str;
    }
}

// // 台南食物api
var kaohsiung_food_url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/Kaohsiung?$top=30&$format=JSON"
var xhr = new XMLHttpRequest()
xhr.open('GET', kaohsiung_food_url, true)
xhr.send()
xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    // console.log(data);
    var kaohsiung_list_food = document.getElementById('kaohsiung_list_food');
    var str = '';

    for (item in data) {
        // console.log(item);

        str =
            `
      <a href="${data[item].WebsiteUrl}">
             <div class="view_card">
             
                 <div class="view_text">
                 
                     <div>${data[item].Name}</div>
                     <p style="color:#000; margin-bottom:10px;">${data[item].Address}</p>
                     <p style="color:#000; margin-bottom:10px;">${data[item].OpenTime}</p>
                     <p>${data[item].Description}</p>
                 </div>
             </div>
         </a>
      `
      kaohsiung_list_food.innerHTML += str;
    }
}

// // 台南住宿api
var kaohsiung_home_url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/Kaohsiung?$top=30&$format=JSON"
var xhr = new XMLHttpRequest()
xhr.open('GET', kaohsiung_home_url, true)
xhr.send()
xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    // console.log(data);
    var kaohsiung_list_home = document.getElementById('kaohsiung_list_home');
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
      kaohsiung_list_home.innerHTML += str;
    }
}

// // // 台南精選api
var kaohsiung_featured_url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/Kaohsiung?$top=30&$format=JSON"
var xhr = new XMLHttpRequest()
xhr.open('GET', kaohsiung_featured_url, true)
xhr.send()
xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    // console.log(data);
    var kaohsiung_list_featured = document.getElementById('kaohsiung_list_featured');
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
      kaohsiung_list_featured.innerHTML += str;
    }
}