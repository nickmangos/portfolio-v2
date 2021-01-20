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

cover-elements: |
  <svg class="animation animation__trailblazer" width="332" height="450" viewBox="0 0 332 450" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="trailblazer__glow" fill-rule="evenodd" clip-rule="evenodd" d="M162.267 190.344C164.755 188.895 167.83 188.895 170.318 190.344L194.279 204.297C196.74 205.73 198.253 208.363 198.253 211.211V239.236C198.253 242.083 196.74 244.716 194.279 246.149L170.318 260.102C167.83 261.551 164.755 261.551 162.267 260.102L138.305 246.149C135.845 244.716 134.331 242.083 134.331 239.236V211.211C134.331 208.363 135.845 205.73 138.305 204.297L162.267 190.344Z" />
    <path class="trailblazer__node" fill-rule="evenodd" clip-rule="evenodd" d="M164.279 207.784C165.524 207.059 167.061 207.059 168.305 207.784L180.286 214.76C181.516 215.477 182.273 216.793 182.273 218.217V232.229C182.273 233.653 181.516 234.97 180.286 235.686L168.305 242.663C167.061 243.387 165.524 243.387 164.279 242.663L152.299 235.686C151.069 234.97 150.312 233.653 150.312 232.229V218.217C150.312 216.793 151.069 215.477 152.299 214.76L164.279 207.784Z" fill="white"/>
    <ellipse class="trailblazer__notification" cx="203.198" cy="195.445" rx="7.444" ry="7.444" />
  </svg>

---

<figure><img class="hero" src="/projects/{{page.file-name}}/hero.png" alt="!" /></figure>

Trailblazer set out to create a way for people to easily create and share knowledge maps. The application builds a map as you browse the web, giving you a overview of your research style.

The main challenge is displaying this complex information in a digestible way. We started off with hexagonal tiles which display well in a node graph format while retaining structure for the title text inside as well as information like comment count and a favicon.

From there it was about exploring ways to make the information useful at a glance. I used colour and icons to differentiate the types of nodes. In the example below, the search nodes are green, website nodes are blue and document nodes are red. 

<figure><img class="image" src="/projects/{{page.file-name}}/4.png" alt="!" /></figure>

During testing, it became clear that it would be beneficial to decouple the information from the nodes and have it instead as a markup on top of the node structure, much like an actual online map. This allows information to be available contextually and prevent information overload. We switched to a smaller node that displayed the pages favicon, with seperate halo that increases the nodes size to make it easier to click as well as affording more options for indicating node state.

<figure><img class="image" src="/projects/{{page.file-name}}/5.png" alt="!" /></figure>

<figure><img class="image" src="/projects/{{page.file-name}}/3.png" alt="!" /></figure>