


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>jwplayer/jwplayer.html5.js at jw6-rc4 · jwplayer/jwplayer · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jwplayer/jwplayer" name="twitter:title" /><meta content="jwplayer - JW Player is a the world&#39;s most popular embeddable media player. For documentation and support, please visit the JW Player Support Site:" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/5090060?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/5090060?v=3&amp;s=400" property="og:image" /><meta content="jwplayer/jwplayer" property="og:title" /><meta content="https://github.com/jwplayer/jwplayer" property="og:url" /><meta content="jwplayer - JW Player is a the world&#39;s most popular embeddable media player. For documentation and support, please visit the JW Player Support Site:" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="7B8A6CEA:45CA:2513600B:562A189B" name="octolytics-dimension-request_id" />

<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension4" content="Current repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="4d33f8094b399bafb97d9c4b06ecc01e98bd2a2b" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-ce671588d7b6afbb8bc61feba5b37b4acc3341aec654ff7a2405b657922ff0c1.css" integrity="sha256-zmcViNe2r7uLxh/rpbN7SswzQa7GVP96JAW2V5Iv8ME=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-8d66f9bfcef65682f8b799f2330467be836c483d58670c9388d40c9e4c0492a3.css" integrity="sha256-jWb5v872VoL4t5nyMwRnvoNsSD1YZwyTiNQMnkwEkqM=" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="f7a60445478c6154531fdca94f3ffd1b">

      
  <meta name="description" content="jwplayer - JW Player is a the world&#39;s most popular embeddable media player. For documentation and support, please visit the JW Player Support Site:">
  <meta name="go-import" content="github.com/jwplayer/jwplayer git https://github.com/jwplayer/jwplayer.git">

  <meta content="5090060" name="octolytics-dimension-user_id" /><meta content="jwplayer" name="octolytics-dimension-user_login" /><meta content="18307175" name="octolytics-dimension-repository_id" /><meta content="jwplayer/jwplayer" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="18307175" name="octolytics-dimension-repository_network_root_id" /><meta content="jwplayer/jwplayer" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jwplayer/jwplayer/commits/jw6-rc4.atom" rel="alternate" title="Recent Commits to jwplayer:jw6-rc4" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fjwplayer%2Fjwplayer%2Fblob%2Fjw6-rc4%2Fjwplayer.html5.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jwplayer/jwplayer/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/jwplayer/jwplayer/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div class="pagehead repohead instapaper_ignore readability-menu">

      <div class="container">

        <div class="clearfix">
          

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fjwplayer%2Fjwplayer"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/jwplayer/jwplayer/watchers">
    97
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fjwplayer%2Fjwplayer"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/jwplayer/jwplayer/stargazers">
      464
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fjwplayer%2Fjwplayer"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="/jwplayer/jwplayer/network" class="social-count">
      256
    </a>
  </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="mega-octicon octicon-repo"></span>
  <span class="author"><a href="/jwplayer" class="url fn" itemprop="url" rel="author"><span itemprop="title">jwplayer</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/jwplayer/jwplayer" data-pjax="#js-repo-pjax-container">jwplayer</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline ">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/jwplayer/jwplayer/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/jwplayer/jwplayer/tree/jw6-rc4" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jwplayer/jwplayer/tree/jw6-rc4">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/jwplayer/jwplayer/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /jwplayer/jwplayer/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/jwplayer/jwplayer/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /jwplayer/jwplayer/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/jwplayer/jwplayer/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /jwplayer/jwplayer/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/jwplayer/jwplayer/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /jwplayer/jwplayer/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/jwplayer/jwplayer/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /jwplayer/jwplayer/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3 class="text-small text-muted"><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/jwplayer/jwplayer.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3 class="text-small text-muted"><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/jwplayer/jwplayer" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options text-small text-muted">You can clone with
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="4d33f8094b399bafb97d9c4b06ecc01e98bd2a2b" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="acXfWpXDF67eNT9Z7A8FjYoJV6kbQQ7UkXBWiaM9GZbwWkOQAKW/hqWn5/yUNqzxfMuMfgqJBbyF5s+X53Gm0g==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form> or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="4d33f8094b399bafb97d9c4b06ecc01e98bd2a2b" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="yg01ZpvkiM6GSYkVeMS1aq+lNG9hagIvE23Aaj7ayNk8IJOWUQlTybKxZn9a9xleWxAgPzm1SwMVerlmTNC7Rw==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>
  <a href="https://mac.github.com" class="btn btn-sm sidebar-button" title="Save jwplayer/jwplayer to your computer and use it in GitHub Desktop." aria-label="Save jwplayer/jwplayer to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-desktop-download"></span>
    Clone in Desktop
  </a>

              <a href="/jwplayer/jwplayer/archive/jw6-rc4.zip"
                 class="btn btn-sm sidebar-button"
                 aria-label="Download the contents of jwplayer/jwplayer as a zip file"
                 title="Download the contents of jwplayer/jwplayer as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/jwplayer/jwplayer/blob/b9af2e085d6e753a2a2e4aef8300453193c8ab59/jwplayer.html5.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:57f8aa94863ebf022b1afcdf11cdb476 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="jw6-rc4"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Tag:</i>
    <span class="js-select-button css-truncate-target">jw6-rc4</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/ad-skip-button-and-overlay-small-player/jwplayer.html5.js"
               data-name="bugfix/ad-skip-button-and-overlay-small-player"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/ad-skip-button-and-overlay-small-player">
                bugfix/ad-skip-button-and-overlay-small-player
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/add-preload-to-source-level/jwplayer.html5.js"
               data-name="bugfix/add-preload-to-source-level"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/add-preload-to-source-level">
                bugfix/add-preload-to-source-level
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/android-youtube-stuck/jwplayer.html5.js"
               data-name="bugfix/android-youtube-stuck"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/android-youtube-stuck">
                bugfix/android-youtube-stuck
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/androidhls-false-play-hls/jwplayer.html5.js"
               data-name="bugfix/androidhls-false-play-hls"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/androidhls-false-play-hls">
                bugfix/androidhls-false-play-hls
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/api-controls-event/jwplayer.html5.js"
               data-name="bugfix/api-controls-event"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/api-controls-event">
                bugfix/api-controls-event
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/autoselect-subtitle-tracks/jwplayer.html5.js"
               data-name="bugfix/autoselect-subtitle-tracks"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/autoselect-subtitle-tracks">
                bugfix/autoselect-subtitle-tracks
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/chrome-power-save-flash-throttle/jwplayer.html5.js"
               data-name="bugfix/chrome-power-save-flash-throttle"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/chrome-power-save-flash-throttle">
                bugfix/chrome-power-save-flash-throttle
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/controller-errors-2/jwplayer.html5.js"
               data-name="bugfix/controller-errors-2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/controller-errors-2">
                bugfix/controller-errors-2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/dvr-tooltip/jwplayer.html5.js"
               data-name="bugfix/dvr-tooltip"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/dvr-tooltip">
                bugfix/dvr-tooltip
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/error-event-cleared/jwplayer.html5.js"
               data-name="bugfix/error-event-cleared"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/error-event-cleared">
                bugfix/error-event-cleared
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/error-event-flash-slow/jwplayer.html5.js"
               data-name="bugfix/error-event-flash-slow"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/error-event-flash-slow">
                bugfix/error-event-flash-slow
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/firefox-throttle/jwplayer.html5.js"
               data-name="bugfix/firefox-throttle"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/firefox-throttle">
                bugfix/firefox-throttle
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/fix-flash-replay/jwplayer.html5.js"
               data-name="bugfix/fix-flash-replay"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/fix-flash-replay">
                bugfix/fix-flash-replay
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/fix-utils-bug/jwplayer.html5.js"
               data-name="bugfix/fix-utils-bug"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/fix-utils-bug">
                bugfix/fix-utils-bug
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/flash-throttle-without-swc/jwplayer.html5.js"
               data-name="bugfix/flash-throttle-without-swc"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/flash-throttle-without-swc">
                bugfix/flash-throttle-without-swc
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/flash-throttling/jwplayer.html5.js"
               data-name="bugfix/flash-throttling"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/flash-throttling">
                bugfix/flash-throttling
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/flash-webvtt-mpegts/jwplayer.html5.js"
               data-name="bugfix/flash-webvtt-mpegts"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/flash-webvtt-mpegts">
                bugfix/flash-webvtt-mpegts
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/flv-ad-creative-not-playing/jwplayer.html5.js"
               data-name="bugfix/flv-ad-creative-not-playing"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/flv-ad-creative-not-playing">
                bugfix/flv-ad-creative-not-playing
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/hd-menu/jwplayer.html5.js"
               data-name="bugfix/hd-menu"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/hd-menu">
                bugfix/hd-menu
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/hd-menu-2/jwplayer.html5.js"
               data-name="bugfix/hd-menu-2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/hd-menu-2">
                bugfix/hd-menu-2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/html5-ios-paused/jwplayer.html5.js"
               data-name="bugfix/html5-ios-paused"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/html5-ios-paused">
                bugfix/html5-ios-paused
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/ios-fullscreen/jwplayer.html5.js"
               data-name="bugfix/ios-fullscreen"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/ios-fullscreen">
                bugfix/ios-fullscreen
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/logo-hidden-with-controls-hidden/jwplayer.html5.js"
               data-name="bugfix/logo-hidden-with-controls-hidden"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/logo-hidden-with-controls-hidden">
                bugfix/logo-hidden-with-controls-hidden
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/overlays-no-cursor/jwplayer.html5.js"
               data-name="bugfix/overlays-no-cursor"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/overlays-no-cursor">
                bugfix/overlays-no-cursor
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/polyfill-resolve-fix/jwplayer.html5.js"
               data-name="bugfix/polyfill-resolve-fix"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/polyfill-resolve-fix">
                bugfix/polyfill-resolve-fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/poster-image-not-displayed/jwplayer.html5.js"
               data-name="bugfix/poster-image-not-displayed"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/poster-image-not-displayed">
                bugfix/poster-image-not-displayed
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/postroll-repeats-single-playlist/jwplayer.html5.js"
               data-name="bugfix/postroll-repeats-single-playlist"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/postroll-repeats-single-playlist">
                bugfix/postroll-repeats-single-playlist
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/preload-flash-fix/jwplayer.html5.js"
               data-name="bugfix/preload-flash-fix"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/preload-flash-fix">
                bugfix/preload-flash-fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix-preload-playlist-item/jwplayer.html5.js"
               data-name="bugfix-preload-playlist-item"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix-preload-playlist-item">
                bugfix-preload-playlist-item
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/resize-events/jwplayer.html5.js"
               data-name="bugfix/resize-events"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/resize-events">
                bugfix/resize-events
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/seeked-event-fired-on-start/jwplayer.html5.js"
               data-name="bugfix/seeked-event-fired-on-start"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/seeked-event-fired-on-start">
                bugfix/seeked-event-fired-on-start
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/seeking-with-tooltip/jwplayer.html5.js"
               data-name="bugfix/seeking-with-tooltip"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/seeking-with-tooltip">
                bugfix/seeking-with-tooltip
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/skip-ad-button-legibility/jwplayer.html5.js"
               data-name="bugfix/skip-ad-button-legibility"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/skip-ad-button-legibility">
                bugfix/skip-ad-button-legibility
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/trial-align/jwplayer.html5.js"
               data-name="bugfix/trial-align"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/trial-align">
                bugfix/trial-align
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/unprefixed-item-class/jwplayer.html5.js"
               data-name="bugfix/unprefixed-item-class"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/unprefixed-item-class">
                bugfix/unprefixed-item-class
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/update-buffer-ontime/jwplayer.html5.js"
               data-name="bugfix/update-buffer-ontime"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/update-buffer-ontime">
                bugfix/update-buffer-ontime
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/utils-fail-unit-tests/jwplayer.html5.js"
               data-name="bugfix/utils-fail-unit-tests"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/utils-fail-unit-tests">
                bugfix/utils-fail-unit-tests
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/youtube-no-poster/jwplayer.html5.js"
               data-name="bugfix/youtube-no-poster"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/youtube-no-poster">
                bugfix/youtube-no-poster
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/disable-visualplaylist/jwplayer.html5.js"
               data-name="feature/disable-visualplaylist"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/disable-visualplaylist">
                feature/disable-visualplaylist
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/display-icon-visible-paused-mobile/jwplayer.html5.js"
               data-name="feature/display-icon-visible-paused-mobile"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/display-icon-visible-paused-mobile">
                feature/display-icon-visible-paused-mobile
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/flash-poster/jwplayer.html5.js"
               data-name="feature/flash-poster"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/flash-poster">
                feature/flash-poster
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/flash-seeked/jwplayer.html5.js"
               data-name="feature/flash-seeked"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/flash-seeked">
                feature/flash-seeked
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/flash-throttled-error/jwplayer.html5.js"
               data-name="feature/flash-throttled-error"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/flash-throttled-error">
                feature/flash-throttled-error
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/flash-throttled-instream-ad-pause/jwplayer.html5.js"
               data-name="feature/flash-throttled-instream-ad-pause"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/flash-throttled-instream-ad-pause">
                feature/flash-throttled-instream-ad-pause
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/karma-browser-targets/jwplayer.html5.js"
               data-name="feature/karma-browser-targets"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/karma-browser-targets">
                feature/karma-browser-targets
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/local-storage/jwplayer.html5.js"
               data-name="feature/local-storage"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/local-storage">
                feature/local-storage
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/overlay-opened-flag/jwplayer.html5.js"
               data-name="feature/overlay-opened-flag"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/overlay-opened-flag">
                feature/overlay-opened-flag
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/pointer-event-support/jwplayer.html5.js"
               data-name="feature/pointer-event-support"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/pointer-event-support">
                feature/pointer-event-support
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/preload-flash-provider/jwplayer.html5.js"
               data-name="feature/preload-flash-provider"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/preload-flash-provider">
                feature/preload-flash-provider
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/preload-flash-provider-2/jwplayer.html5.js"
               data-name="feature/preload-flash-provider-2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/preload-flash-provider-2">
                feature/preload-flash-provider-2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/preload-hls/jwplayer.html5.js"
               data-name="feature/preload-hls"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/preload-hls">
                feature/preload-hls
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/remove-p-use-ssl/jwplayer.html5.js"
               data-name="feature/remove-p-use-ssl"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/remove-p-use-ssl">
                feature/remove-p-use-ssl
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/remove-skin-console-message/jwplayer.html5.js"
               data-name="feature/remove-skin-console-message"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/remove-skin-console-message">
                feature/remove-skin-console-message
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/ssl-repo/jwplayer.html5.js"
               data-name="feature/ssl-repo"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/ssl-repo">
                feature/ssl-repo
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/update-util-unit-test/jwplayer.html5.js"
               data-name="feature/update-util-unit-test"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/update-util-unit-test">
                feature/update-util-unit-test
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/use-debuggable-trycatch/jwplayer.html5.js"
               data-name="feature/use-debuggable-trycatch"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/use-debuggable-trycatch">
                feature/use-debuggable-trycatch
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/master/jwplayer.html5.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/merge/release/jwplayer.html5.js"
               data-name="merge/release"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="merge/release">
                merge/release
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/patch/firefox-throttle/jwplayer.html5.js"
               data-name="patch/firefox-throttle"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="patch/firefox-throttle">
                patch/firefox-throttle
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/polyfill/promise/jwplayer.html5.js"
               data-name="polyfill/promise"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="polyfill/promise">
                polyfill/promise
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/refactor/instream/jwplayer.html5.js"
               data-name="refactor/instream"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="refactor/instream">
                refactor/instream
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/refactor/set-item/jwplayer.html5.js"
               data-name="refactor/set-item"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="refactor/set-item">
                refactor/set-item
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/refactor/set-playlist/jwplayer.html5.js"
               data-name="refactor/set-playlist"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="refactor/set-playlist">
                refactor/set-playlist
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/refactor/setup-steps/jwplayer.html5.js"
               data-name="refactor/setup-steps"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="refactor/setup-steps">
                refactor/setup-steps
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/release/jwplayer.html5.js"
               data-name="release"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="release">
                release
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/tech-debt/ios7/jwplayer.html5.js"
               data-name="tech-debt/ios7"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="tech-debt/ios7">
                tech-debt/ios7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/test/api-methods-and-members/jwplayer.html5.js"
               data-name="test/api-methods-and-members"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="test/api-methods-and-members">
                test/api-methods-and-members
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/test/grunt-karma-remote/jwplayer.html5.js"
               data-name="test/grunt-karma-remote"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="test/grunt-karma-remote">
                test/grunt-karma-remote
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/test/require-node-4/jwplayer.html5.js"
               data-name="test/require-node-4"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="test/require-node-4">
                test/require-node-4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/test/unit-test-fixes/jwplayer.html5.js"
               data-name="test/unit-test-fixes"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="test/unit-test-fixes">
                test/unit-test-fixes
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/typescript/jwplayer.html5.js"
               data-name="typescript"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="typescript">
                typescript
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/v7.1.x/jwplayer.html5.js"
               data-name="v7.1.x"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="v7.1.x">
                v7.1.x
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.2.0-beta.0/jwplayer.html5.js"
                 data-name="v7.2.0-beta.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.2.0-beta.0">v7.2.0-beta.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.2.0-alpha.0/jwplayer.html5.js"
                 data-name="v7.2.0-alpha.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.2.0-alpha.0">v7.2.0-alpha.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.2.0/jwplayer.html5.js"
                 data-name="v7.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.2.0">v7.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.5/jwplayer.html5.js"
                 data-name="v7.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.5">v7.1.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.4/jwplayer.html5.js"
                 data-name="v7.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.4">v7.1.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.3/jwplayer.html5.js"
                 data-name="v7.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.3">v7.1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.2/jwplayer.html5.js"
                 data-name="v7.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.2">v7.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.1/jwplayer.html5.js"
                 data-name="v7.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.1">v7.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.0-beta.1/jwplayer.html5.js"
                 data-name="v7.1.0-beta.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.0-beta.1">v7.1.0-beta.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.0-2/jwplayer.html5.js"
                 data-name="v7.1.0-2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.0-2">v7.1.0-2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.0-1/jwplayer.html5.js"
                 data-name="v7.1.0-1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.0-1">v7.1.0-1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.0-0/jwplayer.html5.js"
                 data-name="v7.1.0-0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.0-0">v7.1.0-0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.0/jwplayer.html5.js"
                 data-name="v7.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.0">v7.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.3-beta.2/jwplayer.html5.js"
                 data-name="v7.0.3-beta.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.3-beta.2">v7.0.3-beta.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.3-beta.1/jwplayer.html5.js"
                 data-name="v7.0.3-beta.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.3-beta.1">v7.0.3-beta.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.3/jwplayer.html5.js"
                 data-name="v7.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.3">v7.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.2-beta.1/jwplayer.html5.js"
                 data-name="v7.0.2-beta.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.2-beta.1">v7.0.2-beta.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.2/jwplayer.html5.js"
                 data-name="v7.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.2">v7.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.1-rc.2/jwplayer.html5.js"
                 data-name="v7.0.1-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.1-rc.2">v7.0.1-rc.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.1-rc.1/jwplayer.html5.js"
                 data-name="v7.0.1-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.1-rc.1">v7.0.1-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.1-beta.2/jwplayer.html5.js"
                 data-name="v7.0.1-beta.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.1-beta.2">v7.0.1-beta.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.1-beta.1/jwplayer.html5.js"
                 data-name="v7.0.1-beta.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.1-beta.1">v7.0.1-beta.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.1/jwplayer.html5.js"
                 data-name="v7.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.1">v7.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.0-rc.4/jwplayer.html5.js"
                 data-name="v7.0.0-rc.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.0-rc.4">v7.0.0-rc.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.0-rc.3/jwplayer.html5.js"
                 data-name="v7.0.0-rc.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.0-rc.3">v7.0.0-rc.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.0-rc.2/jwplayer.html5.js"
                 data-name="v7.0.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.0-rc.2">v7.0.0-rc.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.0-rc.1.patch.1/jwplayer.html5.js"
                 data-name="v7.0.0-rc.1.patch.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.0-rc.1.patch.1">v7.0.0-rc.1.patch.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.0-rc.1/jwplayer.html5.js"
                 data-name="v7.0.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.0-rc.1">v7.0.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.0-beta.3/jwplayer.html5.js"
                 data-name="v7.0.0-beta.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.0-beta.3">v7.0.0-beta.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.0/jwplayer.html5.js"
                 data-name="v7.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.0">v7.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.12.6-development/jwplayer.html5.js"
                 data-name="v6.12.6-development"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.12.6-development">v6.12.6-development</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.12.5/jwplayer.html5.js"
                 data-name="v6.12.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.12.5">v6.12.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.12.0/jwplayer.html5.js"
                 data-name="v6.12.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.12.0">v6.12.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.11.0-rc.3/jwplayer.html5.js"
                 data-name="v6.11.0-rc.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.11.0-rc.3">v6.11.0-rc.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.11.0-rc.2/jwplayer.html5.js"
                 data-name="v6.11.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.11.0-rc.2">v6.11.0-rc.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.11.0-rc.1/jwplayer.html5.js"
                 data-name="v6.11.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.11.0-rc.1">v6.11.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.11.0/jwplayer.html5.js"
                 data-name="v6.11.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.11.0">v6.11.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.10.0-rc.1/jwplayer.html5.js"
                 data-name="v6.10.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.10.0-rc.1">v6.10.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.10.0/jwplayer.html5.js"
                 data-name="v6.10.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.10.0">v6.10.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.9.0-rc.2/jwplayer.html5.js"
                 data-name="v6.9.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.9.0-rc.2">v6.9.0-rc.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.9.0-rc.1/jwplayer.html5.js"
                 data-name="v6.9.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.9.0-rc.1">v6.9.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.9.0/jwplayer.html5.js"
                 data-name="v6.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.9.0">v6.9.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.8.0/jwplayer.html5.js"
                 data-name="v6.8.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.8.0">v6.8.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.7.0-rc.1/jwplayer.html5.js"
                 data-name="v6.7.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.7.0-rc.1">v6.7.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.7.0/jwplayer.html5.js"
                 data-name="v6.7.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.7.0">v6.7.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.6.0-rc.2/jwplayer.html5.js"
                 data-name="v6.6.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.6.0-rc.2">v6.6.0-rc.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.6.0-rc.1/jwplayer.html5.js"
                 data-name="v6.6.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.6.0-rc.1">v6.6.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.6.0/jwplayer.html5.js"
                 data-name="v6.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.6.0">v6.6.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.5.0-alpha+ads-events-added/jwplayer.html5.js"
                 data-name="v6.5.0-alpha+ads-events-added"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.5.0-alpha+ads-events-added">v6.5.0-alpha+ads-events-added</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.5.0/jwplayer.html5.js"
                 data-name="v6.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.5.0">v6.5.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.4.0/jwplayer.html5.js"
                 data-name="v6.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.4.0">v6.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.3.0/jwplayer.html5.js"
                 data-name="v6.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.3.0">v6.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.2.0-rc.1/jwplayer.html5.js"
                 data-name="v6.2.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.2.0-rc.1">v6.2.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.2.0/jwplayer.html5.js"
                 data-name="v6.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.2.0">v6.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.1.0/jwplayer.html5.js"
                 data-name="v6.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.1.0">v6.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.0.0-rc.4/jwplayer.html5.js"
                 data-name="v6.0.0-rc.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.0.0-rc.4">v6.0.0-rc.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.0.0-rc.3/jwplayer.html5.js"
                 data-name="v6.0.0-rc.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.0.0-rc.3">v6.0.0-rc.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.0.0-rc.2/jwplayer.html5.js"
                 data-name="v6.0.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.0.0-rc.2">v6.0.0-rc.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.0.0-rc.1/jwplayer.html5.js"
                 data-name="v6.0.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.0.0-rc.1">v6.0.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.0.0/jwplayer.html5.js"
                 data-name="v6.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.0.0">v6.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.12/jwplayer.html5.js"
                 data-name="mediaplayer-6.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.12">mediaplayer-6.12</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.11-rc3/jwplayer.html5.js"
                 data-name="mediaplayer-6.11-rc3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.11-rc3">mediaplayer-6.11-rc3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.11-rc2/jwplayer.html5.js"
                 data-name="mediaplayer-6.11-rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.11-rc2">mediaplayer-6.11-rc2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.11-rc1/jwplayer.html5.js"
                 data-name="mediaplayer-6.11-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.11-rc1">mediaplayer-6.11-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.11/jwplayer.html5.js"
                 data-name="mediaplayer-6.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.11">mediaplayer-6.11</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.10-rc1/jwplayer.html5.js"
                 data-name="mediaplayer-6.10-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.10-rc1">mediaplayer-6.10-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.9-rc2/jwplayer.html5.js"
                 data-name="mediaplayer-6.9-rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.9-rc2">mediaplayer-6.9-rc2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.9-rc1/jwplayer.html5.js"
                 data-name="mediaplayer-6.9-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.9-rc1">mediaplayer-6.9-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.9/jwplayer.html5.js"
                 data-name="mediaplayer-6.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.9">mediaplayer-6.9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.8/jwplayer.html5.js"
                 data-name="mediaplayer-6.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.8">mediaplayer-6.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.7-rc1/jwplayer.html5.js"
                 data-name="mediaplayer-6.7-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.7-rc1">mediaplayer-6.7-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.7/jwplayer.html5.js"
                 data-name="mediaplayer-6.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.7">mediaplayer-6.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.6-rc2/jwplayer.html5.js"
                 data-name="mediaplayer-6.6-rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.6-rc2">mediaplayer-6.6-rc2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.6-rc1/jwplayer.html5.js"
                 data-name="mediaplayer-6.6-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.6-rc1">mediaplayer-6.6-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.6/jwplayer.html5.js"
                 data-name="mediaplayer-6.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.6">mediaplayer-6.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.5/jwplayer.html5.js"
                 data-name="mediaplayer-6.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.5">mediaplayer-6.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.4/jwplayer.html5.js"
                 data-name="mediaplayer-6.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.4">mediaplayer-6.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.3/jwplayer.html5.js"
                 data-name="mediaplayer-6.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.3">mediaplayer-6.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.2-rc1/jwplayer.html5.js"
                 data-name="mediaplayer-6.2-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.2-rc1">mediaplayer-6.2-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.2/jwplayer.html5.js"
                 data-name="mediaplayer-6.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.2">mediaplayer-6.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.1/jwplayer.html5.js"
                 data-name="mediaplayer-6.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.1">mediaplayer-6.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.0/jwplayer.html5.js"
                 data-name="mediaplayer-6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.0">mediaplayer-6.0</a>
            </div>
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/jw6-rc4/jwplayer.html5.js"
                 data-name="jw6-rc4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="jw6-rc4">jw6-rc4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/jw6-rc3/jwplayer.html5.js"
                 data-name="jw6-rc3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="jw6-rc3">jw6-rc3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/jw6-rc2/jwplayer.html5.js"
                 data-name="jw6-rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="jw6-rc2">jw6-rc2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/jw6-rc1/jwplayer.html5.js"
                 data-name="jw6-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="jw6-rc1">jw6-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/copy-into-master/buffering-intervals-fix/jwplayer.html5.js"
                 data-name="copy-into-master/buffering-intervals-fix"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="copy-into-master/buffering-intervals-fix">copy-into-master/buffering-intervals-fix</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/breaks-remove/jwplayer.html5.js"
                 data-name="breaks-remove"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="breaks-remove">breaks-remove</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/ad-events-added/jwplayer.html5.js"
                 data-name="ad-events-added"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="ad-events-added">ad-events-added</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/jwplayer/jwplayer/find/jw6-rc4"
            class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw"
            data-pjax
            data-hotkey="t"
            aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jwplayer/jwplayer/tree/jw6-rc4" class="" data-branch="jw6-rc4" data-pjax="true" itemscope="url"><span itemprop="title">jwplayer</span></a></span></span><span class="separator">/</span><strong class="final-path">jwplayer.html5.js</strong>
    </div>
  </div>

