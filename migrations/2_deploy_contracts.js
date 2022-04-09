var IERC20 = artifacts.require("IERC20");
var DragonSwap = artifacts.require("DragonSwap");

module.exports = function(deployer) {
  deployer.deploy(IERC20);
  deployer.deploy(DragonSwap);
};
