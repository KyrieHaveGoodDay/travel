// 新北景點api
var new_view_url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/NewTaipei?$top=30&$format=JSON"
var xhr = new XMLHttpRequest()
xhr.open('GET', new_view_url, true)
xhr.send()
xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    // console.log(data);
    var new_view = document.getElementById('new_view');
    var str = '';

    for (item in data) {
        // console.log(item);

        str =
            `
         <a href="${data[item].WebsiteUrl}">
                <div class="view_card">
                   
                    <div class="view_text">
                        <div>${data[item].Name}</div>
                        <p style="color:#000; margin-bottom:10px;">${data[item].Phone}</p>
                        <p style="color:#000; margin-bottom:10px;">${data[item].OpenTime}</p>
                        <p>${data[item].DescriptionDetail}</p>
                    </div>
                </div>
            </a>
         `
        new_view.innerHTML += str;
    }
}

// 新北食物api
var new_food_url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/NewTaipei?$top=30&$format=JSON"
var xhr = new XMLHttpRequest()
xhr.open('GET', new_food_url, true)
xhr.send()
xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    // console.log(data);
    var new_food = document.getElementById('new_food');
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
        new_food.innerHTML += str;
    }
}

// 新北住宿api
var new_home_url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/NewTaipei?$top=30&$format=JSON"
var xhr = new XMLHttpRequest()
xhr.open('GET', new_home_url, true)
xhr.send()
xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    // console.log(data);
    var new_home2 = document.getElementById('new_home2');
    var str = '';

    for (item in data) {
        // console.log(item);

        str =
            `
      <a href="${data[item].WebsiteUrl}">
             <div class="view_card">
                 
                 <div class="view_text">
                 <img src="${data[item].Picture.PictureUrl1}" alt="店家未提供照片">
                     <div>${data[item].Name}</div>
                     <p style="color:#000; margin-bottom:10px;">${data[item].Address}</p>
                     <p>${data[item].ParkingInfo}</p>
                 </div>
             </div>
         </a>
      `
        new_home2.innerHTML += str;
    }
}

// 新北住宿api
var new_featured_url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/NewTaipei?$top=30&$format=JSON"
var xhr = new XMLHttpRequest()
xhr.open('GET', new_featured_url, true)
xhr.send()
xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    // console.log(data);
    var new_featured2 = document.getElementById('new_featured2');
    var str = '';

    for (item in data) {
        // console.log(item);

        str =
            `
      <a href="${data[item].WebsiteUrl}">
             <div class="view_card">
                 
                 <div class="view_text">
                 <img src="${data[item].Picture.PictureUrl1}" alt="店家未提供照片">
                     <div>${data[item].Name}</div>
                     <p style="color:#000; margin-bottom:10px;">${data[item].Address}</p>
                     <p>${data[item].Organizer}</p>
                 </div>
             </div>
         </a>
      `
        new_featured2.innerHTML += str;
    }
}