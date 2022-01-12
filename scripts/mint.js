(async () => {
	const contractAddress = "0x5756b777D5f6337C402F21bA05c4f9ad0C04FfeC"
	const recipient = "0x5b4D08236b1B5d36910611d47b235d05e021CE6b"
	const tokenURI = "https://gateway.pinata.cloud/ipfs/QmYTWVGCzq8gJu6Y73VkepNUDGa6VqJtAGTUgPzJVj2igG"

	const Sgnrs = await ethers.getSigners()

	const Cntrct = await ethers.getContractAt("firstnft", contractAddress, Sgnrs[0])
	const itemID = await Cntrct.mintNFT(recipient, tokenURI)

	console.log(itemID)
})()