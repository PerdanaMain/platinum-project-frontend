import React from 'react'

const Wishlist = () => {
    return (
        <div className="wishlist">
            <div className="teks-cont mt-5" style={{"margin-left":"22px",
            "font-family":"Poppins",
            "font-size":"23px"}}><b>My Wishlist</b>
            <p style={{"font-size":"15px"}}>Tempat untuk menyimpan item favorit anda!</p>
            </div>
            <div>
                <div className="col container-wishlist" style={{ "display": "flex" }}>
                <div className="img-wishlist">
                    <img src="./assets/dashboard/bali.jpg" alt=""style={{}}/>
                </div>
                    <div style={{
                    "margin-top":"20px"
                }}>
                        <p>Villa</p>
                        <p><b>Balinese</b></p>
                        <p style={{"font-size":"13px"}}>Wednesday, 10th Mai 2023</p>
                        <p style={{"font-size":"13px"}}>
                            <img src="./assets/dashboard/located.png" alt="" />
                            Bali, Indonesia
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="col container-wishlist" style={{ "display": "flex" }}>
                <div className="img-wishlist">
                    <img src="./assets/dashboard/jepang.jpg" alt=""style={{}}/>
                </div>
                    <div style={{
                    "margin-top":"20px"
                }}>
                        <p>Hotel</p>
                        <p><b>Japanese</b></p>
                        <p style={{"font-size":"13px"}}>Friday, 31th December 2022</p>
                        <p style={{"font-size":"13px"}}>
                            <img src="./assets/dashboard/located.png" alt="" />
                            Fuji Mountain, Japanese
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="col container-wishlist" style={{ "display": "flex" }}>
                    <div className="img-wishlist">
                    <img src="./assets/dashboard/dubai.jpg" alt=""style={{}}/>
                    </div>
                    <div style={{
                    "margin-top":"20px"
                }}>
                        <p>R&B</p>
                        <p><b>Dubai</b></p>
                        <p style={{"font-size":"13px"}}>Sunday, 18th April 2023</p>
                        <p style={{"font-size":"13px"}}>
                            <img src="./assets/dashboard/located.png" alt="" />
                            Burj Khalifah, Uni Emirat Arab
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist