var data_view = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=4&$format=JSON"
var xhr = new XMLHttpRequest()
xhr.open('GET', data_view, true)
xhr.send()
xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    //   console.log(data);
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
}