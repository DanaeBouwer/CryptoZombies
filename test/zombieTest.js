//import truffle assertions
const truffleAssert = require('truffle-assertions')

// import the contract artifact
const ZombieFactory = artifacts.require('./ZombieFactory.sol')

// Test starts here
contract('ZombieFactory', function (accounts) {
    // predefine the contract instance
    let ZombieFactoryInstance

    // before each test, create a new contract instance
    beforeEach(async function () {
      ZombieFactoryInstance = await ZombieFactory.new()

    })

    // first test: 2a
    it('should check that 1 zombie can be created per address', async function () {
        await ZombieFactoryInstance.createRandomZombie("newZombiii", {'from': accounts[0]})
        let zombieByOwner = await ZombieFactoryInstance.ownerZombieCount(accounts[0])
        assert.equal(zombieByOwner, 1, 'Zombie was not created for account 0')
})
    //second test:2b
    it('should check that 2 zombies cannot be created per address', async function () {
        await ZombieFactoryInstance.createRandomZombie("newZombiii", {'from': accounts[0]})
        await truffleAssert.reverts(ZombieFactoryInstance.createRandomZombie("anotherNewZombiii", {'from': accounts[0]}))
        let zombieByOwner = await ZombieFactoryInstance.ownerZombieCount(accounts[0])
        assert.equal(zombieByOwner, 1, 'Two zombies where created by address 0')

 })
})
    