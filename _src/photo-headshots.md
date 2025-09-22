---
layout: base.liquid
title: Topher Isabella
description: Topher Isabella Digital Portfolio
permalink: '/photography/headshots/'
pageSpecificStyle: '<link rel="stylesheet" href="/css/stylePhotoGrid.css" type="text/css">'
---
<section class="projects">
        <h1>Headshots</h1>
        <photo-grid>
{%- for photocollection in collections.photos %}
{%- if photocollection.data.parent == blank and photocollection.data.category == "Headshots"%}
          <photo-item>
            <a href="{{ photocollection.url }}"><img class="photo" src="/media/photography/{{ photocollection.data.title|slug }}/{{ photocollection.data.thumbnail }}" alt="{{ photocollection.data.title }}"></a>
            <h5>{{ photocollection.data.title }}</h5>
          </photo-item>
{%- endif %}
{%- endfor %}
        </photo-grid>
      </section>