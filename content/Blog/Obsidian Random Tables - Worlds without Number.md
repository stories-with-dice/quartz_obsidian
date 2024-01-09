---
dg-publish: true
date: 2023-08-10
---

I use Obsidian for my RPG prep, both in campaigns I run and in my solo games. I try not to leave Obsidian to keep myself immersed in the story and the game. I use different tools to roll on random tables to keep myself inspired.

One of my favorite sources for random tables is the **Tags** in Worlds without Number. I use these across genres (fantasy, sci-fi, modern horror) with minimal conversion work. They are universal!

I extracted the tags from [WWN](https://www.drivethrurpg.com/product/348791/Worlds-Without-Number&affiliate_id=1026766) into Markdown files. These can be used as tables for the Obsidian DiceRoller [plugin](https://github.com/javalent/dice-roller).

Grab them from Github gist [here](https://gist.github.com/stories-with-dice/df4b24f5ec8fdaff57a55677d9626699).

You can then use the DiceRoller syntax to roll on them:

Example:

```
`dice: [[Worlds without Number Tags - Ruin Tags]]|heading`
```

## Inline scripts

These can be used with the Inline Scripts [plugin](https://github.com/jon-heard/obsidian-inline-scripts-library/).

- After installing that, download my extension of the diceroller script and add it to your inline scripts library. It is part of the same gist above [here](https://gist.github.com/stories-with-dice/df4b24f5ec8fdaff57a55677d9626699#file-plugin_diceroller_extended-sfile-md).
- Enable it

![](https://i.imgur.com/QUaZFPi.png)

- You can then use it with:

```
;;header [[Worlds without Number Tags - Ruin Tags]]::
```

The easier way would be to use the **Buttons** panel provided by Inline Scripts.

- Enable the side panel. 

![](https://i.imgur.com/y02W0rI.png)

- 1. Create new group
- 2. Import config

![](https://i.imgur.com/pCauZ3q.png)


- Paste this JSON

```json
{"display":"TBL: Community Tag","shortcut":"header [[Worlds without Number Tags - Community Tags]]|heading-1","help":"","parameterData":[]},{"display":"TBL: Court Tag","shortcut":"header [[Worlds without Number Tags - Court Tags]]|heading-1","help":"","parameterData":[]},{"display":"TBL: Ruin Tag","shortcut":"header [[Worlds without Number Tags - Ruin Tags]]|heading-1","help":"","parameterData":[]},{"display":"TBL: Wilderness Tag","shortcut":"header [[Worlds without Number Tags - Wilderness Tags]]|heading-1","help":"","parameterData":[]},
```

Then you’ll see the buttons for each of the tags!

![](https://i.imgur.com/4X9AV0n.png)

Clicking on them would give you a result appended to the current file. 

Additionally, you can hover over the result while holding CONTROL to see the tag's description!

![](https://i.imgur.com/0wpgydk.png)

I hope this helps with getting quick inspiration!

