---
templateKey: about-page
title: About
description: About this site / stack
---
As part of my PGP, I wanted to learn more about some newer tech stacks, specifically static site generators and progressive web apps, while producing something that could help me remember more about the 7 habits, and potentially be useful for others in the labs.

This small proof-of-concept is meant to be a quick reference / inspiration for learning and remembering the 7 habits. Each habit page contains a short description / reminder of the core idea. Below the idea is space for submitted blog posts that are meant to showcase an example of the habit in action. For example, if you run across a helpful resource related to the book, or want to outline a real-life example of practicing the habit at work or at home, you could enter a blog post about it, and it would appear as a reference on the site.

This project embraces the "JAMstack" which is an umbrella term that refers to using Javascript, APIs, & Markup to create highly performant, secure, cacheable sites that typically use static generation to create the site, its routes, assets, data, etc., during a build step rather than a dynamic site making those calls at run time. Coupled with a good CI/CD process, it fills a niche for smaller scale projects such as marketing sites, blogs, documentation, etc.

For more information, see https://jamstack.org/

While there are various technologies and tools available, this project is using:

1. React
2. Gatsby 
3. GraphQL
4. Netlify (Build / Deploy + CMS) 
5. PWA 

https://github.com/nyan-matt/seven-habits-gatsby-netlify

Because content is usually co-located with source code in a git repository, it could be a challenge to get content authors onboarded with understanding git workflows and commands, however, there are tools like Netlify CMS that can be integrated  into your repository and expose content for editing / creation through a simple web interface. Each collection type can be configured through a <a href="https://github.com/nyan-matt/seven-habits-gatsby-netlify/blob/master/static/admin/config.yml">yaml file</a> to generate a schema used to map data to the editor.



For more information, see https://www.netlifycms.org/ 

Netlify CMS backend

![Netlify CMS](/img/screen-1.jpg "Netlify CMS")

Netlify CMS backend - page editing

![Netlify CMS](/img/screen-2.jpg "Netlify CMS Page Editing")
