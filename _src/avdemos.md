---
layout: base.liquid
title: Topher Isabella
description: Topher Isabella Digital Portfolio
eleventyNavigation:
    key   : avdemos
    title : A/V Demos
    order : 3
pageSpecificStyle: '<link rel="stylesheet" href="/css/styleVideoListPages.css" type="text/css">'
---
<section class="projects">
        <h3>Demonstrations of some custom A/V effects:</h3><hr/><br/>
{%- for video in collections.videos %}
{%- if video.data.category == 'avdemos' %}
        <video-link>
          <a href="{{ video.url }}"><img src="/media/video/{{ video.data.thumbnail }}" alt="{{ video.data.title }}"></a><h4>{{ video.data.title }}</h4><br />
        </video-link>
{%- endif %}
{%- endfor %}
      </section>