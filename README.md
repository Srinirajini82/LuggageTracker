Digital Luggage Tracking Application using Ethereum:
====================================================
   Idea behind this project is to implement the better tracking system for the luggage that are checked in to the Airport automatically(If the physical IRD tag is used while Checking In), For the POC here, I am implementing through the manual entry of Source, Destination and Transition Airport details.There by avoiding the hazzle of the missed and wrongly transacted luggeages. this can help traveller to moniter their assert trustfully while the luggage is in transit using their handphone that connects to Ethereum Blockchain.
Note: Different Screens of user interface is added in the project directory.

1) What does the project do:
----------------------------
   The project has the frontend Application built with ReactJS, to interact with the smart contract deployed in Ethereum at address(0x8d9ae1a4257f7e7361b6dced1ec94f1dc0ba7037), The app is integrated with the digital identity provider Uport to approve/reject transactions initiated by the DApp. Users of this application are required to install Uport application on their smart phone to share their identity with "Luggage tracker App" for trasaction on Rinkeby testnet. The Backend Smart contract tracks the travellers luggage details like 1) Source Airport 2) Destination Airport 3) Transitions details 4)Check in ID, in IPFS and stores the hash of the check in details in smart contract.

2) How to setUp
===============
  -> git clone "https://github.com/Srinirajini82/LuggageTracker.git"

  Note: npm version "6.1.0" is required

  To Work with DApp:
  -------------------
  -> cd to folder $<Path_Where_Extracted>/LuggageTracker/DApp/luggagetrack
  -> npm install will fix the dependencies
  -> npm start, this will start the local server listning on port 3000
  -> A browser will be opened, type in http://localhost:3000/
  -> click on the button "Login with uport"
  -> Scan the QR code with your the Uport App installed in your mobile.
  -> Approve the digital login in in your Uport mobile App.
  -> Once approved you could see your Avatar and user name in this APplication, this ensure that you have logged in Succesfully.
  -> Enter the Luggage checkIn details like Source Airport, Destination Airport and select the Check box Transit button.
  -> Press the Check-In button, this will first create 8 digit CheckIn ID and add the check in details along with the Check In ID to IPFS.
  -> IPFS hash will be added to Rinkeby testnet and the final hash will be display to user, for further tracking. 
 
  To Work with Smart contract:
  ----------------------------
  -> Smart contract code reides in $<Path_Where_Extracted>/LuggageTracker/
  -> You can build the contract using "truffle compile". 
  -> once build the new artifacts from folder $<Path_Where_Extracted>/LuggageTracker/build/contracts/luggage.json needs to be copied to the folder $<Path_Where_Extracted>/LuggageTracker/DApp/luggagetrack/src/contract/luggage.json
  -> For deploying the contract you need to install HDWalletProvider, usig command "npm install"
  -> "truffle migrate --reset --network='rinkeby'" is used to deploy the new contract to testnet.

  For Testing contract with local Ganache RPC, execute below steps
  ----------------------------------------------------------------
  -> truffle develope
  -> compile
  -> migrate
  -> test
