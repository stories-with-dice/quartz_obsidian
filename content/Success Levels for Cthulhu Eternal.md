---
date: 2024-10-30
---

_Cthulhu Eternal_ is a flexible and rules-light system designed specifically for Lovecraftian and cosmic horror role-playing. The system is based on an open-license variant of the d100 mechanics and was developed by the team at Cthulhu Reborn. You can find the rulesets for PWYW on [DriveThruRPG](https://www.drivethrurpg.com/en/publisher/5143/cthulhu-reborn?affiliate_id=1026766) [^1]. The team has also published modules (on DriveThruRPG) and monsters, items, etc (on [their website](https://cthulhueternal.com/open-mythos/)).

The cool thing about _Cthulhu Eternal_ is its adaptability for different historical eras and cultural settings, allowing for tailored adventures in settings like Jazz Age, Modern, or, more recently, Space Age and Classical Age.

![Plato and Aristotle: How Do They Differ? | Britannica](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9a470fb3-d3f6-48fc-a0ee-226029602787_900x675.jpeg "Plato and Aristotle: How Do They Differ? | Britannica")

_Plato and Aristotle arguing how to pronounce “Nyarlathotep”_

---

**Side note: Online SRD and FoundryVTT module**

I built an online version of the ruleset at [Cthulhu Eternal SRD](https://storieswithdice.com/cthulhu_eternal_srd/). It contains the rules, items, monsters, rituals, cults. It’s still a work-in-progress. Feel free to contribute to the GitHub repository: [here](https://github.com/stories-with-dice/cthulhu_eternal_srd).

Additionally, I’ve built a FoundryVTT module to be used in the Delta Green system that contains all the public domain Mythos: [here](https://github.com/stories-with-dice/delta-green-open-mythos).

---

# Success Levels Rules

I came to this solution because I play solo games and I value speed of resolution. I want to reduce the number rolls in order to speed up the game. Implementing Success Levels helps with that. This subsystem was recently used in the Warhammer Fantasy Roleplay system 4th edition.

Here are my thoughts and examples for how to do that in the Cthulhu Eternal system (or Delta Green)

**General Rule:** Take half of the maximum of any rolls you make after the skill roll (damage, healing, SAN loss).

**Criticals** (doubles) give you the max or min SL. This is the tens place of your skill.

- Ex. Rolling 33 on a skill of 40 doesn’t give 1 SL, but 4 SL

**Opposed rolls** are resolved first by SL, then by Skill rating

- Thus, a Persuade roll of 56 on a skill of 60, results in 1 SL
- An opposed Insight roll (to negate the persuasion) of 32 on a skill of 40 also results in 1 SL
- However, the Persuade skill is higher, and thus wins
    

## Combat

- weapons and spells deal half of highest possible value. A D10 handgun deals 5 damage.
    - N.B. This is not equal to mean. The max of a d6 is 6, of which half is 3; the mean of a D6 is 3.5
- you add SL to the damage roll
    - This way you keep an element of randomness, but you reduce the number of rolls.
    - if the target succeeded on a Dodge check, you subtract their SL from your damage
- for Lethality rolls, you succeed at them if the Attack roll is also under the Lethality score of the weapon
    
## Healing

See [Part 4 - Combat](https://storieswithdice.com/cthulhu_eternal_srd/Part-4---Combat#healing)

- You don't roll the d4, you heal 2 + SL.
    
## Rituals

From the rules:

> If the Protagonist invests the requisite time, he or she will still need to make a roll at the end of the period to see whether the time invested paid off. The Protagonist must attempt a **SAN** roll – and _fail_ the roll – to learn the ritual.

- You don't lose D6 for learning [Erase Memories](https://storieswithdice.com/cthulhu_eternal_srd/Part-10---Rituals#erase-memories), you lose 3 + SL
    - Here, you take the mathematical absolute value of the SL, as you intent to **fail** SAN. The original would have been -3 SL, but we take the absolute value of (+) 3
        

_Whatcha think?_

[^1]: Link is affiliated.