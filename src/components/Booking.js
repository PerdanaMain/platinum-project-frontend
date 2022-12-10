import React from 'react'
import NoBooking from './NoBooking'


const Booking = () => {
    return (
        <div>
            <div className="col container-booking" style={{ "display": "flex" }}>
                <div className="col-4">
                <p className="teks-booking">Easy Reschedule</p>
                </div>
                <div className="col-8 ml-10">
                    <p className="title-booking mt-3">Flit Airlines Easy Reschedule</p>
                    <p className="desc-booking mt-2">Mengubah Jadwal Penerbangan bukan masalah. <br />
                        Kami pastikan jadi mudah</p>
                    <a href="#" className="link-next">Pelajari Selengkapnya</a>
                </div>
            </div>
            <div className="teks-cont mt-5" style={{"margin-left":"22px",
            "font-family":"Poppins",
            "font-size":"23px"}}><b>E-ticket & Voucher Aktif</b>
            </div>
            <div>
                <NoBooking/>
            </div>
            <div className="col mt-5">
                <p style={{"margin-left":"22px",
                            "font-family":"Poppins",
                            "font-size":"23px"}}>
                <b>Daftar Pembelian</b>
                </p>
                <div className="part3-booking">
                    <br />
                    <p style={{"margin-left":"22px"}}>Lihat <span><a href="" style={{"text-decoration":"none"}}>Riwayat Pembelian</a></span></p>
                </div>
            </div>
        </div>
    )
}

export default Booking