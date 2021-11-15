
axios.get(
    'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=4&$format=JSON',
    {
        headers: getAuthorizationHeader()
    }
)
    .then(function (response) {
        var data = response.data;

        var attractions_data = document.getElementById('attractions_data');
        var str = '';

        for (item in data) {
            // console.log(item);

            str =
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
            attractions_data.innerHTML += str;
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