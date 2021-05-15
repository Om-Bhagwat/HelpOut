/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import Web3 from 'web3';

import {NeighbourAbi} from '../../Abis.js';

const MedDetails=(props)=>{

    const[donorID,setDonorID] = useState();
    const[medID,setMedId] = useState();
    const[ipfsHash,setIpfsHash] = useState('f2oirwlfmwpoef3');

    const web3 = new Web3(Web3.givenProvider);
    const contractAddr = '0xf9534A0F4b9803E600c36519FE0f8350CEA473E0';

    const Neighbour = new web3.eth.Contract(NeighbourAbi,contractAddr);

    const{cusname,setCusName,handleLogout,phoneno,setPhoneNo,medicinename,setMedicineName,medicineQuantity,setMedicineQuantity,datee,setDatee} = props;

    const postDetails=async(e)=>{
        e.preventDefault();
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        const gas = await Neighbour.methods.setDonorDetails(donorID,cusname,phoneno).estimateGas();
        const result = await  Neighbour.methods.setDonorDetails(donorID,cusname,phoneno).send({
            from :account,
        gas
        })
        console.log(result);

        const gase = await Neighbour.methods.setMedicineDetails(donorID,medID,ipfsHash,medicinename,medicineQuantity,datee).estimateGas();
        const resulte = await  Neighbour.methods.setMedicineDetails(donorID,medID,ipfsHash,medicinename,medicineQuantity,datee).send({
            from :account,
        gase
        })

        console.log(resulte);
    }

    const GenUnID=async(e)=>{
        e.preventDefault();
        const accounts = await window.ethereum.enable();
            const account = accounts[0];
            const gas = await Neighbour.methods.getArr().estimateGas();
                const result = await  Neighbour.methods.getArr().send({
                    from :account,
                    gas
            })

            console.log(result);
            const dId = await Neighbour.methods.getArr().call();
            setDonorID(dId);
            console.log(donorID);
    }

    const GenUnTr=async(e)=>{
        e.preventDefault();
        const accounts = await window.ethereum.enable();
            const account = accounts[0];
            const gas = await Neighbour.methods.getTran().estimateGas();
                const result = await  Neighbour.methods.getTran().send({
                    from :account,
                    gas
            })

            console.log(result);
            const dIdi = await Neighbour.methods.getTran().call();
            setMedId(dIdi);
            console.log(medID);
    }

    return (
        <div>
            <nav class="navbar navbar-light navbar-expand-md pulse animated navb navigation-clean-button">
                <div class="container"><a class="navbar-brand" href="#">Helpers</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navcol-1">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Contribute</a></li>
                            <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" aria-expanded="false" data-toggle="dropdown" href="#">Types</a>
                                <div class="dropdown-menu"><a class="dropdown-item" href="#">Medical Aid</a><a class="dropdown-item" href="#">Home Aid</a></div>
                            </li>
                        </ul><Link class="btn btn-light action-button" to="/" onClick={handleLogout} style={{textDecoration:"none",color:"blue"}}>Logout</Link><span class="navbar-text actions"> </span>
                    </div>
                </div>
            </nav>
            <section className="login">
                <div className="loginContainer">
                        <div className="btnContainer">
                            <button onClick={GenUnID}>Generate UniqueID</button>
                            <button onClick={GenUnTr}>Generate Med UniqueID</button>
                        </div>
                        <label>Name</label>
                        <input
                            type="text"
                            required
                            onChange={e=>setCusName(e.target.value)}
                        />
                        <label>PhoneNumber</label>
                        <input
                            type="text"
                            required
                            onChange={e=>setPhoneNo(e.target.value)}
                        />
                        <label>medicineName</label>
                        <input
                            type="text"
                            required
                            onChange={e=>setMedicineName(e.target.value)}
                        />
                        <label>medicineQuantity</label>
                        <input
                            type="text"
                            required
                            onChange={e=>setMedicineQuantity(e.target.value)}
                        />
                        <label>Date</label>
                        <input
                            type="date"
                            required
                            onChange={e=>setDatee(e.target.value)}
                        />
                        <div className="btnContainer">
                            <button onClick={postDetails}>Add Details</button>
                        </div>
                </div>
            </section>
        </div>
    )
}

export default MedDetails;