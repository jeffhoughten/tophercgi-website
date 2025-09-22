---
layout: base.liquid
tags: "photos"
pagination:
    data: photos
    size: 1
    alias: photocollection
    addAllPagesToCollections: true
permalink: '/photography/{{ photocollection.category|slug }}/{{ photocollection.parent|slug }}/{{ photocollection.title|slug }}/'
eleventyComputed:
    title:      '{{ photocollection.title }}'
    parent:     '{{ photocollection.parent }}'
    thumbnail:  '{{ photocollection.thumbnail }}'
    category:   '{{ photocollection.category }}'
    children:   '{{ photocollection.children }}'
    size:       '{{ photocollection.size }}'
pageSpecificStyle: '<link rel="stylesheet" href="/css/stylePhotoGridLB.css" type="text/css">'
---
{%- assign parent = photocollection.parent %}
<section class="projects">
        <h1>{{ photocollection.title }}</h1>
        <photo-grid>
{%- if photocollection.children %}
{%- for photochildset in collections.photos %}
{%- if photochildset.data.parent == photocollection.title %}
          <photo-item>
            <a href="{{ photochildset.url }}"><img class="photo" src="/media/photography/{{ photochildset.data.parent|slug }}/{{ photochildset.data.title|slug }}/{{ photochildset.data.thumbnail}}" alt="{{ photochildset.data.parent }}-{{ photochildset.data.title }}"></a>
            <h5>{{ photochildset.data.title }}</h5>
          </photo-item>
{%- endif %}
{%- endfor %}
{%- else %}
{%- assign loop_limit = photocollection.size %}
{%- for i in (1..loop_limit) %}
          <photo-item>
            <img class="photo" src="/media/photography/{%- if parent != blank %}{{ photocollection.parent|slug }}/{%- endif %}{{ photocollection.title|slug }}/{%- if parent != blank %}{{ photocollection.parent|slug }}-{%- endif %}{{ photocollection.title|slug }}{{ i }}.jpg" alt="{{ photocollection.category }}-{%- if parent != blank %}{{ photocollection.parent }}-{%- endif %}{{ photocollection.title }}">
          </photo-item>
{%- endfor %}
        </photo-grid>
      </section>
<lightbox-container id="lightbox">
  <lightbox-content>
    <close-lightbox id="close-lightbox">×</close-lightbox>
    <img src="" alt="" class="lightbox-img" id="lightbox-img">
    <nav-buttons>
      <button class="nav-button" id="prev-button">←</button>
      <button class="nav-button" id="next-button">→</button>
    </nav-buttons>
    <lightbox-counter id="lightbox-counter"></lightbox-counter>
  </lightbox-content>
</lightbox-container>
<script src="/js/lightbox.js"></script>
{%- endif %}