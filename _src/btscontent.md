---
layout: base.liquid
tags: "bts"
pagination:
    data: bts
    size: 1
    alias: btscollection
    addAllPagesToCollections: true
permalink: '/behindthescenes/{{ btscollection.title|slug }}/'
eleventyComputed:
    title:      '{{ btscollection.title }}'
    thumbnail:  '{{ btscollection.thumbnail }}'
    size:       '{{ btscollection.size }}'
    eleventyNavigation:
        key   : bts'{{ btscollection.title }}'
        parent: behindthescenes
pageSpecificStyle: '<link rel="stylesheet" href="/css/stylePhotoGrid.css" type="text/css">'
---
<section class="projects">
{%- assign crumbs = collections.all | eleventyNavigationBreadcrumb: eleventyNavigation.key %}
{%- for crumb in crumbs %}
            <a href="{{ crumb.url }}">{{ crumb.title }}</a>
{%- if not loop.last %} > {%- endif %}
{%- endfor %}
{{ btscollection.title }}<br/><br/>
        <photo-grid>
{%- assign loop_counter = 0 %}
{%- assign pic = "pic" %}
{%- assign loop_limit_array = btscollection.size | split: "," %}
{%- for loop_limit in loop_limit_array %}
{%- for i in (0..loop_limit) %}
{%- if pic == "pic" %}
          <photo-item>
            <img class="photo" src="/media/behindthescenes/{{ btscollection.title|slug }}/{{ btscollection.title|slug }}{%- increment loop_counter %}.jpg" alt="{{ btscollection.title }}">
          </photo-item>
{%- else %}
          <photo-item>
            <video controls preload="auto" width="464" height="264"
              data-setup="{}">
              <source src="/media/behindthescenes/{{ btscollection.title|slug }}/{{ btscollection.title|slug }}{%- increment loop_counter %}.mp4" type="video/mp4">
            </video>
          </photo-item>
{%- endif %}
{%- endfor %}
{%- if pic == "pic" %}{%- assign pic = "vid"  %}{%- else %}{%- assign pic = "pic" %}{%- endif %}
{%- endfor %}
        </photo-grid>
      </section>