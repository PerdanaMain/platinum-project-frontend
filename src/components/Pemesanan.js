import React from 'react'

const Pemesanan = () => {
        return (
            <div className="pemesanan">
                <div className="part3-booking-hdr">
                    <div className="prt-hdr">
                        {/* <div><img src="./assets/dashboard/search.svg" alt="" /></div> */}
                        <div className="desc-tiket"><p>Temukan e-ticket dan voucher Anda di <p style={{"color":"blue"}}>
                            <a href="" style={{"text-decoration":"none"}}> Pesanan Saya </a></p></p>
                        </div>
                    </div>
                </div>
                    <div className="border-booking">
                        <a href=""><div className="border-list">90 Hari Terakhir</div></a>
                        <a href=""><div className="border-list">Nov 2022</div></a>
                        <a href=""><div className="border-list">Oct 2022</div></a>
                        <a href=""><div className="border-list">Choose Date</div></a>
                    </div>
                    <div>
                        <div className="mt-4 mb-3 header-booking"><b>Pembelian dalam Proses</b></div>
                        <div className="bdr-pesanan">
                            <div className="nomine-bill">&nbsp;&nbsp;
                                <div className="col name-hdr mt-3">No. Pesanan 152514251</div>
                                <div className="col mt-3 price" style={{"justifyContent":"right"}}>
                                    <b>Rp 956.000.00,-</b></div>
                            </div>
                            <div className="air-goals">&nbsp;&nbsp;
                                <div><img src="./assets/dashboard/airplane.svg" alt="" /></div>
                                <div><p>Palembang ==> Jakarta</p></div>
                            </div>
                            <div className="air-goals">&nbsp;&nbsp;
                            <div><img src="./assets/dashboard/asuransi.svg" alt="" /></div>
                            <div><p>Asuransi Perjalanan (Penerbangan)</p></div>
                            </div>
                        </div>
                    </div>
                
            </div>
        )
}

export default Pemesanan