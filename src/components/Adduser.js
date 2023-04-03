import React, {useState, useEffect} from "react";
import axios from "axios";
import {Route, useNavigate} from "react-router-dom";
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min';

const AddUser = ()=> {
const [name, setName] = useState("");
const [namalengkap, setNamaLengkap] = useState("");
const [gelardepan, setGelarDepan] = useState("");
const [gelarbelakang, setGelarBelakang] = useState("");
const [gender, setGender] = useState("Pria");
const [tempatlahir, setTempatLahir] = useState("");
const [tanggallahir, setTanggalLahir] = useState("");
const [golongandarah, setGolonganDarah] = useState("A");
const [pendidikanterakhir, setPendidikan] = useState("Sekolah Dasar");
const [pesantren, setPesantren] = useState("Pernah");
const [pekerjaan, setPekerjaan] = useState("");
const [tempatkerja, setTempatkerja] = useState("");
const [statusnikah, setStatusNikah] = useState("Belum Menikah");
const [alamattinggal, setAlamatTinggal] = useState("");
const [alamatasal, setAlamatAsal] = useState("");
const [email, setEmail] = useState("");
const [nowa, setNomorWa] = useState("");
const [notel, setNomorTelpon] = useState("");
const [medsos, setMediaSosial] = useState("");
const [ukuran, setUkuranKaos] = useState("XS");
const [tinggi, setTinggiBadan] = useState("");
const [berat, setBeratBadan] = useState("");
const [penglat, setPengalamanLatihan] = useState("");
const [pengres, setPengalamanRespon] = useState("");
const [namaortu, setNamaOrangTua] = useState("");
const [notelortu, setNomorTelponOrangTua] = useState("");
const [alergi, setAlergi] = useState("");
const [riwayatkes, setRiwayatKesehatan] = useState("");
//const [ktp, setKartuTandaPenduduk] = useState("");
//const [pasfoto, setPasfoto] = useState("");
//const [BPJS, setBPJS] = useState("");
const navigate = useNavigate();
const goBack = () => {
    navigate(-1);
}
const saveUser = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/users', {
            name, namalengkap, gelardepan, gelarbelakang, gender, tempatlahir, tanggallahir, golongandarah,
            pendidikanterakhir, pesantren, pekerjaan, tempatkerja, statusnikah, alamattinggal, alamatasal,
            email, nowa, notel, medsos, ukuran, tinggi,berat, penglat, pengres, namaortu, notelortu, alergi, 
            riwayatkes, 
 //           ktp, pasfoto,BPJS
        });
    navigate("/");
    } catch (error) {
        console.log(error);
    }
}

