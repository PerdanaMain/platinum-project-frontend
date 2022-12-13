import React from 'react'
import HistoryTransaksi from './HistoryTransaksi'
import NoBooking from './NoBooking'
import Pemesanan from './Pemesanan'


const Booking = () => {
    return (
        <div className="body-booking">
            <div className="col container-booking">
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
            <div className="teks-cont mt-5" style={{marginLeft:"22px",
            fontFamily:"Poppins",
            "font-size":"23px"}}><b>E-ticket & Voucher Aktif</b>
            </div>
            {/* <div col>
                <Pemesanan/>
            </div> */}
            <div>
                <NoBooking/>
            </div>
            <div>
                <HistoryTransaksi/>
            </div>
        </div>
    )
}

export default Booking