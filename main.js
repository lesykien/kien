
// thay đổi header khi cuộn chuột 
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
})

// --------------------------------------


// thay đổi ảnh khi click vào bên trái 
let index = 3;
function traiImage() {
    let listImg = ['img/Highlight-Hero-Windows11-GlobalLaunch_VP5-1596x600.jpg',
        'img/RWJyKb-Msft-Hero-New-Microsoft-Accessories-for-Teams_VP5-1920x720.webp',
        'img/RE4Ufmp-Msft-Surface-Pro-8-with-Slim-pen-and-Microsoft-Ocean-Plastic-Mouse-featuring-an-Earth-Day-theme_VP5-1920x720.avif',
        'img/RWD7KO-Msft-Designer-Compact-keyboard-next-to-a-Microsoft-Bluetooth-ergonomic-mouse_VP5-1920x720.webp'
    ]
    document.getElementById('img').src = listImg[index];
    index--;
    if (index == 0) {
        index = 3;
    }
    // thay đổi chữ trên banner 
    let b = document.getElementsByClassName('banner__boy');
    let a = document.getElementsByClassName('banner__content');
    let c = document.querySelectorAll('.banner__item a');
    if (index == 1) {
        a[0].innerHTML = 'Sản phẩm mới';
    }
    else if (index == 2) {
        a[0].innerHTML = '<div class = "new">Giới thiệu Bing mới</div>';
        b[0].innerHTML = '<div class="new">Mọi thứ bạn cần để hoàn thành nhiều việc hơn, trong thời gian ngắn hơn</div> '
    }
    else if (index == 3) {
        a[0].innerHTML = '<div class = "new">Microsoft 365</div>';
        b[0].innerHTML = '<div class="new">Mọi thứ bạn cần để hoàn thành nhiều việc hơn, trong thời gian ngắn hơn</div> '
    }
    else if (index == 0) {
        a[0].innerHTML = 'Giới thiệu Bing mới';
        b[0].innerHTML = 'Đặt câu hỏi thực tế. Trò chuyện và tạo lập. Nhận câu trả lời tốt hơn nhờ tính năng Copilot dựa trên nền công nghệ AI cho web.'
    }
}
//--------------------------------------------------------------------


// thay đổi ảnh khi click vào bên phải  
let index1 = 0
let banner = document.getElementById('banner');
let men = document.getElementById('men')
function phaiImage() {
    let listImg = ['img/Highlight-Hero-Windows11-GlobalLaunch_VP5-1596x600.jpg',
        'img/RWJyKb-Msft-Hero-New-Microsoft-Accessories-for-Teams_VP5-1920x720.webp',
        'img/RE4Ufmp-Msft-Surface-Pro-8-with-Slim-pen-and-Microsoft-Ocean-Plastic-Mouse-featuring-an-Earth-Day-theme_VP5-1920x720.avif',
        'img/RWD7KO-Msft-Designer-Compact-keyboard-next-to-a-Microsoft-Bluetooth-ergonomic-mouse_VP5-1920x720.webp'
    ]
    document.getElementById('img').src = listImg[index];
    index++;
    if (index == 4) {
        index = 0;
    }
    let b = document.getElementsByClassName('banner__boy');
    let a = document.getElementsByClassName('banner__content');
    let c = document.querySelectorAll('.banner__item a');
    if (index == 1) {
        a[0].innerHTML = 'Sản phẩm mới';
    }
    else if (index == 2) {
        a[0].innerHTML = '<div class = "new">Giới thiệu Bing mới</div>';
        b[0].innerHTML = '<div class="new">Mọi thứ bạn cần để hoàn thành nhiều việc hơn, trong thời gian ngắn hơn</div> '
    }
    else if (index == 3) {
        men.innerHTML = '<div class="banner__item--men">' +
            '<div class="banner__content">Sản phẩm mới</div><br>' +
            '<div class="banner__boy">' +
            'Đặt câu hỏi thực tế. Trò chuyện và tạo lập. Nhận câu trả lời tốt hơn nhờ tính năng Copilot dựa trên' +
            'nền' +
            'công' +
            'nghệ AI cho web.' +
            '</div><br>' +
            '<button class="banner__item">' +
            '<a href="https://www.bing.com/new?icid=mscom_marcom_H1a_BingAI">' +
            'Tìm hiểu về Bingmới' +
            '</a>' +
            '</button>' +
            '</div>'
    }
    else if (index == 0) {
        a[0].innerHTML = 'Giới thiệu Bing mới';
        b[0].innerHTML = 'Đặt câu hỏi thực tế. Trò chuyện và tạo lập. Nhận câu trả lời tốt hơn nhờ tính năng Copilot dựa trên nền công nghệ AI cho web.'
    }

}
//---------------------------------

