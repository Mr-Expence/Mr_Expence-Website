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

**`atlases`** - This is how the compress multiple small textures into a spritesheet.

**`blockstates`** - This tells minecraft what models should be applied to blocks when they are placed diffrent (have diffrent blockstates).

**`equipment`** - This is where items that can go into an entities equipment slot go.

**`font`** - This is where the `ascii` fonts are stored.

**`items`** - This is how you change item textures depending on the state its in.

**`lang`** - This is the translations folder. Changes what things are called.

**`models`** - These are where the models are stored. Models can be named anything, existing models when be easily applied ingame, custom named models need to be applied in another way.

**`optifine`** - This is for a popular mod with resource pack customisation like connected textures or custom entity models.

**`particles`** - This is where you point to the textures particles should use.

**`post_effect`** - This is where the effects of visual aspects go.

**`shaders`** - The built in shaders, not like iris/optifine shaders.

**`sounds`** - Where the sound files are stored.

**`texts`** - Where the credits, end poem, and title screen splashes are.

**`textures`** - Where the textures are located at.

**`waypoint`** - The place for waypoint icons.

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

**`blocks`** - Block models go in here

**`items`** - Item models go in here

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

###### **block** - This is the place for the block textures.

###### **colormap** - This is for the colours of blocks like leaves and grass.

###### **effect** - Contains the dither texture, which is used in the notch shading effect that has been removed from default Minecraft.

###### **entity** - Contains the entitiy textures.

###### **environment** - Has the textures for the sun, moon, clouds, rain and more.

###### **font** - Contains the font textures.

###### **gui** - Where the Graphical user interface textures are.

###### **item** - This is where the item textures are located.

###### **map** - Contains the map textures.

###### **misc** - The random textures are stored here like the overlays.

###### **mob effect** - Contains all the status effect textures, like strength & speed.

###### **painting** - Contains the painting textures.

###### **particle** - contains all the particles, like explosions, anger, bubble, etc.

## Making a New Pack

### Resource Pack Folder

Now that you have a basic understanding of how a texture pack is structured, let’s start making one. You’re going to want to find your resource pack folder; it can be found at:
| Operating System | Location
|– | –
Windows| `%APPDATA%\.minecraft\resourcepacks`
MacOS| `~/Library/Application Support/minecraft/resourcepacks`
Linux| `~/.minecraft/resourcepacks`

You can also get to it by clicking `Open Pack Folder` in Minecraft:

![Open Resource Pack Folder](https://www.notion.so/assets/resourcepackguide/images/making-a-pack/open-rp-folder.png)

### Extracting the .jar File

Once this folder is open, you are going to want to extract the template and copy that folder here:

![Copy Template Here](https://www.notion.so/assets/resourcepackguide/images/making-a-pack/copy-template.png)

Once it is copied over, you can rename the folder to what you want your resource pack to be named. I recommend you use dashes `-` or underscores `_` rather than spaces, but you don’t have to.

Right-click the template folder and click `Open in new window`. Minimize the old window, as we will come back to it when we are done editing the template.

Inside, the template pack looks like this:

![Template mane](https://www.notion.so/assets/resourcepackguide/images/making-a-pack/template-mane.png)

Right-click the `LICENSE` file and click `Open with Brackets` or `Edit with Notepad++`.

Read the license and if you plan on keeping it, change the Copyright at the top in this red box to your resource packs name:

![License File](https://www.notion.so/assets/resourcepackguide/images/making-a-pack/license.png)

If you are going to use it, save after editing and close Brackets. If you don’t want to use the License, delete the file.

Now right-click the pack.mcmeta file and click `Open with Brackets`.

![Pack Mcmeta](https://www.notion.so/assets/resourcepackguide/images/making-a-pack/pack-mcmeta.png)

The pack format tells Minecraft what versions this pack will work with:

Pack Format | Minecraft Versions
:–: | :–:
|1|1.6.1 to 1.8.9
|2|1.9 to 1.10.2
|3|1.11 to 1.12.2
|4|1.13 to 1.14.4
|5|1.15 to 1.16.1
|6|1.16.2 to 1.16.4
|7|1.17

Change this to the version you will be making the pack for.

The description is what appears in the game on the resource pack selection screen, It can be customized with different colors and such. See the link above about formatting codes for how this works.

Once you’ve made your changes, save and close Brackets.

The last text file in this folder is `README.md`. If you plan on keeping it, open it in Brackets and edit it to be what you want. I like to have information about the pack and any relevant links for that specific pack and a credits listing everyone who has worked on it. This entire guide has been written in Markdown, [here](https://github.com/Love-and-Tolerance/Resource-Pack-Guide/raw/master/README.md) is the raw code. [Here](https://guides.github.com/features/mastering-markdown/) is a guide to Markdown. Having a README file is especially useful if you have your resource pack on GitHub, as it is what people see when they look at your repository.

Once you are done with that, go into the assets folder, then into the minecraft folder. Right-click and hover over `New` then select `Folder`, name this folder `textures` like this:

![Make Textures Folder](https://www.notion.so/assets/resourcepackguide/images/making-a-pack/make-textures-folder.png)

Next, you are going to go into the textures folder and make a new folder inside it, called `block`, like this:

![Make Block Folder](https://www.notion.so/assets/resourcepackguide/images/making-a-pack/make-block-folder.png)

After that, go into the block folder. Now we are going to minimize this window down and go extract the Minecraft .jar file.

Open up the window you minimized earlier. In the resource pack folder, click the up arrow to get to the .minecraft directory:

![Up To Minecraft Folder](https://www.notion.so/assets/resourcepackguide/images/extracting-the-jar/up-folder-to-dotmc.png)

Once inside your .minecraft folder, you will want to go into the versions’ folder:

![Into Versions Folder](https://www.notion.so/assets/resourcepackguide/images/extracting-the-jar/versions.png)

Once inside, you will see a folder for each Minecraft version you have installed. You will want to go into the folder for the version you are making the resource pack for. We will be using 1.16.4 for this guide:

![1.16.4 Folder](https://www.notion.so/assets/resourcepackguide/images/extracting-the-jar/1.16.4.png)

Once inside you are going to see the Minecraft .jar file. This is where all the default assets are for Minecraft:

![Jar File](https://www.notion.so/assets/resourcepackguide/images/extracting-the-jar/jar-file.png)

You are going to want to extract it. If using 7-Zip, right-click the .jar file and hover over the 7-Zip submenu, then click `Extract to 1.16.4\`.

Wait a few seconds for it to finish, then go into the folder it made:

![Inside Extracted Jar](https://www.notion.so/assets/resourcepackguide/images/extracting-the-jar/jar-extracted.png)

Most of these files are pointless to you. The only thing we care about is the `assets` folder at the top; go into it:

![Default Assets Folder](https://www.notion.so/assets/resourcepackguide/images/extracting-the-jar/default-assets.png)

Starting to look familiar? Go into the `minecraft` folder:

![Default Minecraft](https://www.notion.so/assets/resourcepackguide/images/extracting-the-jar/default-mc.png)