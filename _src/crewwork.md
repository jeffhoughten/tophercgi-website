---
layout: base.liquid
title: Topher Isabella
description: Topher Isabella Digital Portfolio
eleventyNavigation:
    key   : crewwork
    title : Crew Work
    order : 1
pageSpecificStyle: '<link rel="stylesheet" href="/css/styleVideoListPages.css" type="text/css">'
---
<section class="projects">
        <h3>Film projects that I have collaborated on as a crew member:</h3><hr/><br/>
{%- for video in collections.videos %}
{%- if video.data.category == 'crewwork' %}
        <video-link>
          <a href="{{ video.url }}"><img src="/media/video/{{ video.data.thumbnail }}" alt="{{ video.data.title }}"></a><h4>{{ video.data.title }}</h4><br />
        </video-link>
{%- endif %}
{%- endfor %}
      </section>