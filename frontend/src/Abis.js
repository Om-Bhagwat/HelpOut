export const NeighbourAbi = [
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "_idcheck",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "_idtrans",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "donors",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "donor_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "phone_number",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "medicine",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "donor_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "medicine_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "ipfs_hash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "medicineName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "medicineQuantity",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "datee",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "mul_tr",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getArr",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getTran",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "donor_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "phone_number",
          "type": "string"
        }
      ],
      "name": "setDonorDetails",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "donor_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "medicine_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "ipfs_hash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "medicineName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "medicineQuantity",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "datee",
          "type": "string"
        }
      ],
      "name": "setMedicineDetails",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "donor_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "medicine_id",
          "type": "uint256"
        }
      ],
      "name": "getMedName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]