const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export const setJSON = async (inst, obj) => {
  var ipfsJSON = JSON.stringify(obj);
    console.log('adding info to IPFS');
    await ipfs.add(ipfsJSON, (err, hash) => {
    if (err) {
      console.log(err);
    }
    if (hash) {
      console.log('added info to ipfs with hash ', hash);
      inst.ipfsCallbck(inst, hash);
    }
  })
}

export const getJSON = (hash) => {
    return new Promise((resolve, reject) => {
        ipfs.catJSON(hash, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        });
    });
}
