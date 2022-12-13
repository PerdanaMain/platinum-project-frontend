import React from 'react'

export const TopUpSaldo = () => {
    return (
        <div className="container-saldo">
                <div class="row g-3 align-items-center" className="form-topup">
                    <div class="col-auto"  className="form-topup">
                        <label for="inputID" class="col-form-label" className="name-hdr">User ID</label>
                    </div>
                    <div class="col-auto" className="name-hdr">
                        <p><b>1234BGHJ</b></p>
                    </div>
                </div>
            <div class="mt-3">
                <div><p><b>Masukan Jumlah (Rp)</b></p></div>
                <select className="form-select">
                        <option selected>Rp 10.000.00,-</option>
                        <option value="1">Rp 20.000.00,-</option>
                        <option value="2">Rp 50.000.00,-</option>
                        <option value="3">Rp 100.000.00,-</option>
                        <option value="4">Rp 300.000.00,-</option>
                        <option value="5">Rp 500.000.00,-</option>
                </select>
            </div>
            <div>
                <div class="mt-3">
                    <p><b>Pembayaran</b></p>
                    <p>ATM Transfer
                <span className="right-desc"><b>BNI 09507742</b></span></p>
                </div>
            </div>
            <div class="mt-3">
                <div className="form-topup">
                    <p className="name-hdr">Top Up</p>
                    <span className="right-desc2"> Rp 10.000.00,-</span>
                </div> 
                <hr />
                <div className="form-topup"><p><b>Total</b></p> 
                <span className="right-desc3">
                    <b>Rp 10.000.00,-</b>
                </span></div>
            </div>
            <div className="pay-btn">
            <button type="button" class="btn btn-outline-primary">Bayar Sekarang</button>
            </div>
            
        </div>
    )
}
