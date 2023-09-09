var rootEl = document.getElementById("root");
var h1El = document.createElement("h1");
var luEl = document.createElement("ul");
var buttonEL = document.createElement("button");
var buttonCondition = true;
var pegawai = [
    {
        nama: "EL",
        jabatan: "CEO",
    },
    {
        nama: "Rizki",
        jabatan: "Manajer",
    },
    {
        nama: "Ilyas",
        jabatan: "Lead IT",
    },
];
var mahasiswa = [
    {
        nama: "Luthfi",
        nim: 1231231,
        kelas: "A2",
        nilai: 75,
    },
    {
        nama: "Ilham",
        nim: 1231232,
        kelas: "A4",
        kehadiran: 100,
    },
    {
        nama: "Annisa",
        nim: 1231233,
        kelas: "A1",
        nilai: 80,
        kehadiran: 90,
    },
];
var buttonTextCondition = function () {
    if (buttonCondition) {
        buttonEL.textContent = "List Mahasiswa";
    }
    else {
        buttonEL.textContent = "List Pegawai";
    }
};
var listCondition = function () {
    if (buttonCondition) {
        var listPegawai = pegawai.map(function (pegawai) { return "<li>".concat(pegawai.nama, " - Jabatan ").concat(pegawai.jabatan, "</li>"); });
        luEl.innerHTML = listPegawai.join("");
    }
    else {
        var listMahasiswa = mahasiswa.map(function (mahasiswa) {
            return "<li>".concat(mahasiswa.nama, " - NIM ").concat(mahasiswa.nim, " - Kelas ").concat(mahasiswa.kelas, "</li>");
        });
        luEl.innerHTML = listMahasiswa.join("");
    }
};
var h1Condition = function () {
    if (buttonCondition) {
        h1El.textContent = "List Pegawai";
    }
    else {
        h1El.textContent = "List Mahasiswa";
    }
};
var buttonClick = function () {
    buttonEL.addEventListener("click", function () {
        buttonCondition = !buttonCondition;
        h1Condition();
        buttonTextCondition();
        listCondition();
    });
};
var main = function () {
    h1El.textContent = "List Pegawai";
    var listPegawai = pegawai.map(function (pegawai) { return "<li>".concat(pegawai.nama, " - ").concat(pegawai.jabatan, "</li>"); });
    luEl.innerHTML = listPegawai.join("");
    buttonClick();
    rootEl.appendChild(h1El);
    luEl.style.color = "blue";
    rootEl.appendChild(luEl);
    buttonEL.textContent = "List Mahasiswa";
    rootEl.appendChild(buttonEL);
};
main();
export {};
