class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, sprite, skinID) {
    super(scene, x, y, sprite);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.spriteID = skinID;
    this.audio = this.scene.game.audio;
    this.initialJumpValue = 100;
    this.jumpY = this.initialJumpValue;
    this.jumpYLimit = 1500;
    this.jumpYIncrease = 140;
    this.jumpX = this.calculateJumpXDistance();
    this.isReady = false;
    this.canJump = false;
    this.isIdle = true;
    this.isPreparing = false;
    this.isFalling = false;
    this.setOrigin(0, 1);
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);
    this.body.width = 65;
    this.body.offset.x = 10;
    this.body.acceleration.set(0, 2e3);
    this.body.bounce.x = 0.5;
  }
  preparing() {
    if (!this.canJump) return;
    this.isIdle = false;
    this.anims.play("preparing_" + this.spriteID, true);
    this.isPreparing = true;
    this.increasingSpeed();
  }
  increasingSpeed() {
    this.interval = setInterval(() => {
      this.increaseSpeed();
    }, 100);
  }
  calculateJumpXDistance() {
    return this.jumpY / 2;
  }
  dead() {
    this.audio.endJump.play();
    this.anims.play("dead_" + this.spriteID, true);
    this.body.bounce.x = 0;
    this.setVelocityX(0);
  }
  jump() {
    if (!this.canJump) return;
    this.audio.startJump.play();
    this.anims.play("jump_" + this.spriteID, true);
    this.jumpX = this.calculateJumpXDistance();
    this.isPreparing = false;
    this.isIdle = false;
    this.canJump = false;
    this.setVelocityY(-this.jumpY);
    this.setVelocityX(this.jumpX);
    this.resetPreparing();
  }
  resetPreparing() {
    clearInterval(this.interval);
    this.resetSpeed();
  }
  isTouchingDown() {
    return this.body.touching.down;
  }
  isTouchingRight() {
    return this.body.touching.right;
  }
  bounce() {
    this.audio.hurt.play();
    this.anims.play("hurt_" + this.spriteID, true);
  }
  idle() {
    if (this.isPreparing || this.isIdle) return;
    this.anims.play("idle_" + this.spriteID, true);
    this.audio.endJump.play();
    this.isFalling = false;
    this.isIdle = true;
    this.canJump = true;
    this.setVelocityX(0);
  }
  isFallingDown() {
    return this.body.velocity.y > 0;
  }
  fall() {
    if (
      this.anims.currentAnim.key === "hurt_" + this.spriteID ||
      this.isFalling
    )
      return;
    this.isFalling = true;
    this.anims.play("fall_" + this.spriteID, true);
  }
  isFellOffMap(gameHeight) {
    return this.y >= gameHeight + 200;
  }
  startEntryGameAim(cb) {
    this.anims.play("moveRight_" + this.spriteID, true);
    this.scene.tweens.add({
      targets: this,
      duration: 1000,
      x: this.x + 140,
      onComplete: () => {
        this.anims.play("idle_" + this.spriteID, true),
          (this.isReady = true),
          (this.canJump = true),
          cb();
      },
    });
  }
  increaseSpeed() {
    if (this.jumpY >= this.jumpYLimit) return;
    this.jumpY += this.jumpYIncrease;
  }
  resetSpeed() {
    this.jumpY = this.initialJumpValue;
    this.jumpX = this.calculateJumpXDistance();
  }
  move(value) {
    this.x += value;
  }
  getPosition() {
    return this.x + this.width;
  }

  changeSkin(skinID) {
    this.spriteID = skinID;
    this.setTexture("player_" + skinID);
  }
}
