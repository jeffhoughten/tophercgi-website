---
layout: base.liquid
tags: videos
pagination:
    data: videos
    size: 1
    alias: video
    addAllPagesToCollections: true
permalink: '/videos/{{ video.title|slug }}/'
eleventyComputed:
    title:      '{{ video.title }} | {{ video.category }} | Topher Isabella'
    shortTitle: '{{ video.title }}' 
    filename:   '{{ video.filename }}'
    thumbnail:  '{{ video.thumbnail }}'
    category:   '{{ video.category }}'
    byline:     '{{ video.byline }}'
    crewroles:  '{{ video.crewroles }}'
    preloadVideoContent: '<link rel="preload" as="video" href="/media/video/{{ video.filename }}" type="video/mp4">'
    eleventyNavigation:
        key   : '{{ video.title }}'
        parent: '{{ video.category }}'
pageSpecificStyle: '<link rel="stylesheet" href="/css/styleOtherPages.css" type="text/css">'
---
<section class="projects">
{%- assign crumbs = collections.all | eleventyNavigationBreadcrumb: eleventyNavigation.key %}
{%- for crumb in crumbs %}
            <a href="{{ crumb.url }}">{{ crumb.title }}</a>
{%- if not loop.last %} > {%- endif %}
{%- endfor %}
{{ video.title }}<br/><br/>
      <video controls preload="auto" width="928" height="528"
            poster="/media/video/{{ video.thumbnail }}"
            data-setup="{}">
        <source src="/media/video/{{ video.filename }}" type="video/mp4">
      </video>
      <video-desc>
        <h2>{{ video.title }}</h2>
        <p>{{ video.byline }}
        <br>
        Crew Roles: {{ video.crewroles }}
        </p>
      </video-desc>
    </section>