var btnSo0 = document.querySelector('.number-0');
var btnSo1 = document.querySelector('.number-1');
var btnSo2 = document.querySelector('.number-2');
var btnSo3 = document.querySelector('.number-3');
var btnSo4 = document.querySelector('.number-4');
var btnSo5 = document.querySelector('.number-5');
var btnSo6 = document.querySelector('.number-6');
var btnSo7 = document.querySelector('.number-7');
var btnSo8 = document.querySelector('.number-8');
var btnSo9 = document.querySelector('.number-9');
var btndauPhay = document.querySelector('.decimal');
var ketQua = document.querySelector('.value');
var mangSo = [btnSo0, btnSo1, btnSo2, btnSo3, btnSo4, btnSo5, btnSo6, btnSo7, btnSo8, btnSo9];
var btnXoa = document.querySelector('.delete');
var btnPhanTram = document.querySelector('.percent');
var btnAmDuong = document.querySelector('.negative');
var btnBang = document.querySelector('.result');
var btnphepCong = document.querySelector('.addition');
var btnphepTru = document.querySelector('.subtraction');
var btnphepNhan = document.querySelector('.multiplication');
var btnphepChia = document.querySelector('.division');
let ketQuaNhap = null;
let phepTinh = null;
var ketQuaChuoi = () => ketQua.textContent.split(',').join('');
var ketQuaSo = () => {
  return parseFloat(ketQuaChuoi());
};
var giaTriChuoi = (valueStr) => {
  if (valueStr[valueStr.length - 1] === '.') {
    ketQua.textContent += '.';
    return;
  }
  var [soNguyen, soThapPhan] = valueStr.split('.');
  if (soThapPhan) {
    ketQua.textContent =
      parseFloat(soNguyen).toLocaleString() + '.' + soThapPhan;
  } else {
    ketQua.textContent = parseFloat(soNguyen).toLocaleString();
  }
};
var nhapSo = (numStr) => {
  var giaTriTraVe = ketQuaChuoi();
  if (giaTriTraVe === '0') {
    giaTriChuoi(numStr);
  } else {
    giaTriChuoi(giaTriTraVe + numStr);
  }
};
var ketQuaTraVe = () => {
  var giaTriSo = ketQuaSo();
  var giaTriNhap = parseFloat(ketQuaNhap);
  let giaTriMoi;
  if (phepTinh === 'addition') {
    giaTriMoi = giaTriNhap + giaTriSo;
  } else if (phepTinh === 'subtraction') {
    giaTriMoi = giaTriNhap - giaTriSo;
  } else if (phepTinh === 'multiplication') {
    giaTriMoi = giaTriNhap * giaTriSo;
  } else if (phepTinh === 'division') {
    giaTriMoi = giaTriNhap / giaTriSo;
  }
  return giaTriMoi.toString();
};
var nhapPhepTinh = (operation) => {
  var giaTriTraVe = ketQuaChuoi();
  if (!ketQuaNhap) {
    ketQuaNhap = giaTriTraVe;
    phepTinh = operation;
    giaTriChuoi('0');
    return;
  }
  ketQuaNhap = ketQuaTraVe();
  phepTinh = operation;
  giaTriChuoi('0');
};
btnXoa.addEventListener('click', () => {
  giaTriChuoi('0');
  ketQuaNhap = null;
  phepTinh = null;
});
btnAmDuong.addEventListener('click', () => {
  var giaTriSo = ketQuaSo();
  var giaTriTraVe = ketQuaChuoi();
  if (giaTriTraVe === '-0') {
    giaTriChuoi('0');
    return;
  }
  if (giaTriSo >= 0) {
    giaTriChuoi('-' + giaTriTraVe);
  } else {
    giaTriChuoi(giaTriTraVe.substring(1));
  }
});
btnPhanTram.addEventListener('click', () => {
  var giaTriSo = ketQuaSo();
  var giaTriMoi = giaTriSo / 100;
  giaTriChuoi(giaTriMoi.toString());
  ketQuaNhap = null;
  phepTinh = null;
});
btnphepCong.addEventListener('click', () => {
  nhapPhepTinh('addition');
});
btnphepTru.addEventListener('click', () => {
  nhapPhepTinh('subtraction');
});
btnphepNhan.addEventListener('click', () => {
  nhapPhepTinh('multiplication');
});
btnphepChia.addEventListener('click', () => {
  nhapPhepTinh('division');
});
btnBang.addEventListener('click', () => {
  if (ketQuaNhap) {
    giaTriChuoi(ketQuaTraVe());
    ketQuaNhap = null;
    phepTinh = null;
  }
});
for (let i=0; i < mangSo.length; i++) {
  var numberEl = mangSo[i];
  numberEl.addEventListener('click', () => {
    nhapSo(i.toString());
  });
}
btndauPhay.addEventListener('click', () => {
  var giaTriTraVe = ketQuaChuoi();
  if (!giaTriTraVe.includes('.')) {
    giaTriChuoi(giaTriTraVe + '.');
  }
});