<include-fragment class="commit-tease" src="/jwplayer/jwplayer/contributors/jw6-rc4/jwplayer.html5.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/jwplayer/jwplayer/raw/jw6-rc4/jwplayer.html5.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/jwplayer/jwplayer/blame/jw6-rc4/jwplayer.html5.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/jwplayer/jwplayer/commits/jw6-rc4/jwplayer.html5.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>


        <button type="button" class="octicon-btn disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-pencil"></span>
        </button>
        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </button>
  </div>

  <div class="file-info">
      1 lines (1 sloc)
      <span class="file-info-divider"></span>
    122 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">(function(a){a.html5={};a.html5.version=&quot;6.0.2790&quot;})(jwplayer);(function(a){var g=document,e=window;a.serialize=function(j){if(j==null){return null}else{if(j.toString().toLowerCase()==&quot;true&quot;){return true}else{if(j.toString().toLowerCase()==&quot;false&quot;){return false}else{if(isNaN(Number(j))||j.length&gt;5||j.length==0){return j}else{return Number(j)}}}}};a.filterSources=function(k){var o,p,j=a.extensionmap;if(k){p=[];for(var m=0;m&lt;k.length;m++){var n=k[m].type,l=k[m].file;if(!n){n=j.extType(a.extension(l));k[m].type=n}if(c(n)){if(!o){o=n}if(n==o){p.push(a.extend({},k[m]))}}}}return p};function c(j){var k=a.extensionmap.types[j];return(!!k&amp;&amp;jwplayer.vid.canPlayType(k))}a.ajax=function(n,m,j){var l;if(n.indexOf(&quot;#&quot;)&gt;0){n=n.replace(/#.*$/,&quot;&quot;)}if(b(n)&amp;&amp;a.exists(e.XDomainRequest)){l=new XDomainRequest();l.onload=f(l,n,m,j);l.onerror=d(j,n,l)}else{if(a.exists(e.XMLHttpRequest)){l=new XMLHttpRequest();l.onreadystatechange=h(l,n,m,j);l.onerror=d(j,n)}else{if(j){j()}}}try{l.open(&quot;GET&quot;,n,true);l.send(null)}catch(k){if(j){j(n)}}return l};function b(j){if(j&amp;&amp;j.indexOf(&quot;://&quot;)&gt;=0){if(j.split(&quot;/&quot;)[2]!=e.location.href.split(&quot;/&quot;)[2]){return true}}return false}function d(j,l,k){return function(){j(&quot;Error loading file&quot;)}}function h(k,m,l,j){return function(){if(k.readyState===4){switch(k.status){case 200:f(k,m,l,j)();break;case 404:j(&quot;File not found&quot;)}}}}function f(k,m,l,j){return function(){try{var n=k.responseXML;if(n&amp;&amp;n.firstChild){return l(k)}}catch(p){}var o=a.parseXML(k.responseText);if(o&amp;&amp;o.firstChild){k=a.extend({},k,{responseXML:o})}else{if(j){j(k.responseText?&quot;Invalid XML&quot;:m)}return}l(k)}}a.parseXML=function(j){try{var k;if(e.DOMParser){k=(new DOMParser()).parseFromString(j,&quot;text/xml&quot;);try{if(k.childNodes[0].firstChild.nodeName==&quot;parsererror&quot;){return}}catch(l){}}else{k=new ActiveXObject(&quot;Microsoft.XMLDOM&quot;);k.async=&quot;false&quot;;k.loadXML(j)}return k}catch(l){return}};a.parseDimension=function(j){if(typeof j==&quot;string&quot;){if(j===&quot;&quot;){return 0}else{if(j.lastIndexOf(&quot;%&quot;)&gt;-1){return j}else{return parseInt(j.replace(&quot;px&quot;,&quot;&quot;),10)}}}return j};a.timeFormat=function(l){if(l&gt;0){var k=Math.floor(l/3600),m=Math.floor((l-k*3600)/60),j=Math.floor(l%60);return(k?k+&quot;:&quot;:&quot;&quot;)+(m&lt;10?&quot;0&quot;:&quot;&quot;)+m+&quot;:&quot;+(j&lt;10?&quot;0&quot;:&quot;&quot;)+j;return str}else{return&quot;00:00&quot;}};a.seconds=function(l){l=l.replace(&quot;,&quot;,&quot;.&quot;);var j=l.split(&quot;:&quot;);var k=0;if(l.substr(-1)==&quot;s&quot;){k=Number(l.substr(0,l.length-1))}else{if(l.substr(-1)==&quot;m&quot;){k=Number(l.substr(0,l.length-1))*60}else{if(l.substr(-1)==&quot;h&quot;){k=Number(l.substr(0,l.length-1))*3600}else{if(j.length&gt;1){k=Number(j[j.length-1]);k+=Number(j[j.length-2])*60;if(j.length==3){k+=Number(j[j.length-3])*3600}}else{k=Number(l)}}}}return k};a.bounds=function(k){if(!k){return{left:0,right:0,width:0,height:0,right:0,bottom:0}}var o=k,n=0,m=0,l=isNaN(k.offsetWidth)?0:k.offsetWidth,j=isNaN(k.offsetHeight)?0:k.offsetHeight;do{n+=isNaN(o.offsetLeft)?0:o.offsetLeft;m+=isNaN(o.offsetTop)?0:o.offsetTop}while(o=o.offsetParent);return{left:n,top:m,width:l,height:j,right:n+l,bottom:m+j}};a.empty=function(j){if(!j){return}while(j.childElementCount&gt;0){j.removeChild(j.children[0])}}})(jwplayer.utils);(function(p){var a={},n,c={},j=0,o=p.exists,d={},e=false,b=&quot;.jwplayer &quot;;function l(){var r=document.createElement(&quot;style&quot;);r.type=&quot;text/css&quot;;document.getElementsByTagName(&quot;head&quot;)[0].appendChild(r);return r}var m=p.css=function(r,u,s){if(!a[r]){if(e){a[r]=l()}else{if(!n||n.sheet.cssRules.length&gt;50000){n=l()}a[r]=n}}if(!o(s)){s=false}if(!c[r]){c[r]={}}for(var t in u){var v=q(t,u[t],s);if(o(c[r][t])&amp;&amp;!o(v)){delete c[r][t]}else{if(o(v)){c[r][t]=v}}}if(j&gt;0){return}k(r)};m.block=function(){j++};m.unblock=function(){j=Math.max(j-1,0);if(j==0){h()}};var h=function(){for(var r in a){k(r)}};function q(t,u,r){if(typeof u===&quot;undefined&quot;){return undefined}var s=r?&quot; !important&quot;:&quot;&quot;;if(!isNaN(u)){switch(t){case&quot;z-index&quot;:case&quot;opacity&quot;:return u+s;break;default:if(t.match(/color/i)){return&quot;#&quot;+p.pad(u.toString(16).replace(/^0x/i,&quot;&quot;),6)+s}else{if(u===0){return 0+s}else{return Math.ceil(u)+&quot;px&quot;+s}}break}}else{if(!!u.match(/png|gif|jpe?g/i)&amp;&amp;u.indexOf(&quot;url&quot;)&lt;0){return&quot;url(&quot;+u+&quot;)&quot;}return u+s}}function k(r){if(e){a[r].innerHTML=f(r);return}var s=a[r].sheet,t=d[r];if(s){var u=s.cssRules;if(p.exists(t)&amp;&amp;t&lt;u.length&amp;&amp;u[t].selectorText==r){s.deleteRule(t)}else{d[r]=u.length}s.insertRule(f(r),d[r])}}function f(r){var s=r+&quot;{\n&quot;;var u=c[r];for(var t in u){s+=&quot;  &quot;+t+&quot;: &quot;+u[t]+&quot;;\n&quot;}s+=&quot;}\n&quot;;return s}p.clearCss=function(s){for(var t in c){if(t.indexOf(s)&gt;=0){delete c[t]}}for(var r in a){if(r.indexOf(s)&gt;=0){a[r].innerHTML=&quot;&quot;}}};p.transform=function(s,u){var r=&quot;-transform&quot;,t;u=u?u:&quot;&quot;;if(typeof s==&quot;string&quot;){t={};t[&quot;-webkit&quot;+r]=u;t[&quot;-ms&quot;+r]=u;t[&quot;-moz&quot;+r]=u;t[&quot;-o&quot;+r]=u;p.css(s,t)}else{r=&quot;Transform&quot;;t=s.style;t[&quot;webkit&quot;+r]=u;t[&quot;Moz&quot;+r]=u;t[&quot;ms&quot;+r]=u;t[&quot;O&quot;+r]=u}};p.dragStyle=function(r,s){p.css(r,{&quot;-webkit-user-select&quot;:s,&quot;-moz-user-select&quot;:s,&quot;-ms-user-select&quot;:s,&quot;-webkit-user-drag&quot;:s,&quot;user-select&quot;:s,&quot;user-drag&quot;:s})};p.transitionStyle=function(r,s){if(navigator.userAgent.match(/5\.\d(\.\d)? safari/i)){return}p.css(r,{&quot;-webkit-transition&quot;:s,&quot;-moz-transition&quot;:s,&quot;-o-transition&quot;:s})};p.rotate=function(r,s){p.transform(r,&quot;rotate(&quot;+s+&quot;deg)&quot;)};function g(){m(b+[&quot;&quot;,&quot;div&quot;,&quot;span&quot;,&quot;a&quot;,&quot;img&quot;,&quot;ul&quot;,&quot;li&quot;,&quot;video&quot;].join(&quot;,&quot;+b)+&quot;, .jwclick&quot;,{margin:0,padding:0,border:0,color:&quot;#000000&quot;,&quot;font-size&quot;:&quot;100%&quot;,font:&quot;inherit&quot;,&quot;vertical-align&quot;:&quot;baseline&quot;,&quot;background-color&quot;:&quot;transparent&quot;});m(b+&quot;ul&quot;,{&quot;list-style&quot;:&quot;none&quot;})}g()})(jwplayer.utils);(function(a){a.scale=function(e,d,c,h,j){var g,f=a.exists;if(!f(d)){d=1}if(!f(c)){c=1}if(!f(h)){h=0}if(!f(j)){j=0}if(d==1&amp;&amp;c==1&amp;&amp;h==0&amp;&amp;j==0){g=&quot;&quot;}else{g=&quot;scale(&quot;+d+&quot;,&quot;+c+&quot;) translate(&quot;+h+&quot;px,&quot;+j+&quot;px)&quot;}a.transform(e,g)};a.stretch=function(l,q,p,h,n,j){if(!q){return}if(!l){l=b.UNIFORM}if(!p||!h||!n||!j){return}var d=p/n,g=h/j,o=0,k=0,c={},e=(q.tagName.toLowerCase()==&quot;video&quot;),f=false,m;if(e){a.transform(q)}m=&quot;jw&quot;+l.toLowerCase();switch(l.toLowerCase()){case b.FILL:if(d&gt;g){n=n*d;j=j*d}else{n=n*g;j=j*g}case b.NONE:d=g=1;case b.EXACTFIT:f=true;break;case b.UNIFORM:default:if(d&gt;g){if(n*g/p&gt;0.95){f=true;m=&quot;jwexactfit&quot;}else{n=n*g;j=j*g}}else{if(j*d/h&gt;0.95){f=true;m=&quot;jwexactfit&quot;}else{n=n*d;j=j*d}}if(f){g=Math.ceil(100*h/j)/100;d=Math.ceil(100*p/n)/100}break}if(e){if(f){q.style.width=n+&quot;px&quot;;q.style.height=j+&quot;px&quot;;o=((p-n)/2)/d;k=((h-j)/2)/g;a.scale(q,d,g,o,k)}else{q.style.width=&quot;&quot;;q.style.height=&quot;&quot;}}else{q.className=q.className.replace(/\s*jw(none|exactfit|uniform|fill)/g,&quot;&quot;);q.className+=&quot; &quot;+m}};var b=a.stretching={NONE:&quot;none&quot;,FILL:&quot;fill&quot;,UNIFORM:&quot;uniform&quot;,EXACTFIT:&quot;exactfit&quot;}})(jwplayer.utils);(function(a){a.parsers={localName:function(b){if(!b){return&quot;&quot;}else{if(b.localName){return b.localName}else{if(b.baseName){return b.baseName}else{return&quot;&quot;}}}},textContent:function(b){if(!b){return&quot;&quot;}else{if(b.textContent){return b.textContent}else{if(b.text){return b.text}else{return&quot;&quot;}}}},getChildNode:function(c,b){return c.childNodes[b]},numChildren:function(b){if(b.childNodes){return b.childNodes.length}else{return 0}}}})(jwplayer.html5);(function(a){a.dfxp=function(g,b){var d,c,j=jwplayer.utils.seconds;function h(l){if(l==0){b(&quot;Crossdomain loading denied: &quot;+c)}else{if(l==404){b(&quot;DFXP File not found: &quot;+c)}else{b(&quot;Error &quot;+l+&quot; loading DFXP file: &quot;+c)}}}this.load=function(m){c=m;try{d.open(&quot;GET&quot;,m,true);d.send(null)}catch(l){b(&quot;Error loading DFXP File: &quot;+m)}};function f(p){var m=[{begin:0,text:&quot;&quot;}];p=p.replace(/^\s+/,&quot;&quot;).replace(/\s+$/,&quot;&quot;);var o=p.split(&quot;&lt;/p&gt;&quot;);var q=[];for(var l=0;l&lt;o.length;l++){if(o[l].indexOf(&quot;&lt;p&quot;)&gt;=0){o[l]=o[l].substr(o[l].indexOf(&quot;&lt;p&quot;)+2).replace(/^\s+/,&quot;&quot;).replace(/\s+$/,&quot;&quot;);q.push(o[l])}}o=q;for(l=0;l&lt;o.length;l++){var n=k(o[l]);if(n.text){m.push(n);if(n.end){m.push({begin:n.end,text:&quot;&quot;});delete n.end}}}if(m.length&gt;1){g(m)}else{b(&quot;Invalid DFXP file: &quot;+c)}}function k(o){var n={};try{var l=o.indexOf(&#39;begin=&quot;&#39;);o=o.substr(l+7);l=o.indexOf(&#39;&quot; end=&quot;&#39;);n.begin=j(o.substr(0,l));o=o.substr(l+7);l=o.indexOf(&#39;&quot;&gt;&#39;);n.end=j(o.substr(0,l));o=o.substr(l+2);n.text=o}catch(m){}return n}function e(){d=new XMLHttpRequest();d.onreadystatechange=function(){if(d.readyState===4){if(d.status===200){f(d.responseText)}else{h(d.status)}}}}e()}})(jwplayer.html5.parsers);(function(b){var a=b.html5.parsers;var d=a.jwparser=function(){};var c=&quot;jwplayer&quot;;d.parseEntry=function(h,j){for(var f=0;f&lt;h.childNodes.length;f++){var g=h.childNodes[f];if(g.prefix==c){var e=a.localName(g);j[e]=b.utils.serialize(a.textContent(g));if(e==&quot;file&quot;&amp;&amp;j.sources){delete j.sources}}if(!j.file){j.file=j.link}}return j}})(jwplayer);(function(e){var b=jwplayer.utils,h=b.xmlAttribute,c=e.localName,a=e.textContent,d=e.numChildren;var g=e.mediaparser=function(){};var f=&quot;media&quot;;g.parseGroup=function(o,q){var n,l,j=[];function p(r){var s={zh:&quot;Chinese&quot;,nl:&quot;Dutch&quot;,en:&quot;English&quot;,fr:&quot;French&quot;,de:&quot;German&quot;,it:&quot;Italian&quot;,ja:&quot;Japanese&quot;,pt:&quot;Portuguese&quot;,ru:&quot;Russian&quot;,es:&quot;Spanish&quot;};if(s[r]){return s[r]}return r}for(l=0;l&lt;d(o);l++){n=o.childNodes[l];if(n.prefix==f){if(!c(n)){continue}switch(c(n).toLowerCase()){case&quot;content&quot;:if(h(n,&quot;duration&quot;)){q.duration=b.seconds(h(n,&quot;duration&quot;))}if(d(n)&gt;0){q=g.parseGroup(n,q)}if(h(n,&quot;url&quot;)){if(!q.sources){q.sources=[]}q.sources.push({file:h(n,&quot;url&quot;),type:h(n,&quot;type&quot;),width:h(n,&quot;width&quot;),label:h(n,&quot;height&quot;)?h(n,&quot;height&quot;)+&quot;p&quot;:undefined})}break;case&quot;title&quot;:q.title=a(n);break;case&quot;description&quot;:q.description=a(n);break;case&quot;guid&quot;:q.mediaid=a(n);break;case&quot;thumbnail&quot;:q.image=h(n,&quot;url&quot;);break;case&quot;player&quot;:var k=n.url;break;case&quot;group&quot;:g.parseGroup(n,q);break;case&quot;subtitle&quot;:var m={};m.file=h(n,&quot;url&quot;);if(h(n,&quot;lang&quot;).length&gt;0){m.label=p(h(n,&quot;lang&quot;))}j.push(m)}}}if(j.length&gt;0){q.captions=j}return q}})(jwplayer.html5.parsers);(function(g){var b=jwplayer.utils,a=g.textContent,e=g.getChildNode,f=g.numChildren,d=g.localName;g.rssparser={};g.rssparser.parse=function(o){var h=[];for(var m=0;m&lt;f(o);m++){var n=e(o,m),k=d(n).toLowerCase();if(k==&quot;channel&quot;){for(var l=0;l&lt;f(n);l++){var p=e(n,l);if(d(p).toLowerCase()==&quot;item&quot;){h.push(c(p))}}}}return h};function c(l){var m={};for(var j=0;j&lt;l.childNodes.length;j++){var k=l.childNodes[j];var h=d(k);if(!h){continue}switch(h.toLowerCase()){case&quot;enclosure&quot;:m.file=b.xmlAttribute(k,&quot;url&quot;);break;case&quot;title&quot;:m.title=a(k);break;case&quot;guid&quot;:m.mediaid=a(k);break;case&quot;pubdate&quot;:m.date=a(k);break;case&quot;description&quot;:m.description=a(k);break;case&quot;link&quot;:m.link=a(k);break;case&quot;category&quot;:if(m.tags){m.tags+=a(k)}else{m.tags=a(k)}break}}m=g.mediaparser.parseGroup(l,m);m=g.jwparser.parseEntry(l,m);return new jwplayer.playlist.item(m)}})(jwplayer.html5.parsers);(function(a){a.srt=function(g,b){var d,c,j=jwplayer.utils.seconds;function h(l){if(l==0){b(&quot;Crossdomain loading denied: &quot;+c)}else{if(l==404){b(&quot;SRT File not found: &quot;+c)}else{b(&quot;Error &quot;+l+&quot; loading SRT file: &quot;+c)}}}this.load=function(m){c=m;try{d.open(&quot;GET&quot;,m,true);d.send(null)}catch(l){b(&quot;Error loading SRT File: &quot;+m)}};function f(p){var m=[{begin:0,text:&quot;&quot;}];p=p.replace(/^\s+/,&quot;&quot;).replace(/\s+$/,&quot;&quot;);var o=p.split(&quot;\r\n\r\n&quot;);if(o.length==1){o=p.split(&quot;\n\n&quot;)}for(var l=0;l&lt;o.length;l++){if(o[l]==&quot;WEBVTT&quot;){continue}var n=k(o[l]);if(n.text){m.push(n);if(n.end){m.push({begin:n.end,text:&quot;&quot;});delete n.end}}}if(m.length&gt;1){g(m)}else{b(&quot;Invalid SRT file: &quot;+c)}}function k(q){var p={};var r=q.split(&quot;\r\n&quot;);if(r.length==1){r=q.split(&quot;\n&quot;)}try{var l=1;if(r[0].indexOf(&quot; --&gt; &quot;)&gt;0){l=0}var n=r[l].indexOf(&quot; --&gt; &quot;);if(n&gt;0){p.begin=j(r[l].substr(0,n));p.end=j(r[l].substr(n+5))}if(r[l+1]){p.text=r[l+1];for(var o=l+2;o&lt;r.length;o++){p.text+=&quot;&lt;br/&gt;&quot;+r[o]}}}catch(m){}return p}function e(){d=new XMLHttpRequest();d.onreadystatechange=function(){if(d.readyState===4){if(d.status===200){f(d.responseText)}else{h(d.status)}}}}e()}})(jwplayer.html5.parsers);(function(e){var k=jwplayer.utils,l=jwplayer.events,m=l.state,h=k.css,g=&quot;playing&quot;,j=document,a=&quot;.jwcaptions&quot;,b=&quot;absolute&quot;,c=&quot;none&quot;,f=&quot;100%&quot;,d=&quot;hidden&quot;;e.captions=function(H,u){var N=H,v,w,K={back:true,color:&quot;#FFFFFF&quot;,fontSize:15},J={fontFamily:&quot;Arial,sans-serif&quot;,fontStyle:&quot;normal&quot;,fontWeight:&quot;normal&quot;,textDecoration:&quot;none&quot;},R,Q,y,s=[],r=0,S=false,F,B=new l.eventdispatcher();k.extend(this,B);function D(){v=j.createElement(&quot;div&quot;);v.id=N.id+&quot;_caption&quot;;v.className=&quot;jwcaptions&quot;;N.jwAddEventListener(l.JWPLAYER_PLAYER_STATE,C);N.jwAddEventListener(l.JWPLAYER_PLAYLIST_ITEM,M);N.jwAddEventListener(l.JWPLAYER_MEDIA_ERROR,L);N.jwAddEventListener(l.JWPLAYER_ERROR,L);N.jwAddEventListener(l.JWPLAYER_READY,t);N.jwAddEventListener(l.JWPLAYER_MEDIA_TIME,n);N.jwAddEventListener(l.JWPLAYER_FULLSCREEN,x)}function L(U){k.log(&quot;CAPTIONS(&quot;+U+&quot;)&quot;)}function G(){Q=&quot;idle&quot;;q()}function C(U){switch(U.newstate){case m.IDLE:G();break;case m.PLAYING:A();break}}function x(U){S=U.fullscreen;if(U.fullscreen){I();setTimeout(I,500)}else{q()}}function I(){var U=v.offsetHeight,V=v.offsetWidth;if(U!=0&amp;&amp;V!=0){R.resize(V,Math.round(U*0.94))}}function M(Z){y=0;s=[];R.update(0);var Y=N.jwGetPlaylist()[N.jwGetPlaylistIndex()],U=Y.captions,X=0,V=&quot;&quot;,W=&quot;&quot;;if(U){for(X=0;X&lt;U.length;X++){W=U[X].file;if(W){if(U[X].label){s.push(U[X])}else{V=W.substring(W.lastIndexOf(&quot;/&quot;)+1,W.indexOf(&quot;.&quot;));s.push({file:W,label:V})}}}}r=0;q();O(l.JWPLAYER_CAPTIONS_LIST,p(),r)}function T(U){F=U;k.ajax(U,z,E)}function z(V){var W=V.responseXML.firstChild,U;if(e.parsers.localName(W)==&quot;tt&quot;){U=new jwplayer.html5.parsers.dfxp(P,L)}else{U=new jwplayer.html5.parsers.srt(P,L)}U.load(F)}function E(V){var U=new jwplayer.html5.parsers.srt(P,L);U.load(F)}function P(U){R.populate(U);s[y].data=U;q()}function A(U){Q=g;q()}function q(){if(!s.length){R.hide()}else{if(Q==g&amp;&amp;r&gt;0){R.show();if(S){x({fullscreen:true});return}var U=N.jwGetWidth();if(N._model&amp;&amp;N._model.config&amp;&amp;N._model.config.listbar&amp;&amp;N._model.config.listbar.size){U=U-N._model.config.listbar.size}R.resize(U,Math.round(N.jwGetHeight()*0.94))}else{R.hide()}}}function t(){for(var U in K){if(u&amp;&amp;u[U.toLowerCase()]!=undefined){if(U==&quot;color&quot;){J.color=&quot;#&quot;+String(u.color).substr(-6)}else{J[U]=u[U.toLowerCase()]}}else{J[U]=K[U]}}R=new jwplayer.html5.captions.renderer(J,v);q()}function o(U){if(U&gt;0){y=U-1;r=U}else{r=0}if(s[y].data){R.populate(s[y].data)}else{T(s[y].file)}q()}function n(U){R.update(U.position)}function O(X,W,V){var U={type:X,tracks:W,track:V};B.sendEvent(X,U)}function p(){var V=new Array();V.push({label:&quot;(Off)&quot;});for(var U=0;U&lt;s.length;U++){V.push({label:s[U].label})}return V}this.element=function(){return v};this.getCaptionsList=function(){return p()};this.getCurrentCaptions=function(){return r};this.setCurrentCaptions=function(U){if(U&gt;=0&amp;&amp;r!=U&amp;&amp;U&lt;=s.length){o(U);O(l.JWPLAYER_CAPTIONS_CHANGED,p(),r)}};D()};h(a,{position:b,cursor:&quot;pointer&quot;,width:f,height:f,overflow:d})})(jwplayer.html5);(function(a){a.captions.renderer=function(q,g){var j,p,f,k,o,l,b=&quot;visible&quot;,e;this.hide=function(){c({display:&quot;none&quot;})};this.populate=function(r){k=-1;p=r;d()};function m(r){c({left:&quot;0px&quot;,top:&quot;0px&quot;});f.innerHTML=r;if(r==&quot;&quot;){b=&quot;hidden&quot;}else{b=&quot;visible&quot;}setTimeout(n,20)}this.resize=function(s,r){e=s;j=r;n()};function n(){c({left:&quot;0px&quot;,top:&quot;0px&quot;});var s=Math.round(q.fontSize*Math.pow(e/400,0.6)),r=Math.round(s*1.4),u,t;c({maxWidth:e+&quot;px&quot;,fontSize:s+&quot;px&quot;,lineHeight:r+&quot;px&quot;,visibility:b});u=Math.round(e/2-f.clientWidth/2);t=Math.round(j-f.clientHeight);c({left:u+&quot;px&quot;,top:t+&quot;px&quot;})}function d(){var s=-1;for(var r=0;r&lt;p.length;r++){if(p[r][&quot;begin&quot;]&lt;=l&amp;&amp;(r==p.length-1||p[r+1][&quot;begin&quot;]&gt;=l)){s=r;break}}if(s==-1){m(&quot;&quot;)}else{if(s!=k){k=s;m(p[r][&quot;text&quot;])}}}function h(){f=document.createElement(&quot;div&quot;);g.appendChild(f);c({color:&quot;#&quot;+q.color.substr(-6),display:&quot;block&quot;,fontFamily:q.fontFamily,fontStyle:q.fontStyle,fontWeight:q.fontWeight,height:&quot;auto&quot;,margin:&quot;0 0 0 0&quot;,padding:&quot;3px 9px&quot;,position:&quot;absolute&quot;,textAlign:&quot;center&quot;,textDecoration:q.textDecoration,wordWrap:&quot;break-word&quot;,width:&quot;auto&quot;});if(q.back){c({background:&quot;#000&quot;})}else{c({textShadow:&quot;-2px 0px 1px #000,2px 0px 1px #000,0px -2px 1px #000,0px 2px 1px #000,-1px 1px 1px #000,1px 1px 1px #000,1px -1px 1px #000,1px 1px 1px #000&quot;})}}h();this.show=function(){c({display:&quot;block&quot;});n()};function c(r){for(var s in r){f.style[s]=r[s]}}this.update=function(r){l=r;if(p){d()}}}})(jwplayer.html5);(function(q){var m=q.html5,z=q.utils,c=q.events,g=c.state,t=z.css,C=z.transitionStyle,d=&quot;button&quot;,s=&quot;text&quot;,h=&quot;divider&quot;,v=&quot;slider&quot;,k=&quot;relative&quot;,l=&quot;absolute&quot;,b=&quot;none&quot;,r=&quot;block&quot;,A=&quot;inline&quot;,p=&quot;inline-block&quot;,n=&quot;hidden&quot;,e=&quot;left&quot;,F=&quot;right&quot;,o=&quot;100%&quot;,x=&quot;opacity .15s, background .15s, visibility .15s&quot;,w={display:b},a={display:E},D=&quot;.jwcontrolbar&quot;,u=false,j=true,B=null,E=undefined,y=window,f=document;m.controlbar=function(ai,aW){var a7,Y,N=ao(&quot;divider&quot;,h),J={margin:8,maxwidth:800,font:&quot;Arial,sans-serif&quot;,fontsize:11,fontcolor:parseInt(&quot;eeeeee&quot;,16),fontweight:&quot;bold&quot;,layout:{left:{position:&quot;left&quot;,elements:[ao(&quot;play&quot;,d),N,ao(&quot;prev&quot;,d),ao(&quot;next&quot;,d),ao(&quot;divider&quot;,h,&quot;nextdiv&quot;),ao(&quot;elapsed&quot;,s)]},center:{position:&quot;center&quot;,elements:[ao(&quot;time&quot;,v)]},right:{position:&quot;right&quot;,elements:[ao(&quot;duration&quot;,s),N,ao(&quot;hd&quot;,d),ao(&quot;cc&quot;,d),N,ao(&quot;mute&quot;,d),ao(&quot;volume&quot;,v),N,ao(&quot;fullscreen&quot;,d)]}}},aH,ba,aw,R,bq,aM,bA,an,a5,ax,bm,ak,bt,bk,aL,aB,Z,bj,ap,by,U,aX,aC,M,a0,a6=u,aV=u,aY=0,W=0,bu={play:&quot;pause&quot;,mute:&quot;unmute&quot;,fullscreen:&quot;normalscreen&quot;},bF={play:u,mute:u,fullscreen:u},bf={play:al,mute:bB,fullscreen:aT,next:a8,prev:aK},bD={time:bE,volume:aS,},O={},ah=this;function ao(bH,bJ,bI){return{name:bH,type:bJ,className:bI}}function be(){aw={};a7=ai;aM=a7.id+&quot;_controlbar&quot;;bA=an=0;bq=aO();bq.id=aM;bq.className=&quot;jwcontrolbar&quot;;Y=a7.skin;ba=Y.getComponentLayout(&quot;controlbar&quot;);if(!ba){ba=J.layout}z.clearCss(&quot;#&quot;+aM);bx();aZ();aa();setTimeout(function(){P();bz()},0);ah.visible=false}function aa(){a7.jwAddEventListener(c.JWPLAYER_MEDIA_TIME,bh);a7.jwAddEventListener(c.JWPLAYER_PLAYER_STATE,ad);a7.jwAddEventListener(c.JWPLAYER_MEDIA_MUTE,bz);a7.jwAddEventListener(c.JWPLAYER_MEDIA_VOLUME,P);a7.jwAddEventListener(c.JWPLAYER_MEDIA_BUFFER,ag);a7.jwAddEventListener(c.JWPLAYER_FULLSCREEN,ay);a7.jwAddEventListener(c.JWPLAYER_PLAYLIST_LOADED,ar);a7.jwAddEventListener(c.JWPLAYER_MEDIA_LEVELS,bC);a7.jwAddEventListener(c.JWPLAYER_MEDIA_LEVEL_CHANGED,bc);a7.jwAddEventListener(c.JWPLAYER_CAPTIONS_LIST,bs);a7.jwAddEventListener(c.JWPLAYER_CAPTIONS_CHANGED,am);bq.addEventListener(&quot;mouseover&quot;,function(){y.addEventListener(&quot;mousemove&quot;,T,u);y.addEventListener(&quot;mouseup&quot;,T,u);y.addEventListener(&quot;mousedown&quot;,aE,u)},false);bq.addEventListener(&quot;mouseout&quot;,function(){y.removeEventListener(&quot;mousemove&quot;,T);y.removeEventListener(&quot;mouseup&quot;,T);y.removeEventListener(&quot;mousedown&quot;,aE)},false)}function bh(bI){var bH=u,bJ;if(aw.elapsed){bJ=z.timeFormat(bI.position);aw.elapsed.innerHTML=bJ;bH=(bJ.length!=z.timeFormat(an).length)}if(aw.duration){bJ=z.timeFormat(bI.duration);aw.duration.innerHTML=bJ;bH=(bH||(bJ.length!=z.timeFormat(bA).length))}if(bI.duration&gt;0){au(bI.position/bI.duration)}else{au(0)}bA=bI.duration;an=bI.position;if(bH){aR()}}function ad(bH){switch(bH.newstate){case g.BUFFERING:case g.PLAYING:t(aU(&quot;.jwtimeSliderThumb&quot;),{opacity:1});L(&quot;play&quot;,j);break;case g.PAUSED:if(!aV){L(&quot;play&quot;,u)}break;case g.IDLE:L(&quot;play&quot;,u);t(aU(&quot;.jwtimeSliderThumb&quot;),{opacity:0});if(aw.timeRail){aw.timeRail.className=&quot;jwrail&quot;;setTimeout(function(){aw.timeRail.className+=&quot; jwsmooth&quot;},100)}at(0);bh({position:0,duration:0});break}}function bz(){var bH=a7.jwGetMute();L(&quot;mute&quot;,bH);H(bH?0:bt)}function P(){bt=a7.jwGetVolume()/100;H(bt)}function ag(bH){at(bH.bufferPercent/100)}function ay(bH){L(&quot;fullscreen&quot;,bH.fullscreen);bo()}function ar(bH){t(aU(&quot;.jwhd&quot;),w);t(aU(&quot;.jwcc&quot;),w);bo();aR()}function bC(bH){a5=bH.levels;if(a5&amp;&amp;a5.length&gt;1&amp;&amp;U){t(aU(&quot;.jwhd&quot;),{display:E});U.clearOptions();for(var bI=0;bI&lt;a5.length;bI++){U.addOption(a5[bI].label,bI)}bc(bH)}else{t(aU(&quot;.jwhd&quot;),{display:&quot;none&quot;})}aR()}function bc(bH){ax=bH.currentQuality;if(U&amp;&amp;ax&gt;=0){U.setActive(bH.currentQuality)}}function bs(bH){bm=bH.tracks;if(bm&amp;&amp;bm.length&gt;1&amp;&amp;aC){t(aU(&quot;.jwcc&quot;),{display:E});aC.clearOptions();for(var bI=0;bI&lt;bm.length;bI++){aC.addOption(bm[bI].label,bI)}am(bH)}else{t(aU(&quot;.jwcc&quot;),{display:&quot;none&quot;})}aR()}function am(bH){if(!bm){return}ak=bH.track;if(aC&amp;&amp;ak&gt;=0){aC.setActive(bH.track)}}function bn(){return(!!f.querySelector(&quot;#&quot;+a7.id+&quot; .jwplaylist&quot;)&amp;&amp;!a7.jwGetFullscreen())}function bx(){aH=z.extend({},J,Y.getComponentSettings(&quot;controlbar&quot;),aW);R=aI(&quot;background&quot;).height;t(&quot;#&quot;+aM,{height:R,bottom:a6?0:aH.margin});t(aU(&quot;.jwtext&quot;),{font:aH.fontsize+&quot;px/&quot;+aI(&quot;background&quot;).height+&quot;px &quot;+aH.font,color:aH.fontcolor,&quot;font-weight&quot;:aH.fontweight});t(aU(&quot;.jwoverlay&quot;),{bottom:R});if(aH.maxwidth&gt;0){t(aU(),{&quot;max-width&quot;:aH.maxwidth})}}function aU(bH){return&quot;#&quot;+aM+(bH?&quot; &quot;+bH:&quot;&quot;)}function aO(){return br(&quot;span&quot;)}function br(bH){return f.createElement(bH)}function aZ(){var bJ=aq(&quot;capLeft&quot;);var bI=aq(&quot;capRight&quot;);var bH=aq(&quot;background&quot;,{position:l,left:aI(&quot;capLeft&quot;).width,right:aI(&quot;capRight&quot;).width,&quot;background-repeat&quot;:&quot;repeat-x&quot;},j);if(bH){a1(bq,bH)}if(bJ){a1(bq,bJ)}bg();if(bI){a1(bq,bI)}}function aQ(bH){switch(bH.type){case h:return aA(bH);break;case s:return bG(bH.name);break;case d:if(bH.name!=&quot;blank&quot;){return X(bH.name)}break;case v:return av(bH.name);break}}function aq(bJ,bI,bK,bO,bL){var bN=aO();bN.className=&quot;jw&quot;+bJ;var bH=bO?&quot; left center&quot;:&quot; center&quot;;var bP=aI(bJ);bN.innerHTML=&quot;&amp;nbsp;&quot;;if(!bP||bP.src==&quot;&quot;){return}var bM;if(bK){bM={background:&quot;url(&#39;&quot;+bP.src+&quot;&#39;) repeat-x &quot;+bH,height:bL?bP.height:E}}else{bM={background:&quot;url(&#39;&quot;+bP.src+&quot;&#39;) no-repeat&quot;+bH,width:bP.width,height:bL?bP.height:E}}bN.skin=bP;t(aU(&quot;.jw&quot;+bJ),z.extend(bM,bI));aw[bJ]=bN;return bN}function X(bJ){if(!aI(bJ+&quot;Button&quot;).src){return B}var bL=aO();bL.className=&quot;jw&quot;+bJ+&quot; jwbuttoncontainer&quot;;var bK=br(&quot;button&quot;);bK.addEventListener(&quot;click&quot;,aj(bJ),u);bK.innerHTML=&quot;&amp;nbsp;&quot;;a1(bL,bK);var bM=aI(bJ+&quot;Button&quot;);var bI=aI(bJ+&quot;ButtonOver&quot;);bb(aU(&quot;.jw&quot;+bJ+&quot; button&quot;),bM,bI);var bH=bu[bJ];if(bH){bb(aU(&quot;.jw&quot;+bJ+&quot;.jwtoggle button&quot;),aI(bH+&quot;Button&quot;),aI(bH+&quot;ButtonOver&quot;))}aw[bJ]=bL;return bL}function bb(bH,bI,bJ){if(!bI.src){return}t(bH,{width:bI.width,background:&quot;url(&quot;+bI.src+&quot;) center no-repeat&quot;});if(bJ.src){t(bH+&quot;:hover&quot;,{background:&quot;url(&quot;+bJ.src+&quot;) center no-repeat&quot;})}}function aj(bH){return function(){if(bf[bH]){bf[bH]()}}}function al(){if(bF.play){a7.jwPause()}else{a7.jwPlay()}}function bB(){a7.jwSetMute();bz({mute:bF.mute})}function aP(bI){for(var bH in O){if(bH!=bI&amp;&amp;O.hasOwnProperty(bH)){O[bH].hide()}}}function V(){if(a6){return}bk.show();aP(&quot;volume&quot;)}function aS(bH){H(bH);if(bH&lt;0.1){bH=0}if(bH&gt;0.9){bH=1}a7.jwSetVolume(bH*100)}function bp(){if(a6){return}M.show();aP(&quot;fullscreen&quot;)}function bE(bH){a7.jwSeek(bH*bA)}function aT(){a7.jwSetFullscreen()}function a8(){a7.jwPlaylistNext()}function aK(){a7.jwPlaylistPrev()}function L(bH,bI){if(!z.exists(bI)){bI=!bF[bH]}if(aw[bH]){aw[bH].className=&quot;jw&quot;+bH+(bI?&quot; jwtoggle jwtoggling&quot;:&quot; jwtoggling&quot;);setTimeout(function(){aw[bH].className=aw[bH].className.replace(&quot; jwtoggling&quot;,&quot;&quot;)},100)}bF[bH]=bI}function az(bH){return aM+&quot;_&quot;+bH}function bG(bH,bL){var bJ=aO();bJ.id=az(bH);bJ.className=&quot;jwtext jw&quot;+bH;var bI={};var bK=aI(bH+&quot;Background&quot;);if(bK.src){bI.background=&quot;url(&quot;+bK.src+&quot;) no-repeat center&quot;;bI[&quot;background-size&quot;]=&quot;100% &quot;+aI(&quot;background&quot;).height+&quot;px&quot;}t(aU(&quot;.jw&quot;+bH),bI);bJ.innerHTML=&quot;00:00&quot;;aw[bH]=bJ;return bJ}function aA(bI){var bH;if(bI.width){bH=aO();bH.className=&quot;jwblankDivider&quot;;t(bH,{width:parseInt(bI.width)})}else{if(bI.element){bH=aq(bI.element)}else{bH=aq(bI.name);if(!bH){bH=aO();bH.className=&quot;jwblankDivider&quot;}}}if(bI.className){bH.className+=&quot; &quot;+bI.className}return bH}function aF(){if(a5&amp;&amp;a5.length&gt;1){if(by){clearTimeout(by);by=undefined}U.show();aP(&quot;hd&quot;)}}function af(){if(bm&amp;&amp;bm.length&gt;1){if(aX){clearTimeout(aX);aX=undefined}aC.show();aP(&quot;cc&quot;)}}function a3(bH){if(bH&gt;=0&amp;&amp;bH&lt;a5.length){a7.jwSetCurrentQuality(bH);U.hide()}}function ae(bH){if(bH&gt;=0&amp;&amp;bH&lt;bm.length){a7.jwSetCurrentCaptions(bH);aC.hide()}}function aJ(){L(&quot;cc&quot;)}function av(bH){var bJ=aO(),bK=bH+(bH==&quot;time&quot;?&quot;Slider&quot;:&quot;&quot;),bQ=bK+&quot;Cap&quot;,bM=bH==&quot;volume&quot;,bL=bM?&quot;Top&quot;:&quot;Left&quot;,bS=bM?&quot;Bottom&quot;:&quot;Right&quot;,bO=aq(bQ+bL,B,u,u,bM),bP=aq(bQ+bS,B,u,u,bM),bI=a9(bH,bM,bL,bS),bT=aI(bQ+bL),bR=aI(bQ+bL),bN=aI(bH+&quot;SliderRail&quot;);bJ.className=&quot;jwslider jw&quot;+bH;if(bO){a1(bJ,bO)}a1(bJ,bI);if(bP){if(bM){bP.className+=&quot; jwcapBottom&quot;}a1(bJ,bP)}t(aU(&quot;.jw&quot;+bH+&quot; .jwrail&quot;),{left:bM?E:bT.width,right:bM?E:bR.width,top:bM?bT.height:E,bottom:bM?bR.height:E,width:bM?o:E,height:bM?&quot;auto&quot;:E});aw[bH]=bJ;bJ.vertical=bM;if(bH==&quot;time&quot;){bj=new m.overlay(aM+&quot;_timetooltip&quot;,Y);ap=br(&quot;div&quot;);ap.className=&quot;jwoverlaytext&quot;;bj.setContents(ap);aB=bI;Q(0);a1(bI,bj.element());bv(bJ);au(0);at(0)}else{if(bH==&quot;volume&quot;){ac(bJ,bM,bL,bS)}}return bJ}function a9(bI,bN,bM,bW){var bJ=aO(),bP=[&quot;Rail&quot;,&quot;Buffer&quot;,&quot;Progress&quot;],bT;bJ.className=&quot;jwrail jwsmooth&quot;;for(var bR=0;bR&lt;bP.length;bR++){var bL=(bI==&quot;time&quot;?&quot;Slider&quot;:&quot;&quot;),bS=bI+bL+bP[bR],bQ=aq(bS,B,!bN,(bI==&quot;volume&quot;)),bO=aq(bS+&quot;Cap&quot;+bM,B,u,u,bN),bU=aq(bS+&quot;Cap&quot;+bW,B,u,u,bN),bX=aI(bS+&quot;Cap&quot;+bM),bV=aI(bS+&quot;Cap&quot;+bW);if(bQ){var bK=aO();bK.className=&quot;jwrailgroup &quot;+bP[bR];if(bO){a1(bK,bO)}a1(bK,bQ);if(bU){a1(bK,bU);bU.className+=&quot; jwcap&quot;+(bN?&quot;Bottom&quot;:&quot;Right&quot;)}t(aU(&quot;.jwrailgroup.&quot;+bP[bR]),{&quot;min-width&quot;:(bN?E:bX.width+bV.width)});bK.capSize=bN?bX.height+bV.height:bX.width+bV.width;t(aU(&quot;.&quot;+bQ.className),{left:bN?E:bX.width,right:bN?E:bV.width,top:bN?bX.height:E,bottom:bN?bV.height:E,height:bN?&quot;auto&quot;:E});if(bR==2){bT=bK}aw[bS]=bK;a1(bJ,bK)}}var bH=aq(bI+bL+&quot;Thumb&quot;,B,u,u,bN);if(bH){t(aU(&quot;.&quot;+bH.className),{opacity:bI==&quot;time&quot;?0:1,&quot;margin-top&quot;:bN?bH.skin.height/-2:E});bH.className+=&quot; jwthumb&quot;;a1(bN&amp;&amp;bT?bT:bJ,bH)}bJ.addEventListener(&quot;mousedown&quot;,a4(bI),u);if(bI==&quot;time&quot;){bJ.addEventListener(&quot;mousemove&quot;,bd,u);bJ.addEventListener(&quot;mouseout&quot;,ab,u)}aw[bI+&quot;Rail&quot;]=bJ;return bJ}function a2(){var bH=a7.jwGetState();return(bH==g.IDLE)}function aE(bH){bH.preventDefault();f.onselectstart=function(){return u}}function a4(bH){return(function(bI){if(bI.button!=0){return}aw[bH+&quot;Rail&quot;].className=&quot;jwrail&quot;;if(bH==&quot;time&quot;){if(!a2()){a7.jwSeekDrag(j);aV=bH}}else{aV=bH}})}function T(bH){var bJ=(new Date()).getTime();if(bJ-W&gt;50){aN(bH);W=bJ}if(!aV||bH.button!=0){return}var bL=aw[aV].getElementsByClassName(&quot;jwrail&quot;)[0],bM=z.bounds(bL),bI=aV,bK=aw[bI].vertical?(bM.bottom-bH.pageY)/bM.height:(bH.pageX-bM.left)/bM.width;if(bH.type==&quot;mouseup&quot;){if(bI==&quot;time&quot;){a7.jwSeekDrag(u)}aw[bI+&quot;Rail&quot;].className=&quot;jwrail jwsmooth&quot;;aV=B;bD[bI](bK);f.onselectstart=null}else{if(aV==&quot;time&quot;){au(bK)}else{H(bK)}if(bJ-aY&gt;500){aY=bJ;bD[aV](bK)}}return false}function bd(bH){if(bj&amp;&amp;bA&amp;&amp;!a6){bj.show()}}function ab(bH){if(bj){bj.hide()}}function aN(bI){Z=z.bounds(aB);if(!Z||Z.width==0){return}var bJ=bj.element(),bH=(bI.pageX-Z.left)-y.pageXOffset;if(bH&gt;=0&amp;&amp;bH&lt;=Z.width){bJ.style.left=Math.round(bH)+&quot;px&quot;;Q(bA*bH/Z.width)}}function Q(bH){ap.innerHTML=z.timeFormat(bH)}function bv(bH){if(aw.timeSliderThumb){t(aU(&quot;.jwtimeSliderThumb&quot;),{&quot;margin-left&quot;:(aI(&quot;timeSliderThumb&quot;).width/-2)})}at(0);au(0)}function ac(bJ,bH,bL,bI){var bK=&quot;volume&quot;;t(aU(&quot;.jwvolume&quot;),{width:aI(bK+&quot;Rail&quot;).width+(bH?0:aI(bK+&quot;Cap&quot;+bL).width+aI(bK+&quot;Cap&quot;+bI).width),height:bH?(aI(bK+&quot;Cap&quot;+bL).height+aI(bK+&quot;Rail&quot;).height+aI(bK+&quot;RailCap&quot;+bL).height+aI(bK+&quot;RailCap&quot;+bI).height+aI(bK+&quot;Cap&quot;+bI).height):E});if(bH){bJ.className+=&quot; jwvertical&quot;}}var S={};function bg(){G(&quot;left&quot;);G(&quot;center&quot;);G(&quot;right&quot;);a1(bq,S.left);a1(bq,S.center);a1(bq,S.right);bl();t(aU(&quot;.jwright&quot;),{right:aI(&quot;capRight&quot;).width})}function bl(){if(aw.hd){U=new m.menu(&quot;hd&quot;,aM+&quot;_hd&quot;,Y,a3);bw(U,aw.hd,aF,K);O.hd=U}if(aw.cc){aC=new m.menu(&quot;cc&quot;,aM+&quot;_cc&quot;,Y,ae);bw(aC,aw.cc,af,bi);O.cc=aC}if(aw.mute&amp;&amp;aw.volume&amp;&amp;aw.volume.vertical){bk=new m.overlay(aM+&quot;_volumeoverlay&quot;,Y);bk.setContents(aw.volume);bw(bk,aw.mute,V);O.volume=bk}if(aw.fullscreen){M=new m.overlay(aM+&quot;_fullscreenoverlay&quot;,Y);var bH=br(&quot;div&quot;);bH.className=&quot;jwoverlaytext&quot;;bH.innerHTML=&quot;Fullscreen&quot;;M.setContents(bH);bw(M,aw.fullscreen,bp);O.fullscreen=M}}function bi(){aX=setTimeout(aC.hide,500)}function K(){by=setTimeout(U.hide,500)}function bw(bH,bJ,bK,bL){var bI=bH.element();a1(bJ,bI);bJ.addEventListener(&quot;mousemove&quot;,bK,u);if(bL){bJ.addEventListener(&quot;mouseout&quot;,bL,u)}else{bJ.addEventListener(&quot;mouseout&quot;,bH.hide,u)}t(&quot;#&quot;+bI.id,{left:&quot;50%&quot;})}function G(bI){var bH=aO();bH.className=&quot;jwgroup jw&quot;+bI;S[bI]=bH;if(ba[bI]){I(ba[bI],S[bI])}}function I(bK,bH){if(bK&amp;&amp;bK.elements.length&gt;0){for(var bJ=0;bJ&lt;bK.elements.length;bJ++){var bI=aQ(bK.elements[bJ]);if(bI){if(bK.elements[bJ].name==&quot;volume&quot;&amp;&amp;bI.vertical){bk=new m.overlay(aM+&quot;_volumeOverlay&quot;,Y);bk.setContents(bI)}else{a1(bH,bI)}}}}}var aR=function(){clearTimeout(a0);a0=setTimeout(ah.redraw,0)};ah.redraw=function(){bx();var bJ=aI(&quot;capLeft&quot;),bI=aI(&quot;capRight&quot;);t(aU(&quot;.jwgroup.jwcenter&quot;),{left:Math.round(z.parseDimension(S.left.offsetWidth)+bJ.width),right:Math.round(z.parseDimension(S.right.offsetWidth)+bI.width)});var bH=(bq.parentNode.clientWidth&gt;aH.maxwidth),bK=a6?0:aH.margin;t(aU(),{left:bH?&quot;50%&quot;:bK,right:bH?E:bK,&quot;margin-left&quot;:bH?bq.clientWidth/-2:E,width:bH?o:E});aD()};function bo(){if(a7.jwGetPlaylist().length&gt;1&amp;&amp;!bn()){t(aU(&quot;.jwnext&quot;),a);t(aU(&quot;.jwprev&quot;),a);t(aU(&quot;.nextdiv&quot;),a)}else{t(aU(&quot;.jwnext&quot;),w);t(aU(&quot;.jwprev&quot;),w);t(aU(&quot;.nextdiv&quot;),w)}}function aD(){var bJ,bI,bH;aL=z.bounds(bq);for(bI in O){bH=O[bI];bH.offsetX(0);bJ=z.bounds(bH.element());if(bJ.right&gt;aL.right){bH.offsetX(aL.right-bJ.right)}else{if(bJ.left&lt;aL.left){bH.offsetX(aL.left-bJ.left)}}}}ah.audioMode=function(bH){if(bH!=a6){a6=bH;t(aU(&quot;.jwfullscreen&quot;),{display:bH?b:E});t(aU(&quot;.jwhd&quot;),{display:bH?b:E});t(aU(&quot;.jwcc&quot;),{display:bH?b:E});aR()}};ah.element=function(){return bq};ah.margin=function(){return parseInt(aH.margin)};function at(bH){bH=Math.min(Math.max(0,bH),1);if(aw.timeSliderBuffer){aw.timeSliderBuffer.style.width=bH*100+&quot;%&quot;;aw.timeSliderBuffer.style.opacity=bH&gt;0?1:0}}function aG(bK,bO){var bI=aw[bK].vertical,bN=bK+(bK==&quot;time&quot;?&quot;Slider&quot;:&quot;&quot;),bM=100*Math.min(Math.max(0,bO),1)+&quot;%&quot;,bJ=aw[bN+&quot;Progress&quot;],bH=aw[bN+&quot;Thumb&quot;],bL=u;if(bJ){if(bI){bJ.style.height=bM;bJ.style.bottom=0;if(bJ.clientHeight&lt;=bJ.capSize){bL=j}}else{bJ.style.width=bM;if(bJ.clientWidth&lt;=bJ.capSize){bL=j}}bJ.style.opacity=((!bL&amp;&amp;bO&gt;0)||aV)?1:0}if(bH){if(bI){bH.style.top=0}else{bH.style.left=bM}}}function H(bH){aG(&quot;volume&quot;,bH)}function au(bH){aG(&quot;time&quot;,bH)}function aI(bH){var bI=Y.getSkinElement(bH.indexOf(&quot;volume&quot;)==0?&quot;tooltip&quot;:&quot;controlbar&quot;,bH);if(bI){return bI}else{return{width:0,height:0,src:&quot;&quot;,image:E,ready:u}}}function a1(bH,bI){bH.appendChild(bI)}ah.show=function(){ah.visible=true;bq.style.opacity=1};ah.hide=function(){ah.visible=false;bq.style.opacity=0};be()};t(D,{position:l,opacity:0});t(D+&quot; span&quot;,{height:o});z.dragStyle(D+&quot; span&quot;,b);t(D+&quot; .jwgroup&quot;,{display:A});t(D+&quot; span, &quot;+D+&quot; .jwgroup button,&quot;+D+&quot; .jwleft&quot;,{position:k,&quot;float&quot;:e});t(D+&quot; .jwright&quot;,{position:l});t(D+&quot; .jwcenter&quot;,{position:l});t(D+&quot; buttoncontainer,&quot;+D+&quot; button&quot;,{display:p,height:o,border:b,cursor:&quot;pointer&quot;});t(D+&quot; .jwcapRight,&quot;+D+&quot; .jwtimeSliderCapRight,&quot;+D+&quot; .jwvolumeCapRight&quot;,{right:0,position:l});t(D+&quot; .jwcapBottom&quot;,{bottom:0,position:l});t(D+&quot; .jwtime&quot;,{position:l,height:o,width:o,left:0});t(D+&quot; .jwthumb&quot;,{position:l,height:o,cursor:&quot;pointer&quot;});t(D+&quot; .jwrail&quot;,{position:l,cursor:&quot;pointer&quot;});t(D+&quot; .jwrailgroup&quot;,{position:l,width:o});t(D+&quot; .jwrailgroup span&quot;,{position:l});t(D+&quot; .jwdivider+.jwdivider&quot;,{display:b});t(D+&quot; .jwtext&quot;,{padding:&quot;0 5px&quot;,&quot;text-align&quot;:&quot;center&quot;});t(D+&quot; .jwoverlaytext&quot;,{padding:3});t(D+&quot; .jwvertical *&quot;,{display:r,});C(D,x);C(D+&quot; button&quot;,x);C(D+&quot; .jwtime .jwsmooth span&quot;,x+&quot;, width .15s linear, left .15s linear&quot;);C(D+&quot; .jwtoggling&quot;,b)})(jwplayer);(function(d){var c=d.html5,a=d.utils,e=d.events,b=e.state;c.controller=function(j,k){var o=j,l=k,s=j.getVideo(),z=this,L=new e.eventdispatcher(o.id,o.config.debug),u=false,p=-1,D,M,g,B=[];a.extend(this,L);function Q(){o.addEventListener(e.JWPLAYER_MEDIA_BUFFER_FULL,t);o.addEventListener(e.JWPLAYER_MEDIA_COMPLETE,function(U){setTimeout(G,25)})}function v(U){if(!u){u=true;l.completeSetup();L.sendEvent(U.type,U);if(d.utils.exists(window.jwplayer.playerReady)){d.playerReady(U)}o.addGlobalListener(q);l.addGlobalListener(q);L.sendEvent(d.events.JWPLAYER_PLAYLIST_LOADED,{playlist:o.playlist});L.sendEvent(d.events.JWPLAYER_PLAYLIST_ITEM,{index:o.item});O();if(o.autostart&amp;&amp;!a.isMobile()){H()}while(B.length&gt;0){var V=B.shift();F(V.method,V.arguments)}}}function q(U){L.sendEvent(U.type,U)}function t(U){s.play()}function O(U){A();switch(a.typeOf(U)){case&quot;string&quot;:S(U);break;case&quot;object&quot;:case&quot;array&quot;:o.setPlaylist(new d.playlist(U));break;case&quot;number&quot;:o.setItem(U);break}}function S(V){var U=new c.playlistloader();U.addEventListener(e.JWPLAYER_PLAYLIST_LOADED,function(W){O(W.playlist)});U.addEventListener(e.JWPLAYER_ERROR,function(W){O([]);W.message=&quot;Could not load playlist: &quot;+W.message;q(W)});U.load(V)}function H(V){if(!a.exists(V)){V=true}if(!V){return h()}try{if(p&gt;=0){O(p);p=-1}M=H;if(!D){D=true;L.sendEvent(e.JWPLAYER_MEDIA_BEFOREPLAY);D=false;if(g){g=false;M=null;return}}if(f()){if(o.playlist.length==0){return false}s.load(o.playlist[o.item])}else{if(o.state==b.PAUSED){s.play()}}return true}catch(U){L.sendEvent(e.JWPLAYER_ERROR,U);M=null}return false}function A(){M=null;try{if(!f()){s.stop()}if(D){g=true}return true}catch(U){L.sendEvent(e.JWPLAYER_ERROR,U)}return false}function h(V){if(!a.exists(V)){V=true}if(!V){return H()}try{switch(o.state){case b.PLAYING:case b.BUFFERING:s.pause();break;default:if(D){g=true}}return true}catch(U){L.sendEvent(e.JWPLAYER_ERROR,U)}return false;if(o.state==b.PLAYING||o.state==b.BUFFERING){s.pause()}}function f(){return(o.state==b.IDLE)}function C(U){if(o.state!=b.PLAYING){H(true)}s.seek(U)}function x(U){l.fullscreen(U)}function r(U){o.stretching=U;l.resize()}function I(U){O(U);H()}function J(){I(o.item-1)}function m(){I(o.item+1)}function G(){if(!f()){return}M=G;if(o.repeat){m()}else{if(o.item==o.playlist.length-1){p=0;A();setTimeout(function(){L.sendEvent(e.JWPLAYER_PLAYLIST_COMPLETE)},0)}else{m()}}}function y(U){s.setCurrentQuality(U)}function R(){if(s){return s.getCurrentQuality()}else{return -1}}function P(){if(s){return s.getQualityLevels()}else{return null}}function T(U){l.setCurrentCaptions(U)}function K(){return l.getCurrentCaptions()}function E(){return l.getCaptionsList()}function w(){try{return o.getVideo().detachMedia()}catch(U){return null}}function n(){try{var U=o.getVideo().attachMedia();if(typeof M==&quot;function&quot;){M()}}catch(V){return null}}function N(U){return function(){if(u){F(U,arguments)}else{B.push({method:U,arguments:arguments})}}}function F(W,V){var U=[];for(i=0;i&lt;V.length;i++){U.push(V[i])}W.apply(this,U)}this.play=N(H);this.pause=N(h);this.seek=N(C);this.stop=N(A);this.load=N(O);this.next=N(m);this.prev=N(J);this.item=N(I);this.setVolume=N(o.setVolume);this.setMute=N(o.setMute);this.setFullscreen=N(x);this.setStretching=N(r);this.detachMedia=w;this.attachMedia=n;this.setCurrentQuality=N(y);this.getCurrentQuality=R;this.getQualityLevels=P;this.setCurrentCaptions=N(T);this.getCurrentCaptions=K;this.getCaptionsList=E;this.playerReady=v;Q()}})(jwplayer);(function(a){a.html5.defaultskin=function(){this.text=&#39;&lt;?xml version=&quot;1.0&quot; ?&gt;&lt;skin author=&quot;LongTail Video&quot; name=&quot;Six&quot; version=&quot;2.0&quot; target=&quot;6.0&quot;&gt;&lt;components&gt;&lt;component name=&quot;controlbar&quot;&gt;&lt;settings&gt;&lt;setting name=&quot;margin&quot; value=&quot;8&quot;/&gt;&lt;setting name=&quot;fontcolor&quot; value=&quot;eeeeee&quot;/&gt;&lt;setting name=&quot;fontsize&quot; value=&quot;11&quot;/&gt;&lt;setting name=&quot;fontweight&quot; value=&quot;bold&quot;/&gt;&lt;setting name=&quot;maxwidth&quot; value=&quot;800&quot;/&gt;&lt;/settings&gt;&lt;elements&gt;&lt;element name=&quot;background&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAaCAIAAAD5ZqGGAAAAJklEQVR42mNKSUlhevToEdPXr1+Z/v37RxH+//8/htjv379BZgMA4j5LOzqaqAsAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;capLeft&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAaCAYAAAB/75arAAAAh0lEQVR42t2RywnDMAxAhSbJRukGPtgDdJSO0k7U4IOPBhuM8b9SIAG3p0JPFTwETxJICIFCSrkqpZ7EYFAIsbbW7s65RWsNDJK4ee/BGAMhhB2stS7WWui9n7CEGOMsaXwSZ+d/yR+cOcaY+HL8vcByyzl/7HllyX8qpexgSulBhQvl7XjxCydafIt3Z4BrAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;capRight&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAaCAYAAAB/75arAAAAjUlEQVR42tWRywnDMAxAhSbJRukGPtgDdJSO0k7U4INPvthgjP+VSlsSkkvpqYKH4EnCFkKl1Hhxl1LOQIFaa2Ccc1Nr7SqEmDGEAIwxBrz3QIUL9t7hjbUWaq3TRqaUWMJGMjS+l4edfy2/XHOMAWt+eJ3FTuacWS5YSgEmxviU9M/z58R0tIXEifLtATSUfIsSwhegAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;divider&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAaCAYAAAB2BDbRAAAAEElEQVR42mP4//8/A8NAEgDiqk2zfDlcXgAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;playButton&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAdUlEQVR42u2TsQ3AIAwE2YARMkJGyCiMwiiMwgjUFMAIjOC8lMJdiIjd+aSrr3i9MwzjHXoYMOgFmAIvvQCT4aEXYNLvEK2ZMEKvFODQVqC1Rl/sve8Faq20cMIIvUYgQR5ZMJDh6RixQIF8NMHAgMEZhrHNDU+1T3s3o0CaAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;playButtonOver&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAABhUlEQVR42uXVzUoCYRTGcXNGR3HSDPtASyIhrIjaFJlBRBRUdAUGQQurdVfSrl2LuhEvYxR1IYroRhCEWU1/4R2Yxcz4MUlQB34bGc6D58y8r+/vl2EYczNpKvitzN9/orEEGUEoQhAyJDNs2gAJCiKIYVGIQUUIAWvQNM2jWMEGtoRNpJBAFOGJgsRDAahYRRbHuMAVznGEHaSxZBNkvyPLQhXEkUEew+riE88o4AYn2BVBCcxDgWz+G6fxhLGMPdzBWh184RUPuEUOWaSwgBBkpwAZESRxiALsqoV3EXSPSxwgLUIUc1xOAWvI4RFupeENRVxjH0moCMBvF6BiHXkUMap0lPCCM2QQh2LuwingFE8Ytwa4wTYSCEEaGVCtVo1x1Gq1CQPEiDRNM9yUy2W92WyWdF13HJHrkt2aNxoNbTAYuC555Gtq17her7f6/f7HmK+p+4dmbcysO71ez8OHZnNUDBtXKpVuu932clTM/rCb/XHt/cL5/SvT+6XvKcz3r+sbpPMfjCOvfIMAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;pauseButton&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAN0lEQVR42u3NoQ0AMAwDwe6/YYBncWlUyQFBBX+SickfADM/0k+AQCbJffHfqir3hZ/ADwEAowtQ1mmQzb8rQgAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;pauseButtonOver&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAABdUlEQVR42t2WzWrCQBSFq1FSaSjaFi1iF6UFtdBdF6WhC0Hoym3BlSAu+wbddSF9xfyTJ7k9gRMJuY2Oi2w88BG5zLlHZiYzOTttiUijyP768Y2bxCKVv0nD+B/T2AY2OAcdPnOKNZtjrdx/KMCi6QJ0wTW44fOKFGtdjrXzEJPml2AA7sEEPIExeCRj1iYcM6CnOoTz2AYOuAVT8Arm4APMwDuZsTbnmCk9Dns0qxbVBj3wAFzR+iRlufT02IOLrqenA/rgGSxE64uUtaCnzx7WfwEtLtYQvIClaH2Tspb0DNmjtS9gxHldidYPKWtFz+hQgAPuwBtYi9aWlLXOPPQ6JgEu2IjWLylrQ89xAVEUSRzHkiSJpGm6C8jqBVSA8RR5nie+70sQBHmjbUZWL6CmyHiRVQAXWQfoRTbapiqA21QH6G1q9KJl5jwkDMPdi6YCzF40fVSoAB4VKqDiqKj1sKv9uK71wqn9yqzt0q/vs+Wk9QeSkdKwXIKzCgAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;prevButton&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAAAfUlEQVR42u2MwQnAIAxFu4EjOIIjOFJH6EiCF8fw7BQZwf5AegkU2tje8uGR5Afe5vH8mTHGZG5+EXSzSPoMCEyzCPd+9SYRZgCFb7MIJNB5XxURT7OotTYFkql5Jqq1TiGBzrvinUj2AMqSSHXHikj3GZBVpH8R9M3j+Tgn8lcGnlSSd08AAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;prevButtonOver&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAABhUlEQVR42uXUz0oCURTH8VKz/BNFmZJ/iMAoEmohlRRI7Yp2Qa0igyJc9Qot2vUGbnwB3yJXPYKaCi5m62LQzSymr3KE09hAi1nVgQ93hnv4wZ259878o7Jte/YXfADPcAvwIeDgFwHMKYFJoDPILw0hREQYCyKMKBZlDCEIvzMkiAhWEEdCxlURRwoZJBGTwOA4SC0nLJMb2MGujFlsIYc8DrCPrIRHZtR3mccSMtI0qTMUcYoLXKGMTxxiE8t6WSHEsI2iCirhDg94RgVDmTtHDmvjILWsBPZwqYJe8Io3vEPXDfJY10ERJGXiWjVXUYMBZ5VQQMoZlMIRblVzHSZ+qkccI62DokijgHvVbMGtnnCCjGtQu922R7rdriXPU3SQ69IajYY9MhgM6p1Ox5R3zbE0l4+tmquWZdV6vZ7hDNIf2/X3T5r17zcM40MH6d/vuiGleWpD9vv9SrPZHDLn2JAuR0QFTR0R0zTLrVbr2xHx7NB6do14drF5dtV6c/n/7foCpva8IJ04vWUAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;nextButton&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAAAdklEQVR42u3OwQnAIAyF4WzgCB3BERypI3QkwYtjeHaKjGBfIeClFmvaWx58KAg/ks329WqtBbbBW7vMhhowBH2o2/WhLoJTh0QBrw4JfhXKObcBlnMulFJqNwp4uS+HIjjCNKGDZKshhkCYJlRge/ot2Ww/7gSJGQaejWvrvwAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;nextButtonOver&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAcCAYAAABsxO8nAAABjElEQVR42uXUPUvDQBwGcNvUatOK4kuKfUEERVGwg/iCguimuAk6iQqKOPkVHLr5DVz8An4LO/kR2jQtZMjaIbRLhvOpPOHOJMahnfQPP5IcyXO5S+5G/ngJIRKUpMRvwiEyIAWjPl5rlApIhgJ5YxoykIMJHnUYJx2ylGFHWjAozQdnoQBlKIIBM2RAnsdpBqa/hbHRgCWowBZswjoss30V1nhcYKe6P0w/aAoWYRua8ABncAKHcABHQlaFbz0JY/589YPm2Psxb+zBCzzCLVzBtWAxeIVvlQHND5rnUC5ArXd4hio8Ke2nsAF5OTwEcWJ32WuwHHiDV6XtnB0XIKsGlWAP7iCqXKgp15ewA8VgUBn24R5+Kk85v+EISpCLDLIsS0Rpt9sez+OC5NDq9boIarVabrfbrfE6bmhysoMhtm07nud9TTbb4iZbfn41xHGcD/Xzsz3u88sfsn9jo9HodTqd0A/JoLgfUi4R0zSbrutGLhEGxS2RwRftMLeRwTe2oW21g2/+/6c+AdO5vCABA1zBAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;elapsedBackground&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAaCAYAAAB2BDbRAAAAEElEQVR42mP4//8/A8NAEgDiqk2zfDlcXgAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;timeSliderCapLeft&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAcCAYAAABCgc61AAAAD0lEQVQoFWNgGAWjYGgCAAK8AAEb3eOQAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;timeSliderCapRight&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAcCAYAAABCgc61AAAAD0lEQVQoFWNgGAWjYGgCAAK8AAEb3eOQAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;timeSliderRail&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAALElEQVQY02NkQAOMg1aAmZn5P4oALy8vqoCYmBiqgIKCAqqAmpoaxQJDJsQA+54Krz/ExkoAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;timeSliderRailCapLeft&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAWklEQVR42tWLsQlAIQwFBcVKGyEGK61cJ/tXGeVptPjwN/DgQnIQ9xYxRgkhqPceLqUkW5g5Z7g91BYiQq31BDAzxhjmDb13zDnN+/IP0lr7glFKkX3oCc+wAHpnIpi5hlqoAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;timeSliderRailCapRight&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAVklEQVR42tXJMQ4AIQhEURKMFZZCrLDyOty/4ijsYuJWewEn+c0buGeIGKUUr7XahtZaENHJgJmj9x7vkTnMOSMTkY2w1opMVX/BPxhjJNgBFxGDq/YAy/oipxG/oRoAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;timeSliderBuffer&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAE0lEQVQYV2NgGErgPxoeKIGhAQB1/x/hLROY4wAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;timeSliderBufferCapLeft&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAJ0lEQVQYlWNgGGrAH4jvA/F/GOc/EobLwAX+ExTA0IJhKIa1QwMAAIX5GqOIS3lSAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;timeSliderBufferCapRight&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAJ0lEQVQY02NgGErgPxDfB2J/ZAEY9kcXuI8u8J+gwH2chqJYOzQAALXhGqOFxXzUAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;timeSliderProgress&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAALUlEQVQYV2NgGCqA8T8QIAuwoPEZWD58+IAq8Pr1a1IF3r59iyrw9+9fhqEJABv9F+gP7YohAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;timeSliderProgressCapLeft&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAASklEQVR42tXDQQ0AIAwDwDqcPhLQgAlM8JqDORilnyVY4JLDX0iaOgWZaeccVkSEKyv23nxjrcU35pyurBhjWO+dFZDWmqkr8Y0Lr65i67XRzKcAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;timeSliderProgressCapRight&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAcCAYAAABGdB6IAAAAS0lEQVQY09XDQQ0AIRAEwXa4+iYBDZjABC8c4ADmHheStUAlBc/wb9oOAM45vvfewVrL6WSM4Zzeu3Naa04npRTftdZAkiVNScFTPhkFYuvY2zeUAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;timeSliderThumb&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAcCAYAAABYvS47AAAAwElEQVR42tWTPQrCQBCF84OsYJCIYEQrsZAU6QKx9xheyG4L6zTZs3iInGZ9Tx4iAWHaDHwwvPlgyWY2mVvFGNNf/gmZyEUm0q+kwQI4sBROWf6R2ShcgRJsRanM0UnUrEEFTuBC1FeaOYoF2IMaXMGNqK81KyhuwDmEcB/H8RVV7JlxRofiDjTe+0eclLKGDsUDaPu+91NRWUuH4hF0wzA8p6Kyjo5ZNB9t/hjz9Zgv3PwLzUthXjPT4hqewrzqDfMnQ2tu8Pr1AAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;durationBackground&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAaCAYAAAB2BDbRAAAAEElEQVR42mP4//8/A8NAEgDiqk2zfDlcXgAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;hdButton&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAcCAMAAACu5JSlAAAAZlBMVEUAAACysrLZ2dkmJiYuLi4xMTE3Nzc8PDxAQEBJSUlRUVFSUlJaWlpdXV1jY2NpaWlsbGx0dHR3d3d4eHh9fX2KioqPj4+SkpKVlZWXl5ehoaGpqamsrKyysrK3t7fCwsLNzc3Z2dkN+/dcAAAAA3RSTlMAf3+Sa81KAAAAh0lEQVQoU+3J0RpCQBCA0dW/i02KpEIzzPu/ZJc+7CM4t8e5k3PuYgmX9VNttv2W2iww9gDhe/iK3mZYHhRVIBwe+l9PYQWjzbB/BYB6gdl096ra4WP0PD/kqh25qq4vIjfuIvBuuMrkaURk8yUvGUAiefSU0/5hkJZSPECcZP8J62epztzpDzcuFrDsGN7pAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;hdButtonOver&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAcCAYAAACZOmSXAAACFUlEQVR42u2WsWoCQRCGE42I5AikkSBaGSwsAiIpQi4BK0vF+qwEjb1gaWMlaGfvA5xYWvgCNraChY0+gU+wmR3+DcPGC0lQrnHg43bvbv5/d25v764uYYdS6voc/MY0AqLEzYmICt3roJlGiRgRJxLELXD+g8hPQDPGHnIAwjiOpHsiSaSINMj8CeRBIwlNBx7RY8Z3xAORJZ6IZ+KFeCXcP/KK3GdoZbU2POLGPIJyOLiYJ96ICuERDaJJtIiPX9JCTgMaFWjm4eHIBRZHWR6Jd8JXpw8f2o/aS5Y8QSRRnqo6X1ThkTTmN1iRKTwfz87o9/sql8updrutTBSLRT63WCzUZDLhtoCvT6dTW8qDR8o2T2OBNL5leJ4WZBMd+/3+y+RwOKhut8vtUqnE92JgfLSiAY+0NHeIDFZo085gI5gvl0s+GjMKPpoq2IOzogmPzDFzl1eriPV6zSI2eAw8c/TZ1M6RAW33R/PtdqsMo9GIRQqFgqrVagy1+dxwOFSz2YzbrutaOeIckOaBZd9sNgro2bFQp9Mx575m5fu+6vV63K7X63xttVqZwfE1qSXLHrjgZEK5XGah8XjM/fl8bsx1nyuBWcqq6DweiNSSCy7wVZMJMNKm3B8MBkac+zCT8CBgLLFetYBNBjefHLnJBG6vu93OP7Wx1pTba6gfllA/qaH+TIT6GxXaD2Q4v86XoPgE1h55oNE1QD4AAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;ccButton&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAMAAACqEUSYAAAAXVBMVEUAAACysrLZ2dkmJiYuLi4xMTFAQEBHR0dJSUlKSkpRUVFSUlJaWlpdXV1jY2N0dHR9fX1/f3+Pj4+SkpKVlZWXl5ehoaGpqamsrKytra2ysrK3t7fCwsLNzc3Z2dky1qB2AAAAA3RSTlMAf3+Sa81KAAAAe0lEQVR42uXNQRKCMBAAQWCCIgGCGEU3sv9/JpXykCLxB8y1D1OdsEaLmqT6p6M6wKn6FuyWaUQL9zdcW2yuLV49dmTUL2S6gcYsr+IbwgdC7MYj/EoqIoZFHF1PL08QkYNO0MG8wMUw5LoOwCQyG+jWTMuS1iXW1SnbAaDLE32SOX+lAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;ccButtonOver&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAB8UlEQVR42uWWsWoCQRCGEzUcEhFsQpCzUiwsBBGLoElrp0HbsxI09j6ClaXgW5xYWvgCNhaWFjb6BD7BZmb5HWSXXAw5rnHg43bd3f/fG+f27uE+Qyn1GCa3mMVAnEj8k7jowdwyxKQnwiGSxDNI/Qmsg4YDzbh15/jRwaIM8UJkCRfkbsQFWWhkoOmwh2nqEGnilcgTZaJGvBF1onEjdaypQSMPzbRlzLvBYIl4J9qER/SJATEkvn5hiLl9rG1DqwTtFFId06ZIQ4H4IHwVXvjQLMDDkcJC/svEpwo5oFmGR1JSjD++ptNixGQyUcViUeD+JRaLhapWqzLmeZ46n8+mhAftLKo6cTF1UQB921AEpT2bzdRms5F+q9Vic5lnRB/armmaI+ooBAkI6TvCnYnwaDTitr5ynE4n2YQRA9aGR8o0baAKOXSaRMQOufP1eq2CApqNQNPD4aCY3W4nptS36Ha7emy5XHL/R4JNkd79fq8uVCoVLez7vu5Pp1Pd73Q6qtfrcZuvemy1WskmrzQC0yuFdL1gPB5rERhJez6f80ak32w29QbxHxumdiFZj8z1gu12KwUD9EYwzuYwk43xGsPUfmSswwGTwyLwcJBj8Hg8+mEZklbgMRj9gR/9qy36l3j0nyuRfphF+wl69/ENcVv6gzz3ulwAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;muteButton&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAA30lEQVR42u2UzQmEMBCFtwNLsARLSAkpwVJSwpZgCQEv6skS5iieLCElzL6FJwxCDlllT3nwkb8hXxLQV01Nzc/Z9739l8gBBRE0j94AiBk3oAceJCCPCM2GauY6zh3AsR/vit5AT8zzBbZCoWdNWypQS0YmQM2tekpDkWzbNs1xqRMQwGraMtk8z5rD1k3TJJgLYF2WZfi2oEw2jqPm4HoHhHMOJNCDAxTLnGHIyALXhRLPmnsfOU+dTpkRJooc+/F1N/bpzLjhITxFAp77i1w3440UxALRzQPU1NTk8gF0y3zyjAvd3AAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;muteButtonOver&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAC2UlEQVR42u3WPUwTYRzHcWmBFnqKBYpAHVSQoEB8QTQaiMSILhgDiiFxUBMSlUETnYiDg9GJmDA44OCgo8bF18EFibq5MEBpeUsDIaVAm6P02qTUb5N/k5P2oNg46ZN88tz1yT2//p9e77lt/1u6Fo/Hc9L5GwEmmJGrY4bpz0JlcoOAPFhRCAU2FMAi46YtBa4LyEM+LBKwHSUoh1OUYaeM5yUDtxpSAAVFKJZJd6MGh9GEY6jHXjigpAQaBskySQWlcMpE+3FQJj+DDtxBN9pxCjUogw25yEkJEWbkw4ZiqaBWJm9GK86jEz0YRKKNok9Cm1El11th/i1QF2TBDuxCtYS0oQv3MIObuI+nGMIwIljAQ1xGI5xQINWlBhXBiTqclgtv4xXCUsUTDOADotAwIsce9OIsqmFHPkzJsORvpKACDVLNNfThJ/TtBb7ADRfCEjQm4/3okHkcyaXU3xAW2FEtFW3U3uAbVDn3IQYvQhjGVTSiHIX6MDMK4EA9LsRisbgR2jt8wg/OtbW1NZU+Qu+nX6T/zth1nEBl8q5cH1aGQ+icmpqKG9GHeb1ebWlpSZ2bm4v4fL7A7OzsIn1GYQ7Uod3lcsWN0N6GQqGhyclJNXG+srLic7vdseXlZa/H4wkRnLKMRr9ZFVr8fv8jLh4MBAKv+fbudWEvCfs8Pz/vUVXVRbXaxMRENBgMjiXGV1dX094g6e7GcqmuFVfQiwcszfvx8fGwhPXjGYEf+SxKNRqhI4nj6elpw1vf6A9dgRo0yUWXcINv/piJvRzfRV80Gh1gBb6yAsMERahugc82/FOnC1RQonvYHkELzoXD4S76i+jGLYKeJ6qlolGCtvC4gv5Jr9tGKrEPB9CAoziJNnRqmtaz2YM40+3FCgV2OHT71x7UStXH0ZTJFpNpqEWqtUnFRShFxWabZ1bvHLpd2yrhijB4LcjyXSSLF56sw4WE/HPtFwoiecfnKRGcAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;unmuteButton&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAAk0lEQVR42u2NwQnDMAxFtUFH6AgdISN0hI6UEf4Oxgdvkas9RUZQ/yEBYdChgoZC9eCBLBs/SZLkjxlj3Ol2RehJd6rfDq1UT81eKcwZVCMB9Zw/p7CzfErvXT2ndzB3kAitNfUUQ60V555zLFZKUU/zBscOdo7EFiOcmFLMcQli4y+6Bz4LBx90E3JV8CZJkvwsb8qa9F25tXYIAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;unmuteButtonOver&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAACOUlEQVR42u3WS2sTURjG8ZqJuTSJTW1T26YqrWmN1jt2ISpWTb1ABS3iRkS84WUndlNQFN34Fdy5d+U36MJVQVroKgnmvgqBZBV3Gf8DTyQMzMggRZC+8CNnJsn75CRnzqRvu/6/Mk1zRw8fwBhbEeSDAT92ih+cU7D8dYiahxFFTPoR1HOG+Fxm7h6kRiE1H8Y49iKJEcQRRRghhQegmTuFKkQMBBDBbkwgjVOY0+Mh7McoEhjSa+OIIawehluYgSB2YQ9SOI0MbuEFfuCizs8ijYOYwRSSCo8g0J2hU9AAkmp0AbfxDJ/RhlV3sYgFZPR4GedwApMKDMNvD+v+RlGM4aga3McKvqO3XuKhxt/wFI+xClOBScTU12dfEEEMIqUZudU7vMKajjewrvGqZjiFOAL2MANhJHAENzqdjumE+ojXeMvxJkyxAh/hEqYxiKBT2AiOY6lQKJhOesNqtdpm93y1WvUUlsAsFrPZrOmEeo/lcrm8Zh1XKpUNxuvWuFgsun6N9t/sAM43Go0PzWbzU6vV+sInztvClvHEGpdKpd8LxArinPMCsa9GjGp287iD51ip1+tfc7ncTzV7gJu4igVc8bL07Rf0GGYwhwyWcI9Zvsnn80XG13EGx3AYafzxonYKjOoNE2pyEmcx3263r2nLmu7ZJ4e9b1ew7fQxhY5jUgEp7FPIAPq9bcTut5cQoohjSOKIIKjGhrjeYryEBhWMnnuZ9+buoaJgUcjW/xeRvu36F/ULlStUoyVtQSYAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;fullscreenButton&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAbElEQVR42u2R0QnAIAxEu1lWc5/+ZYKs4TTWjwS0qIFrP+/BkYMLOdCLELKn1tpG5TleYF2yyMUzvCAOZDtwgU85PJGE/+NPyuTJG1Uts/9+sI0+y6GCrtunLHKJHbjAZYcd8x28IJTmhJAtD4gEt9ueDIktAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;fullscreenButtonOver&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAACFUlEQVR42t2W324SURCHhS67VCoFbYhRkbQsaCwVSwgUaZP2yia9Mb6MN41vYfpIfYIm5QIegJfA3yTfSU52c1i98KabfGGYmd+cPX+Gw7On+2w2m5JPUfxfC5dhB8pQKooXvjGCiohFFRJ8EVTwVSHGtxOckSuOsCb2xUsDe0/swl42jiZxg2wr/kK0REf0DOzX4hXIzsVbaPODsH4VUSOxL8biwsD+SCEhOx/vo61Rq5zd1JipdhBkn6k4hmk2iKZDjdhtuj9Awnqm4twTPopf4lKM4BLfo0tCk1IjCQ3QFF0xR+QK/BBXYgxX+PycOdpmaAC3RG1xiui7uMWeic8ww3dLzgZNO7tEoU1OxYhpX7Dmd+KDgT0ldk5umt/k/DGtioZ4y/E7EUMx4JQcQR/fkJwemgY1OKbhAd6wnscU+ESRQ+jhOyGniyY4QFlE4rk4sCKIJyzFaLVa/XaNhT0iNiH30LTUiEJ9UGeqg8ViYRv3TVxjj80PY3zXloM9QFvf1gcN3mRiIr3pvX2u1+ufHMMvMDefn2MatI2iPjgSZyYylsvlg77fiK/umGLfWMzlmQbt3/UBQoc7530IxLf3QeT3AYIZbzbE9w5SfGfknGb6IAr1Qez9XL8XXabdxtc0sNvEuuS20MZFd0LsXThNqOOrQg0fcS6cXPHiKzOB2L8yg3GKG4WXfoBSUfz//W15ss8fvEcYMYnLr+AAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;normalscreenButton&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAbElEQVR42u2Q0QnAMAhEu5kD588JXMNpbIUEpCBpe5+9B4JczF3MQQjpcfeBz+4vxpMe2ULSIF9YjaqWM+hXWRrdA2YZah61Wv2/qGrU6nQkQK6yLmCeCbzFCmk02FxWX/WyYXw1H69mCSEtJ16St50Fqd0HAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;normalscreenButtonOver&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAACDUlEQVR42u2Vy0ojURCGZ9Kmk4A63cYLMhdE28tCECUgxCuzGBDc6AgO7uYizKAP4NKNb6S+g08gSZO8QZ7h+Bd8ScDDIZmsLfhIpc7/V53uPnS/e4uRwjn3vsto2sHiggdrw2iGaT4miiKGEhShBDEU8YSH9Jr3G4yLSZGID+Q9qCXk0rIBhoSaj4kyxlnxUXyBz+ITKKcuDdoEb+9KQrufEHPiXqyLLVETmwDUpEE7h7cYGhBxmQk72xAWR+KY/Bs4akfkG3gSekTebaJYFlWxKLbFDQ2e+P0BvRqabTxVekT+M+gPmBKZ2BWn4tn146czCNa+o83wlkNXUGAxRVx3fvyC11HHk9KjQFtvQIxoSeyIE/Fb/BWX5EK5auQnaJfwxsMMyMSeOKPZVX8IzVUjP0Ob+QP8Y1rhPq6Kg2az6Yw8z12j0XCKf4blVuuum9Y8eCvBY8ritFgTXzudzl273c4VzlBcG93/tmYa05oHb2XQMZ0RK2JfnFujVquVs9M/huVWY+g52hXzDjqmJe7jgqhZI+3wVvkFA04N8gtbI6/hSekRhV4VMS+vee3uAeOeOOSs1w3yQ9Zq0j6aB2/sPwP/ZTeFYUEsc/mZWISM2jKaeTzeyy50FWV2k/LgquQJpNSmySfxeLsPfnAQlzCC1dgAoInxDP9Vg8gAauG1//82I/ZM1DztW4wSL9xQTRdfTNL0AAAAAElFTkSuQmCC&quot;/&gt;&lt;/elements&gt;&lt;/component&gt;&lt;component name=&quot;display&quot;&gt;&lt;settings&gt;&lt;setting name=&quot;bufferinterval&quot; value=&quot;100&quot;/&gt;&lt;setting name=&quot;bufferrotation&quot; value=&quot;45&quot;/&gt;&lt;setting name=&quot;fontcolor&quot; value=&quot;cccccc&quot;/&gt;&lt;setting name=&quot;overcolor&quot; value=&quot;ffffff&quot;/&gt;&lt;setting name=&quot;fontsize&quot; value=&quot;15&quot;/&gt;&lt;setting name=&quot;fontweight&quot; value=&quot;normal&quot;/&gt;&lt;/settings&gt;&lt;elements&gt;&lt;element name=&quot;background&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA8CAIAAAAok0etAAAAJUlEQVR42mNKTU1lunnzJtP///+ZGBgYwDQ6xiVOrhw1zSNRPQBu5Zagca3K1AAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;capLeft&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAA8CAYAAABfESsNAAAAnElEQVR42u2WvQ2DMBCFv8I1M3gjMoTpMwqjkI1S0RnJEhaiuZcFEuyCBCnyqz+9+9XpHMAwDD0wAp4PciGEXtK0risxRvZ9fw+a2ZhzZp5njuTMzC/LQklOEtu21YGSyqCZ1YHfcazR1Tle6FjVnr+q+vz2XJxjW4p2Utr2tFn/OvT5s5b0BHwJdmZ2Bybg0NmllB5d190kHb5cL8J5WhbWZJeBAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;capRight&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAA8CAYAAABfESsNAAAAmklEQVR42mNKTU39jwffB2J/BiBgunnzJgM2/PjxY4bPnz8r/P//f0NKSoo/E5DBgA1//fqV4enTpyDFDP/+/ZvAxEAAvHnzBqRQAaeJMPzz508wTVAhDBOlEGg1LUxkIAIMtBsH0ERigmf4+XpggodGbhxNFKNFymiRMhrXA1Gk0D+uoQH+gIkIRSCrC5gIeOIBkA74+PHjRgDhswBcaL43lQAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;bufferIcon&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAFy0lEQVR42oWXy2sk1xWHv1vvR1erNeqWZ2TFiSQ/ZI2GMBDygsRhTIwZgg3ZeeFV9lnlT8giS/8BhqxCICYJ2TgPhzEhYLJQFgMT2SN79JhoMq1Hq7tVXV3ve7PoktQjd8sHCpq6zVfn8TvnVAkumRLnPzV0LFw8XCwgI2ZITEaJFIqJZlxCneEEAg0bn0Y8176eB2CG19tuhx4DUpRiMtIYw40gooJqGHjMHi5urzt39JZgeHRwb/nBPJRIFOWVHqoRzEDHQKvOTGpxc/uW+zNnzUcQoy9vvx/EbkxKgWS6h0og0DGxcbAxERRIdIKDBfeOszZPgCDmcE2+3n68dMyADJSYFLRx7p2JS0B9a34YCGEMb3aQ+HJGb/kEGIBPQLyUB1joiLXGYx1FwmBSyAIDm2DY2ljVX9WXoXzy8db6f1tSM8V5UkGghwB/t36x0iYfBR2xj3wWKNDQcahvrNo/Mr7joZPcSlYffPT9XTsbnCTE+EDKkPy4FvaK9xaGWZ5XBJ9FHl8A9Sp/NrWtr8Xftl5v0STAFqqhiqx94/TpQC1krZKYHtFm+PsXtz7IP9E7RaLiswxaJGSXQ9Yxh4G+7FHHAmoqE/ELHe+lg6WHX/y6fC1tqqDYHt5bfuAe/9PtFZHMxgviXGTyQthCCNDPNaODoQqi2d6tk6c7eYByw5faboferugY+ZQ+OcshSHIjKp8k6wk+UBAruW+dEjJ01NIhJuqs9XpG1sjUMx4mX+4URXHz6ONPk1c6Sym6ign7w/vrbQYMKBAIFJKcgvzW8aafaWO4bFw6QmlomKOubV/fXHVv21/HlPvx/dbm6i5dIopKFhKFRKJEnefQK0LJHuk40MDAxsGjhp/4O3PdQEo3Wmk3OvQZkFBWQDW6hAJMrmEDIf1xFYJQNjZ+P9iaLwLLDNQLoZORkVSjKqn8U6M/f6kGGgEmkBOOwEIF+FvNf78ys2bXhC6j5PPbO8+fEBGTkI+GwLTZh80i1nkm90nBwOoFGy83f+Dd8IUgFdq1f+Vv9IOclOIrcNoYDiwW2UFqmJtzM2vejRYt1VJNVXvOe3mzXlVVwlQcBGO4ETIAAyNxzZqHjwF4KmEwN3TQERe5m2LmpDuVnsYnColSqCtRV5hG4cT5ICFBVc2QDdyEEoX4Cmg+6Y5Gvtbpb0ZPO5zQEx0RtvsPb3arAa9dCQwvZkxV5xAMskb4ra0N8rUoEE5+cvrZd3fqKQqdEjV9uwGS/UuykWfC9nrBw1bma1pQrHT9mISEjIyC/ErhTBS2gY6NjYODGZob9T23KN3oe4fLAxIyCqSQSlwS0BWtpyEwMbBxP2v87RszC1Zd09J+/+nSzk/axOQUVXEu2m9m+nAwUECBRgl/Xphfqc066Cp1rcauejRYGe1fdY5UijXz0wsc6CzyaAwolBKAQnxU9+e9RkP5CDKEk9345GBlQHHmW9U7cu+aZTwzXi1qz66A0aF27DmBjYsGWHg49Y6HgfmF8buga0KQvd37Zk5pOsXl0kzcKUqq8ccKkKVC/MP7zYI7YxlwlP+qe3fv3YGrlQKyK9++FAo5F+10k/mYUcgxcf/58Ej/4+J803UsBTm+/SG3P38x+o93CTe2U7Tz7BRvdvP/hftdTuhyQq93sP/Dk3u+2/CdgDoz1Jlxm7N/mPllKEpLjOGi8Z1igFBKIClI39n+LcOoNiuITsODH+/OJU9cXbexlQ7Y5NTs0HpN3Xn81wXLrLyM2J8UsqQkaw1+/vAvhx0floZv9MhRqSykHJtEUgJ8kPKoUc8MYMhwQg6FUlACkuLNFA1GAkFoSZJnKsMGCjLivJmNVNHvTevFqmFQlBRkJAwZkpCSk7/VOzg5jUMGRIT04qPuT/uV1KfYuWyEUiO/RrNWAQLxanp370Oas56paVF61L27t55Ne3c9l9u4KXHpVEe/b/6pEVoXwqa8av4Iplr1VaChoVVejzKrrlpd/wdqZ96EzbsuCAAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;errorIcon&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACL0lEQVR42u2T64nCUBCF7SAlpIQtISVYQkrYElKCJaSElHBL8LfPKD7wyUXxgYrOzkCyHC6b3LgasywOfBDuOTNzcklq73rXfygiqjMxk1YsZ38lXIOyq1F1OI/s5VUZsAlBNOMlaDhvVhXOZ7B80D4ztNeV+VNY9VdUzg3VM/5srM9XhXOMb0zleJXxjTqlB7xer8HtdiPAy/KKhl7pLTXc5XJxGc1QggJNIXgOfs24pQU8nU4hQynn89kFjZD0XDyGFpYS7nA4uMfjkYAQddQEQwtRk1lPD7jb7SKGUvb7vWvoTdCbqIkXNCF6arjNZuNtt1sCAtPDZwp09YMe4AyZ+bSAWmvFUILm4Y7Fo0xderQUep5Rq9XKW6/XBAQ/+fi8AZ5GhicwZj1+i4vFIl4ul5QQZ/lYC8AX5Pi+58nsh8LNZjOfoZT5fO7neAPwZgaUGeIB/F+Fm0wmznQ6jRlKyH1b1uvgred5zbmy6+6Ao9EoGI/HBHh5ftF/6SXZdVe44XDoMJqhBFWgxwO/V8CvwK+Z4rfY7/eDOI4JsC4cDAYO4yVYl8lM3CE7C4XrdrsuQym9Xi+qlVQyW3YArrWp3W6HDKV0Oh1usler1fLTHnku0iOzxQ+EtiUfDAHYYOsl5I6+0Oj9yDNHYNSM84KADqOhNyq65K5fX/wP9tpfznrV9kWu7dbtn1bxgCHj1sorfKmwaEDFUMUo21XrCsNpyVD4yl8GflLvetcfqy+dCCa6ODMoXAAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;playIcon&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAArElEQVR42u3YywnAIBBFUTtJaSnFUqzLhVjKZDZmI8HfGx3CPLj7AyKIjoic5pwBDWhAA+oBei5wlxMYClgGh6KBcKgUEAaVBi5DdwGnobuBw9BTwG7oaWATqgX4CdUGrKBagWX3MjCl5DmSKOe8Dowxeo7ABQ5zxGDgC4NdEhCwgmkBfsJOA5uwU8Bu2G7gMGwXcBomDVyGSQFhMDQQDkO+ZuxnwYAGNOAfgQ8LTbXBn1RvGQAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;playIconOver&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACJElEQVR42u2YS0sCURTHNc3sTWEPelMQUQQtKnptIojosWgdFLTIFu2qdZ8i6Cv0BVq3KUi3IqgI4hN0rS5v/xtnahh1Gqd7Z0bowA/EWcyPM/ece+9xMcZcTsbVcoJ6gedul4VhSJBLEW0a3LKFdQVVYh7gBT7QQfjoP48ia5egh4S6QT8YJPjvHuAH7bJEGwpq5PrACJgB88QsGAcBet4pQ1RPsI1eyLM0ChbABtgD+2AXrINFMAWGZIg2ajNKQfDsDYA5sA2ewRt4ANfgDByCLbAEpkWL6gl66CXDYBmcgBf2E1HwCG7BBTiWIaon6KXCGANrlK1XVhtx8ATuZYgaEZwAm+ASvLPGkZAh+psgL5BJWn9X4IP9HkJFjQrugCAIMeMhRLQZQV61YdZ86Ikq7amXGr5XK2mFYCPRI1rbi/QOvjt1UTa/Ja0U1IregXNwAFZpZwpoJe0QVLcn3kdvwCntUrOUST+tSVsFlYjQzsQ3ghXquz2URUcIKvFEa3Kaqlv5zMYFi8ViOJlMMhmUSqW/CxYKhXAsFmMiSafTkXK5LOYTixTMZDLxSqUitkhECEIsUa1W5bSZvwiqxOQ1ajOCdcSkbXVBCIYEiQk/LHwdt/L5/IdVYqYOrBB8t0rM1JE/l8u91msXMsRMXZqy2eyLqsFGqY/ZdmmquXZC6jmVSr1R57fv2un4i3tLjD4cPzxqifGb4weYjh0B/0/5m+QT3Dh1BNFdpj4AAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;replayIcon&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABxUlEQVR42u2XwY3CMBBF0wElpARKcAkpISWkhJRACS5hS3AJnOHAwoEDB2QOHJCQmP2DcrBGycZ2BtiVMtKTEGLe/NixJYq55prrxUVEBjSgBStgu88NMJ8KVXZBPI2XBxaU7wi2AJbyy7LjVeGWwNP08uzSDlcDPzLUCcZ+X79j5RyofumtgNNeSfnO+QG5SfCYIc+kd3LgQKxzpNzT9cqy2VfJ4BPr70iptXpG42JXWcXH4+EBBbhCqdgl3D5JcL/fDSBBpRWQXT3++N253W4NoABfKBc7xYwmuvl6vbaAApx2QHaKGW108+VysYAC1AOyU8yID3g+n1eAAtQDslPMiA94Op1aQAHqAdkpZsQHPB6PDaAA9UPCTjEj/pAcDgcDSJB1zez3e9Pjr3r8Jkm82+08oADe5lSH6Xqt+N4Jd/oObbdbCyhks9mYREcd9D9DskN6gU0OCFEJSODBIsGxEv22c5Ag7/9KJyTBV0K/AzSCLXKLV6vnieuEftkr+RY7khVyGQyqJ74iEp0/TxBVTGKPedX2aj1UC+jPhuTDBEgvpH7AdUJA/4GAw2GAAy2oNQ7KlEt+DWwXxoBFMddc/6x+ACbEv+zn5grUAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;replayIconOver&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAGZklEQVR42rWYTWxUVRiGoTPM0LG20IEypUCKTX9IhCK0iqAVGtQAIUasAyaAWkaJJlZMhigs8CcaEhdSdSNx0bhRFrqQjS66BTFGFiSFgC2/bWkhQIFSZ4pwfW/ynOTkwO3l9yZPAnfO+b53vvOd95zpuLt9PM8bb1EgIhB1iECBPWfcw3psUQiYIOKiUCTEIw4JPoszNmqLfRjCIkYUyYtFqSgT5aJCzIAK3pUxppg5RmzkgQh1KjZRFJEwJSpFrZgnGsQisRgW8W4eYyqZU0qMiXZF70dcRMRYslKqUyMWiCaxUrSI9aJVZKCVdy2MaWJODTFKiRkz1bxXcXGWJyWqRaN4QaTF2yIrOkSn2C8Oii7+3clnWcammdtIrBSx4wEiQ8VNFCV847limVgn2kQ7QvIi7Mkztp2564g1l9gl5ELkHVaOiTPFfLGCpdspjoh7fY4QI0PM+eQosSsZtiFilH4GAVaJd0UH1bivhxgdxFxFjhnkjAVuHARGad4US7CCQL+JfEjSs6IfzoaOV0xiryBXitxRBAb2XZLd1iwyIZUbEHvFJ2KreB+28m6vGAipZIZcNeR2+hGBGGgR5W6kmXcGiBsVv4odYrNIYyfLYaVI89kOxo4GiNxJrkZyF6FlvNt7cfypFjtoC9gQQ2K3yBK4GY+rE1VQx7tmxmSZMxSwcdrIWYuGuOlFu/cSopzAa7EF9xkl0QdiDSdGNfOSogSSvKtmzBrm7A6oZDs5FzAvYXrRXt5ijqQmjLXLjcJSZUnYKGYjpohvHYM475KMaWROlhju00XOJjRIC8vsLG8d/ZO9efNmTngWA/TTOqoymzmFBONqJbhY8FkpYxcxd4cfy4mdQ/xKUWcv8ziCFXLzqBctN27c6Lh+/bpno3d7afpmli7JPPfQdy8ZhYytZu5mP9Zt4nf4udFQxryIEWj6r0Fs0ITOXC7nWeSxjbTpE2u3FYQYv3GH6cxN+7H8mHYOP6efGw30oQRa5lzBMrRqwv7h4WHPMDIychZvM0uQDDma3Crir7SQYvkx7Rx+Tj83GiqMaRuBxv8Wi4wmdA0NDXmGK1eu9GHAy7GRSeZYCrt5O71YLZ4XW/yYdo5r164dwLQXGz8MFKjJBy9cuOCBHyBYYHDV4ggrwnqmWR67RTH77RxXr14NFugu8eXLl/cPDg564Adwltgx09tsDERNFeUkrKIHXxIf+jHtHMoZtMS3bhJ9u86+vj7P0N/fbzbJq+IJxtoHu3ueT0JUragn7tNU7w3xhR/TzqGcQZvkVptRuTtOnTrl2egb+jbzlnhOPIYIU0X7qvYoFZgnll68eHE79vGa2CS2q4V+d+MrZ4DNBBj1iRMncsePH/cMZ86c8Zd5m3iZICmRsHzQvQ0tu3Tp0uea61fob/3/Yy4G3/X29p63YytXoFEHHnUS1HXs2DHPRsuwhz551jqSYoiLIjhFG7xy7ty5PWauRPXo3c+q1J9uXOU6zCHgHnXBlwX51K6jR496NgqWy+fzH+nzF+2bhznaWN5ZYololai/7Pmq5HnF+M+Nq1zfcAwudC8LY1233jt9+vRhN5iW4xBLMcdcMAkWoy+rsKM2je1jXiCq3j84xConJg4RfGFNj46OfuZXzQ44MDDwAwJqxGQRt08LkqwW2zQ3P5a47u7uER1x32vsO2Ipl4oSx2Mdi8Dx2a0btOPalehfBfT96kes5imW0vRg1HGCtJbt27Dq6fTYp7G7RCsGPZM24UYd8KMJ15+DyBY1+9c+3OmeoXpTERW1e5jqb/Q3VJjAXj0a+5UlcFaYQNvLUghp8EXBQqo7zbrNROzjEkPeJCM+gJAxUZ934a/uDi4Y8+8xJJyC6VZChblBW/ZSYAmcyQ7OnDx5shsRoWjsPusAcHowWOQE+7CHIucGTdWxGAlkqd7s6ekZRMCdMMwXqwwT6C63ERoDhHG8gVXBCvOTNUiMv7NlP/16/lBf/6Ij9FNsq15Mt3923tWfel1RDHONfpp4XDt/IzbSpx47JDH7tGl+km196Z/FXN0yYi2eu5DqTXZ+uN/341rUZBIt4GLawg3ldbEei1qNjy5BWB2tUWqf7Q9WIH2IRSWxizmcyU9Cg6jnfRVjyhlfbHrbFfcwRCZo9ClY1XQoF2UImsSmSlD52IOtXPiPpBiJEwF/9TcbLupuOjfu/32eYAv3OqcpAAAAAElFTkSuQmCC&quot;/&gt;&lt;/elements&gt;&lt;/component&gt;&lt;component name=&quot;dock&quot;&gt;&lt;settings&gt;&lt;setting name=&quot;iconalpha&quot; value=&quot;0.75&quot;/&gt;&lt;setting name=&quot;iconalphaactive&quot; value=&quot;0.5&quot;/&gt;&lt;setting name=&quot;iconalphaover&quot; value=&quot;1&quot;/&gt;&lt;setting name=&quot;margin&quot; value=&quot;8&quot;/&gt;&lt;/settings&gt;&lt;elements&gt;&lt;element name=&quot;button&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA80lEQVR42u2WQQqDMBBFQ4pQeoVueiN7BtG9R+lR7IlaAllnIZaCxHR+KWLpou7mCxE+Jm7m8b+TiTXy1HVdim5N0yQNoTYYwGKrqiqnaer6vj865x4aQm0wgMXGGC/yYfTeP4dhiBpCbTCAxQrZKYQwppSMpsAAFgAZJiGy90LbITCAhc8hBneWLs2RMegrMgZ3ZodYIuP8qSnbfpmhln66jO5gpOsyhsh4HaI7qfMs29Qsy5H9iyxfYddMe8r7EFWX5cg2FVkeritO6rtsCoILWgEWONRiY4zZy3unoU9tmNLaEMJVFmeRl48HDaE2GMDyAjEWKwKFLBqcAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;buttonOver&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA80lEQVR42u2WQQqDMBBFQ4pQeoVueiN7BtG9R+lR7IlaAllnIZaCxHR+KWLpou7mCxE+Jm7m8b+TiTXy1HVdim5N0yQNoTYYwGKrqiqnaer6vj865x4aQm0wgMXGGC/yYfTeP4dhiBpCbTCAxQrZKYQwppSMpsAAFgAZJiGy90LbITCAhc8hBneWLs2RMegrMgZ3ZodYIuP8qSnbfpmhln66jO5gpOsyhsh4HaI7qfMs29Qsy5H9iyxfYddMe8r7EFWX5cg2FVkeritO6rtsCoILWgEWONRiY4zZy3unoU9tmNLaEMJVFmeRl48HDaE2GMDyAjEWKwKFLBqcAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;buttonActive&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABD0lEQVR42u2XQQ6CMBREm97BeCnjIQjcxLt4KVckrKuphYIC/jEtKRu3fxaSDGlh0ZeZ/2mxRq66rs+iW9M0bw1hbTCAxVZVdVqW5eq9P7Rte9cQ1gYDWOw8zxd5ELque4QQeg1hbTCAxQrZ0Tn3XNd11BQYwAKgkUmI7DsQyklTYAALn0Nyi4lyVBZciltkDNpFpu3QrqizZcoiLeqi7dUj2xxKFa6q/C3idIiyywgiI3ZIBi9th8BQdhmFdl3GuJepn4fy8eMf2c/IEtBEENnEu9uz1BBvlzFGRvHXwRmZUMU0icpCUUfL4E7pEhwayvOIllLbD3DIY2KMUSvsvDZYrHPuLYM+v9BQgunB8gFJekgEq5c0PwAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;divider&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAEklEQVR42mP4//8/AzJmIF0AAHImL9Fd8LZHAAAAAElFTkSuQmCC&quot;/&gt;&lt;/elements&gt;&lt;/component&gt;&lt;component name=&quot;playlist&quot;&gt;&lt;settings&gt;&lt;setting name=&quot;activecolor&quot; value=&quot;bfbfbf&quot;/&gt;&lt;setting name=&quot;backgroundcolor&quot; value=&quot;262626&quot;/&gt;&lt;setting name=&quot;fontcolor&quot; value=&quot;999999&quot;/&gt;&lt;setting name=&quot;fontsize&quot; value=&quot;11&quot;/&gt;&lt;setting name=&quot;fontweight&quot; value=&quot;normal&quot;/&gt;&lt;setting name=&quot;overcolor&quot; value=&quot;cccccc&quot;/&gt;&lt;setting name=&quot;titlecolor&quot; value=&quot;cccccc&quot;/&gt;&lt;setting name=&quot;titleactivecolor&quot; value=&quot;ffffff&quot;/&gt;&lt;setting name=&quot;titleovercolor&quot; value=&quot;ffffff&quot;/&gt;&lt;setting name=&quot;titlesize&quot; value=&quot;13&quot;/&gt;&lt;setting name=&quot;titleweight&quot; value=&quot;normal&quot;/&gt;&lt;/settings&gt;&lt;elements&gt;&lt;element name=&quot;divider&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAACCAIAAABANcwGAAAAKElEQVR42mNhGPqAmZmZiYkJQsIZuLgsvr6+Q9q3/2Dg79+/yAxcXADiODDtLQ68BAAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;item&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAMElEQVR42u3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAXA2RQAAEB5C4HAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;itemActive&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAkklEQVR42u3QsQkAIAxFQQsHy/4LqYWohYW9IAj34ENIeTkiRvq7vlb3ynHXB/+Wk64CCBAgQIACCBAgQAEECBCgAAIECFAAAQIEKIAAAQIUQIAAAQogQIAABRAgQIACCBAgQAEECBAgQAEECBCgAAIECFAAAQIEKIAAAQIUQIAAAQogQIAABRAgQIACCBAgQJ1NmcoiAdM9H4IAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;itemImage&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAAAAACpLjUBAAAAeklEQVR42mPiJQswMXCSARiYGFjIAEBtZAEmRnJ0MZJrG321jfpt1G+DzW8jMUj2lzMwlO8n2W87PMrLPXaQ7LfOHR4eOzpJ99vLe/deku63eItDhyziSfab5fGFC49bkuy3jIUMDAszRtPkaDYd9duo34aT3/6TARgA1wJNszqw3XsAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;sliderCapBottom&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAKCAYAAACqnE5VAAAAEklEQVQ4EWNgGAWjYBSMAnQAAAQaAAFh133DAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;sliderCapTop&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAKCAYAAACqnE5VAAAAEklEQVQ4EWNgGAWjYBSMAnQAAAQaAAFh133DAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;sliderRail&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAABCAYAAADAW76WAAAAEElEQVR42mNiIA78J4AJAgCXsgf7Men2/QAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;sliderRailCapBottom&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAAJklEQVR42mNgIA78J4CpBu7jseQ+NS3yx2ORPwOVgT+az+6TYgkAKMIaoyp3CGoAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;sliderRailCapTop&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAALElEQVR42mNgIB74A/F9IP4PxfehYlQF/kgWoGOqWnYfj0X3qWnRfwKYIAAAPu0ao3yGmCgAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;sliderThumb&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAABCAYAAADAW76WAAAAMElEQVR42mP+//8/Q0NDA16sqqr6Pycnp6G0tLShqqqqoba2tgEEGhsbG6CgkZAZAEhcK/uBtK2eAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;sliderThumbCapBottom&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAAUElEQVR42q3NoREAIQwEwHSYJjOo1IBIDfEx+EgEDMfLVwyCbWDphoig1gp3R2sNmYneO+acWGuBXimlxCEKekVV+RAxvWRm/EXxi2KMcZ1sxLJpnEUZrv0AAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;sliderThumbCapTop&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAAUklEQVR42q3NoREAIQwFUTpMk0wUNSBSAz4mPhIBk8/JUwwiW8C+8pqI0BhDzQzujjmnrrWoZNZao947Pgg/CHtvREQexsx6gTQNqrXiAuHlcQDl9mmceNYnwwAAAABJRU5ErkJggg==&quot;/&gt;&lt;/elements&gt;&lt;/component&gt;&lt;component name=&quot;tooltip&quot;&gt;&lt;settings&gt;&lt;setting name=&quot;fontcase&quot; value=&quot;normal&quot;/&gt;&lt;setting name=&quot;fontcolor&quot; value=&quot;cccccc&quot;/&gt;&lt;setting name=&quot;fontsize&quot; value=&quot;12&quot;/&gt;&lt;setting name=&quot;fontweight&quot; value=&quot;normal&quot;/&gt;&lt;setting name=&quot;activecolor&quot; value=&quot;cccccc&quot;/&gt;&lt;setting name=&quot;overcolor&quot; value=&quot;ffffff&quot;/&gt;&lt;/settings&gt;&lt;elements&gt;&lt;element name=&quot;arrow&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAASklEQVR42p3KQQ2AMAAEwXOAi/lWSqUgpZIqASmVAN+GNECYZH8bHDhfOoLyYSxJEuwP054Z+mLqucOGMU0DW1ZQp7HmCRpa/roABHU6b1RN/woAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;background&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;capTop&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;capBottom&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;capLeft&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;capRight&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAADklEQVR42mNQQwIMxHEAuXQHISaBGr0AAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;capTopLeft&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIElEQVR42mNgAAI1NTV/IL4PxP9hnP8wzACTQRb4j4wBSrYUAF5mO7QAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;capTopRight&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAH0lEQVR42mNQU1P7D8T3gdifAQSgAjDsjy5wH13gPwBoAhQA/dBvkQAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;capBottomLeft&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHUlEQVR42mNQU1P7j4wZgMR9dAF/FAEQgAqCVQIAxzkUAKo9yiMAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;capBottomRight&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHElEQVR42mNQU1P7j4wZ0ATuowv4wwTugzlAAADkhRQAhODqdgAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;menuTopHD&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAYCAYAAABtGnqsAAABKUlEQVR42u2WYQ2DMBSEcYCESuAHAioBCZOAhOFgEiahEpCAhEpAQtcu1+TSwSDbfrDtvuQFWtpHe7lXqCohhBAPDMPQxBhjhBhzjDM9O3MbfWmspfYVc82zeegPlCMUkfpc8f4aa2qOKl5eYI+2iTHlTewU0Mc4bQnPAq6No/UYtN1SniMJmDbuFhzp9wgYr11yIO6ndwWknPd3cM6jCrhValsCJod0VMrduwJS3nDY0qWF9tlB1Gf2OBDlVp5j7kMCpvzjN3xATD6kIYjjcwclPi6dUXhWiu/x7D8EJJFmOMvDSX3hOI/rTOJOuWRp7CWLQnPGLMZPCkjOsuTEtLG6+LDY4lfFruRp4ELLsTQH48xaHv1kCiGEECLStm1QvB5ykBBCiJe5AX69621Fd8YvAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;menuTopCC&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAYCAYAAAAF6fiUAAABjklEQVR42u1X3c2DMAzsBhmBEXhggIzACIzACGUDRmCEjsAIGSEjMAIfkS7oegr0oQ/9IvkkC2HH+fHZDjweBoPBYDAIpmlqD1kP2Q/ZDhnEPsA2kM5Dt5PfWNBnSfpnEpojvUfYwyE92ZJulPXWi/3ONQff5eDhvcG7pzGvFJwcAA2I+DUcRFnrJABkhTwe8yX/lgiIYl9pP0/af9CkqYmAlN0v0TV08HTASAdvSgRAF4S4OwJiDjbZEykLVwAFnQlYMJfT/dZIwFtbKNjHXOIga6aAxOyPoATxvSNgL6zFQd7xXLEu2xzmCpCTjBoJOLNOKqClrH7r9RcEjBqEDwRsmrVcjURAbm09V4O00EXPUBMBDfde7rGwRRm/aEbezH1HwMxBo17eqy9d1iu1r/6ujdZ4D2wo94inQ5BmGdvD/i0BDkTn9d6+Zgq+Qb6CNmpBm94ntX4NeamEttRbMc59OjS3iqvLEjpfaF/+qi3KPrz9SBgMBoPBYDD8a3Rdt5v8TiwDDQaDwWD4Ef4AO4h4lB2vwSEAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;menuOption&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAuElEQVR42u2SQQqGIBCF/wOU1UYUMjAiQdSTeI4O2DnmUL9PatVq3AUNPBhEPt6bmd9XL6u+77uiXHRAV9+1wvais4iEEFXor7e9xdkJiJSSjDG0LAsppWgYhgplOb2iVdi2bRRCqHLOkdb6dpo5wAPu4AyglFJVjJGstTSOI+EPF4iYD+C6rjRNExuIyJgZYgJU5b2neZ7vBWX2UrAAzAwx4QwwuLuX0no2mBlAcMY4G85hf/Wu+gNm+kvWRCvtuQAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;menuOptionOver&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABfklEQVR42r2VTWqDUBSFG6v5KcVJsWTWaUZdRLuNbsNxt5CZ4/xsIJhAkGQJ3UBCcCA6UhBJQDDk9h04giREKQkVPpD37j3cc+/z+dD0iEirSn10s4hGHokG/iReEdIVbUVH0SMdrumlcKMYKzEUTwpT8aKwAN9N7hmMbdWKsYJnCrwpBop3MuCaxZh2KXrNpsHAPpK32+2H4zjfw+HQAXjHGoX7jDUu7FNQpxULCa7rftm2/TMajeLZbJaB8XgcYw17FLWYo58LaizfhCVVxScSl8vlYbPZSBiGEkWR7HY78TzvgD3E0L7JXO3cbpdNH8AaqoFYmqZSFIUcj0fZ7/fi+75MJpMYMYhlTre0XR1GT/GK5qNfsIjKIFY+p9NJ4jiW1Wp1QAximdODRqMgbKKyqmCSJLJYLLJrgrWW0TPYhBDI81yCIJDpdHrVcu1QMAD0DDZRGcTW63XdUJqPDSqdz+cZ+oZhNB6b+x/s+396t18Od72+/vuCvf0X8At7J48fIgP61QAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;menuOptionActive&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABfklEQVR42r2VTWqDUBSFG6v5KcVJsWTWaUZdRLuNbsNxt5CZ4/xsIJhAkGQJ3UBCcCA6UhBJQDDk9h04giREKQkVPpD37j3cc+/z+dD0iEirSn10s4hGHokG/iReEdIVbUVH0SMdrumlcKMYKzEUTwpT8aKwAN9N7hmMbdWKsYJnCrwpBop3MuCaxZh2KXrNpsHAPpK32+2H4zjfw+HQAXjHGoX7jDUu7FNQpxULCa7rftm2/TMajeLZbJaB8XgcYw17FLWYo58LaizfhCVVxScSl8vlYbPZSBiGEkWR7HY78TzvgD3E0L7JXO3cbpdNH8AaqoFYmqZSFIUcj0fZ7/fi+75MJpMYMYhlTre0XR1GT/GK5qNfsIjKIFY+p9NJ4jiW1Wp1QAximdODRqMgbKKyqmCSJLJYLLJrgrWW0TPYhBDI81yCIJDpdHrVcu1QMAD0DDZRGcTW63XdUJqPDSqdz+cZ+oZhNB6b+x/s+396t18Od72+/vuCvf0X8At7J48fIgP61QAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;volumeCapTop&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAAFUlEQVR42mP4//8/AzUxw6iBg89AACt1ZqjY29nMAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;volumeCapBottom&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAAFUlEQVR42mP4//8/AzUxw6iBg89AACt1ZqjY29nMAAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;volumeRail&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAYAAABmdppWAAAAPklEQVR42u3MoREAIAwDQDpI95+xVwG2AjziY3IR+ViPZOaeu7tXVc2O2y+AQCAQCAQCgUAgEAgEAoHAP8ADVGLAaqN7TdUAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;volumeRailCapBottom&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAAXklEQVR42pXOMQrAIAyFYUGSIeqQuLh4Ju8/eZRXIhQ6WMHhhxDIRwKAsKv3jm+tNagqcs4gIvzdhQM4d2BKCcw8r8FSyqi1Lsgzs/WdgzHGcQ2+qIhMhzyffXe6eQBmfbZnUQ+tqAAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;volumeRailCapTop&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAAX0lEQVR42p2OsQrAIAxEhRAHoxB1cfGb/P/JTzkboVsttMODcOEe5wC4EymlEUKYMUYYdlv21jk+VHXUWtFa25RStlREQETjs7D3Pi9wY9Kc8xZ67+cfIZ6EtpKZceot+LS2cEn/XGYAAAAASUVORK5CYII=&quot;/&gt;&lt;element name=&quot;volumeProgress&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAYAAABmdppWAAAASUlEQVR42u3MQQ0AUQjE0CFYgARQjGvWwBewh/beZ3enV7t77q7MVFWpuzUzigiZmSTZ6zNAQEBAQEBAQEBAQEBAQEBAQMB/gB8nJqOYNsUfIAAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;volumeProgressCapBottom&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAAVUlEQVR42pXMwQkAIQxE0XSYshQtImXYhh3kKFiD+L3s3iTgwBz/E0BuTylRSsHMaK3Re2fOyd6bb9dOAtAD0J/BnLMGoD6DgNRa1cz8B8cYvtbSqDn4F/TaDHcq1wAAAABJRU5ErkJggg==&quot;/&gt;&lt;element name=&quot;volumeProgressCapTop&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAAVElEQVR42mP5//8/Ay7Q09PjLyIiMkFCQkJBUlKSQVxc/IGoqGgBMzPzRlx6WHBJdHZ2+jMxMW1AFgMapAAVCwDijSQZCHT5BAbcYALJBgKBAjlyAHZIEpxZZYn/AAAAAElFTkSuQmCC&quot;/&gt;&lt;element name=&quot;volumeThumb&quot; src=&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAAnklEQVR42mP4//8/AxbMBMTsQMwHxMJALALFwlAxdqgaDL24DOMGYoVly5ZFVldXz6ysrFwOwiA2SAwkB1XDRMhARqjtigcPHsw/d+7c9Z9A8B8KQGyQGEgOpAaqlpGQgSAv2Vy7du38fxwAKmcDVYvXQCZoOHkjuwwdQOW8oWqZCBkICvyA/4RBAFQt/Q2kqpepHilUTzZUT9gUZz0ACDf945eBHBQAAAAASUVORK5CYII=&quot;/&gt;&lt;/elements&gt;&lt;/component&gt;&lt;/components&gt;&lt;/skin&gt;&#39;;this.xml=a.utils.parseXML(this.text);return this}})(jwplayer);(function(g){var o=jwplayer.utils,p=jwplayer.events,q=p.state,m=o.css,n=document,a=&quot;.jwdisplay&quot;,j=&quot;.jwpreview&quot;,l=&quot;.jwerror&quot;,d=true,k=false,b=&quot;absolute&quot;,c=&quot;none&quot;,h=&quot;100%&quot;,e=&quot;hidden&quot;,f=&quot;opacity .25s, background-image .25s, color .25s&quot;;g.display=function(u,M){var t=u,F=u.skin,X,aa,J,w,H,S,V,r=k,ab={},Q=k,W=k,T={},s,K,Y=o.extend({showicons:d,bufferrotation:45,bufferinterval:100,fontcolor:&quot;#ccc&quot;,overcolor:&quot;#fff&quot;,fontsize:15,fontweight:&quot;&quot;},F.getComponentSettings(&quot;display&quot;),M),O=new p.eventdispatcher();o.extend(this,O);function U(){X=n.createElement(&quot;div&quot;);X.id=t.id+&quot;_display&quot;;X.className=&quot;jwdisplay&quot;;aa=n.createElement(&quot;div&quot;);aa.className=&quot;jwpreview jw&quot;+t.jwGetStretching();X.appendChild(aa);t.jwAddEventListener(p.JWPLAYER_PLAYER_STATE,z);t.jwAddEventListener(p.JWPLAYER_PLAYLIST_ITEM,x);t.jwAddEventListener(p.JWPLAYER_PLAYLIST_COMPLETE,P);t.jwAddEventListener(p.JWPLAYER_MEDIA_ERROR,y);t.jwAddEventListener(p.JWPLAYER_ERROR,y);X.addEventListener(&quot;click&quot;,Z,k);R();z({newstate:q.IDLE})}function Z(ac){switch(t.jwGetState()){case q.PLAYING:case q.BUFFERING:t.jwPause();break;default:t.jwPlay();break}O.sendEvent(p.JWPLAYER_DISPLAY_CLICK)}this.clickHandler=Z;function R(){var ac={font:Y.fontweight+&quot; &quot;+Y.fontsize+&quot;px/&quot;+(parseInt(Y.fontsize)+3)+&quot;px Arial,Helvetica,sans-serif&quot;,color:Y.fontcolor},ad={color:Y.overcolor};K=new g.displayicon(X.id+&quot;_button&quot;,t,ac,ad);X.appendChild(K.element())}function B(ac,ad){if(!Y.showicons){return}if(ac||ad){K.setRotation(ac==&quot;buffer&quot;?parseInt(Y.bufferrotation):0,parseInt(Y.bufferinterval));K.setIcon(ac);K.setText(ad)}else{K.hide()}}function x(){C();J=t.jwGetPlaylist()[t.jwGetPlaylistIndex()];var ac=J?J.image:&quot;&quot;;v(ac)}function v(ac){if(w!=ac){if(w){L(j,k)}w=ac;I()}else{if(w){L(j,d)}}A(t.jwGetState())}function P(){W=d;B(&quot;replay&quot;);var ac=t.jwGetPlaylist()[0];v(ac.image)}var G;function z(ac){clearTimeout(G);G=setTimeout(function(){A(ac.newstate)},100)}function A(ac){if(K){K.setRotation(0)}switch(ac){case q.IDLE:if(!Q&amp;&amp;!W){if(w&amp;&amp;!r){L(j,d)}B(&quot;play&quot;,J?J.title:&quot;&quot;)}break;case q.BUFFERING:C();W=k;B(&quot;buffer&quot;);break;case q.PLAYING:B();break;case q.PAUSED:B(&quot;play&quot;);break}}this.hidePreview=function(ac){r=ac;L(j,!ac)};this.element=function(){return X};function N(ac){return&quot;#&quot;+X.id+&quot; &quot;+ac}function I(){if(w){var ac=new Image();ac.addEventListener(&quot;load&quot;,E,k);ac.src=w}else{m(N(j),{&quot;background-image&quot;:undefined});L(j,k);H=S=0}}function E(){H=this.width;S=this.height;A(t.jwGetState());D();if(w){m(N(j),{&quot;background-image&quot;:&quot;url(&quot;+w+&quot;)&quot;})}}function y(ac){Q=d;B(&quot;error&quot;,ac.message)}function C(){Q=k;if(ab.error){ab.error.setText()}}function D(){if(X.clientWidth*X.clientHeight&gt;0){o.stretch(t.jwGetStretching(),aa,X.clientWidth,X.clientHeight,H,S)}}this.redraw=D;function L(ac,ad){if(!o.exists(T[ac])){T[ac]=false}if(T[ac]!=ad){T[ac]=ad;m(N(ac),{opacity:ad?1:0,visibility:ad?&quot;visible&quot;:&quot;hidden&quot;})}}this.show=function(){if(K&amp;&amp;t.jwGetState()!=q.PLAYING){K.show()}};this.hide=function(){if(K){K.hide()}};this.setAlternateClickHandler=function(ac){_alternateClickHandler=ac};this.revertAlternateClickHandler=function(){_alternateClickHandler=undefined};U()};m(a,{position:b,cursor:&quot;pointer&quot;,width:h,height:h,overflow:e});m(a+&quot; .jwpreview&quot;,{position:b,width:h,height:h,background:&quot;no-repeat center&quot;,overflow:e,opacity:0});m(a+&quot;, &quot;+a+&quot; *&quot;,{&quot;-webkit-transition&quot;:f,&quot;-moz-transition&quot;:f,&quot;-o-transition&quot;:f})})(jwplayer.html5);(function(d){var j=jwplayer.utils,l=jwplayer.events,m=l.state,g=j.css,c=&quot;.jwdisplayIcon&quot;,f=undefined,h=document,b=&quot;none&quot;,e=&quot;100%&quot;,k=&quot;center&quot;,a=&quot;absolute&quot;;d.displayicon=function(K,F,v,C){var L=F,y=L.skin,r=K,z,M,R,B,x,q,D,H,G=0;function A(){z=O(&quot;jwdisplayIcon&quot;);z.id=r;w();q=O(&quot;jwtext&quot;,z,v,C);D=O(&quot;icon&quot;,z);o();p()}function t(S,T){return&quot;#&quot;+r+(T?&quot;:hover&quot;:&quot;&quot;)+&quot; &quot;+(S?S:&quot;&quot;)}function O(T,V,U,S){var W=h.createElement(&quot;div&quot;);W.className=T;if(V){V.appendChild(W)}P(T,&quot;.&quot;+T,U,S);return W}function w(){M=I(&quot;background&quot;);R=I(&quot;capLeft&quot;);B=I(&quot;capRight&quot;);x=(R.width*B.width&gt;0);var S={&quot;background-image&quot;:&quot;url(&quot;+R.src+&quot;), url(&quot;+M.src+&quot;), url(&quot;+B.src+&quot;)&quot;,&quot;background-position&quot;:&quot;left,center,right&quot;,&quot;background-repeat&quot;:&quot;no-repeat&quot;,padding:&quot;0 &quot;+B.width+&quot;px 0 &quot;+R.width+&quot;px&quot;,height:M.height,&quot;margin-top&quot;:M.height/-2};g(t(),S);if(M.overSrc){S[&quot;background-image&quot;]=&quot;url(&quot;+R.overSrc+&quot;), url(&quot;+M.overSrc+&quot;), url(&quot;+B.overSrc+&quot;)&quot;}g(&quot;#&quot;+L.id+&quot; .jwdisplay:hover &quot;+t(),S)}function P(U,S,W,T){var V=I(U);W=j.extend({},W);if(U.indexOf(&quot;Icon&quot;)&gt;0){G=V.width}if(V.src){W[&quot;background-image&quot;]=&quot;url(&quot;+V.src+&quot;)&quot;;W.width=V.width}g(t(S),W);T=j.extend({},T);if(V.overSrc){T[&quot;background-image&quot;]=&quot;url(&quot;+V.overSrc+&quot;)&quot;}H=V;g(&quot;#&quot;+L.id+&quot; .jwdisplay:hover &quot;+(S?S:t()),T)}function I(T){var U=y.getSkinElement(&quot;display&quot;,T),S=y.getSkinElement(&quot;display&quot;,T+&quot;Over&quot;);if(U){U.overSrc=(S&amp;&amp;S.src)?S.src:&quot;&quot;;return U}return{src:&quot;&quot;,overSrc:&quot;&quot;,width:0,height:0}}function p(){var T=x||(G==0),U=&quot;px &quot;+e,S;g(t(&quot;.jwtext&quot;),{display:(q.innerHTML&amp;&amp;T)?f:b});setTimeout(function(){S=Math.max(H.width,j.bounds(z).width-B.width-R.width);if(j.isFF()||j.isIE()){S++}g(t(),{&quot;background-size&quot;:[R.width+U,S+U,B.width+U].join(&quot;,&quot;)},true)},0)}this.element=function(){return z};this.setText=function(T){var S=q.style;q.innerHTML=T?T.replace(&quot;:&quot;,&quot;:&lt;br&gt;&quot;):&quot;&quot;;S.height=&quot;0&quot;;S.display=&quot;block&quot;;if(T){while(n(q)&gt;2){q.innerHTML=q.innerHTML.replace(/(.*) .*$/,&quot;$1...&quot;)}}S.height=&quot;&quot;;S.display=&quot;&quot;;p()};this.setIcon=function(T){var S=O(&quot;icon&quot;);S.id=z.id+&quot;_&quot;+T;P(T+&quot;Icon&quot;,&quot;#&quot;+S.id);z.replaceChild(S,D);D=S};var u,s=0,Q;function J(T,S){clearInterval(u);Q=0;s=T;if(T==0){N()}else{u=setInterval(N,S)}}function N(){Q=(Q+s)%360;j.rotate(D,Q)}this.setRotation=J;function n(S){return Math.floor(S.scrollHeight/h.defaultView.getComputedStyle(S,null).lineHeight.replace(&quot;px&quot;,&quot;&quot;))}var o=this.hide=function(){z.style.opacity=0};var E=this.show=function(){z.style.opacity=1};A()};g(c,{display:&quot;table&quot;,cursor:&quot;pointer&quot;,position:&quot;relative&quot;,&quot;margin-left&quot;:&quot;auto&quot;,&quot;margin-right&quot;:&quot;auto&quot;,top:&quot;50%&quot;},true);g(c+&quot; div&quot;,{position:&quot;relative&quot;,display:&quot;table-cell&quot;,&quot;vertical-align&quot;:&quot;middle&quot;,&quot;background-repeat&quot;:&quot;no-repeat&quot;,&quot;background-position&quot;:k});g(c+&quot; div&quot;,{&quot;vertical-align&quot;:&quot;middle&quot;,},true);g(c+&quot; .jwtext&quot;,{color:&quot;#fff&quot;,padding:&quot;0 1px&quot;,&quot;max-width&quot;:&quot;300px&quot;,&quot;overflow-y&quot;:&quot;hidden&quot;,&quot;text-align&quot;:k,&quot;-webkit-user-select&quot;:b,&quot;-moz-user-select&quot;:b,&quot;-ms-user-select&quot;:b,&quot;user-select&quot;:b})})(jwplayer.html5);(function(e){var l=jwplayer.utils,n=jwplayer.events,o=n.state,j=l.css,d=l.bounds,a=&quot;.jwdock&quot;,h=&quot;.jwdockbuttons&quot;,g=undefined,k=document,c=&quot;none&quot;,f=&quot;100%&quot;,m=&quot;center&quot;,b=&quot;absolute&quot;;e.dock=function(z,I){var C=z,B={iconalpha:0.75,iconalphaactive:0.5,iconalphaover:1,margin:8},u=l.extend({},B,I),p=C.id+&quot;_dock&quot;,v=C.skin,K,E=0,s={},t={},w,F,J,D=this;function x(){D.visible=false;w=H(&quot;div&quot;,&quot;jwdock&quot;);F=H(&quot;div&quot;,&quot;jwdockbuttons&quot;);w.appendChild(F);w.id=p;y();setTimeout(function(){J=d(w)})}function y(){var M=A(&quot;button&quot;),N=A(&quot;buttonOver&quot;),O=A(&quot;buttonActive&quot;);if(!M){return}j(q(),{height:M.height,padding:u.margin});j(h,{height:M.height});j(q(&quot;button&quot;),{width:M.width,cursor:&quot;pointer&quot;,border:&quot;none&quot;,background:M.src});if(N.src){j(q(&quot;button:hover&quot;),{background:N.src})}if(O.src){j(q(&quot;button:active&quot;),{background:O.src})}j(q(&quot;button&gt;div&quot;),{opacity:u.iconalpha});j(q(&quot;button:hover&gt;div&quot;),{opacity:u.iconalphaover});j(q(&quot;button:active&gt;div&quot;),{opacity:u.iconalphaactive});j(q(&quot;.jwoverlay&quot;),{top:u.margin+M.height});G(&quot;capLeft&quot;,F);G(&quot;capRight&quot;,F);G(&quot;divider&quot;)}function G(O,N){var M=A(O);j(q(&quot;.&quot;+O),{width:M.width,background:M.src});return H(&quot;div&quot;,O,N)}function q(M,N){return&quot;#&quot;+p+&quot; &quot;+(M?M:&quot;&quot;)}function H(O,M,N){var P=k.createElement(O);if(M){P.className=M}if(N){N.appendChild(P)}return P}function A(M){var N=v.getSkinElement(&quot;dock&quot;,M);return N?N:{width:0,height:0,src:&quot;&quot;}}D.redraw=function(){J=d(w)};function L(N){var Q=t[N],M,P=s[N],R,O=d(P.icon);Q.offsetX(0);R=d(w);j(&quot;#&quot;+Q.element().id,{left:O.left-R.left+O.width/2});M=d(Q.element());if(R.left&gt;M.left){Q.offsetX(R.left-M.left+8)}}D.element=function(){return w};D.offset=function(M){j(q(),{&quot;margin-left&quot;:M})};D.hide=function(){D.visible=false;w.style.opacity=0;w.style.visibility=&quot;hidden&quot;};D.show=function(){D.visible=true;w.style.opacity=1;w.style.visibility=&quot;visible&quot;};D.addButton=function(M,U,Q,N){if(s[N]){return}var O=H(&quot;div&quot;,&quot;divider&quot;,F),P=H(&quot;button&quot;,null,F),T=H(&quot;div&quot;,null,P);T.id=p+&quot;_&quot;+N;T.innerHTML=&quot;&amp;nbsp;&quot;;j(&quot;#&quot;+T.id,{&quot;background-image&quot;:M});if(typeof Q==&quot;string&quot;){Q=new Function(Q)}P.addEventListener(&quot;click&quot;,Q);s[N]={element:P,label:U,divider:O,icon:T};if(U){var V=new e.overlay(T.id+&quot;_tooltip&quot;,v,true),R=H(&quot;div&quot;);R.id=V.id+&quot;_label&quot;;R.innerHTML=U;j(&quot;#&quot;+R.id,{padding:3});V.setContents(R);var S;P.addEventListener(&quot;mouseover&quot;,function(){clearTimeout(S);L(N);V.show();for(var W in t){if(W!=N){t[W].hide()}}},false);P.addEventListener(&quot;mouseout&quot;,function(){S=setTimeout(V.hide,100)},false);w.appendChild(V.element());t[N]=V}E++;r()};D.removeButton=function(M){if(s[M]){F.removeChild(s[M].element);F.removeChild(s[M].divider);delete s[M];E--;r()}};D.numButtons=function(){return E};function r(){j(h+&quot; .capLeft, &quot;+h+&quot; .capRight&quot;,{display:E?&quot;block&quot;:&quot;none&quot;})}x()};j(a,{position:&quot;absolute&quot;,width:f,opacity:0,});j(a+&quot; &gt; *&quot;,{height:f,&quot;float&quot;:&quot;left&quot;});j(a+&quot; &gt; .jwoverlay&quot;,{height:&quot;auto&quot;,&quot;float&quot;:&quot;none&quot;,&quot;z-index&quot;:99});j(h,{position:&quot;absolute&quot;,});j(h+&quot; button&quot;,{position:&quot;relative&quot;,});j(h+&quot; &gt; *&quot;,{height:f,&quot;float&quot;:&quot;left&quot;});j(h+&quot; .divider&quot;,{display:&quot;none&quot;});j(h+&quot; button ~ .divider&quot;,{display:&quot;block&quot;});j(h+&quot; .capLeft, &quot;+h+&quot; .capRight&quot;,{display:&quot;none&quot;});j(h+&quot; .capRight&quot;,{&quot;float&quot;:&quot;right&quot;});j(h+&quot; button &gt; div&quot;,{left:0,right:0,top:0,bottom:0,margin:5,position:&quot;absolute&quot;,&quot;background-position&quot;:&quot;center&quot;,&quot;background-repeat&quot;:&quot;no-repeat&quot;});l.transitionStyle(a,&quot;background .15s, opacity .15s&quot;);l.transitionStyle(a+&quot; .jwoverlay&quot;,&quot;opacity .15s&quot;);l.transitionStyle(h+&quot; button div&quot;,&quot;opacity .15s&quot;)})(jwplayer.html5);(function(a){var e=jwplayer,c=e.utils,d=e.events,b=d.state,f=e.playlist;a.instream=function(C,q,B,D){var x={controlbarseekable:&quot;always&quot;,controlbarpausable:true,controlbarstoppable:true,playlistclickable:true};var z,E,G=C,I=q,n=B,A=D,v,L,s,K,j,k,l,p,u,m=false,o,h,r=this;this.load=function(P,O){g();m=true;E=c.extend(x,O);z=new f.item(P);J();h=document.createElement(&quot;div&quot;);h.id=r.id+&quot;_instream_container&quot;;A.detachMedia();v=l.getTag();k=I.playlist[I.item];j=G.jwGetState();if(j==b.BUFFERING||j==b.PLAYING){v.pause()}L=v.src?v.src:v.currentSrc;s=v.innerHTML;K=v.currentTime;u=new a.display(r);u.setAlternateClickHandler(function(Q){if(_fakemodel.state==b.PAUSED){r.jwInstreamPlay()}else{H(d.JWPLAYER_INSTREAM_CLICK,Q)}});h.appendChild(u.element());if(!c.isMobile()){p=new a.controlbar(r);h.appendChild(p.element())}n.setupInstream(h,v);t();l.load(z)};this.jwInstreamDestroy=function(O){if(!m){return}m=false;if(j!=b.IDLE){l.load(k,false)}else{l.stop(true)}l.detachMedia();n.destroyInstream();if(p){try{p.element().parentNode.removeChild(p.getDisplayElement())}catch(P){}}H(d.JWPLAYER_INSTREAM_DESTROYED,{reason:(O?&quot;complete&quot;:&quot;destroyed&quot;)},true);A.attachMedia();if(j==b.BUFFERING||j==b.PLAYING){v.play();if(I.playlist[I.item]==k){I.getVideo().seek(K)}}return};this.jwInstreamAddEventListener=function(O,P){o.addEventListener(O,P)};this.jwInstreamRemoveEventListener=function(O,P){o.removeEventListener(O,P)};this.jwInstreamPlay=function(){if(!m){return}l.play(true)};this.jwInstreamPause=function(){if(!m){return}l.pause(true)};this.jwInstreamSeek=function(O){if(!m){return}l.seek(O)};this.jwInstreamGetState=function(){if(!m){return undefined}return _fakemodel.state};this.jwInstreamGetPosition=function(){if(!m){return undefined}return _fakemodel.position};this.jwInstreamGetDuration=function(){if(!m){return undefined}return _fakemodel.duration};this.playlistClickable=function(){return(!m||E.playlistclickable.toString().toLowerCase()==&quot;true&quot;)};function w(){_fakemodel=new a.model({});o=new d.eventdispatcher();G.jwAddEventListener(d.JWPLAYER_RESIZE,t);G.jwAddEventListener(d.JWPLAYER_FULLSCREEN,t)}function g(){A.setMute(I.mute);A.setVolume(I.volume)}function J(){if(!l){l=new a.video(I.getVideo().getTag());l.addGlobalListener(M);l.addEventListener(d.JWPLAYER_MEDIA_META,N);l.addEventListener(d.JWPLAYER_MEDIA_COMPLETE,y);l.addEventListener(d.JWPLAYER_MEDIA_BUFFER_FULL,F)}l.attachMedia()}function M(O){if(m){H(O.type,O)}}function F(O){if(m){l.play()}}function y(O){if(m){setTimeout(function(){r.jwInstreamDestroy(true)},10)}}function N(O){if(O.metadata.width&amp;&amp;O.metadata.height){n.resizeMedia()}}function H(O,P,Q){if(m||Q){o.sendEvent(O,P)}}function t(){if(p){p.redraw()}if(u){u.redraw()}}this.jwPlay=function(O){if(E.controlbarpausable.toString().toLowerCase()==&quot;true&quot;){this.jwInstreamPlay()}};this.jwPause=function(O){if(E.controlbarpausable.toString().toLowerCase()==&quot;true&quot;){this.jwInstreamPause()}};this.jwStop=function(){if(E.controlbarstoppable.toString().toLowerCase()==&quot;true&quot;){this.jwInstreamDestroy();G.jwStop()}};this.jwSeek=function(O){switch(E.controlbarseekable.toLowerCase()){case&quot;always&quot;:this.jwInstreamSeek(O);break;case&quot;backwards&quot;:if(_fakemodel.position&gt;O){this.jwInstreamSeek(O)}break}};this.jwGetPosition=function(){};this.jwGetDuration=function(){};this.jwGetWidth=G.jwGetWidth;this.jwGetHeight=G.jwGetHeight;this.jwGetFullscreen=G.jwGetFullscreen;this.jwSetFullscreen=G.jwSetFullscreen;this.jwGetVolume=function(){return I.volume};this.jwSetVolume=function(O){l.volume(O);G.jwSetVolume(O)};this.jwGetMute=function(){return I.mute};this.jwSetMute=function(O){l.mute(O);G.jwSetMute(O)};this.jwGetState=function(){return _fakemodel.state};this.jwGetPlaylist=function(){return[z]};this.jwGetPlaylistIndex=function(){return 0};this.jwGetStretching=function(){return I.config.stretching};this.jwAddEventListener=function(P,O){o.addEventListener(P,O)};this.jwRemoveEventListener=function(P,O){o.removeEventListener(P,O)};this.skin=G.skin;this.id=G.id+&quot;_instream&quot;;w();return this}})(jwplayer.html5);(function(c){var n=c.utils,h=c.html5,m=n.css,j=undefined,k=&quot;free&quot;,f=&quot;pro&quot;,g=&quot;premium&quot;,o=&quot;ads&quot;,e=&quot;open&quot;,p=&quot;http://www.longtailvideo.com/jwpabout/?a=l&amp;v=&quot;,a=&quot;visible&quot;,d=&quot;hidden&quot;,l=&quot;.jwlogo&quot;;var b=h.logo=function(x,y){var D=x,E=D.id+&quot;_logo&quot;,t,r,u=b.defaults,C=false;function v(){B();s()}function B(){if(u.prefix){var F=c.version.split(/\W/).splice(0,2).join(&quot;/&quot;);if(u.prefix.indexOf(F)&lt;0){u.prefix+=F+&quot;/&quot;}}try{if(n.isHTTPS()){u.prefix=u.prefix.replace(&quot;http://&quot;,&quot;https://ssl.&quot;)}}catch(H){}var G=z(w());u.link=p+c.version+&quot;&amp;m=h&amp;e=&quot;+G;t=n.extend({},u,y);t.hide=(t.hide.toString()==&quot;true&quot;)}function s(){r=document.createElement(&quot;img&quot;);r.className=&quot;jwlogo&quot;;r.id=E;if(!t.file){r.style.display=&quot;none&quot;;return}var F=(/(\w+)-(\w+)/).exec(t.position),G={},H=t.margin;if(F.length==3){G[F[1]]=H;G[F[2]]=H}else{G.top=G.right=H}m(q(),G);if(t.file.indexOf(&quot;/&quot;)&gt;=0){r.src=t.file}else{r.src=t.prefix+t.file}r.onclick=A}this.resize=function(G,F){};this.element=function(){return r};this.offset=function(F){m(q(),{&quot;margin-bottom&quot;:F})};this.position=function(){return t.position};this.margin=function(){return parseInt(t.margin)};function A(F){if(n.exists(F)){F.stopPropagation()}if(C&amp;&amp;t.link){D.jwPause();D.jwSetFullscreen(false);window.open(t.link,t.linktarget)}return}function w(){if(c().config.key){var F=new n.key(c().config.key);return F.edition()}else{return e}}function z(F){if(F==f){return&quot;p&quot;}else{if(F==g){return&quot;r&quot;}else{if(F==o){return&quot;a&quot;}else{if(F==e){return&quot;o&quot;}else{return&quot;f&quot;}}}}}function q(F){return&quot;#&quot;+E+&quot; &quot;+(F?F:&quot;&quot;)}this.hide=function(F){if(t.hide||F){C=false;r.style.opacity=0}};this.show=function(){C=true;r.style.opacity=1};v();return this};b.defaults={prefix:&quot;http://p.jwpcdn.com/&quot;,file:&quot;logo.png&quot;,link:p+c.version+&quot;&amp;m=h&amp;e=f&quot;,linktarget:&quot;_top&quot;,margin:8,hide:false,position:&quot;top-right&quot;};m(l,{cursor:&quot;pointer&quot;,position:&quot;absolute&quot;,&quot;z-index&quot;:100,opacity:0});n.transitionStyle(l,&quot;visibility .15s, opacity .15s&quot;)})(jwplayer);(function(c){var f=c.html5,k=c.utils,j=k.css,h=&quot;jwmenu&quot;,d=&quot;jwoption&quot;,g=undefined,a=&quot;#ffffff&quot;,b=&quot;#cccccc&quot;;f.menu=function(m,n,B,t){var x=B,z=m,y=n,o=t,q=new f.overlay(y+&quot;_overlay&quot;,B),r=k.extend({fontcase:g,fontcolor:b,fontsize:11,fontweight:g,activecolor:a,overcolor:a},B.getComponentSettings(&quot;tooltip&quot;)),p,A=[];function w(){p=u(h);p.id=y;var G=s(&quot;menuTop&quot;+m),E=s(&quot;menuOption&quot;),D=s(&quot;menuOptionOver&quot;),F=s(&quot;menuOptionActive&quot;);if(G){p.appendChild(G.image)}if(E){var C=&quot;#&quot;+n+&quot; .&quot;+d;j(C,{&quot;background-image&quot;:E.src,height:E.height,color:r.fontcolor,&quot;padding-left&quot;:E.width,font:r.fontweight+&quot; &quot;+r.fontsize+&quot;px Arial,Helvetica,sans-serif&quot;,&quot;line-height&quot;:E.height,&quot;text-transform&quot;:(r.fontcase==&quot;upper&quot;)?&quot;uppercase&quot;:g});j(C+&quot;:hover&quot;,{&quot;background-image&quot;:D.src?D.src:g,color:r.overcolor});j(C+&quot;.active&quot;,{&quot;background-image&quot;:F.src?F.src:g,color:r.activecolor})}q.setContents(p)}this.element=function(){return q.element()};this.addOption=function(C,E){var D=u(d,p);D.id=y+&quot;_option_&quot;+E;D.innerHTML=C;D.addEventListener(&quot;click&quot;,v(A.length,E));A.push(D)};function v(C,D){return function(){l(C);if(o){o(D)}}}this.clearOptions=function(){while(A.length&gt;0){p.removeChild(A.pop())}};var l=this.setActive=function(C){for(var D=0;D&lt;A.length;D++){var E=A[D];E.className=E.className.replace(&quot; active&quot;,&quot;&quot;);if(D==C){E.className+=&quot; active&quot;}}};function u(D,C){var E=document.createElement(&quot;div&quot;);if(D){E.className=D}if(C){C.appendChild(E)}return E}function s(C){var D=B.getSkinElement(&quot;tooltip&quot;,C);return D?D:{width:0,height:0,src:g}}this.show=q.show;this.hide=q.hide;this.offsetX=q.offsetX;w()};function e(l){return&quot;.&quot;+l.replace(/ /g,&quot; .&quot;)}j(e(h+&quot; &quot;+d),{&quot;background-repeat&quot;:&quot;no-repeat&quot;,cursor:&quot;pointer&quot;,position:&quot;relative&quot;})})(jwplayer);(function(b){var a=jwplayer.utils,d=jwplayer.events,e=undefined,c=true,f=false;b.model=function(j){var q=this,l,s,t=a.getCookies(),g={},n={autostart:f,controlbar:c,controls:c,debug:e,fullscreen:f,height:320,icons:c,item:0,mobilecontrols:f,mute:f,playlist:[],playlistposition:&quot;none&quot;,playlistsize:180,repeat:f,skin:e,stretching:a.stretching.UNIFORM,volume:90,width:480};function p(u){for(var v in u){u[v]=a.serialize(u[v])}return u}function r(){a.extend(q,new d.eventdispatcher());q.config=p(a.extend({},n,t,j));a.extend(q,{id:j.id,state:d.state.IDLE,duration:-1,position:0,buffer:0,},q.config);q.playlist=[];o();q.setItem(q.config.item);s=document.createElement(&quot;video&quot;);l=new b.video(s);l.volume(q.volume);l.mute(q.mute);l.addGlobalListener(k)}function o(){g.display={showicons:q.icons};g.controlbar={}}var m={};m[d.JWPLAYER_MEDIA_MUTE]=&quot;mute&quot;;m[d.JWPLAYER_MEDIA_VOLUME]=&quot;volume&quot;;m[d.JWPLAYER_PLAYER_STATE]=&quot;newstate-&gt;state&quot;;m[d.JWPLAYER_MEDIA_BUFFER]=&quot;bufferPercent-&gt;buffer&quot;;m[d.JWPLAYER_MEDIA_TIME]=&quot;position,duration&quot;;function k(u){var B=(m[u.type]?m[u.type].split(&quot;,&quot;):[]),y,A;if(B.length&gt;0){for(y=0;y&lt;B.length;y++){var w=B[y],x=w.split(&quot;-&gt;&quot;),z=x[0],v=x[1]?x[1]:z;if(q[v]!=u[z]){q[v]=u[z];A=true}}if(A){q.sendEvent(u.type,u)}}else{q.sendEvent(u.type,u)}}q.getVideo=function(){return l};q.seekDrag=function(u){l.seekDrag(u)};q.setFullscreen=function(u){if(u!=q.fullscreen){q.fullscreen=u;q.sendEvent(d.JWPLAYER_FULLSCREEN,{fullscreen:u})}};q.setPlaylist=function(u){q.playlist=h(u);if(q.playlist.length==0){q.sendEvent(d.JWPLAYER_ERROR,{message:&quot;Error loading playlist: No playable sources found&quot;})}else{q.sendEvent(d.JWPLAYER_PLAYLIST_LOADED,{playlist:u});q.item=-1;q.setItem(0)}};function h(x){var v=[];for(var u=0;u&lt;x.length;u++){var w=a.extend({},x[u]);w.sources=a.filterSources(w.sources);if(w.sources.length&gt;0){v.push(w)}}return v}q.setItem=function(u){var v;if(u==q.playlist.length||u&lt;-1){v=0}else{if(u==-1||u&gt;q.playlist.length){v=q.playlist.length-1}else{v=u}}if(v!=q.item){q.item=v;q.sendEvent(d.JWPLAYER_PLAYLIST_ITEM,{index:q.item})}};q.setVolume=function(u){if(q.mute&amp;&amp;u&gt;0){q.setMute(f)}u=Math.round(u);if(!q.mute){a.saveCookie(&quot;volume&quot;,u)}l.volume(u)};q.setMute=function(u){if(!a.exists(u)){u=!q.mute}a.saveCookie(&quot;mute&quot;,u);l.mute(u)};q.componentConfig=function(u){return g[u]};r()}})(jwplayer.html5);(function(k){var e=k.html5,r=k.utils,n=r.css,s=r.transitionStyle,c=&quot;relative&quot;,d=&quot;absolute&quot;,g=&quot;hidden&quot;,j=&quot;100%&quot;,q=&quot;opacity .15s, visibility .15s, left .01s linear&quot;,l=&quot;.jwoverlay&quot;,a=&quot;jwcontents&quot;,p=&quot;top&quot;,f=&quot;bottom&quot;,h=&quot;right&quot;,m=&quot;left&quot;,t=&quot;#ffffff&quot;,u=undefined,b=document,o={fontcase:u,fontcolor:t,fontsize:12,fontweight:u,activecolor:t,overcolor:t};e.overlay=function(H,K,E){var B=K,x=H,C,Q,I=0,J,N,M=E,v=r.extend({},o,B.getComponentSettings(&quot;tooltip&quot;)),z={},L=this;function D(){C=O(l.replace(&quot;.&quot;,&quot;&quot;));C.id=x;J=y(&quot;arrow&quot;,&quot;jwarrow&quot;)[1];N=J.height;n(A(&quot;jwarrow&quot;),{position:d,bottom:M?u:0,top:M?0:u,width:J.width,height:N,left:&quot;50%&quot;});P(p,m);P(f,m);P(p,h);P(f,h);P(m);P(h);P(p);P(f);y(&quot;background&quot;,&quot;jwback&quot;);n(A(&quot;jwback&quot;),{left:z.left,right:z.right,top:z.top,bottom:z.bottom});Q=O(a,C);n(A(a)+&quot; *&quot;,{color:v.fontcolor,font:v.fontweight+&quot; &quot;+(v.fontsize)+&quot;px Arial,Helvetica,sans-serif&quot;,&quot;text-transform&quot;:(v.fontcase==&quot;upper&quot;)?&quot;uppercase&quot;:u});if(M){r.transform(A(&quot;jwarrow&quot;),&quot;rotate(180deg)&quot;)}n(A(),{padding:(z.top+1)+&quot;px &quot;+z.right+&quot;px &quot;+(z.bottom+1)+&quot;px &quot;+z.left+&quot;px&quot;});L.showing=false}function A(R){return&quot;#&quot;+x+(R?&quot; .&quot;+R:&quot;&quot;)}function O(S,R){var T=b.createElement(&quot;div&quot;);if(S){T.className=S}if(R){R.appendChild(T)}return T}function y(R,T){var S=G(R),U=O(T,C);n(A(T.replace(&quot; &quot;,&quot;.&quot;)),{&quot;background-image&quot;:S.src});return[U,S]}function P(X,W){if(!W){W=&quot;&quot;}var T=y(&quot;cap&quot;+X+W,&quot;jwborder jw&quot;+X+(W?W:&quot;&quot;)),R=T[0],U=T[1],S={&quot;background-image&quot;:U.src,width:(X==m||W==m||X==h||W==h)?U.width:u,height:(X==p||W==p||X==f||W==f)?U.height:u};S[X]=((X==f&amp;&amp;!M)||(X==p&amp;&amp;M))?N:0;if(W){S[W]=0}n(A(R.className.replace(/ /g,&quot;.&quot;)),S);var V={},Z={},Y={left:U.width,right:U.width,top:(M?N:0)+U.height,bottom:(M?0:N)+U.height};if(W){V[W]=Y[W];V[X]=0;Z[X]=Y[X];Z[W]=0;n(A(&quot;jw&quot;+X),V);n(A(&quot;jw&quot;+W),Z);z[X]=Y[X];z[W]=Y[W]}}L.element=function(){return C};var F;L.setContents=function(R){r.empty(Q);Q.appendChild(R);clearTimeout(F);F=setTimeout(w,0)};L.offsetX=function(R){I=R;clearTimeout(F);w()};function w(){if(C.clientWidth==0){return}n(A(),{&quot;margin-left&quot;:Math.round(I-C.clientWidth/2)});n(A(&quot;jwarrow&quot;),{&quot;margin-left&quot;:Math.round((J.width/-2)-I)})}L.borderWidth=function(){return z.left};function G(R){var S=B.getSkinElement(&quot;tooltip&quot;,R);if(S){return S}else{return{width:0,height:0,src:&quot;&quot;,image:u,ready:false}}}L.show=function(){L.showing=true;C.style.opacity=1;C.style.visibility=&quot;visible&quot;};L.hide=function(){L.showing=false;C.style.opacity=0;C.style.visibility=g};D()};n(l,{position:d,visibility:g,opacity:0});n(l+&quot; .jwcontents&quot;,{position:c,&quot;z-index&quot;:1});n(l+&quot; .jwborder&quot;,{position:d,&quot;background-size&quot;:j+&quot; &quot;+j},true);n(l+&quot; .jwback&quot;,{position:d,&quot;background-size&quot;:j+&quot; &quot;+j});s(l,q)})(jwplayer);(function(b){var a=jwplayer.utils;b.player=function(d){var n=this,l,h,j,c;function m(){l=new b.model(d);n.id=l.id;h=new b.view(n,l);j=new b.controller(l,h);n._model=l;jwplayer.utils.css.block();e();var o=new b.setup(l,h,j);o.addEventListener(jwplayer.events.JWPLAYER_READY,f);o.addEventListener(jwplayer.events.JWPLAYER_ERROR,k);o.start()}function f(o){j.playerReady(o);a.css.unblock()}function k(o){a.log(&quot;There was a problem setting up the player: &quot;,o);a.css.unblock()}function e(){n.jwPlay=j.play;n.jwPause=j.pause;n.jwStop=j.stop;n.jwSeek=j.seek;n.jwSetVolume=j.setVolume;n.jwSetMute=j.setMute;n.jwLoad=j.load;n.jwPlaylistNext=j.next;n.jwPlaylistPrev=j.prev;n.jwPlaylistItem=j.item;n.jwSetFullscreen=j.setFullscreen;n.jwResize=h.resize;n.jwSeekDrag=l.seekDrag;n.jwSetStretching=j.setStretching;n.jwGetQualityLevels=j.getQualityLevels;n.jwGetCurrentQuality=j.getCurrentQuality;n.jwSetCurrentQuality=j.setCurrentQuality;n.jwGetCaptionsList=j.getCaptionsList;n.jwGetCurrentCaptions=j.getCurrentCaptions;n.jwSetCurrentCaptions=j.setCurrentCaptions;n.jwSetControls=h.setControls;n.jwGetSafeRegion=h.getSafeRegion;n.jwGetPlaylistIndex=g(&quot;item&quot;);n.jwGetPosition=g(&quot;position&quot;);n.jwGetDuration=g(&quot;duration&quot;);n.jwGetBuffer=g(&quot;buffer&quot;);n.jwGetWidth=g(&quot;width&quot;);n.jwGetHeight=g(&quot;height&quot;);n.jwGetFullscreen=g(&quot;fullscreen&quot;);n.jwGetVolume=g(&quot;volume&quot;);n.jwGetMute=g(&quot;mute&quot;);n.jwGetState=g(&quot;state&quot;);n.jwGetStretching=g(&quot;stretching&quot;);n.jwGetPlaylist=g(&quot;playlist&quot;);n.jwGetControls=g(&quot;controls&quot;);n.jwDetachMedia=j.detachMedia;n.jwAttachMedia=j.attachMedia;n.jwLoadInstream=function(p,o){if(!c){c=new b.instream(n,l,h,j)}setTimeout(function(){c.load(p,o)},10)};n.jwInstreamDestroy=function(){if(c){c.jwInstreamDestroy()}};n.jwAddEventListener=j.addEventListener;n.jwRemoveEventListener=j.removeEventListener;n.jwDockAddButton=h.addButton;n.jwDockRemoveButton=h.removeButton}function g(o){return function(){return l[o]}}m()}})(jwplayer.html5);(function(g){var b=&quot;#FFFFFF&quot;,d=&quot;#CCCCCC&quot;,l=&quot;#333333&quot;,h=&quot;#999999&quot;,k=&quot;normal&quot;,f={size:180,backgroundcolor:l,fontcolor:h,overcolor:d,activecolor:d,titlecolor:d,titleovercolor:b,titleactivecolor:b,fontweight:k,titleweight:k,fontsize:11,titlesize:13},q=jwplayer.events,o=jwplayer.utils,m=o.css,p=&quot;.jwplaylist&quot;,n=document,a=&quot;absolute&quot;,c=&quot;relative&quot;,e=&quot;hidden&quot;,j=&quot;100%&quot;;g.playlistcomponent=function(I,T){var N=I,B=N.skin,s=o.extend({},f,N.skin.getComponentSettings(&quot;playlist&quot;),T),O,C,r,w,u,A=-1,D,t,v=60,x={background:undefined,divider:undefined,item:undefined,itemOver:undefined,itemImage:undefined,itemActive:undefined};this.element=function(){return O};this.redraw=function(){if(t){t.redraw()}};this.show=function(){_show(O)};this.hide=function(){_hide(O)};function y(){O=R(&quot;div&quot;,&quot;jwplaylist&quot;);O.id=N.id+&quot;_jwplayer_playlistcomponent&quot;;C=R(&quot;div&quot;,&quot;jwlistcontainer&quot;);S(O,C);Q();if(x.item){v=x.item.height}G();N.jwAddEventListener(q.JWPLAYER_PLAYLIST_LOADED,J);N.jwAddEventListener(q.JWPLAYER_PLAYLIST_ITEM,L)}function z(U){return&quot;#&quot;+O.id+(U?&quot; .&quot;+U:&quot;&quot;)}function G(){var X=0,W=0,U=0;o.clearCss(z());m(z(),{&quot;background-color&quot;:s.backgroundcolor});m(z(&quot;jwlist&quot;),{&quot;background-image&quot;:x.background?&quot; url(&quot;+x.background.src+&quot;)&quot;:&quot;&quot;,});m(z(&quot;jwlist *&quot;),{color:s.fontcolor,font:s.fontweight+&quot; &quot;+s.fontsize+&quot;px Arial, Helvetica, sans-serif&quot;});if(x.itemImage){X=(v-x.itemImage.height)/2+&quot;px &quot;;W=x.itemImage.width;U=x.itemImage.height}else{W=v*4/3;U=v}if(x.divider){m(z(&quot;jwplaylistdivider&quot;),{&quot;background-image&quot;:&quot;url(&quot;+x.divider.src+&quot;)&quot;,&quot;background-size&quot;:j+&quot; &quot;+x.divider.height+&quot;px&quot;,width:j,height:x.divider.height})}m(z(&quot;jwplaylistimg&quot;),{height:U,width:W,margin:X?(X+X+X+X):&quot;0 5px 0 0&quot;});m(z(&quot;jwlist li&quot;),{&quot;background-image&quot;:x.item?&quot;url(&quot;+x.item.src+&quot;)&quot;:&quot;&quot;,height:v,&quot;background-size&quot;:j+&quot; &quot;+v+&quot;px&quot;,cursor:&quot;pointer&quot;});var V={overflow:&quot;hidden&quot;};if(s.activecolor!==&quot;&quot;){V.color=s.activecolor}if(x.itemActive){V[&quot;background-image&quot;]=&quot;url(&quot;+x.itemActive.src+&quot;)&quot;}m(z(&quot;jwlist li.active&quot;),V);m(z(&quot;jwlist li.active .jwtitle&quot;),{color:s.titleactivecolor});var Y={overflow:&quot;hidden&quot;};if(s.overcolor!==&quot;&quot;){Y.color=s.overcolor}if(x.itemOver){Y[&quot;background-image&quot;]=&quot;url(&quot;+x.itemOver.src+&quot;)&quot;}m(z(&quot;jwlist li:hover&quot;),Y);m(z(&quot;jwlist li:hover .jwtitle&quot;),{color:s.titleovercolor});m(z(&quot;jwtextwrapper&quot;),{height:v-5,position:c});m(z(&quot;jwtitle&quot;),{height:15,overflow:&quot;hidden&quot;,display:&quot;inline-block&quot;,width:j,color:s.titlecolor,&quot;margin-top&quot;:X?X:7,&quot;line-height&quot;:13,&quot;font-size&quot;:s.titlesize,&quot;font-weight&quot;:s.titleweight});m(z(&quot;jwdescription&quot;),{display:&quot;block&quot;,&quot;font-size&quot;:s.fontsize,&quot;line-height&quot;:19,&quot;margin-top&quot;:5,overflow:&quot;hidden&quot;,height:v,position:c})}function F(){var U=R(&quot;ul&quot;,&quot;jwlist&quot;);U.id=O.id+&quot;_ul&quot;+Math.round(Math.random()*10000000);return U}function H(X){var ac=r[X],ab=R(&quot;li&quot;,&quot;jwitem&quot;),V;ab.id=u.id+&quot;_item_&quot;+X;if(X&gt;0){V=R(&quot;div&quot;,&quot;jwplaylistdivider&quot;);S(ab,V)}var Y=R(&quot;div&quot;,&quot;jwplaylistimg jwfill&quot;);if(M()&amp;&amp;(ac.image||ac[&quot;playlist.image&quot;]||x.itemImage)){var Z;if(ac[&quot;playlist.image&quot;]){Z=ac[&quot;playlist.image&quot;]}else{if(ac.image){Z=ac.image}else{if(x.itemImage){Z=x.itemImage.src}}}m(&quot;#&quot;+ab.id+&quot; .jwplaylistimg&quot;,{&quot;background-image&quot;:Z?&quot;url(&quot;+Z+&quot;)&quot;:null});S(ab,Y)}var U=R(&quot;div&quot;,&quot;jwtextwrapper&quot;);var aa=R(&quot;span&quot;,&quot;jwtitle&quot;);aa.innerHTML=(ac&amp;&amp;ac.title)?ac.title:&quot;&quot;;S(U,aa);if(ac.description){var W=R(&quot;span&quot;,&quot;jwdescription&quot;);W.innerHTML=ac.description;S(U,W)}S(ab,U);return ab}function R(V,U){var W=n.createElement(V);if(U){W.className=U}return W}function S(U,V){U.appendChild(V)}function J(V){C.innerHTML=&quot;&quot;;r=K();if(!r){return}items=[];u=F();for(var W=0;W&lt;r.length;W++){var U=H(W);U.onclick=P(W);S(u,U);items.push(U)}A=N.jwGetPlaylistIndex();if(o.isIOS()&amp;&amp;window.iScroll){O.innerHTML=&quot;&quot;;S(O,u);u.style.height=v*r.length+&quot;px&quot;;var X=new iScroll(O.id)}else{S(C,u);t=new g.playlistslider(O.id+&quot;_slider&quot;,N.skin,O,u)}}function K(){var V=N.jwGetPlaylist();var W=[];for(var U=0;U&lt;V.length;U++){if(!V[U][&quot;ova.hidden&quot;]){W.push(V[U])}}return W}function P(U){return function(){D=U;N.jwPlaylistItem(U);N.jwPlay(true)}}function E(){var U=N.jwGetPlaylistIndex();if(U==D){return}D=-1;if(o.isIOS()&amp;&amp;window.iScroll){u.scrollTop=U*v}else{if(t&amp;&amp;t.visible()){t.thumbPosition(U/(N.jwGetPlaylist().length-1))}}}function M(){return true}function L(U){if(A&gt;=0){n.getElementById(u.id+&quot;_item_&quot;+A).className=&quot;jwitem&quot;;A=U.index}n.getElementById(u.id+&quot;_item_&quot;+U.index).className=&quot;jwitem active&quot;;E()}function Q(){for(var U in x){x[U]=B.getSkinElement(&quot;playlist&quot;,U)}}y();return this};m(p,{position:a,width:j,height:j});o.dragStyle(p,&quot;none&quot;);m(p+&quot; .jwplaylistimg&quot;,{position:c,width:j,&quot;float&quot;:&quot;left&quot;,margin:&quot;0 5px 0 0&quot;,background:&quot;#000&quot;,overflow:e});m(p+&quot; .jwlist&quot;,{position:a,width:j,&quot;list-style&quot;:&quot;none&quot;,margin:0,padding:0});m(p+&quot; .jwlistcontainer&quot;,{position:a,overflow:e,width:j,height:j});m(p+&quot; .jwlist li&quot;,{width:j});m(p+&quot; .jwtextwrapper&quot;,{overflow:e});m(p+&quot; .jwplaylistdivider&quot;,{position:a})})(jwplayer.html5);(function(b){var d=jwplayer,a=d.utils,c=d.events;b.playlistloader=function(){var g=new c.eventdispatcher();a.extend(this,g);this.load=function(k){a.ajax(k,h,f)};function h(k){try{var n=k.responseXML.firstChild;if(b.parsers.localName(n)==&quot;xml&quot;){n=n.nextSibling}if(b.parsers.localName(n)!=&quot;rss&quot;){e(&quot;Not a valid RSS feed&quot;);return}var m=new d.playlist(b.parsers.rssparser.parse(n));m=j(m);if(m&amp;&amp;m.length&amp;&amp;m[0].sources&amp;&amp;m[0].sources.length&amp;&amp;m[0].sources[0].file){g.sendEvent(c.JWPLAYER_PLAYLIST_LOADED,{playlist:m})}else{e(&quot;No playable sources found&quot;)}}catch(l){e()}}function j(o){if(!o){return}var m=[],l,n,k;for(l=0;l&lt;o.length;l++){n=o[l];k=a.filterSources(n.sources);if(k&amp;&amp;k.length){n.sources=k;m.push(n)}}return m}function f(k){e(k.match(/invalid/i)?&quot;Not a valid RSS feed&quot;:&quot;&quot;)}function e(k){g.sendEvent(c.JWPLAYER_ERROR,{message:k?k:&quot;Error loading file&quot;})}}})(jwplayer.html5);(function(k){var a=jwplayer.events,r=jwplayer.utils,n=r.css,b=&quot;jwslider&quot;,p=&quot;jwslidertop&quot;,h=&quot;jwsliderbottom&quot;,f=&quot;jwrail&quot;,q=&quot;jwrailtop&quot;,o=&quot;jwrailback&quot;,m=&quot;jwrailbottom&quot;,c=&quot;jwthumb&quot;,u=&quot;jwthumbtop&quot;,j=&quot;jwthumbback&quot;,t=&quot;jwthumbbottom&quot;,e=document,s=window,v=undefined,g=&quot;absolute&quot;,l=&quot;100%&quot;;k.playlistslider=function(T,K,H,X){var M=K,V=T,Y=X,af,C,ac,Q,ag=0,U,ad,ai=true,D,P,ab,y,aa,w,E,O,S,ae,J;this.element=function(){return af};this.visible=function(){return ai};function G(){var ak,aj;af=ah(b,null,H);af.id=T;af.addEventListener(&quot;mousedown&quot;,B,false);af.addEventListener(&quot;click&quot;,Z,false);N();S=D.height;ae=P.height;n(W(),{width:ab.width});n(W(f),{top:S,bottom:ae});n(W(c),{top:S});ak=ah(p,D,af);aj=ah(h,P,af);C=ah(f,null,af);ac=ah(c,null,af);ak.addEventListener(&quot;mousedown&quot;,x(-1),false);aj.addEventListener(&quot;mousedown&quot;,x(1),false);ah(q,y,C);ah(o,ab,C,true);ah(m,aa,C);n(W(o),{top:y.height,bottom:aa.height});ah(u,E,ac);ah(j,w,ac,true);ah(t,O,ac);n(W(j),{top:E.height,bottom:O.height});I();if(Y){Y.addEventListener(&quot;mousewheel&quot;,A,false);Y.addEventListener(&quot;DOMMouseScroll&quot;,A,false)}}function W(aj){return&quot;#&quot;+af.id+(aj?&quot; .&quot;+aj:&quot;&quot;)}function ah(am,al,ak,aj){var an=e.createElement(&quot;div&quot;);if(am){an.className=am;if(al){n(W(am),{&quot;background-image&quot;:al.src?al.src:v,&quot;background-repeat&quot;:aj?&quot;repeat-y&quot;:&quot;no-repeat&quot;,height:aj?v:al.height})}}if(ak){ak.appendChild(an)}return an}function N(){D=F(&quot;sliderCapTop&quot;);P=F(&quot;sliderCapBottom&quot;);ab=F(&quot;sliderRail&quot;);y=F(&quot;sliderRailCapTop&quot;);aa=F(&quot;sliderRailCapBottom&quot;);w=F(&quot;sliderThumb&quot;);E=F(&quot;sliderThumbCapTop&quot;);O=F(&quot;sliderThumbCapBottom&quot;)}function F(aj){var ak=M.getSkinElement(&quot;playlist&quot;,aj);return ak?ak:{width:0,height:0,src:v}}var I=this.redraw=function(){clearTimeout(J);J=setTimeout(function(){if(Y&amp;&amp;Y.clientHeight){R(Y.parentNode.clientHeight/Y.clientHeight)}else{J=setTimeout(I,10)}},0)};function A(aj){if(!ai){return}aj=aj?aj:s.event;var ak=aj.detail?aj.detail*-1:aj.wheelDelta/40;L(ag-ak/10);if(aj.stopPropagation){aj.stopPropagation()}if(aj.preventDefault){aj.preventDefault()}aj.cancelBubble=true;aj.cancel=true;aj.returnValue=false;return false}function R(aj){if(aj&lt;0){aj=0}if(aj&gt;1){ai=false}else{ai=true;n(W(c),{height:Math.max(C.clientHeight*aj,E.height+O.height)})}n(W(),{visibility:ai?&quot;visible&quot;:&quot;hidden&quot;});if(Y){Y.style.width=ai?Y.parentElement.clientWidth-ab.width+&quot;px&quot;:&quot;&quot;}}var L=this.thumbPosition=function(aj){if(isNaN(aj)){aj=0}ag=Math.max(0,Math.min(1,aj));n(W(c),{top:S+(C.clientHeight-ac.clientHeight)*ag});if(X){X.style.top=(af.clientHeight-X.scrollHeight)*ag+&quot;px&quot;}};function B(aj){if(aj.button==0){Q=true}e.onselectstart=function(){return false};s.addEventListener(&quot;mousemove&quot;,Z,false);s.addEventListener(&quot;mouseup&quot;,z,false)}function Z(aj){if(Q||aj.type==&quot;click&quot;){var ao=r.bounds(C),al=ac.clientHeight/2,ak=ao.height-al,an=aj.pageY-ao.top,am=(an-al)/(ak-al);L(am)}}function x(aj){return function(ak){if(ak.button&gt;0){return}L(ag+(aj*0.05));U=setTimeout(function(){ad=setInterval(function(){L(ag+(aj*0.05))},50)},500)}}function z(){Q=false;s.removeEventListener(&quot;mousemove&quot;,Z);s.removeEventListener(&quot;mouseup&quot;,z);e.onselectstart=v;clearTimeout(U);clearInterval(ad)}G();return this};function d(){var w=[],x;for(x=0;x&lt;arguments.length;x++){w.push(&quot;.jwplaylist .&quot;+arguments[x])}return w.join(&quot;,&quot;)}n(d(b),{position:g,height:l,visibility:&quot;hidden&quot;,right:0,top:0,cursor:&quot;pointer&quot;,&quot;z-index&quot;:1});n(d(b)+&quot; *&quot;,{position:g,width:l,&quot;background-position&quot;:&quot;center&quot;,&quot;background-size&quot;:l+&quot; &quot;+l,});n(d(p,q,u),{top:0});n(d(h,m,t),{bottom:0})})(jwplayer.html5);(function(e){var l=jwplayer.utils,j=l.css,a=&quot;About JW Player &quot;,m=&quot;http://www.longtailvideo.com/jwpabout/?a=r&amp;v=&quot;,k=document,h=&quot;.jwclick&quot;,g=h+&quot;_item&quot;,f=&quot;100%&quot;,b=&quot;none&quot;,d=&quot;5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset&quot;,c=&quot;#FFF&quot;;e.rightclick=function(r,p){var x=r,q,w=l.extend({aboutlink:m+e.version+&quot;&amp;m=h&amp;e=o&quot;,abouttext:a+e.version+&quot;...&quot;},p),n=false,y,s;function v(){q=k.getElementById(x.id);y=t(h);y.id=x.id+&quot;_menu&quot;;y.style.display=b;q.oncontextmenu=o;y.onmouseover=function(){n=true};y.onmouseout=function(){n=false};k.addEventListener(&quot;mousedown&quot;,z,false);s=t(g);s.innerHTML=w.abouttext;s.onclick=u;y.appendChild(s);q.appendChild(y)}function t(A){var B=k.createElement(&quot;div&quot;);B.className=A.replace(&quot;.&quot;,&quot;&quot;);return B}function u(){window.location.href=w.aboutlink}function o(A){if(n){return}if(A==null){A=window.event}var D=A.target!=null?A.target:A.srcElement,B=l.bounds(q),C=B.top,E=B.left;y.style.display=b;y.style.left=A.pageX-E+&quot;px&quot;;y.style.top=A.pageY-C+&quot;px&quot;;y.style.display=&quot;block&quot;;A.preventDefault()}function z(){if(n){return}else{y.style.display=b}}this.element=function(){return y};v()};j(h,{&quot;background-color&quot;:c,&quot;-webkit-border-radius&quot;:5,&quot;-moz-border-radius&quot;:5,&quot;border-radius&quot;:5,height:&quot;auto&quot;,border:&quot;1px solid #bcbcbc&quot;,&quot;font-family&quot;:&#39;&quot;MS Sans Serif&quot;, &quot;Geneva&quot;, sans-serif&#39;,&quot;font-size&quot;:10,width:320,&quot;-webkit-box-shadow&quot;:d,&quot;-moz-box-shadow&quot;:d,&quot;box-shadow&quot;:d,position:&quot;absolute&quot;,&quot;z-index&quot;:999,},true);j(h+&quot; div&quot;,{padding:&quot;8px 21px&quot;,margin:&quot;0px&quot;,&quot;background-color&quot;:c,border:&quot;none&quot;,&quot;font-family&quot;:&#39;&quot;MS Sans Serif&quot;, &quot;Geneva&quot;, sans-serif&#39;,&quot;font-size&quot;:10,color:&quot;inherit&quot;},true);j(g,{padding:&quot;8px 21px&quot;,&quot;text-align&quot;:&quot;left&quot;,cursor:&quot;pointer&quot;},true);j(g+&quot;:hover&quot;,{&quot;background-color&quot;:&quot;#595959&quot;,color:c},true);j(g+&quot; a&quot;,{&quot;text-decoration&quot;:b,color:&quot;#000&quot;},true);j(h+&quot; hr&quot;,{width:f,padding:0,margin:0,border:&quot;1px #e9e9e9 solid&quot;},true)})(jwplayer.html5);(function(f){var h=jwplayer,l=h.utils,m=h.events,a=h.playlist,j=1,e=2,d=3,k=4,c=5,b=6,g=7;f.setup=function(t,I,J){var M=t,q=I,G=J,v={},D={},B,A=new m.eventdispatcher(),w=false,x=[];function u(){s(j,p);s(e,R,j);s(d,z,j);s(k,L,d);s(c,Q,k+&quot;,&quot;+e);s(b,K,c+&quot;,&quot;+d);s(g,E,b)}function s(S,U,T){x.push({name:S,method:U,depends:T})}function H(){for(var U=0;U&lt;x.length;U++){var S=x[U];if(P(S.depends)){x.splice(U,1);try{S.method();H()}catch(T){y(T.message)}return}}if(x.length&gt;0&amp;&amp;!w){setTimeout(H,500)}}function P(U){if(!U){return true}var T=U.toString().split(&quot;,&quot;);for(var S=0;S&lt;T.length;S++){if(!v[T[S]]){return false}}return true}function o(S){v[S]=true}function p(){o(j)}function R(){B=new f.skin();B.load(M.config.skin,C,O)}function C(S){o(e)}function O(S){y(&quot;Error loading skin: &quot;+S)}function z(){switch(l.typeOf(M.config.playlist)){case&quot;string&quot;:var S=new f.playlistloader();S.addEventListener(m.JWPLAYER_PLAYLIST_LOADED,n);S.addEventListener(m.JWPLAYER_ERROR,F);S.load(M.config.playlist);break;case&quot;array&quot;:r(new a(M.config.playlist))}}function n(S){r(S.playlist)}function r(S){M.setPlaylist(S);if(M.playlist[0].sources.length==0){y(&quot;Error loading playlist: No playable sources found&quot;)}else{o(d)}}function F(S){y(&quot;Error loading playlist: &quot;+S.message)}function L(){var T=M.playlist[M.item].image;if(T){var S=new Image();S.addEventListener(&quot;load&quot;,N,false);S.addEventListener(&quot;error&quot;,N,false);S.src=T;setTimeout(N,500)}else{o(k)}}function N(){o(k)}function Q(){q.setup(B);o(c)}function K(){o(b)}function E(){A.sendEvent(m.JWPLAYER_READY);o(g)}function y(S){w=true;A.sendEvent(m.JWPLAYER_ERROR,{message:S});q.setupError(S)}l.extend(this,A);this.start=H;u()}})(jwplayer.html5);(function(a){a.skin=function(){var b={};var d=false;this.load=function(g,f,e){new a.skinloader(g,function(h){d=true;b=h;if(typeof f==&quot;function&quot;){f()}},function(h){if(typeof e==&quot;function&quot;){e(h)}})};this.getSkinElement=function(e,f){e=c(e);f=c(f);if(d){try{return b[e].elements[f]}catch(g){jwplayer.utils.log(&quot;No such skin component / element: &quot;,[e,f])}}return null};this.getComponentSettings=function(e){e=c(e);if(d&amp;&amp;b&amp;&amp;b[e]){return b[e].settings}return null};this.getComponentLayout=function(e){e=c(e);if(d){var f=b[e].layout;if(f&amp;&amp;(f.left||f.right||f.center)){return b[e].layout}}return null};function c(e){return e.toLowerCase()}}})(jwplayer.html5);(function(b){var a=jwplayer.utils,c=&quot;Skin formatting error&quot;;b.skinloader=function(f,l,h){var j={},n=l,v=h,s=true,w,x=f,g=false,u;function z(){if(typeof x!=&quot;string&quot;||x===&quot;&quot;){y(b.defaultskin().xml)}else{if(a.extension(x)!=&quot;xml&quot;){v(&quot;Skin not a valid file type&quot;);return}var A=new b.skinloader(&quot;&quot;,o,v)}}function o(A){j=A;a.ajax(a.getAbsolutePath(x),function(B){try{if(a.exists(B.responseXML)){y(B.responseXML);return}}catch(C){v(c)}},function(B){v(B)})}function m(A,B){return A?A.getElementsByTagName(B):null}function y(F){var E=m(F,&quot;skin&quot;)[0],M=m(E,&quot;component&quot;),Y=E.getAttribute(&quot;target&quot;);if(!Y||parseFloat(Y)&gt;parseFloat(jwplayer.version)){v(&quot;Incompatible player version&quot;)}if(M.length===0){n(j);return}for(var P=0;P&lt;M.length;P++){var K=k(M[P].getAttribute(&quot;name&quot;)),J={settings:{},elements:{},layout:{}},O=m(m(M[P],&quot;elements&quot;)[0],&quot;element&quot;);j[K]=J;for(var N=0;N&lt;O.length;N++){q(O[N],K)}var G=m(M[P],&quot;settings&quot;)[0];if(G&amp;&amp;G.childNodes.length&gt;0){var S=m(G,&quot;setting&quot;);for(var X=0;X&lt;S.length;X++){var Z=S[X].getAttribute(&quot;name&quot;);var Q=S[X].getAttribute(&quot;value&quot;);if(/color$/.test(Z)){Q=a.stringToColor(Q)}J.settings[k(Z)]=Q}}var T=m(M[P],&quot;layout&quot;)[0];if(T&amp;&amp;T.childNodes.length&gt;0){var U=m(T,&quot;group&quot;);for(var D=0;D&lt;U.length;D++){var I=U[D],H={elements:[]};J.layout[k(I.getAttribute(&quot;position&quot;))]=H;for(var W=0;W&lt;I.attributes.length;W++){var L=I.attributes[W];H[L.name]=L.value}var V=m(I,&quot;*&quot;);for(var C=0;C&lt;V.length;C++){var A=V[C];H.elements.push({type:A.tagName});for(var B=0;B&lt;A.attributes.length;B++){var R=A.attributes[B];H.elements[C][k(R.name)]=R.value}if(!a.exists(H.elements[C].name)){H.elements[C].name=A.tagName}}}}s=false;p()}}function p(){clearInterval(w);if(!g){w=setInterval(function(){e()},100)}}function q(F,E){E=k(E);var D=new Image(),A=k(F.getAttribute(&quot;name&quot;)),C=F.getAttribute(&quot;src&quot;),H;if(C.indexOf(&quot;data:image/png;base64,&quot;)===0){H=C}else{var B=a.getAbsolutePath(x);var G=B.substr(0,B.lastIndexOf(&quot;/&quot;));H=[G,E,C].join(&quot;/&quot;)}j[E].elements[A]={height:0,width:0,src:&quot;&quot;,ready:false,image:D};D.onload=function(I){r(D,A,E)};D.onerror=function(I){g=true;p();v(&quot;Skin image not found: &quot;+this.src)};D.src=H}function d(){for(var B in j){var D=j[B];for(var A in D.elements){var E=D.elements[A];var C=E.image;C.onload=null;C.onerror=null;delete E.image;delete D.elements[A]}delete j[B]}}function e(){for(var A in j){if(A!=&quot;properties&quot;){for(var B in j[A].elements){if(!t(A,B).ready){return}}}}if(s==false){clearInterval(w);n(j)}}function r(B,D,C){var A=t(C,D);if(A){A.height=B.height;A.width=B.width;A.src=B.src;A.ready=true;p()}else{a.log(&quot;Loaded an image for a missing element: &quot;+C+&quot;.&quot;+D)}}function t(A,B){return j[k(A)]?j[k(A)].elements[k(B)]:null}function k(A){return A?A.toLowerCase():&quot;&quot;}z()}})(jwplayer.html5);(function(c){var a=c.utils,d=c.events,b=d.state;c.html5.video=function(X){var R={abort:A,canplay:r,canplaythrough:A,durationchange:D,emptied:A,ended:m,error:n,loadeddata:A,loadedmetadata:r,loadstart:A,pause:W,play:W,playing:W,progress:E,ratechange:A,readystatechange:A,seeked:I,seeking:A,stalled:A,suspend:A,timeupdate:Y,volumechange:k,waiting:v},y=a.extensionmap,G,M,ae,w,ad,p,U,ac,L,S,H,e=b.IDLE,N,o=-1,K=-1,O=new d.eventdispatcher(),t=false,J,F=-1,g=this;a.extend(g,O);function Z(af){w=af;T();w.controls=true;w.controls=false;t=true}function T(){for(var af in R){w.addEventListener(af,R[af],false)}}function s(af,ag){if(t){O.sendEvent(af,ag)}}function A(af){}function D(ag){if(!t){return}var af=ab(w.duration);if(ad!=af){ad=af}Y()}function Y(af){if(!t){return}if(e==b.PLAYING&amp;&amp;!H){p=ab(w.currentTime);s(d.JWPLAYER_MEDIA_TIME,{position:p,duration:ad});if(p&gt;=ad&amp;&amp;ad&gt;3&amp;&amp;!a.isAndroid(2.3)){V()}}}function ab(af){return Number(af.toFixed(1))}function r(af){A(af);if(!t){return}if(!ac){ac=true;q()}}function E(af){if(ac&amp;&amp;S&gt;0){setTimeout(function(){B(S)},200)}}function q(){if(!L){L=true;s(d.JWPLAYER_MEDIA_BUFFER_FULL)}}function W(af){if(!t||H){return}if(w.paused){if(w.currentTime==w.duration&amp;&amp;w.duration&gt;3){V()}else{f()}}else{x(b.PLAYING)}}function v(af){if(!t){return}x(b.BUFFERING)}function n(af){if(!t){return}a.log(&quot;Error playing media: %o&quot;,w.error);O.sendEvent(d.JWPLAYER_MEDIA_ERROR,{message:&quot;Error loading media: File could not be played&quot;});x(b.IDLE)}function l(ai){var af;if(a.typeOf(ai)==&quot;array&quot;&amp;&amp;ai.length&gt;0){af=[];for(var ah=0;ah&lt;ai.length;ah++){var aj=ai[ah],ag={};ag.label=Q(aj)?Q(aj):ah;if(aj.width){ag.width=aj.width}if(aj.height){ag.height=aj.height}if(aj.bitrate){ag.bitrate=aj.bitrate}af[ah]=ag}}return af}function j(ag){var af=l(ag);if(af){O.sendEvent(d.JWPLAYER_MEDIA_LEVELS,{levels:af,currentQuality:F})}}function Q(af){if(af.label){return af.label}else{if(af.height){return af.height+&quot;p&quot;}else{if(af.width){return Math.round(af.width*9/16)+&quot;p&quot;}else{if(af.bitrate){return af.bitrate+&quot;kbps&quot;}else{return 0}}}}}g.load=function(af){if(!t){return}G=af;S=0;ad=af.duration?af.duration:-1;p=0;J=G.sources;C();j(J);u()};function C(){if(F&lt;0){F=0}var ah=J.slice(0).sort(function(ak,aj){return Number(aj.width)-Number(ak.width)}),ag=a.bounds(w),af,ai;for(af=0;af&lt;ah.length;af++){ai=ah[af];if(ai.width&amp;&amp;ai.width&lt;=ag.width){F=J.indexOf(ai);break}}}function u(){ac=false;L=false;M=J[F];x(b.BUFFERING);w.src=M.file;w.load();o=setInterval(h,100);if(a.isIPod()||a.isAndroid(2.3)){q()}}var z=g.stop=function(){if(!t){return}w.removeAttribute(&quot;src&quot;);if(!a.isIE()){w.load()}F=-1;clearInterval(o);x(b.IDLE)};g.play=function(){if(t&amp;&amp;!H){w.play()}};var f=g.pause=function(){if(t){w.pause();x(b.PAUSED)}};g.seekDrag=function(af){if(!t){return}H=af;if(af){w.pause()}else{w.play()}};var B=g.seek=function(af){if(!t){return}if(ac){S=0;w.currentTime=af}else{S=af}};function I(){if(!H){s(d.JWPLAYER_MEDIA_SEEK,{position:p,offset:w.currentTime})}}var aa=g.volume=function(af){w.volume=Math.min(Math.max(0,af/100),1)};function k(af){s(d.JWPLAYER_MEDIA_VOLUME,{volume:Math.round(w.volume*100)});s(d.JWPLAYER_MEDIA_MUTE,{mute:w.muted})}g.mute=function(af){if(!a.exists(af)){af=!w.mute}if(af){if(!w.muted){N=w.volume*100;w.muted=true;aa(0)}}else{if(w.muted){aa(N);w.muted=false}}};function x(af){if(af==b.PAUSED&amp;&amp;e==b.IDLE){return}if(H){return}if(e!=af){var ag=e;e=af;s(d.JWPLAYER_PLAYER_STATE,{oldstate:ag,newstate:af})}}function h(){if(!t){return}var af=P();if(af!=K){K=af;s(d.JWPLAYER_MEDIA_BUFFER,{bufferPercent:Math.round(K*100)})}if(af&gt;=1){clearInterval(o)}}function P(){if(w.buffered.length==0||w.duration==0){return 0}else{return w.buffered.end(w.buffered.length-1)/w.duration}}function m(){if(a.isAndroid(2.3)){V()}}function V(){if(e!=b.IDLE){F=-1;x(b.IDLE);s(d.JWPLAYER_MEDIA_BEFORECOMPLETE);s(d.JWPLAYER_MEDIA_COMPLETE)}}g.detachMedia=function(){t=false;return w};g.attachMedia=function(){t=true};g.getTag=function(){return w};g.audioMode=function(){if(!J){return false}var af=J[0].type;return(af==&quot;aac&quot;||af==&quot;mp3&quot;||af==&quot;vorbis&quot;)};g.setCurrentQuality=function(ag){if(F==ag){return}ag=parseInt(ag);if(ag&gt;=0){if(J&amp;&amp;J.length&gt;ag){F=ag;s(d.JWPLAYER_MEDIA_LEVEL_CHANGED,{currentQuality:ag,levels:l(J)});var af=w.currentTime;u();g.seek(af)}}};g.getCurrentQuality=function(){return F};g.getQualityLevels=function(){return l(J)};Z(X)}})(jwplayer);(function(l){var p=jwplayer,x=p.utils,a=jwplayer.events,f=a.state,r=x.css,t=x.bounds,w=x.isMobile(),d=x.isIPad(),A=x.isIPod(),h=x.isAndroid(),g=document,o=&quot;jwplayer&quot;,b=&quot;.&quot;+o+&quot;.jwfullscreen&quot;,q=&quot;jwmain&quot;,z=&quot;jwinstream&quot;,y=&quot;jwvideo&quot;,c=&quot;jwcontrols&quot;,e=&quot;jwplaylistcontainer&quot;,k=true,s=false,v=&quot;opacity .5s ease&quot;,n=&quot;100%&quot;,j=&quot;absolute&quot;,u=&quot; !important&quot;,m=&quot;hidden&quot;;l.view=function(N,I){var M=N,K=I,an,Z,X,au,D=0,aF=2000,F,aO,S,aE,aP,aA,aq,aw=x.extend({},K.componentConfig(&quot;logo&quot;)),ao,aJ,U,ah=(K.mobilecontrols),aG=s,ai,Q,aB,ax=new a.eventdispatcher();x.extend(this,ax);function aL(){an=aI(&quot;div&quot;,o);an.id=M.id;aj(K.width,K.height);var aS=document.getElementById(M.id);aS.parentNode.replaceChild(an,aS)}this.getCurrentCaptions=function(){return ao.getCurrentCaptions()};this.setCurrentCaptions=function(aS){ao.setCurrentCaptions(aS)};this.getCaptionsList=function(){return ao.getCaptionsList()};this.setup=function(aT){if(aG){return}M.skin=aT;Z=aI(&quot;span&quot;,q);aO=aI(&quot;span&quot;,y);F=K.getVideo().getTag();aO.appendChild(F);X=aI(&quot;span&quot;,c);S=aI(&quot;span&quot;,z);au=aI(&quot;span&quot;,e);C();Z.appendChild(aO);Z.appendChild(X);Z.appendChild(S);var aS=aI(&quot;div&quot;);aS.style.position=&quot;absolute&quot;;aS.style.width=&quot;100%&quot;;aS.style.height=&quot;100%&quot;;aS.appendChild(Z);aS.appendChild(au);an.appendChild(aS);g.addEventListener(&quot;webkitfullscreenchange&quot;,aK,s);F.addEventListener(&quot;webkitbeginfullscreen&quot;,aK,s);F.addEventListener(&quot;webkitendfullscreen&quot;,aK,s);g.addEventListener(&quot;mozfullscreenchange&quot;,aK,s);g.addEventListener(&quot;keydown&quot;,ay,s);M.jwAddEventListener(a.JWPLAYER_PLAYER_READY,aH);M.jwAddEventListener(a.JWPLAYER_PLAYER_STATE,P);M.jwAddEventListener(a.JWPLAYER_PLAYLIST_COMPLETE,aD);P({newstate:f.IDLE});X.addEventListener(&quot;mouseout&quot;,av,s);X.addEventListener(&quot;mousemove&quot;,aQ,s);if(x.isIE()){aO.addEventListener(&quot;mousemove&quot;,aQ,s);aO.addEventListener(&quot;click&quot;,aP.clickHandler)}O(aE);O(aA);O(aq)};function O(aS){if(aS){aS.element().addEventListener(&quot;mousemove&quot;,al,s);aS.element().addEventListener(&quot;mouseout&quot;,aN,s)}}function aI(aT,aS){var aU=g.createElement(aT);if(aS){aU.className=aS}return aU}function aQ(){clearTimeout(D);if(M.jwGetState()==f.PLAYING||M.jwGetState()==f.PAUSED){az();if(!aC){D=setTimeout(av,aF)}}}var aC=s;function al(){clearTimeout(D);aC=k}function aN(){aC=s}function av(){if(M.jwGetState()!=f.BUFFERING){R();ad();ab()}clearTimeout(D);D=0}function ap(aS){ax.sendEvent(aS.type,aS)}function C(){var aU=K.width,aS=K.height,aV=K.componentConfig(&quot;controlbar&quot;),aT=K.componentConfig(&quot;display&quot;);G(aS);ao=new l.captions(M,K.captions);ao.addEventListener(a.JWPLAYER_CAPTIONS_LIST,ap);ao.addEventListener(a.JWPLAYER_CAPTIONS_CHANGED,ap);X.appendChild(ao.element());aP=new l.display(M,aT);aP.addEventListener(a.JWPLAYER_DISPLAY_CLICK,ap);if(U){aP.hidePreview(k)}X.appendChild(aP.element());aq=new l.logo(M,aw);X.appendChild(aq.element());aA=new l.dock(M,K.componentConfig(&quot;dock&quot;));X.appendChild(aA.element());if(M.edition){new l.rightclick(M,{abouttext:K.abouttext,aboutlink:K.aboutlink})}else{new l.rightclick(M,{})}if(K.playlistsize&amp;&amp;K.playlistposition&amp;&amp;K.playlistposition!=&quot;none&quot;){aJ=new l.playlistcomponent(M,{});au.appendChild(aJ.element())}if(!w||ah){aE=new l.controlbar(M,aV);X.appendChild(aE.element());if(ah){az()}}setTimeout(function(){aj(aU,aS)},0)}var ae=this.fullscreen=function(aS){if(!x.exists(aS)){aS=!K.fullscreen}if(aS){if(!K.fullscreen){ak(k);if(an.requestFullScreen){an.requestFullScreen()}else{if(an.mozRequestFullScreen){an.mozRequestFullScreen()}else{if(an.webkitRequestFullScreen){an.webkitRequestFullScreen()}}}K.setFullscreen(k)}}else{ak(s);if(K.fullscreen){K.setFullscreen(s);if(g.cancelFullScreen){g.cancelFullScreen()}else{if(g.mozCancelFullScreen){g.mozCancelFullScreen()}else{if(g.webkitCancelFullScreen){g.webkitCancelFullScreen()}else{if(F.webkitExitFullScreen){F.webkitExitFullScreen()}}}}}if(d&amp;&amp;M.jwGetState()==f.PAUSED){setTimeout(E,500)}}ag(aE);ag(aP);ag(aA);L();if(K.fullscreen){aB=setInterval(L,200)}else{clearInterval(aB)}ax.sendEvent(a.JWPLAYER_RESIZE)};function ag(aS){if(aS){aS.redraw()}}function aj(aU,aS){if(x.exists(aU)&amp;&amp;x.exists(aS)){K.width=aU;K.height=aS}an.style.width=isNaN(aU)?aU:aU+&quot;px&quot;;an.style.height=isNaN(aS)?aS:aS+&quot;px&quot;;if(aP){aP.redraw()}if(aE){aE.redraw()}if(aq){setTimeout(function(){aq.offset(aE&amp;&amp;aq.position().indexOf(&quot;bottom&quot;)&gt;=0?aE.element().clientHeight+aE.margin():0);if(aA){aA.offset(aq.position()==&quot;top-left&quot;?aq.element().clientWidth+aq.margin():0)}},500)}var aW=K.playlistsize,aX=K.playlistposition;if(aJ&amp;&amp;aW&amp;&amp;(aX==&quot;right&quot;||aX==&quot;bottom&quot;)){aJ.redraw();var aT={display:&quot;block&quot;},aV={};aT[aX]=0;aV[aX]=aW;if(aX==&quot;right&quot;){aT.width=aW}else{aT.height=aW}r(at(e),aT);r(at(q),aV)}G(aS);L();ax.sendEvent(a.JWPLAYER_RESIZE);return}function G(aS){U=((!w||ah)&amp;&amp;aS&lt;=40&amp;&amp;aS.toString().indexOf(&quot;%&quot;)&lt;0);if(aE){if(U){aE.audioMode(k);az();aP.hidePreview(k);V();aa(s)}else{aE.audioMode(s);aM(M.jwGetState())}}if(aq&amp;&amp;U){ab()}an.style.backgroundColor=U?&quot;transparent&quot;:&quot;#000&quot;}function L(){if(F){x.stretch(K.stretching,F,aO.clientWidth,aO.clientHeight,F.videoWidth,F.videoHeight)}}this.resize=aj;this.resizeMedia=L;var am=this.completeSetup=function(){r(at(),{opacity:1})};function ay(aS){if(K.fullscreen){switch(aS.keyCode){case 27:ae(s);break}}}function ak(aS){if(aS){an.className+=&quot; jwfullscreen&quot;}else{an.className=an.className.replace(/\s+jwfullscreen/,&quot;&quot;)}}function aR(){var aS=[g.mozFullScreenElement,g.webkitCurrentFullScreenElement,F.webkitDisplayingFullscreen];for(var aT=0;aT&lt;aS.length;aT++){if(aS[aT]&amp;&amp;(!aS[aT].id||aS[aT].id==M.id)){return k}}return s}function aK(aS){var aT=aR();if(K.fullscreen!=aT){ae(aT)}}function W(){if(aE&amp;&amp;K.controlbar){aE.show()}}function R(){if(aE&amp;&amp;!U&amp;&amp;!ah){aE.hide()}}function J(){if(aA&amp;&amp;!U&amp;&amp;(!w||ai)){aA.show()}}function ad(){if(aA&amp;&amp;!(ai||ah)){aA.hide()}}function B(){if(aq&amp;&amp;!U){aq.show()}}function ab(){if(aq&amp;&amp;(!ah||U)){aq.hide(U)}}function E(){if(aP&amp;&amp;K.controls&amp;&amp;!U){if(!A||M.jwGetState()==f.IDLE){aP.show()}}if(w&amp;&amp;!ah){if(h){X.style.display=&quot;block&quot;}if(!(w&amp;&amp;K.fullscreen)){F.controls=false}}}function V(){if(aP){if(w&amp;&amp;!ah){if(h){X.style.display=&quot;none&quot;}F.controls=true}aP.hide()}}function T(){R();ad();ab();H()}function az(){if(K.controls||U){W();J();H()}B()}function H(){return;var aS=t(Z).height,aT=0;if(aE&amp;&amp;aE.visible){aS-=t(aE.element()).height}if(aA&amp;&amp;aA.visible){aT=t(aA.element()).height}if(aA){}}function Y(aT,aS){if(aS.right&lt;aT.left||aS.left&gt;aT.right){return aT}if(aS.bottom&lt;aT.top||aS.top&gt;aT.bottom){return aT}var aU=(aS.y&gt;aS.height/2),aV={x:aT.x,y:aU?aT.y:aS.bottom,width:aT.width,}}function aa(aS){aS=aS&amp;&amp;!U;r(at(y),{visibility:aS?&quot;visible&quot;:&quot;hidden&quot;,opacity:aS?1:0})}function aD(){ai=k;ae(false);if(K.controls){J()}}function aH(aS){Q=k}var ac;function P(aS){ai=s;clearTimeout(ac);ac=setTimeout(function(){aM(aS.newstate)},100)}function aM(aS){switch(aS){case f.PLAYING:if(!K.getVideo().audioMode()||w){aa(k);L();aP.hidePreview(k);if(w){if(!(d&amp;&amp;ah)){V()}}}else{aa(s);aP.hidePreview(U)}aQ();break;case f.IDLE:if(!h){aa(s)}av();if(!U){aP.hidePreview(s);E();if(!aw.hide){B()}}break;case f.BUFFERING:E();if(w){aa(k)}else{az()}break;case f.PAUSED:E();if(!w||ah){az()}break}}function at(aS){return&quot;#&quot;+M.id+(aS?&quot; .&quot;+aS:&quot;&quot;)}this.setupInstream=function(aS,aT){ar(at(z),k);ar(at(c),s);S.appendChild(aS);_instreamVideo=aT;P({newstate:f.PLAYING});_instreamMode=k};var af=this.destroyInstream=function(){ar(at(z),s);ar(at(c),k);S.innerHTML=&quot;&quot;;_instreamVideo=null;_instreamMode=s;aj(K.width,K.height)};this.setupError=function(aS){aG=true;jwplayer.embed.errorScreen(an,aS);am()};function ar(aS,aT){r(aS,{display:aT?&quot;block&quot;:&quot;none&quot;})}this.addButton=function(aU,aS,aT,aV){if(aA){aA.addButton(aU,aS,aT,aV)}};this.removeButton=function(aS){if(aA){aA.removeButton(aS)}};this.setControls=function(aT){var aU=K.controls,aS=aT?k:s;K.controls=aS;if(aS!=aU){if(aS){E()}else{T();V()}ax.sendEvent(a.JWPLAYER_CONTROLS,{controls:aS})}};this.getSafeRegion=function(){var aZ=K.controls,a0=x.bounds(Z),aU=a0.top,aX=x.bounds(aE.element()),aT=(aA.numButtons()&gt;0),aW=x.bounds(aA.element()),aV=x.bounds(aq.element()),aY=(aq.position().indexOf(&quot;top&quot;)==0),aS={};aS.x=0;aS.y=Math.max(aT?(aW.top+aW.height-aU):0,aY?(aV.top+aV.height-aU):0);aS.width=a0.width;aS.height=(aY?aX.top:aV.top)-aS.y-aU;return{x:0,y:aZ?aS.y:0,width:aZ?aS.width:0,height:aZ?aS.height:0}};aL()};r(&quot;.&quot;+o,{position:&quot;relative&quot;,opacity:0,&quot;min-height&quot;:x.isMobile()?200:0,&quot;-webkit-transition&quot;:v,&quot;-moz-transition&quot;:v,&quot;-o-transition&quot;:v});r(&quot;.&quot;+q,{position:j,left:0,right:0,top:0,bottom:0,&quot;-webkit-transition&quot;:v,&quot;-moz-transition&quot;:v,&quot;-o-transition&quot;:v});r(&quot;.&quot;+y+&quot; ,.&quot;+c,{position:j,height:n,width:n,&quot;-webkit-transition&quot;:v,&quot;-moz-transition&quot;:v,&quot;-o-transition&quot;:v});r(&quot;.&quot;+y,{visibility:&quot;hidden&quot;,overflow:&quot;hidden&quot;,cursor:&quot;pointer&quot;});r(&quot;.&quot;+y+&quot; video&quot;,{background:&quot;transparent&quot;,width:n,height:n});r(&quot;.&quot;+e,{position:j,height:n,width:n,display:&quot;none&quot;});r(&quot;.&quot;+z,{position:j,top:0,left:0,bottom:0,right:0,display:&quot;none&quot;});r(b,{width:n,height:n,left:0,right:0,top:0,bottom:0,&quot;z-index&quot;:1000,position:&quot;fixed&quot;},k);r(b+&quot; .&quot;+q,{left:0,right:0,top:0,bottom:0},k);r(b+&quot; .&quot;+e,{display:&quot;none&quot;},k);r(&quot;.&quot;+o+&quot; .jwuniform&quot;,{&quot;background-size&quot;:&quot;contain&quot;+u});r(&quot;.&quot;+o+&quot; .jwfill&quot;,{&quot;background-size&quot;:&quot;cover&quot;+u,&quot;background-position&quot;:&quot;center&quot;});r(&quot;.&quot;+o+&quot; .jwexactfit&quot;,{&quot;background-size&quot;:n+&quot; &quot;+n+u})})(jwplayer.html5);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.05629s from github-fe121-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-Fhzsf0y5oYf2bC7Lj1nJCY4q1kRYr5F+xy+dYda4CJs=" src="https://assets-cdn.github.com/assets/frameworks-161cec7f4cb9a187f66c2ecb8f59c9098e2ad64458af917ec72f9d61d6b8089b.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-6GclomzQZhC8tOsFlcV3/1XOAni+DpFzV8KEBX3gDAQ=" src="https://assets-cdn.github.com/assets/github-e86725a26cd06610bcb4eb0595c577ff55ce0278be0e917357c284057de00c04.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

