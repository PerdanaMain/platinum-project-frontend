import React from 'react'
import { TopUpSaldo } from './TopUpSaldo'
import { DetailBooking } from './DetailBooking'
import JumlahSaldo from './JumlahSaldo'

const Payment = () => {
    return (
        <div className="payment-container"> 
            <div className="payment-box">
                <div className="col-3 payment-metode">
                    <div className="header-payment">
                    <span style={{
                        "font-size": "20px",
                        "color": "white",
                        "font-weight": "400",
                        "font-family": "Poppins",
                        "margin-bottom":"5px"
                    }}>myFlit Payment 
                    </span>
                    <br />
                    <span>choose payment transaction</span>
                    </div>
                    <br />
                    <div className="list-item">
                        <a href="#" className="payment-btn">
                            <img
                            src="./assets/dashboard/money.svg"
                            alt=""
                            />
                            <span>Saldo</span>
                        </a>
                    </div>
                    <br />
                    <div className="list-item">
                        <a href="#"  className="payment-btn">
                            <img
                            src="./assets/dashboard/atm.svg"
                            alt=""
                            />
                            <span>Bank Transfer</span>
                        </a>
                    </div>
                </div>
                {/* <div className="col-5 ">
                    <TopUpSaldo/>
                </div> */}
                <div>
                    <JumlahSaldo/>
                </div>
                {/* <div className="col-3">
                    <DetailBooking/>
                </div> */}
            </div>
        </div>
        )
}

export default Payment