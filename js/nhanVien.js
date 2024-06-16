class NhanVien {
  constructor(
    tknv,
    name,
    email,
    password,
    datepicker,
    luongCB,
    chucvu,
    gioLam
  ) {
    this.tknv = tknv;
    this.name = name;
    this.email = email;
    this.password = password;
    this.datepicker = datepicker;
    this.luongCB = luongCB;
    this.chucvu = chucvu;
    this.gioLam = gioLam;
    this.tongLuong;
    this.xepLoaiNV;
  }

  tongLuong = function () {
    let tongLuong = 0;
    if (this.chucvu == "Sếp") {
      tongLuong = this.luongCB * 3;
    } else if (this.chucvu == "Trưởng phòng") {
      tongLuong = this.luongCB * 2;
    } else {
      tongLuong = this.luongCB * 1;
    }
    return tongLuong;
  };

  xepLoaiNV = function (gioLam) {
    if (gioLam * 1 >= 192) {
      return "Nhân viên xuất sắc";
    } else if (gioLam * 1 >= 176 && gioLam * 1 < 192) {
      return "Nhân viên giỏi";
    } else if (gioLam * 1 >= 160 && gioLam * 1 < 176) {
      return "Nhân viên khá";
    } else {
      return "Nhân viên trung bình";
    }
  };
}
