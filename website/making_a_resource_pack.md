# Resource Pack Creation Guide

## Making a Resource Pack

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