class SkinSelectorScene extends Phaser.Scene {
  constructor() {
    super("SkinSelectorScene");
  }

  create() {
    this.gw = gameWidth;
    this.gh = gameHeight;
    this.halfW = halfGameWidth;
    this.halfH = halfGameHeight;

    this.NFTImages = [];
    this.mintButtons = [];

    this.mintNFTTextCreateTween = null;
    this.chooseSkinID = 0;

    this.chooseSkinFrame = this.createChooseSkinFrame();
    this.mintNFTTextImage = this.createMintNFTTextImage();
    this.nextStepButton = this.createNextButton();
    this.createNFTImages();
  }

  createMintNFTTextImage() {
    const image = this.add
      .image(this.halfW, -100, "choose_skin_text")
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
      .onClick(() => {
        this.game.audio.click.play();
        console.log(i);
        const NFT_ID = i;
        const userWalletAddress = web3Manager.getUserWalletAddress();
        //! WYŚLIJ REQUEST NA BLOCKCHAIN
      });

    this.tweens.add({
      targets: button,
      ease: "Back.out",
      duration: 1200,
      scale: 1,
    });

    return button;
  }

  createNFTImage(x, y, imageKey) {
    const image = this.add
      .image(x, y, imageKey)
      .setOrigin(0.5, 0.5)
      .setScale(0)
      .setInteractive();

    this.tweens.add({
      targets: image,
      ease: "Back.out",
      duration: 500,
      scale: 1,
    });

    return image;
  }

  createNFTImages() {
    const columns = Math.ceil(Math.sqrt(5));

    for (let i = 0; i < 4; i++) {
      let imageKey = "NFT_" + i;
      const x = (i % columns) * 230 + this.halfW - 230;
      const y = this.halfH - 100 + Math.floor(i / columns) * 230;

      this.time.delayedCall(100 * i, () => {
        const NFTImage = this.createNFTImage(x, y, imageKey);
        NFTImage.ID = i;
        NFTImage.on("pointerdown", () => {
          this.chooseSkinID = NFTImage.ID;
          this.chooseSkinFrame.setPosition(x, y);
        });

        this.NFTImages.push(NFTImage);
      });

      if (i === 0) this.chooseSkinFrame.setPosition(x, y);
    }
  }

  createChooseSkinFrame() {
    const image = this.add
      .image(0, 0, "choose_NFT_frame")
      .setOrigin(0.5, 0.5)
      .setScale(0);

    this.tweens.add({
      targets: image,
      ease: "Back.out",
      duration: 800,
      scale: 1,
    });

    return image;
  }

  createNextButton() {
    const button = new Button(this, this.halfW, gameHeight, "backButton")
      .onClick(() => {
        this.game.audio.click.play();
        localStorage.setItem("skin_ID", this.chooseSkinID);
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
        const playScene = this.scene.get("PlayScene");
        playScene.playStartSceneTween();
        playScene.changePlayerSkin(this.chooseSkinID);
        playScene.playPlayerEntryAnimation();
        this.scene.start("MenuScene");
        // this.clearTweens();
        this.scene.remove("SkinSelectorScene");
        //!CHOOSE SKIN SCENE
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
    this.tweens.add({
      targets: this.chooseSkinFrame,
      ease: "Back.in",
      duration: 400,
      x: gameWidth + 300,
    });
  }
}
