import React from 'react'
// import axios from 'axios';

// import './CustomerHome.css';

const EmployeeeHome=(props)=>{

    const{name,email} = props;
    // const[hash,setHash] = useState('0xaaE3eqw32232dsad');
    // const[phasecount,setPhaseCount] = useState(0);

    // const SubmitAutoClaim=async(e)=>{
    //         e.preventDefault();
    //         console.log(name);
    //         try{
    //             const response = await axios.post('http://localhost:5000/users/addgraph',{
    //                 //Todo:Details to be Sent.
    //                 name,
    //                 email,
    //                 hash,
    //                 phasecount
    //             },);
    //             console.log(response);
    //         }catch(error){
    //             console.log(error);
    //         }
    // }

    return (
        <div>
            <h3>Employee Home.</h3>
            {name}
            {email}
        </div>
    )
}

export default EmployeeeHome;