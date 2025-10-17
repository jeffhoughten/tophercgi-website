---
layout: base.liquid
title: Sound Installations | Topher Isabella
description: Topher Isabella Digital Portfolio
eleventyNavigation:
    key   : Sound Installations
    order : 4
pageSpecificStyle: '<link rel="stylesheet" href="/css/styleVideoListPages.css" type="text/css">'
---
<section class="projects">
        <h1>Sound installation projects:</h1><hr/><br/>
{%- for video in collections.videos %}
{%- if video.data.category == 'Sound Installations' %}
        <video-link>
          <a href="{{ video.url }}"><img src="/media/video/{{ video.data.thumbnail }}" alt="{{ video.data.title }}"></a><h2>{{ video.data.shortTitle }}</h2><br />
        </video-link>
{%- endif %}
{%- endfor %}
      </section>