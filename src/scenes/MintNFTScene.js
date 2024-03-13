class MintNFTScene extends Phaser.Scene {
  constructor() {
    super("MintNFTScene");
  }

  create() {
    this.gw = gameWidth;
    this.gh = gameHeight;
    this.halfW = halfGameWidth;
    this.halfH = halfGameHeight;

    this.NFTImages = [];
    this.mintButtons = [];

    this.mintNFTTextCreateTween = null;

    this.mintNFTTextImage = this.createMintNFTTextImage();
    this.nextStepButton = this.createNextButton();
    this.createNFTImages();
  }

  //   "NFT_1",
  //   "NFT_2",
  //   "NFT_3",
  //   "mint_nft_text",
  //   "mint_button",

  createMintNFTTextImage() {
    const image = this.add
      .image(this.halfW, -100, "mint_nft_text")
      .setOrigin(0.5, 0);

    this.mintNFTTextCreateTween = this.tweens.add({
      targets: image,
      ease: "Back.out",
      duration: 1000,
      y: this.halfH - 400,
    });

    return image;
  }

  createMintButton(i) {
    const button = new Button(
      this,
      230 * i + this.halfW - 230,
      this.halfH + 80,
      "mint_button"
    )
      .setScale(0)
      .onClick(async () => {
        this.game.audio.click.play();
        console.log(i);
        const NFT_ID = i;
        const userWalletAddress = web3Manager.getUserWalletAddress();

        // const tokenMetadata = await Web3Manager.contract.methods
        //   .getTokenURIForSale(i)
        //   .call();

        // await Web3Manager.contract.methods.purchaseToken(id).send({
        //     from: userAddress,
        //     value: tokenPriceInWei,
        //   });

        //! WYŚLIJ REQUEST NA BLOCKCHAIN
      });

    this.tweens.add({
      targets: button,
      ease: "Back.out",
      duration: 900,
      scale: 1,
    });

    return button;
  }

  createNFTImage(i) {
    const imageKey = "NFT_" + (i + 1);
    const image = this.add
      .image(230 * i + this.halfW - 230, this.halfH - 200, imageKey)
      .setOrigin(0.5, 0)
      .setScale(0);

    this.tweens.add({
      targets: image,
      ease: "Back.out",
      duration: 600,
      scale: 1,
    });

    return image;
  }

  createNFTImages() {
    for (let i = 0; i < 3; i++) {
      this.time.delayedCall(200 * i, () => {
        const NFTImage = this.createNFTImage(i);
        const mintButton = this.createMintButton(i);
        this.NFTImages.push(NFTImage);
        this.mintButtons.push(mintButton);
      });
    }
  }

  createNextButton() {
    const button = new Button(this, this.halfW, gameHeight, "backButton")
      .onClick(() => {
        this.game.audio.click.play();
        this.handleNextScene();
      })
      .setAngle(180);

    this.tweens.add({
      targets: button,
      ease: "Back.out",
      duration: 800,
      y: gameHeight - 150,
    });

    return button;
  }

  handleNextScene() {
    this.tweens.add({
      targets: [this.mintNFTTextImage, this.nextStepButton],
      ease: "Back.in",
      duration: 600,
      x: gameWidth + 300,
      onComplete: () => {
        this.scene.start("SkinSelectorScene");
        this.clearTweens();
        this.scene.remove("MintNFTScene");
      },
    });

    this.tweens.add({
      targets: this.NFTImages,
      ease: "Back.in",
      duration: 400,
      x: gameWidth + 300,
    });
    this.tweens.add({
      targets: this.mintButtons,
      ease: "Back.in",
      duration: 500,
      x: gameWidth + 300,
    });
  }

  clearTweens() {
    // this.cloudsMoveTween.remove();
    // this.cloudsMoveTween = null;
    // this.scaleStateTextTween = null;
    // this.scaleRiskyJumperTextTween = null;
    // this.scaleMetamaskIconTween = null;
    // this.changeStateTextTween = null;
  }
}
