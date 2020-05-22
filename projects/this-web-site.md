---
title: This Web Site
---

I started writing software to publish web pages in about 1997.
For the past few years I've been kicking around a design for static site
generation, half implementing it (usually in a new language I'm learning)
but never actually finishing it sufficiently to build my own web site.
[Eleventy](https://www.11ty.dev/) pretty closely follows the ideas I had
&mdash; and it actually exists.

I [built](https://github.com/ianloic/personal-site) a fairly simple site
and then added a bunch of complexity to auto-generate section indexes.
For the style I started with [new.css](https://newcss.net/) and then tweaked it quite a bit.

I started making the site based on [AMP](https://amp.dev/)
by [manually](https://amp.dev/documentation/guides-and-tutorials/start/create/basic_markup/?format=websites)
setting up the templates but then I came across a
[plugin](https://github.com/ampproject/eleventy-plugin-amp) that did it all
for me, including build-time validation.
AMP is appealing because it imposes constraints on the complexity I can add.
It'll stop me from both yak shaving and from making the site slow.

For deployment I'm running the build in
[Google Cloud Build](https://cloud.google.com/cloud-build) with the static files hosted in
[Firebase Hosting](https://firebase.google.com/docs/hosting).
They work well together - I can give the cloud build role account the right
to publish to the Firebase project and everything just works.
