# Resource Pack Creation Guide

## Resource Pack Structure

Before we start creating a resource pack, Here is how it is formatted.
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
This is the main folder of your resource pack; let’s go over the files inside it.

**`pack.mcmeta`** - This is how minecraft knows that this is a resource pack.

**`pack.png`** - This is the icon for the pack and is not needed for the pack to work.

Lets go into the assets folder.

The assets folder is where the file for the game is. If you want to support mods, add the mod directory name here.

We will only be covering the minecraft directory now.

### Subfolders

The minecraft folder structure is made up of 2 main folders, the `models` folder and the `textures` folder. Both have a `block` and `item` subfolder for easier file management.

```
minecraft
        ├───atlases
        ├───blockstates
        ├───equipment
        ├───font
        ├───items
        ├───lang
        ├───models
        ├───optifine
        ├───particles
        ├───post_effect
        ├───shaders
        ├───sounds
        ├───texts
        ├───textures
        └───waypoint
```

You resource pack can have any of these folders.

**`atlases`**
 - This is how the compress multiple small textures into a spritesheet.

**`blockstates`**
 - This tells minecraft what models should be applied to blocks when they are placed diffrent (have diffrent blockstates).

**`equipment`**
 - This is where items that can go into an entities equipment slot go.

**`font`**
 - This is where the `ascii` fonts are stored.

**`items`**
 - This is how you change item textures depending on the state its in.

**`lang`**
 - This is the translations folder. Changes what things are called.

**`models`**
 - These are where the models are stored. Models can be named anything, existing models when be easily applied ingame, custom named models need to be applied in another way.

**`optifine`**
 - This is for a popular mod with resource pack customisation like connected textures or custom entity models.

**`particles`**
 - This is where you point to the textures particles should use.

**`post_effect`**
 - This is where the effects of visual aspects go.

**`shaders`**
 - The built in shaders, not like iris/optifine shaders.

**`sounds`**
 - Where the sound files are stored.

**`texts`**
 - Where the credits, end poem, and title screen splashes are.
**`textures`**
 - Where the textures are located at.

**`waypoint`**
 - The place for waypoint icons.

The `models` and `textures` folder have subfolders.

```
minecraft
        ├───models
        │   ├───block
        │   └───item
        └───textures
            ├───block
            ├───colormap
            ├───effect
            ├───entity
            ├───environment
            ├───font
            ├───gui
            ├───item
            ├───map
            ├───misc
            ├───mob effect
            ├───painting
            ├───particle
            └───trims
```

### `Models`:

These are where the diffrent type of models go:

**`blocks`**
 - Block models go in here

**`items`**
 - Item models go in here

### `Textures`:

```
textures
├───block
├───colormap
├───effect
├───entity
├───environment
├───font
├───gui
├───item
├───map
├───misc
├───mob effect
├───painting
├───particle
└───trims
```

**`block`**
 - This is the place for the block textures.

**`colormap`**
 - This is for the colours of blocks like leaves and grass.

**`effect`**
 - Contains the dither texture, which is used in the notch shading effect that has been removed from default Minecraft.

**`entity`**
 - Contains the entitiy textures.

**`environment`**
 - Has the textures for the sun, moon, clouds, rain and more.

**`font`**
 - Contains the font textures.

**`gui`**
 - Where the Graphical user interface textures are.

**`item`**
 - This is where the item textures are located.

**`map`**
 - Contains the map textures.

**`misc`**
 - The random textures are stored here like the overlays.

**`mob effect`**
 - Contains the effect icons..

**`painting`**
 - Contains the painting textures.

**`particle`**
 - Has all the particle textures.

**`trims`**
 - Has the trim textures.

