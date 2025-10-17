---
layout: base.liquid
title: Behind The Scenes | Topher Isabella
description: Topher Isabella Digital Portfolio
eleventyNavigation:
    key   : behindthescenes
    title : Behind The Scenes
    order : 6
pageSpecificStyle: '<link rel="stylesheet" href="/css/stylePhotoGrid.css" type="text/css">'
---
<section class="projects">
        <h1>Behind The Scenes</h1>
        <photo-grid>
{%- for btscollection in collections.bts %}
          <photo-item>
            <a href="{{ btscollection.url }}"><img class="photo" src="/media/behindthescenes/{{ btscollection.data.title|slug }}/{{ btscollection.data.thumbnail }}" alt="{{ btscollection.data.title }}"></a>
            <h2>{{ btscollection.data.title }}</h2>
          </photo-item>
{%- endfor %}
        </photo-grid>
      </section>