import React from 'react'

export const DetailBooking = () => {
    return (
        <div>
            <div className="col rincian-booking">
                    <div className="row row-hdr">
                        <p className="name-hdr mt-2">NO. PESANAN</p>
                        <p><b>1837163136</b></p>
                    </div>
                    <hr />
                    <div className="row row-hdr">
                        <p className="name-hdr">PERJALANAN ANDA</p>
                        <p><b>Penerbangan</b></p>
                        <p>17 Des 2022</p>
                        <p>Palembang(PLM) > Jakarta(CGK)</p>
                    </div>
                    <hr />
                    <div className="row row-hdr">
                        <p className="name-hdr">DAFTAR PENUMPANG</p>
                        <p>Nona Citra Meida Antika</p>
                    </div>
                </div>
        </div>
    )
}
