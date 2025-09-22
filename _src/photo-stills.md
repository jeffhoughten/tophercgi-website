---
layout: base.liquid
title: Topher Isabella
description: Topher Isabella Digital Portfolio
permalink: '/photography/stills/'
pageSpecificStyle: '<link rel="stylesheet" href="/css/stylePhotoGrid.css" type="text/css">'
---
<section class="projects">
        <h1>Stills</h1>
        <photo-grid>
{%- for photocollection in collections.photos %}
{%- if photocollection.data.parent == blank and photocollection.data.category == "Stills"%}
          <photo-item>
            <a href="{{ photocollection.url }}"><img class="photo" src="/media/photography/{{ photocollection.data.title|slug }}/{{ photocollection.data.thumbnail }}" alt="{{ photocollection.data.title }}"></a>
            <h5>{{ photocollection.data.title }}</h5>
          </photo-item>
{%- endif %}
{%- endfor %}
        </photo-grid>
      </section>