// thay đổi khi click vào item tìm kiếm 
let head = document.getElementById('head');
function timKiem() {
    head.innerHTML = '    <div class="main__search"></div>' +
        '<input type="text" id="st" placeholder="Tìm kiếm" class="input__item" onclick = "search()">' +
        '<button class="input__icon" onclick = "search1()" ><ion-icon name="search-outline" class="icon" ></ion-icon></button>' +
        '<button class="input__huy" id = "huy" onclick="huy()">Hủy</button>' +
        '</div>'
}
function search1() {
    let a = document.getElementById('st').value;
    console.log(a);
    if (a.trim() == '') {
        alert('Xin nhập nhập dữ liệu');
    }
}
//--------------------------------

// thay đổi khi click vào item hủy 
function huy() {
    head.innerHTML = '<ul class="main__item--boy">' +
        '<li><a href="#">Trang chủ</a></li>' +
        '<li><a href="#">Sản phẩm</a></li>' +
        '<li><a href="">Trang chủ</a></li>' +
        '<li><a href="">Trang chủ</a></li>' +
        '<li><a href="">Trang chủ</a></li>' +
        '</ul>' +
        '<div class="menu">' +
        '<div class="menu__item timkiem" onclick="timKiem()">' +
        'Tìm kiếm <i class="fa-solid fa-magnifying-glass icon"></i>' +
        '</div class="menu__item">' +
        '<div class="menu__item timkiem" onclick="">' +
        '<a href="giohang.html">Giỏ hàng <i class="fa-solid fa-cart-shopping"></i></a>' +
        '</div class="menu__item" >' +
        '<div class="menu__item" id="login">' +
        '<a href="dangNhap.html">Đăng xuất <i class="fa-regular fa-circle-user"></i></a>' +
        '</div>' +
        '</div>'
}
//-----------------------------------------

//------------------------


// đăng kí tài khoản 
function dangKy(event) {

    event.preventDefault();
    const name = document.getElementById('fullName').value;
    const phone = document.getElementById('numberPhone').value;
    const email = document.getElementById('email').value;
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // kiểm tra 
    if (name.trim() === '' || phone.trim() === '' || isNaN(phone) || email.trim() === '' || userName.trim() === '' || password.trim() === '') {
        alert('Không hợp lệ');
        return;
    }
    let regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!regex.test(password)) {
        alert("Password chưa hợp lệ")
        return;
    }
    else {

    }
    // tạo Object
    let user = {
        userName: userName,
        password: password,
        phone: phone,
        email: email,
        name: name,
    };
    //------------------------------------

    // gắn object vừa tạo vào JSON
    let json = JSON.stringify(user);
    const local = localStorage.getItem(userName);
    if (!local) {
        // trường hợp khác local 
        localStorage.setItem(userName, json);
        alert(' đăng kí thành công');
        location.href = "dangNhap.html";
    }
    else {
        if (local == local) {
            alert('tài khoản đã tồn tại');
        }
    }
}

//---------------------------------

// đăng nhập tài khoản 
let dem = 0;
function dangNhap(event) {
    event.preventDefault();
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (userName.trim() === "" || password.trim() === "") {
        alert("Chưa nhập username/password")
        return;
    }
    let user = localStorage.getItem(userName);
    let date = JSON.parse(user);


    if (userName === date.userName && password === date.password) {
        alert('đăng nhập thành công');
        location.href = "index.html";
        dem++;

    }
    else {
        alert('tài khoản không tồn tại');
    }
}
//------------------------------


// thêm sản phẩm 

document.getElementById('btn-hieninput').addEventListener('click', function () {
    document.getElementById('themSanPham').style.display = 'block';
})

// khai báo class sản phẩm 

