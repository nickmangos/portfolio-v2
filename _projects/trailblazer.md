---
layout: project
date: 25/6/2017
title: Project - Trailblazer
description: A Chrome Extension that records and maps your online research
website: http://www.trailblazer.io
tags:
  - ux
  - ui
  - product

tag-colour: C319FF

file-name: trailblazer
cover-image: trailblazer/cover.png
hero-image: trailblazer/hero.png
---

<figure><img class="hero" src="/projects/{{page.file-name}}/hero.png" alt="!" /></figure>

Trailblazer set out to create a way for people to easily create and share knowledge maps. The application builds a map as you browse the web, giving you a overview of your research style.

The main challenge is displaying this complex information in a digestible way. We started off with hexagonal tiles which display well in a node graph format while retaining structure for the title text inside as well as information like comment count and a favicon.

From there it was about exploring ways to make the information useful at a glance. I used colour and icons to differentiate the types of nodes. In the example below, the search nodes are green, website nodes are blue and document nodes are red. 

<figure><img class="image" src="/projects/{{page.file-name}}/4.png" alt="!" /></figure>

During testing, it became clear that it would be beneficial to decouple the information from the nodes and have it instead as a markup on top of the node structure, much like an actual online map. This allows information to be available contextually and prevent information overload. We switched to a smaller node that displayed the pages favicon, with seperate halo that increases the nodes size to make it easier to click as well as affording more options for indicating node state.

<figure><img class="image" src="/projects/{{page.file-name}}/5.png" alt="!" /></figure>

<figure><img class="image" src="/projects/{{page.file-name}}/3.png" alt="!" /></figure>