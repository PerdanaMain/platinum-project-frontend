import React from 'react'

const JumlahSaldo = () => {
    return (
        <div className="container-jlmsaldo">
            <div class="row g-3 align-items-center" className="form-topup">
                    <div class="col-auto"  className="form-topup">
                        <label for="inputID" class="col-form-label" className="name-hdr">User ID</label>
                    </div>
                    <div class="col-auto" className="name-hdr">
                        <p><b>1234BGHJ</b></p>
                    </div>
            </div>
            <div class="mt-3">
                <div><p><b className="form-topup">Jumlah Saldo</b></p></div>
                <div>
                    <p ><b>Rp 120.000.00,-</b></p>
                </div>
            </div>
        </div>
    )
}

export default JumlahSaldo