import React from 'react'

const NoBooking = () => {
    return (
        <div>
            <div className="col container-booking-white" style={{ "display": "flex" }}>
            <img src="./assets/dashboard/Vector.svg" alt="" width={65} style={{
                "margin-left":"35px"
            }}/>
                <div style={{
                "margin-left":"50px",
                "margin-top":"20px"
            }}>
                    <p><b>Belum Ada Pesanan</b></p>
                    <p style={{"font-size":"13px","text-align":"justify"}}>Seluruh pesanan anda akan muncul di sini, tapi kinni anda belum punya satu pun. <br />
                    Mari buat pesanan via homepgae!</p>
                </div>
            </div>
        </div>
    )
}

export default NoBooking