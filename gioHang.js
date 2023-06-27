function refresh() {
    //lấy danh sách sp từ local storage:
    let listSanPham = JSON.parse(localStorage.getItem("dsgh"));
    if (listSanPham) {
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
                        <div class="mua__sanpham" onclick="MuaSPMua(${viTriXoa})" >Mua Sản Phẩm<i class="fa-solid fa-cart-plus"></i></div>
                    </div>
                </div>`
            viTriXoa++;
        }
    }
}
function MuaSPMua(viTriXoa){
        //lấy danh sách sản phẩm ra từ localStorage
        let listGioHang = JSON.parse(localStorage.getItem('dsgh'));

        //xóa thành phần ở index viTri
        listGioHang.splice(viTriXoa, 1)
    
        //lưu mảng thông tin vào localStorage
        localStorage.setItem("dsgh", JSON.stringify(listGioHang));
        alert('Cảm ơn quý khách');
        //updatr bảng hiển thị sản phẩm
        giohang_sp();
}