class sanPham {
    constructor(id, hinhSP, tenSP, giaSP, soLuongSP, soluongMua) {
        this.id = id;
        this.hinhSP = hinhSP;
        this.tenSP = tenSP;
        this.giaSP = giaSP;
        this.soLuongSP = soLuongSP;
        this.soluongMua = soluongMua
    }
}
// khi click vào thêm 
document.getElementById('btn-themsp').addEventListener('click', function () {
    let hinhSP = document.getElementById('themsp-hinh').value;
    let ten = document.getElementById('themsp-ten').value;
    let gia = document.getElementById('themsp-gia').value;
    let sl = document.getElementById('themsp-soluong').value;

    // kiểm tra input 
    if (hinhSP.trim() == '' || ten.trim() == '' || gia.trim() == '' || sl.trim() == '') {
        alert('Nhập dữ liệu');
        return;
    }
    else if (isNaN(gia) || isNaN(sl)) {
        alert('Giá/ số lượng không hợp lệ');
        return;
    }
    else {
        const listLocal = localStorage.getItem('ds');
        let id;
        let listSanPham = [];
        let soluongMua = 1;
        // trường họp listSanPham chưa tồn tại 
        if (!listLocal) {
            id = 1;
            // tạo sản phẩm mới 

            let sanPhamMoi = new sanPham(id, hinhSP, ten, gia, sl, soluongMua);
            listSanPham.push(sanPhamMoi);
            // lưu vào local 
            localStorage.setItem('ds', JSON.stringify(listSanPham));
            alert('Lưu thành công');
        }
        else {
            listSanPham = JSON.parse(listLocal);
            id = listSanPham.lenght + 1;
            let sanPhamMoi = new sanPham(id, hinhSP, ten, gia, sl, soluongMua);
            listSanPham.push(sanPhamMoi);
            // lưu vào local 
            localStorage.setItem('ds', JSON.stringify(listSanPham));
            alert('Lưu thành công');

        }
    }
    // ấn thêm sản phẩm 
    document.getElementById("them-sp").style.display = 'none';
    refresh();
    document.location.reload();

})
function themsp(mangSP) {
    let divSP = document.getElementById('sanpham-dathem');
    //thêm SP và mục hiển thị sản phẩm:
    divSP.innerHTML = "";
    let viTri = 0;
    for (let sp of mangSP) {
        divSP.innerHTML = divSP.innerHTML +
            `<div class="chuot__main--img">
            <img src="${sp.hinhSP}"
                alt="" class="chuot__img">
            <div class="chuot__chu--item">

                <p class="chuot__main--chu">${sp.tenSP}</p><br>
                <div class="gia__chuot">Giá: $${sp.giaSP}</div>
                <div class="gia__chuot">Kho: ${sp.soLuongSP} (chiếc)</div>
                <div class="xoa-sua">
                    <a href="#btn-hieninput"><button class="btn-sua--xoa sua" onclick = "suasp(${viTri})">Sửa sản phẩm</button></a>
                    <button class="btn-sua--xoa xoa" onclick="xoasp(${viTri})">Xóa sản phẩm</button>
                </div>
                <div class="soLuong">
                    <button class="btn-soLuong" onclick="giam(${viTri})">-</button>
                    <span class="soLuong-sanPham">${sp.soluongMua}</span>
                    <button class="btn-soLuong" onclick="them(${viTri})">+</button>
                </div>
                <div class="mua__sanpham" onclick = "themVaoGioHang(${viTri})">Thêm vào giỏ hàng <i class="fa-solid fa-cart-plus"></i></div>
            </div>
        </div>`
        viTri++;
    }
}
function refresh() {
    let listSanPham = [];
    //lấy danh sách sp từ local storage:
    listSanPham = JSON.parse(localStorage.getItem("ds"));
    if (listSanPham) {
        themsp(listSanPham);
    }
}

function xoasp(viTri) {
    let listSanPham = [];
    // lấy danh sách sản phẩm ra từ local 
    listSanPham = JSON.parse(localStorage.getItem("ds"));
    // xóa thành phần ở index 
    listSanPham.splice(viTri, 1)
    localStorage.setItem('ds', JSON.stringify(listSanPham));
    refresh();
}

// thêm số lượng mua 
function them(viTri) {
    let listSanPham = [];
    // lấy danh sách sản phẩm ra từ local 
    listSanPham = JSON.parse(localStorage.getItem("ds"));
    listSanPham[viTri].soluongMua = ++listSanPham[viTri].soluongMua;

    localStorage.setItem('ds', JSON.stringify(listSanPham));
    themsp(listSanPham);
}
// giảm số lượng mua 
function giam(viTri) {
    let listSanPham = [];
    // lấy danh sách sản phẩm ra từ local 
    listSanPham = JSON.parse(localStorage.getItem("ds"));

    listSanPham[viTri].soluongMua = --listSanPham[viTri].soluongMua;
    if (listSanPham[viTri].soluongMua = 1);

    localStorage.setItem('ds', JSON.stringify(listSanPham));
    themsp(listSanPham);
}


