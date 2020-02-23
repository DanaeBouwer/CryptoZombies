// import the contract artifact
const ZombieOwnership = artifacts.require('./ZombieOwnership.sol')
// test starts here
contract('ZombieOwnership', function (accounts) {
    // predefine the contract instance
    let ZombieOwnershipInstance

// before each test, create a new contract instance
beforeEach(async function () {
    ZombieOwnershipInstance = await ZombieOwnership.new()
  })

 // first test: 2a
 it('should check that 1 zombie can be created per address', async function () {
    await ZombieOwnershipInstance.createRandomZombie(newZombiii, {'from': accounts[0]})
    let zombieByOwner = await ZombieOwnershipInstance.
    assert.equal(zombieByOwner, 1, 'Owner created more than one zombie')

 })
