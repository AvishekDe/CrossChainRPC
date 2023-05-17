const { formatBytes32String } = require("ethers/lib/utils");
const { ethers } = require("ethers");
const hre = require("hardhat");
async function main() {
    const LayerZeroDemo1 = await hre.ethers.getContractFactory("Customer");
    const layerZeroDemo1 = await LayerZeroDemo1.attach(
        "0xeDa5eCA0bEe4CD122c95FFab974Ef810dC30981a"
    );
    const fees = await layerZeroDemo1.estimateFees(
        10106,
        "0x354Ef09C11b315a82c1B7A250132e0E873f6DA70",
        formatBytes32String("statecheck"),
        false,
        []
    );
    console.log(ethers.utils.formatEther(fees[0].toString()));
    // await layerZeroDemo1.updateBankAddress("0x354Ef09C11b315a82c1B7A250132e0E873f6DA70", 10106);
    console.log(await layerZeroDemo1.sendMoney("0xC63c0C3ac22F2b765fF28627c5C9ceb2aa42F67A", 50, { value: ethers.utils.parseEther("1") }));

}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});