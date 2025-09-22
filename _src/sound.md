---
layout: base.liquid
title: Topher Isabella
description: Topher Isabella Digital Portfolio
eleventyNavigation:
    key   : sound
    title : Sound Installations
    order : 4
pageSpecificStyle: '<link rel="stylesheet" href="/css/styleVideoListPages.css" type="text/css">'
---
<section class="projects">
        <h3>Sound installation projects:</h3><hr/><br/>
{%- for video in collections.videos %}
{%- if video.data.category == 'sound' %}
        <video-link>
          <a href="{{ video.url }}"><img src="/media/video/{{ video.data.thumbnail }}" alt="{{ video.data.title }}"></a><h4>{{ video.data.title }}</h4><br />
        </video-link>
{%- endif %}
{%- endfor %}
      </section>