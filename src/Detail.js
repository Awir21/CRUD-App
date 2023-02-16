import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Detail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/posts/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Data Penerima Bantuan</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <h2>Nama Penerima : <b>{empdata.name}</b>  ({empdata.id})</h2>
                        <h3>Umur Penerima : <b>{empdata.age}</b> </h3> <br />
                        <h4>Contact Details</h4>
                        <h5>Alamat : {empdata.address}</h5>
                        <h5>Nomor HP : {empdata.phone}</h5>
                        <br />
                        <Link className="btn btn-danger" to="/">Kembali Ke Awal</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default Detail;