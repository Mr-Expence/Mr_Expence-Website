# Resource Pack Creation Guide

## Creating the base

### Resource Pack Folder

Now you want to find the location your resource pack needs to be. You can find it with the table below.

| Operating System | Location |
|---|---|
| Windows | `%APPDATA%\.minecraft\resourcepacks` |
| MacOS | `~/Library/Application Support/minecraft/resourcepacks` |
| Linux | `~/.minecraft/resourcepacks` |

::: tip
You can also get to it by clicking `Open Pack Folder` in Minecraft.
:::

### Creating the folders

Open blockbench and View the asset browser. Copy the folders without the files. This can be done my making the folders and naming them based on the asset browser.

You can alternatively follow this folder structure.

```
pack name
└───assets
    └───minecraft
        ├───models
        │   ├───block
        │   └───item
        └───textures
            ├───block
            └───item
```

### Making `pack.mcmeta`

Minecraft needs `pack.mcmeta` to know that your pack is a resource pack and not a folder. 

Create the `pack.mcmeta` at the root of the pack, in the folder with the assets folder.

```
pack name
├───pack.mcmeta
└───assets
    └───minecraft
        ├───models
        │   ├───block
        │   └───item
        └───textures
            ├───block
            └───item
```

**`pack.mcmeta`** requires two features. A description and a pack format.

The pack format tells Minecraft which version your pack is for. You can find the format number in the table below.

| Format | Releases |
| --- | --- |
| 1 | 1.6.1 – 1.8.9 |
| 2 | 1.9 – 1.10.2 |
| 3 | 1.11 – 1.12.2 |
| 4 | 1.13 – 1.14.4 |
| 5 | 1.15 – 1.16.1 |
| 6 | 1.16.2 – 1.16.5 |
| 7 | 1.17 – 1.17.1 |
| 8 | 1.18 – 1.18.2 |
| 9 | 1.19 – 1.19.2 |
| 12 | 1.19.3 |
| 13 | 1.19.4 |
| 15 | 1.20 – 1.20.1 |
| 18 | 1.20.2 |
| 22 | 1.20.3 – 1.20.4 |
| 32 | 1.20.5 – 1.20.6 |
| 34 | 1.21 – 1.21.1 |
| 42 | 1.21.2 – 1.21.3 |
| 46 | 1.21.4 |
| 55 | 1.21.5 |
| 63 | 1.21.6 |
| 64 | 1.21.7 – 1.21.8 |
| 69.0 | 1.21.9 – 1.21.10 |
| 75.0 | 1.21.11 |
| 84.0 | 26.1 |

::: tip
You can set the max value at a really high value like `9999`.
:::

The bare minimum  you can put in the `pack.mcmeta` is shown below.

```json
{
  "pack": {
    "description": "",
    "pack_format": 84
  }
}
```

I would recommend using this instead as it works for `1.21.5` and above.

```json
{
  "pack": {
    "description": "",
    "pack_format": 84,
    "min_format": 55,
    "max_format": 9999
  }
}
```


::: tip Mr_Expence's Tips
I use
```json
{
  "pack": {
    "description": {
      "text": "Summary",
      "type": "text",
      "extra": [
        {
          "text": "\nBy: Name ",
          "color": "blue"
        },
        {
          "player": {
            "name": "IGN"
          },
          "hat": true,
          "color": "white"
        }
      ],
      "color": "yellow"
    },
    "min_format": 55,
    "max_format": 9999
  }
}
```
Replace Summary with your pack summary and change IGN to your Minecraft username and Name to the name you go by. This will Make your head appear.
:::

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
:::tip [Misode](https://misode.github.io/assets/texture-meta/)
 
:::