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
    title:      '{{ video.title }}'
    filename:   '{{ video.filename }}'
    thumbnail:  '{{ video.thumbnail }}'
    category:   '{{ video.category }}'
    byline:     '{{ video.byline }}'
    crewroles:  '{{ video.crewroles }}'
    preloadVideoContent: '<link rel="preload" as="video" href="/media/video/{{ video.filename }}" type="video/mp4">'
pageSpecificStyle: '<link rel="stylesheet" href="/css/styleOtherPages.css" type="text/css">'
---
<section class="projects">
      <video controls preload="auto" width="928" height="528"
            poster="/media/video/{{ video.thumbnail }}"
            data-setup="{}">
        <source src="/media/video/{{ video.filename }}" type="video/mp4">
      </video>
      <video-desc>
        <h4>{{ video.title }}</h4>
        <p>{{ video.byline }}
        <br>
        Crew Roles: {{ video.crewroles }}
        </p>
      </video-desc>
    </section>