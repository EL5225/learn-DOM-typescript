import { TMahasiswa, TPegawai } from "@/types";

const rootEl: HTMLElement = document.getElementById("root")!;
const h1El: HTMLHeadingElement = document.createElement("h1");
const luEl: HTMLUListElement = document.createElement("ul");
const buttonEL: HTMLButtonElement = document.createElement("button");

let buttonCondition: boolean = true;

const pegawai: TPegawai[] = [
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

const mahasiswa: TMahasiswa[] = [
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

const buttonTextCondition = () => {
  if (buttonCondition) {
    buttonEL.textContent = "List Mahasiswa";
  } else {
    buttonEL.textContent = "List Pegawai";
  }
};

const listCondition = () => {
  if (buttonCondition) {
    const listPegawai = pegawai.map(
      (pegawai) => `<li>${pegawai.nama} - Jabatan ${pegawai.jabatan}</li>`
    );
    luEl.innerHTML = listPegawai.join("");
  } else {
    const listMahasiswa = mahasiswa.map(
      (mahasiswa) =>
        `<li>${mahasiswa.nama} - NIM ${mahasiswa.nim} - Kelas ${mahasiswa.kelas}</li>`
    );
    luEl.innerHTML = listMahasiswa.join("");
  }
};

const h1Condition = () => {
  if (buttonCondition) {
    h1El.textContent = "List Pegawai";
  } else {
    h1El.textContent = "List Mahasiswa";
  }
};

const buttonClick = () => {
  buttonEL.addEventListener("click", () => {
    buttonCondition = !buttonCondition;
    h1Condition();
    buttonTextCondition();
    listCondition();
  });
};

const main = () => {
  h1El.textContent = "List Pegawai";
  const listPegawai = pegawai.map(
    (pegawai) => `<li>${pegawai.nama} - ${pegawai.jabatan}</li>`
  );
  luEl.innerHTML = listPegawai.join("");

  buttonClick();

  rootEl.appendChild(h1El);

  luEl.style.color = "blue";
  rootEl.appendChild(luEl);

  buttonEL.textContent = "List Mahasiswa";
  rootEl.appendChild(buttonEL);
};

main();
