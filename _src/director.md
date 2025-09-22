---
layout: base.liquid
title: Topher Isabella
description: Topher Isabella Digital Portfolio
eleventyNavigation:
    key   : director
    title : Director
    order : 1
pageSpecificStyle: '<link rel="stylesheet" href="/css/styleVideoListPages.css" type="text/css">'
---
<section class="projects">
        <h3>Film projects that I have directed:</h3><hr/><br/>
{%- for video in collections.videos %}
{%- if video.data.category == 'director' %}
        <video-link>
          <a href="{{ video.url }}"><img src="/media/video/{{ video.data.thumbnail }}" alt="{{ video.data.title }}"></a><h4>{{ video.data.title }}</h4><br />
        </video-link>
{%- endif %}
{%- endfor %}
      </section>