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
  <svg width="332" height="450" viewBox="0 0 332 450" fill="" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.190784" fill-rule="evenodd" clip-rule="evenodd" d="M164.435 189.081C165.583 188.413 167.002 188.413 168.149 189.081L196.42 205.544C197.555 206.205 198.253 207.42 198.253 208.733V241.713C198.253 243.027 197.555 244.241 196.42 244.902L168.149 261.365C167.002 262.033 165.583 262.033 164.435 261.365L136.165 244.902C135.029 244.241 134.331 243.027 134.331 241.713V208.733C134.331 207.42 135.029 206.205 136.165 205.544L164.435 189.081Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M165.364 207.152C165.938 206.818 166.647 206.818 167.221 207.152L181.356 215.384C181.924 215.714 182.273 216.321 182.273 216.978V233.468C182.273 234.125 181.924 234.732 181.356 235.063L167.221 243.294C166.647 243.628 165.938 243.628 165.364 243.294L151.228 235.063C150.661 234.732 150.312 234.125 150.312 233.468V216.978C150.312 216.321 150.661 215.714 151.228 215.384L165.364 207.152Z" fill="white"/>
        <ellipse cx="203.198" cy="195.445" rx="7.3811" ry="7.44464" fill="#000000   "/>
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