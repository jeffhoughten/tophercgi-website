---
layout: base.liquid
title: A/V Demos | Topher Isabella
description: Topher Isabella Digital Portfolio
eleventyNavigation:
    key   : A/V Demos
    order : 3
pageSpecificStyle: '<link rel="stylesheet" href="/css/styleVideoListPages.css" type="text/css">'
---
<section class="projects">
        <h1>Demonstrations of some custom A/V effects:</h1><hr/><br/>
{%- for video in collections.videos %}
{%- if video.data.category == 'A/V Demos' %}
        <video-link>
          <a href="{{ video.url }}"><img src="/media/video/{{ video.data.thumbnail }}" alt="{{ video.data.title }}"></a><h2>{{ video.data.shortTitle }}</h2><br />
        </video-link>
{%- endif %}
{%- endfor %}
      </section>