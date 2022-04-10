var ERC20Basic = artifacts.require("ERC20Basic");
var DragonSwap = artifacts.require("DragonSwap");

module.exports = function(deployer) {
  deployer.deploy(ERC20Basic);
  deployer.deploy(DragonSwap);
};
