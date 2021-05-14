const Neighbour  = artifacts.require('Neighbour');

module.exports = function(delployer){
    delployer.deploy(Neighbour);
}