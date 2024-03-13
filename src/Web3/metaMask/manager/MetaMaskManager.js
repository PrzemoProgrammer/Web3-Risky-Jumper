class MetaMaskManager {
  constructor() {
    this.confirmMessage = METAMASK_CONFIRM_MESSAGE;

    this.handleNetworkChange = this.handleNetworkChange.bind(this);
    if (window.ethereum) {
      window.ethereum.on("networkChanged", this.handleNetworkChange);
    }
  }

  detect() {
    return typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask;
  }

  async getAccountAccess() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async signMessage(address) {
    const message = this.confirmMessage;

    try {
      const result = await window.ethereum.request({
        method: "personal_sign",
        params: [message, address],
      });

      return result;
    } catch (error) {
      alert(error.message + " To try signing again, please refresh the page");
      throw error;
    }
  }

  checkMetaMaskAvailable() {
    return window.ethereum && window.ethereum.isMetaMask;
  }

  async isConnectedToPolygonNetwork() {
    try {
      const polygonChainId = "0x89";
      const currentChainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      return currentChainId === polygonChainId;
    } catch (error) {
      console.error(
        "Error while checking connection to Polygon network:",
        error
      );
      return false;
    }
  }

  async switchNetworkToPolygon() {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x89", // Polygon Mainnet ID is 137 (in hexadecimal)
            chainName: "Polygon Mainnet",
            rpcUrls: ["https://polygon-rpc.com/"], // Replace with the Polygon RPC URL
            nativeCurrency: {
              name: "MATIC",
              symbol: "MATIC",
              decimals: 18,
            },
            blockExplorerUrls: ["https://polygonscan.com/"], // Replace with the Polygon explorer URL
          },
        ],
      });
      console.log("Switched to the Polygon network.");
    } catch (error) {
      console.error("Error while switching to Polygon network:", error);
      return false;
    }
  }

  async connectToPolygonNetworkIfNeeded() {
    let state = null;
    try {
      const isPolygonConnected = await this.isConnectedToPolygonNetwork();

      if (!isPolygonConnected) {
        const connectState = await this.switchNetworkToPolygon();
        state = connectState;
      }
    } catch (error) {
      state = false;
      console.error(
        "Error while checking or switching to Polygon network:",
        error
      );
    }

    return state;
  }

  async checkIsAvailable() {
    if (!this.detect()) {
      //   this.metaMaskAlert.setAlert("install");
      return false;
    } else {
      // console.log("MetaMask is available.");
      //   this.metaMaskAlert.setAlert("connect");
      // await this.getAccountAccess();
      return true;
    }
  }

  handleNetworkChange() {
    window.location.reload();
  }
}

const metaMaskManager = new MetaMaskManager();
