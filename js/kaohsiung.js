// 高雄景點api
axios.get(
    'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Kaohsiung?$top=30&$format=JSON',
    {
        headers: getAuthorizationHeader()
    }
)
    .then(function (response) {
        var data = response.data;

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
    })
    .catch(function (error) {
        console.log(error);
    });



// 高雄食物api
axios.get(
    'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/Kaohsiung?$top=30&$format=JSON',
    {
        headers: getAuthorizationHeader()
    }
)
    .then(function (response) {
        var data = response.data;

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
    })
    .catch(function (error) {
        console.log(error);
    });

// 高雄住宿api
axios.get(
    'https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/Kaohsiung?$top=30&$format=JSON',
    {
        headers: getAuthorizationHeader()
    }
)
    .then(function (response) {
        var data = response.data;

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
    })
    .catch(function (error) {
        console.log(error);
    });

// 高雄精選api
axios.get(
    'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/Kaohsiung?$top=30&$format=JSON',
    {
        headers: getAuthorizationHeader()
    }
)
    .then(function (response) {
        var data = response.data;

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