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
                displayTourList("Hà Nội", departureDate, returnDate);
                break;
            case "danang":
                displayTourList("Đà Nẵng", departureDate, returnDate);
                break;
            case "hochiminh":
                displayTourList("Hồ Chí Minh", departureDate, returnDate);
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

function displayTourList(cityName, departureDate, returnDate) {
    var cityInfoDiv = document.getElementById("cityInfo");
    var selectedCityTours = tourList[cityName];

    // Xóa nội dung cũ trong cityInfoDiv
    cityInfoDiv.innerHTML = "";

    if (selectedCityTours) {
        // Hiển thị danh sách tour cho thành phố đã chọn
        for (var i = 0; i < selectedCityTours.length; i++) {
            var tour = selectedCityTours[i];
            // Tính toán duration dựa trên ngày đi và ngày về
            var duration = calculateDuration(departureDate, returnDate);
            // Cập nhật giá trị duration trong tour
            tour.duration = duration + " ngày";

            var tourItem = document.createElement("div");
            tourItem.classList.add("tour-item");
            tourItem.innerHTML = `
                <h2>${tour.name}</h2>
                <p>${tour.description}</p>
                <p>Giá: ${tour.price} | Thời gian: ${tour.duration}</p>
                <p>Điểm nổi bật: ${tour.highlights.join(", ")}</p>
                <button onclick="bookTour('${tour.name}')">Đặt tour</button>
            `;
            cityInfoDiv.appendChild(tourItem);
        }
    } else {
        var noTourMessage = document.createElement("p");
        noTourMessage.textContent = "Không có tour nào cho địa điểm đã chọn.";
        cityInfoDiv.appendChild(noTourMessage);
    }
    document.getElementById('cityInfo').style.display = 'block';
}




function bookTour(tourName) {
    console.log("Đã đặt tour:", tourName);
    alert(`Bạn đã đặt tour "${tourName}" thành công!`);
    document.getElementById('tourList').style.visibility = 'hidden';
    document.getElementById('tourList').style.position = 'absolute';


}



