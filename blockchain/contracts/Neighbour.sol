// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Neighbour{
    struct MedDonorDetails{
        uint donor_id;
        string name;
        string phone_number;
    }
    
    struct MedicineDetails{
        uint donor_id;
        uint medicine_id;
        string ipfs_hash;
        string medicineName;
        uint medicineQuantity;
        string datee;
    }
    
    struct Multitransport{
        uint id;
        mapping(uint=>MedicineDetails) mulMed;
    }
    
    mapping(uint=>MedDonorDetails) public donors;
    mapping(uint=>MedicineDetails) public medicine;
    mapping(uint=>Multitransport) public mul_tr;
    
    uint[] public _idcheck;
    uint[] public _idtrans;
    
    function getArr() public  returns(uint){
        
        if(_idcheck.length==0){
            _idcheck.push(1);
            return 1;
        }
        else{
            uint a = _idcheck[_idcheck.length-1]+1;
            _idcheck.push(a);
            return a;
        }
    } 
    
    function getTran() public returns(uint){
        if(_idtrans.length==0){
            _idtrans.push(1);
            return 1;
        }else{
            uint b = _idtrans[_idtrans.length-1]+1;
            _idtrans.push(b);
            return b;
        }
    }
    
    function setDonorDetails(uint donor_id,string memory name,string memory phone_number) public {
        donors[donor_id] = MedDonorDetails(donor_id,name,phone_number);
    } 
    
    function setMedicineDetails(uint donor_id,uint medicine_id,string memory ipfs_hash,string memory medicineName,uint medicineQuantity,string memory datee) public {
        mul_tr[donor_id].mulMed[medicine_id].donor_id = donor_id;
        mul_tr[donor_id].mulMed[medicine_id].medicine_id = medicine_id;
        mul_tr[donor_id].mulMed[medicine_id].ipfs_hash = ipfs_hash;
        mul_tr[donor_id].mulMed[medicine_id].medicineName = medicineName;
        mul_tr[donor_id].mulMed[medicine_id].medicineQuantity = medicineQuantity;
        mul_tr[donor_id].mulMed[medicine_id].datee = datee;
    }
    
    function getMedName(uint donor_id,uint medicine_id) public view returns(string memory){
        return(mul_tr[donor_id].mulMed[medicine_id].medicineName);
    }

    function getMedQuan(uint donor_id,uint medicine_id) public view returns(uint){
        return(mul_tr[donor_id].mulMed[medicine_id].medicineQuantity);
    }
    
}