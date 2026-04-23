---
title: Textures
---

# Resource Pack Creation Guide

## Changing the textures

### The block textures

Inside the `textures/block` folder, create a new texture file. `.png` This can be done by opening your texture editor, creating a new texture, and save it as a `.png`.

Lets edit the dirt block. Enter you texture file and edit it as wished. Now save it with the name `dirt.png`. Enter the game, enable the resource pack, finaly look at it in game. You can use the [Resource Pack Asset Browser](https://www.blockbench.net/plugins/asset_browser) to find the names of the textures and to grab the vanilla textures.

### The item textures

Changing the item textures is the same as changing the block textures. But this time place the file in the `textures/item` folder. You can name it `stick.png` as a test.

## Animating textures

All blocks, items, and entities can be animated.

To animate a texture with each frame lasting for 2 ticks (0.1 seconds) use this.
```json
{
  "animation": {
    "frametime": 2
  }
}
```
The `frametime` is how long the frame will last in ticks

You can also choose what frames get displayed in any order.
```json
{
  "animation": {
    "frametime": 2,
    "frames": [
      1,
      2,
      0,
      2
    ]
  }
}
```
You can reuse frames with this. Remember frame 0 is the first frame.

<a href="https://misode.github.io/assets/texture-meta/" target="_blank" rel="noopener noreferrer">
  <Badge type="info" text="Misode Texture Metadata Generator" />
</a>
