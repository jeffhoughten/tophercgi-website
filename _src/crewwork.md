---
layout: base.liquid
title: Crew Work | Topher Isabella
description: Topher Isabella Digital Portfolio
eleventyNavigation:
    key   : Crew Work
    order : 1
pageSpecificStyle: '<link rel="stylesheet" href="/css/styleVideoListPages.css" type="text/css">'
---
<section class="projects">
        <h1>Film projects that I have collaborated on as a crew member:</h1><hr/><br/>
{%- for video in collections.videos %}
{%- if video.data.category == 'Crew Work' %}
        <video-link>
          <a href="{{ video.url }}"><img src="/media/video/{{ video.data.thumbnail }}" alt="{{ video.data.title }}"></a><h2>{{ video.data.shortTitle }}</h2><br />
        </video-link>
{%- endif %}
{%- endfor %}
      </section>