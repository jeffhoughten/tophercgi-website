---
layout: base.liquid
title: Headshots | Photography | Topher Isabella
description: Topher Isabella Digital Portfolio
permalink: '/photography/headshots/'
eleventyNavigation:
    key   : Headshots
    parent: Photography
pageSpecificStyle: '<link rel="stylesheet" href="/css/stylePhotoGrid.css" type="text/css">'
---
<section class="projects">
{%- assign crumbs = collections.all | eleventyNavigationBreadcrumb: eleventyNavigation.key %}
{%- for crumb in crumbs %}
            <a href="{{ crumb.url }}">{{ crumb.title }}</a>
{%- if not loop.last %} > {%- endif %}
{%- endfor %}
        Headshots
        <photo-grid>
{%- for photocollection in collections.photos %}
{%- if photocollection.data.parent == blank and photocollection.data.category == "Headshots"%}
          <photo-item>
            <a href="{{ photocollection.url }}"><img class="photo" src="/media/photography/{{ photocollection.data.title|slug }}/{{ photocollection.data.thumbnail }}" alt="{{ photocollection.data.title }}"></a>
            <h2>{{ photocollection.data.title }}</h2>
          </photo-item>
{%- endif %}
{%- endfor %}
        </photo-grid>
      </section>