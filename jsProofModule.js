// a variable to hold your NFT's
const laptop_nft = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(company,model,mac_adress,date_of_purchase) {
    const data = {
        company,
        model,
        mac_adress,
        date_of_purchase
    }
    laptop_nft.push(data)
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function list_NFTs(array) {
    array.forEach(element => {
        console.log(element)
    });
}

// print the total number of NFTs we have minted to the console
function get_Total_Supply (arr) {
    return arr.length
}

// call your functions below this line
mintNFT("Apple", "air m1", "172.273.274.37", "16 Aug 2023")
mintNFT("Asus", "vivobook 14", "172.982.364.35", "1 Feb 2022")
mintNFT("Hp", "pavilion", "572.422.324.35", "21 June 2024")
mintNFT("Apple", "air m3", "172.293.008.43", "13 May 2024")


list_NFTs(laptop_nft)

console.log(get_Total_Supply(laptop_nft))