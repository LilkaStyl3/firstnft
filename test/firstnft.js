const {assert} = require("chai")

describe("test", () => {
	let Sgnrs;
	let CntrctFctry;
	let Cntrct;
	let CntrctAddress;

	before(async () => {
		Sgnrs = await ethers.getSigners()
		CntrctFctry = await ethers.getContractFactory("firstnft", {signer: Sgnrs[0]})
		Cntrct = await CntrctFctry.deploy()
		await Cntrct.deployed()
		CntrctAddress = Cntrct.address
		console.log("Contract deployed to address:", CntrctAddress)
	})

	it("check owner", async () => {
		const owner = await Cntrct.owner()
		assert.equal(owner, Sgnrs[0].address)
	})
})