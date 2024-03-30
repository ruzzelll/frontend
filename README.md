# Smart Contract and Frontend Application

This repository contains a simple program consisting of a Solidity smart contract and a frontend application. The program demonstrates basic functionality where the smart contract has at least two functions, and the values returned by these functions are visible on the frontend of the application.

## Smart Contract

The smart contract, named `Assessment.sol`, is written in Solidity. It includes the following functionalities:

1. **Deposit Function:** Allows users to deposit funds into the contract.
2. **Withdraw Function:** Allows users to withdraw funds from the contract.

### Installation

To deploy and interact with the smart contract, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Compile the smart contract using Hardhat with `npx hardhat compile`.
4. Deploy the compiled contract to a compatible blockchain network using Hardhat with `npx hardhat run scripts/deploy.js`.

## Frontend Application

The frontend application is built with React.js and allows users to interact with the deployed smart contract. It includes the following functionalities:

1. **Connect Metamask Wallet:** Allows users to connect their Metamask wallet to the application.
2. **Display Account Balance:** Displays the balance of the connected account.
3. **Deposit and Withdraw Funds:** Allows users to deposit and withdraw funds from the smart contract.

### Installation

To run the frontend application locally, follow these steps:

1. Navigate to the `frontend` directory.
2. Install the necessary dependencies using `npm install`.
3. Start the development server with `npm start`.

## Usage

Once the smart contract is deployed and the frontend application is running, you can access the application in your web browser. Connect your Metamask wallet, and you'll be able to deposit and withdraw funds, with the values displayed on the frontend.

## Support

If you encounter any issues or have questions regarding this project, feel free to [create an issue](link-to-issues-page) in this repository. We'll be happy to assist you!

## License

This project is licensed under the [MIT License](link-to-license-file).
