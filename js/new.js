// 新北景點api
axios.get(
    'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/NewTaipei?$top=30&$format=JSON',
    {
        headers: getAuthorizationHeader()
    }
)
    .then(function (response) {
        var data = response.data;

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
    })
    .catch(function (error) {
        console.log(error);
    });




// 新北食物api
axios.get(
    'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/NewTaipei?$top=30&$format=JSON',
    {
        headers: getAuthorizationHeader()
    }
)
    .then(function (response) {
        var data = response.data;

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
    })
    .catch(function (error) {
        console.log(error);
    });


// 新北住宿api
axios.get(
    'https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/NewTaipei?$top=30&$format=JSON',
    {
        headers: getAuthorizationHeader()
    }
)
    .then(function (response) {
        var data = response.data;

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
    })
    .catch(function (error) {
        console.log(error);
    });

// 新北遊程api
axios.get(
    'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/NewTaipei?$top=30&$format=JSON',
    {
        headers: getAuthorizationHeader()
    }
)
    .then(function (response) {
        var data = response.data;

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
    })
    .catch(function (error) {
        console.log(error);
    });




function getAuthorizationHeader() {
    //  填入自己 ID、KEY 開始
    let AppID = 'faa52f1d358e4339a00d939fc5002668';
    let AppKey = 'OBjgPktCVJKz9cUq4DT-SU_A7jY';
    //  填入自己 ID、KEY 結束
    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
    return { 'Authorization': Authorization, 'X-Date': GMTString };
}