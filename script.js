function searchTour() {
    var selectedCity = document.getElementById("citySelect").value;
    var numberOfPeople = document.getElementById("numberOfPeople").value;
    var departureDate = document.getElementById("departureDate").value;
    var returnDate = document.getElementById("returnDate").value;
    var cityInfoDiv = document.getElementById("cityInfo");

    // Xóa thông tin hiện tại
    cityInfoDiv.innerHTML = "";

    // Kiểm tra nếu số người và ngày đi ngày về đã được nhập
    if (numberOfPeople && departureDate && returnDate) {
        // Hiển thị danh sách tour tương ứng với thành phố được chọn
        switch (selectedCity) {
            case "hanoi":
                displayTourList("Hà Nội");
                break;
            case "danang":
                displayTourList("Đà Nẵng");
                break;
            case "hochiminh":
                displayTourList("Hồ Chí Minh");
                break;
            // Thêm các trường hợp khác nếu cần
            default:
                cityInfoDiv.innerHTML = "<p>Chọn một thành phố để hiển thị thông tin.</p>";
        }
    } else {
        // Hiển thị thông báo nếu số người hoặc ngày đi/ngày về chưa được nhập
        cityInfoDiv.innerHTML = "<p>Vui lòng nhập đầy đủ thông tin số người và ngày đi/ngày về.</p>";
    }

    // Ngăn chặn form submit mặc định
    return false;
}
//new page Dalat
function redirectToNewPage(city) {
    // console.log("City:", city); 
    // Xây dựng URL mới dựa trên thành phố được chọn
    var newPageUrl;
    if (city === 'dalat') {
        newPageUrl = 'DaLat/dalat.html?city=' + city;
    } else if (city === 'hoian') {
        newPageUrl = 'HoiAn/HoiAn.html?city=' + city;
    }
    else if (city === 'danang') {
        newPageUrl = 'DaNang/DaNang.html?city=' + city;
    }
    else if (city === 'HCM') {
        newPageUrl = 'HCM/HCM.html?city=' + city;
    }
    else if (city === 'mocchau') {
        newPageUrl = 'MocChau/MocChau.html?city=' + city;
    }
    else if (city === 'hagiang') {
        newPageUrl = 'HaGiang/HaGiang.html?city=' + city;
    } else if (city === 'hanoi') {
        newPageUrl = 'HaNoi/HaNoi.html?city=' + city;
    } 
    // Chuyển hướng trang
    window.location.href = newPageUrl;
}


var tourList = {
    hanoi: [
        { 
            name: "Tour Hà Nội 3 Ngày 2 Đêm",
            description: "Khám phá những địa điểm nổi tiếng ở Hà Nội trong 3 ngày 2 đêm. Bạn sẽ thăm Quảng trường Ba Đình, Hoàng thành Thăng Long, và thưởng thức ẩm thực độc đáo.",
            price: "$300",
            duration: "3 ngày 2 đêm",
            highlights: [
                "Quảng trường Ba Đình",
                "Hoàng thành Thăng Long",
                "Ẩm thực đặc sắc"
            ]
        },
        // Thêm các tour khác cho Hà Nội
    ],
    danang: [
        { 
            name: "Tour Đà Nẵng - Hội An 4 Ngày 3 Đêm",
            description: "Du lịch qua Đà Nẵng và Hội An trong 4 ngày 3 đêm. Bạn sẽ thăm Bà Nà Hills, Cầu Rồng và phố cổ Hội An.",
            price: "$450",
            duration: "4 ngày 3 đêm",
            highlights: [
                "Bà Nà Hills",
                "Cầu Rồng",
                "Phố cổ Hội An"
            ]
        },
        // Thêm các tour khác cho Đà Nẵng
    ],
    hochiminh: [
        { 
            name: "Tour Sài Gòn Mới",
            description: "Khám phá những địa điểm mới và sôi động của Sài Gòn. Bạn sẽ thăm các quận trung tâm, thưởng thức ẩm thực đa dạng.",
            price: "$280",
            duration: "3 ngày 2 đêm",
            highlights: [
                "Quận trung tâm",
                "Ẩm thực đa dạng"
            ]
        },
        // Thêm các tour khác cho Sài Gòn
    ],
};

function searchTour() {
    var citySelect = document.getElementById("citySelect");
    var selectedCity = citySelect.value;
    var tourListContainer = document.getElementById("tourList");
    var selectedCityTours = tourList[selectedCity];

    // Xóa nội dung cũ trong tourListContainer
    tourListContainer.innerHTML = "";

    if (selectedCityTours) {
        // Hiển thị danh sách tour cho thành phố đã chọn
        for (var i = 0; i < selectedCityTours.length; i++) {
            var tour = selectedCityTours[i];
            var tourItem = document.createElement("div");
            tourItem.classList.add("tour-item");
            tourItem.innerHTML = `
                <h2>${tour.name}</h2>
                <p>${tour.description}</p>
                <p>Giá: ${tour.price} | Thời gian: ${tour.duration}</p>
                <p>Điểm nổi bật: ${tour.highlights.join(", ")}</p>
                <button onclick="bookTour('${tour.name}')">Đặt tour</button>
            `;
            tourListContainer.appendChild(tourItem);
        }
    } else {
        var noTourMessage = document.createElement("p");
        noTourMessage.textContent = "Không có tour nào cho địa điểm đã chọn.";
        tourListContainer.appendChild(noTourMessage);
    }
    document.getElementById('tourList').style.display = 'block';

}



function bookTour(tourName) {
    console.log("Đã đặt tour:", tourName);
    alert(`Bạn đã đặt tour "${tourName}" thành công!`);
    document.getElementById('tourList').style.visibility = 'hidden';
    document.getElementById('tourList').style.position = 'absolute';


}

// ...
