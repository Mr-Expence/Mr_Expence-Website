# Resource Pack Creation Guide

## Creating Models

Creating models requires [Blockbench](https://blockbench.net/). Create a new Java Block/Item and name it anything you want. Naming it to a preexisting model will automaticly apply it to that item/model. 

### Creating the shape
The `Add Element` button creates a cube. You can group the cubes together with the `Add Group` button.

Use the `Move` tool or press `V` to move the cube around.
Use the `Resize` tool or press `S` to change how big the cube is. A full block is 16 pixels.
Use the `Rotate` tool or press `R` to rotate the cube around its pivot point.
The `Pivot Tool` moves the pivot point around.

### Creating the Texture

On the left, click `Create Texture` to create a new texture or click `Import Texture` to import a texture. After creating the texture, head into the `Paint` tab to start drawing.
`B` is the paint brush.
Holding `ALT` brings up the color picker.
`E` is the eraser.

In the `Edit` tab, you can move the area of the texture that face of the model shows. Animated Textures work with models. Click the play button in the bottom left to see the animation.

### Displaying the model

In the `Display` tab you can change how the model will be displayed in the world. There is no block setting. To copy the placement of the model from one slot to another use the `Copy` and `Paste` buttons up the top. You might need to invert the rotations so they match.

## Importing the model to your resource pack

### The Model

To import the model to your resource pack. Click `File`, `Export`, then `Export Block/Item Model`. Place the model in the `models` folder, `item` or `block`. Do not place it in the `models` folder, it requires a subfolder.

```
pack name
│   pack.mcmeta
│   pack.png
│
└───assets
    └───minecraft
        ├───models
        │   ├───block
        │   └───item
        └───textures
            ├───block
            └───item
```

### The Texture

To save the texture, click the save icon on the texture. You can also right click the texture and click `Save As`. Move it into the `block` or `item` subfolder in `textures`.

### Double Checking

Make sure the texture is properly selected. Open the model in a [text editor](./intro#text-editor) and make sure the resource pack is correct. You do not need the `textures` in the path and it starts from the subfolders. You can have more subfolders and doesn't need the extention. `item/stick` is a working path.