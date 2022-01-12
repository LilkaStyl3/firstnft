(async () => {
	const contractAddress = "0x5756b777D5f6337C402F21bA05c4f9ad0C04FfeC"

	const Sgnrs = await ethers.getSigners()

	const Cntrct = await ethers.getContractAt("firstnft", contractAddress, Sgnrs[0])
	const tknURI = await Cntrct.tokenURI(1)

	console.log(tknURI)
})()