import { Connect, SimpleSigner, MNID } from 'uport-connect'

const uport = new Connect('HandsOn', {
      clientId: '2oiTmE2ssXdx3meSR6NhJhBdXSWTQZunbdy',
      network: 'rinkeby',
      signer: SimpleSigner('a2d26a817e9a11dc9733c436cece3e72d2c7422e170bb35a0876ac9d1e6c5249')
    })

const initAccount = async () => {
    const user = await uport.requestCredentials({
        requested: ['name', 'country', 'avatar'],
        notifications: true
    })
    // get user details
    const decodedId = MNID.decode(user.address)
    const specificNetworkAddress = decodedId.address
    return { specificNetworkAddress, user }
}

const web3 = uport.getWeb3()
export { web3, uport, MNID, initAccount }
