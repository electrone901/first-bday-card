const Birthday = artifacts.require('Birthday')

module.exports = function (deployer) {
  deployer.deploy(Birthday)
}