console.log("data", tanggallahir);
useEffect(() => {
    // Initialize all input of date type.
    // if (tanggallahir === "") {
        const options = {
            dateFormat: 'yyyy-MM-dd' 
        }
        const calendars = bulmaCalendar.attach('[type="date"]', options);
    
        // Loop on each calendar initialized
        calendars.forEach((calendar) => {
          // Add listener to date:selected event
          calendar.on('date:selected', (date) => {
            console.log(date);
            // setTanggalLahir(date)
          });
        });
    
        // To access to bulmaCalendar instance of an element
        // eslint-disable-next-line no-undef
        const element = document.querySelector('#dob');
        if (element) {
          // bulmaCalendar instance is available as element.bulmaCalendar
          element.bulmaCalendar.on('select', (datepicker) => {
            console.log(datepicker.data.value());
            setTanggalLahir(datepicker.data.value())
          });
        }
    // }
  
  }, []);


    return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveUser}>
                <div className="field">
                    <label className="label">Nama Panggilan</label>
                    <div className="control">
                        <input type="text" className="input" value={name} 
                       onChange={(e)=> setName(e.target.value)} placeholder="Jeni"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nama Lengkap</label>
                    <div className="control">
                        <input type="text" className="input" value={namalengkap} 
                       onChange={(e)=> setNamaLengkap(e.target.value)} 
                       placeholder="Jeni Black Pink"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Gelar Depan</label>
                    <div className="control">
                    text  <input type="text" className="input" value={gelardepan} 
                       onChange={(e)=> setGelarDepan(e.target.value)} 
                       placeholder="Contoh: (Dr.), Jika tidak ada Kosongan saja."/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Gelar Belakang</label>
                    <div className="control">
                        <input type="text" className="input" value={gelarbelakang} 
                       onChange={(e)=> setGelarBelakang(e.target.value)} 
                       placeholder="Contoh: (M.Hum.), Jika tidak ada Kosongan saja."/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Jenis Kelamin</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select value={gender} 
                       onChange={(e)=> setGender(e.target.value)}>
                                <option value="pria">Pria</option>
                                <option value="wanita">Wanita</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tempat Lahir</label>
                    <div className="control">
                        <input type="text" className="input" value={tempatlahir} 
                       onChange={(e)=> setTempatLahir(e.target.value)} placeholder="Masukkan Tempat Lahir"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tanggal Lahir</label>
                    <div className="control">
                        <input type="date" className="input" id="dob" value={tanggallahir} 
                       onChange={(e)=> setTanggalLahir(e.target.value)} 
                       placeholder="Format YYYY-MM-DD contoh: 1912-11-18"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Golongan Darah</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select value={golongandarah} 
                       onChange={(e)=> setGolonganDarah(e.target.value)}>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="B">O</option>
                                <option value="B">AB</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Pendidikan Terakhir</label>
                    <div className="control">
                    <div className="select is-fullwidth">
                            <select value={pendidikanterakhir} 
                       onChange={(e)=> setPendidikan(e.target.value)}>
                                <option value="Sekolah Dasar">SD</option>
                                <option value="Sekolah Menengah Pertama">SMP</option>
                                <option value="Sekolah Menengah Atas/Kejuruan">SMA/SMK</option>
                                <option value="Sekolah Menengah Kejuruan">SMA/SMK</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Sarjana">S1</option>
                                <option value="Magister">S2</option>
                                <option value="Doktor">S3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Pernah belajar di pondok pesantren/madrasah?</label>
                    <div className="control">
                    <div className="select is-fullwidth">
                            <select value={pesantren} 
                       onChange={(e)=> setPesantren(e.target.value)}>
                                <option value="Iya">Pernah</option>
                                <option value="Tidak">Tidak pernah</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Status/Pekerjaan</label>
                    <div className="control">
                        <input type="text" className="input" value={pekerjaan} 
                       onChange={(e)=> setPekerjaan(e.target.value)} 
                       placeholder="Masukkan Pekerjaan Contoh: Guru, Pengajar, Dsb"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tempat Pekerjaan</label>
                    <div className="control">
                        <input type="text" className="input" value={tempatkerja} 
                       onChange={(e)=> setTempatkerja(e.target.value)} 
                       placeholder="Masukkan Tempat Kerja Contoh: SD Muhammadiyah Belitong"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Status Perkawinan</label>
                    <div className="control">
                    <div className="select is-fullwidth">
                            <select value={statusnikah} 
                       onChange={(e)=> setStatusNikah(e.target.value)}>
                                <option value="Belum Menikah">Belum Menikah</option>
                                <option value="Menikah">Menikah</option>
                                <option value="Janda">Janda</option>
                                <option value="Duda">Duda</option>
                            </select>
                    </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Alamat Tinggal/Domisili</label>
                    <div className="control">
                        <input type="text" className="input" value={alamattinggal} 
                       onChange={(e)=> setAlamatTinggal(e.target.value)} placeholder="Masukkan Alamat Lengkap Domisili"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Alamat Asal/Rumah</label>
                    <div className="control">
                        <input type="text" className="input" value={alamatasal} 
                       onChange={(e)=> setAlamatAsal(e.target.value)} placeholder="Masukkan Alamat Lengkap Asal"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input type="text" className="input" value={email} 
                       onChange={(e)=> setEmail(e.target.value)} placeholder="Contohnya: manusia@bumi.com"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nomor Whatsapp</label>
                    <div className="control">
                        <input type="text" className="input" value={nowa} 
                       onChange={(e)=> setNomorWa(e.target.value)} placeholder="Contohnya: 081123456789"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nomor Telpon</label>
                    <div className="control">
                        <input type="text" className="input" value={notel} 
                       onChange={(e)=> setNomorTelpon(e.target.value)} 
                       placeholder="Contohnya: 081123456789"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Media Sosial</label>
                    <div className="control">
                        <input type="text" className="input" value={medsos} 
                       onChange={(e)=> setMediaSosial(e.target.value)} 
                       placeholder="Contoh: ig=@mdmcdiy fb=mdmcdiy"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Ukuran Kaos</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select value={ukuran} 
                       onChange={(e)=> setUkuranKaos(e.target.value)}>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                                <option value="XXXL">XXXL</option>
                                <option value="LLLLL">LLLLL</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tinggi Badan</label>
                    <div className="control">
                        <input type="text" className="input" value={tinggi} 
                       onChange={(e)=> setTinggiBadan(e.target.value)} placeholder="Masukkan angka dalam ukuran Centimeter"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Berat badan</label>
                    <div className="control">
                        <input type="text" className="input" value={berat} 
                       onChange={(e)=> setBeratBadan(e.target.value)} placeholder="Masukkan angka dalam ukuran Kilogram"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Pengalaman Pelatihan</label>
                    <div className="control">
                        <input type="text" className="input" value={penglat} 
                       onChange={(e)=> setPengalamanLatihan(e.target.value)} placeholder="Masukkan Pengalaman Pelatihan yang Pernah Di ikuti"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Pengalaman Respon</label>
                    <div className="control">
                        <input type="text" className="input" value={pengres} 
                       onChange={(e)=> setPengalamanRespon(e.target.value)} placeholder="Masukkan Pengalaman Respon yang Pernah Di ikuti"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nama Orangtua/Istri/Wali</label>
                    <div className="control">
                        <input type="text" className="input" value={namaortu} 
                       onChange={(e)=> setNamaOrangTua(e.target.value)} placeholder="Masukkan Nama Orangtua/Istri/Wali"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nomor Telpon Orangtua/Istri/Wali</label>
                    <div className="control">
                        <input type="text" className="input" value={notelortu} 
                       onChange={(e)=> setNomorTelponOrangTua(e.target.value)} placeholder="Masukkan Nomor Telpon Orangtua/Istri/Wali"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Alergi</label>
                    <div className="control">
                        <input type="text" className="input" value={alergi} 
                       onChange={(e)=> setAlergi(e.target.value)} placeholder="Masukkan Alergi yang dimiliki"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Riwayat Kesehatan Sebelumnya</label>
                    <div className="control">
                        <input type="text" className="input" value={riwayatkes} 
                       onChange={(e)=> setRiwayatKesehatan(e.target.value)} placeholder="Masukkan Riwayat Penyakit Sebelumnya"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">KTP</label>
                    <div className="control">
                    <button type="submit" className="button is-info">Upload Kartu KTP</button>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Foto Close-up</label>
                    <div className="control">
                    <button type="submit" className="button is-info">Upload Foto</button>
                    </div>
                </div>
                <div className="field">
                    <label className="label">BPJS</label>
                    <div className="control">
                    <button type="submit" className="button is-info">Upload Kartu BPJS</button>
                    </div>
                </div>
                <div>
                <hr  style={{
                border: 1,
                borderColor: 'rgba(255, 255, 2555, 0.5)'
}}/>
                </div>
                <div className="buttons is-centered">
                    <button onClick={goBack} className="button is-info">Kembali</button>
                    <button type="submit" className="button is-success">Simpan Data</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default AddUser