function suasp(index) {
    // khi click vào sửa sp sẽ tắt btn thêm sp 
    document.getElementById('btn-themsp').style.display = 'none'

    // khi click vào sửa sp sẽ mở btn sửa sp 
    document.getElementById('btn-suasp').style.display = 'block'

    // mở form input để thay đổi giá trị của sản phả 
    document.getElementById('themSanPham').style.display = 'block';
    let listSanPham = [];
    // lấy danh sách sản phẩm ra từ local 
    listSanPham = JSON.parse(localStorage.getItem("ds"));

    document.getElementById('themsp-hinh').value = listSanPham[index].hinhSP;
    document.getElementById('themsp-ten').value = listSanPham[index].tenSP;
    document.getElementById('themsp-gia').value = listSanPham[index].giaSP;
    document.getElementById('themsp-soluong').value = listSanPham[index].soLuongSP;
    document.getElementById('index').value = index;
    console.log(21212);
}
function suaSanPham() {
    let listSanPham = [];
    // lấy danh sách sản phẩm ra từ local 
    listSanPham = JSON.parse(localStorage.getItem("ds"));
    let index = document.getElementById('index').value;
    console.log(index);
    listSanPham[index].giaSP = document.getElementById('themsp-gia').value;
    listSanPham[index].hinhSP = document.getElementById('themsp-hinh').value;
    listSanPham[index].soLuongSP = document.getElementById('themsp-soluong').value;
    listSanPham[index].tenSP = document.getElementById('themsp-ten').value;
    localStorage.setItem('ds', JSON.stringify(listSanPham));
    themsp(listSanPham);
    alert('Sửa thành công')
    document.location.reload()
}
class gioHang {
    constructor(id, hinhsanpham, tensanpham, giasanpham, soluongMua) {
        this.id = id;
        this.hinh = hinhsanpham;
        this.ten = tensanpham;
        this.gia = giasanpham;
        this.soluongMua = soluongMua;
    }
}
function themVaoGioHang(viTri) {
    // lấy danh sách sản phẩm 
    let loclal = JSON.parse(localStorage.getItem('ds'));

    // lấy thông tin từ sản phẩm đang chọn 

    let id = loclal[viTri].id;
    let hinh = loclal[viTri].hinhSP;
    let ten = loclal[viTri].tenSP;
    let gia = loclal[viTri].giaSP;
    let soluongMua = loclal[viTri].soluongMua;

    let giohang = new gioHang(id, hinh, ten, gia, soluongMua);
    let listGioHang = JSON.parse(localStorage.getItem('dsgh'));

    // trường hợp dsgh chưa tồn tại 
    if (soluongMua > loclal[viTri].soLuongSP) {
        alert('Không đủ hàng ')
    }
    else {
        let giohang = new gioHang(id, hinh, ten, gia, soluongMua);
        let listGioHang = JSON.parse(localStorage.getItem('dsgh'));

        // trường hợp dsgh chưa tồn tại 

        if (!listGioHang) {
            listGioHang = [];
        }
        listGioHang.push(giohang);
        //  lưu vào local 
        localStorage.setItem("dsgh", JSON.stringify(listGioHang));
        alert('Thêm vào thành công')
        loclal.setItem('ds', JSON.stringify(listSanPham));
        themsp(listSanPham);
        refresh();
        giohang_sp();

    }

}

function giohang_sp() {
    let listGioHang = JSON.parse(localStorage.getItem('dsgh'));
    if (listGioHang) {
        let divGioHang = document.getElementById('sp-gio-hang');
        divGioHang.innerHTML = '';
        let viTriXoa = 0;
        for (let sp of listGioHang) {
            divGioHang.innerHTML = divGioHang.innerHTML +
                `<div class="chuot__main--img">
                <img src="${sp.hinh}"
                    alt="" class="chuot__img">
                <div class="chuot__chu--item">

                    <p class="chuot__main--chu">${sp.ten}</p><br>
                    <div class="gia__chuot">$${sp.gia}</div>
                    <div class="gia__chuot">Tổng tiền:$${sp.gia * sp.soluongMua}</div>
                    <div class="xoa-sua">
                        <button class="btn-sua--xoa xoa" onclick="xoaSPMua(${viTriXoa})">Xóa sản phẩm</button>
                    </div>
                    <div class="soLuong">
                        <span class="soLuong-sanPham">${sp.soluongMua}</span>
                    </div>
                    <div class="mua__sanpham">Mua Sản Phẩm<i class="fa-solid fa-cart-plus"></i></div>
                </div>
            </div>`
            viTriXoa++;
        }
    }
}
function xoaSPMua(viTriXoa) {
    //lấy danh sách sản phẩm ra từ localStorage
    let listGioHang = JSON.parse(localStorage.getItem('dsgh'));

    //xóa thành phần ở index viTri
    listGioHang.splice(viTriXoa, 1)

    //lưu mảng thông tin vào localStorage
    localStorage.setItem("dsgh", JSON.stringify(listGioHang));

    //updatr bảng hiển thị sản phẩm
    giohang_sp();
}

