


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>jwplayer/jwplayer.js at jw6-rc4 · jwplayer/jwplayer · GitHub</title>
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

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="7B8A6CEA:45C8:1BD51FC1:562A18A9" name="octolytics-dimension-request_id" />

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
      <a class="btn" href="/login?return_to=%2Fjwplayer%2Fjwplayer%2Fblob%2Fjw6-rc4%2Fjwplayer.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
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
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="4d33f8094b399bafb97d9c4b06ecc01e98bd2a2b" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="K6gE69f1FC1Y0j87cP1ijaps4UQXplEWXGtdJ74vRs/wcXns6hWy62RWr85ompnheJgVTyOgiMznUq4qKSJ0mA==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form> or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="4d33f8094b399bafb97d9c4b06ecc01e98bd2a2b" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6Cf6LU4BrhfSY1J5+brgIEmU/ua4GpTZLHEoDiv1Cb8FwTrxfAus3YJqpx/EOCvebtvRVsnXF0X6VFwKuy4f4Q==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
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

          

<a href="/jwplayer/jwplayer/blob/b9af2e085d6e753a2a2e4aef8300453193c8ab59/jwplayer.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:51044f6d523e0269cce6a209cf7ec78c -->

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
               href="/jwplayer/jwplayer/blob/bugfix/ad-skip-button-and-overlay-small-player/jwplayer.js"
               data-name="bugfix/ad-skip-button-and-overlay-small-player"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/ad-skip-button-and-overlay-small-player">
                bugfix/ad-skip-button-and-overlay-small-player
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/add-preload-to-source-level/jwplayer.js"
               data-name="bugfix/add-preload-to-source-level"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/add-preload-to-source-level">
                bugfix/add-preload-to-source-level
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/android-youtube-stuck/jwplayer.js"
               data-name="bugfix/android-youtube-stuck"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/android-youtube-stuck">
                bugfix/android-youtube-stuck
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/androidhls-false-play-hls/jwplayer.js"
               data-name="bugfix/androidhls-false-play-hls"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/androidhls-false-play-hls">
                bugfix/androidhls-false-play-hls
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/api-controls-event/jwplayer.js"
               data-name="bugfix/api-controls-event"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/api-controls-event">
                bugfix/api-controls-event
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/autoselect-subtitle-tracks/jwplayer.js"
               data-name="bugfix/autoselect-subtitle-tracks"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/autoselect-subtitle-tracks">
                bugfix/autoselect-subtitle-tracks
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/chrome-power-save-flash-throttle/jwplayer.js"
               data-name="bugfix/chrome-power-save-flash-throttle"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/chrome-power-save-flash-throttle">
                bugfix/chrome-power-save-flash-throttle
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/controller-errors-2/jwplayer.js"
               data-name="bugfix/controller-errors-2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/controller-errors-2">
                bugfix/controller-errors-2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/dvr-tooltip/jwplayer.js"
               data-name="bugfix/dvr-tooltip"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/dvr-tooltip">
                bugfix/dvr-tooltip
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/error-event-cleared/jwplayer.js"
               data-name="bugfix/error-event-cleared"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/error-event-cleared">
                bugfix/error-event-cleared
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/error-event-flash-slow/jwplayer.js"
               data-name="bugfix/error-event-flash-slow"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/error-event-flash-slow">
                bugfix/error-event-flash-slow
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/firefox-throttle/jwplayer.js"
               data-name="bugfix/firefox-throttle"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/firefox-throttle">
                bugfix/firefox-throttle
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/fix-flash-replay/jwplayer.js"
               data-name="bugfix/fix-flash-replay"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/fix-flash-replay">
                bugfix/fix-flash-replay
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/fix-utils-bug/jwplayer.js"
               data-name="bugfix/fix-utils-bug"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/fix-utils-bug">
                bugfix/fix-utils-bug
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/flash-throttle-without-swc/jwplayer.js"
               data-name="bugfix/flash-throttle-without-swc"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/flash-throttle-without-swc">
                bugfix/flash-throttle-without-swc
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/flash-throttling/jwplayer.js"
               data-name="bugfix/flash-throttling"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/flash-throttling">
                bugfix/flash-throttling
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/flash-webvtt-mpegts/jwplayer.js"
               data-name="bugfix/flash-webvtt-mpegts"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/flash-webvtt-mpegts">
                bugfix/flash-webvtt-mpegts
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/flv-ad-creative-not-playing/jwplayer.js"
               data-name="bugfix/flv-ad-creative-not-playing"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/flv-ad-creative-not-playing">
                bugfix/flv-ad-creative-not-playing
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/hd-menu/jwplayer.js"
               data-name="bugfix/hd-menu"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/hd-menu">
                bugfix/hd-menu
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/hd-menu-2/jwplayer.js"
               data-name="bugfix/hd-menu-2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/hd-menu-2">
                bugfix/hd-menu-2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/html5-ios-paused/jwplayer.js"
               data-name="bugfix/html5-ios-paused"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/html5-ios-paused">
                bugfix/html5-ios-paused
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/ios-fullscreen/jwplayer.js"
               data-name="bugfix/ios-fullscreen"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/ios-fullscreen">
                bugfix/ios-fullscreen
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/logo-hidden-with-controls-hidden/jwplayer.js"
               data-name="bugfix/logo-hidden-with-controls-hidden"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/logo-hidden-with-controls-hidden">
                bugfix/logo-hidden-with-controls-hidden
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/overlays-no-cursor/jwplayer.js"
               data-name="bugfix/overlays-no-cursor"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/overlays-no-cursor">
                bugfix/overlays-no-cursor
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/polyfill-resolve-fix/jwplayer.js"
               data-name="bugfix/polyfill-resolve-fix"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/polyfill-resolve-fix">
                bugfix/polyfill-resolve-fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/poster-image-not-displayed/jwplayer.js"
               data-name="bugfix/poster-image-not-displayed"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/poster-image-not-displayed">
                bugfix/poster-image-not-displayed
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/postroll-repeats-single-playlist/jwplayer.js"
               data-name="bugfix/postroll-repeats-single-playlist"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/postroll-repeats-single-playlist">
                bugfix/postroll-repeats-single-playlist
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/preload-flash-fix/jwplayer.js"
               data-name="bugfix/preload-flash-fix"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/preload-flash-fix">
                bugfix/preload-flash-fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix-preload-playlist-item/jwplayer.js"
               data-name="bugfix-preload-playlist-item"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix-preload-playlist-item">
                bugfix-preload-playlist-item
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/resize-events/jwplayer.js"
               data-name="bugfix/resize-events"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/resize-events">
                bugfix/resize-events
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/seeked-event-fired-on-start/jwplayer.js"
               data-name="bugfix/seeked-event-fired-on-start"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/seeked-event-fired-on-start">
                bugfix/seeked-event-fired-on-start
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/seeking-with-tooltip/jwplayer.js"
               data-name="bugfix/seeking-with-tooltip"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/seeking-with-tooltip">
                bugfix/seeking-with-tooltip
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/skip-ad-button-legibility/jwplayer.js"
               data-name="bugfix/skip-ad-button-legibility"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/skip-ad-button-legibility">
                bugfix/skip-ad-button-legibility
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/trial-align/jwplayer.js"
               data-name="bugfix/trial-align"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/trial-align">
                bugfix/trial-align
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/unprefixed-item-class/jwplayer.js"
               data-name="bugfix/unprefixed-item-class"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/unprefixed-item-class">
                bugfix/unprefixed-item-class
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/update-buffer-ontime/jwplayer.js"
               data-name="bugfix/update-buffer-ontime"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/update-buffer-ontime">
                bugfix/update-buffer-ontime
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/utils-fail-unit-tests/jwplayer.js"
               data-name="bugfix/utils-fail-unit-tests"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/utils-fail-unit-tests">
                bugfix/utils-fail-unit-tests
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/bugfix/youtube-no-poster/jwplayer.js"
               data-name="bugfix/youtube-no-poster"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bugfix/youtube-no-poster">
                bugfix/youtube-no-poster
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/disable-visualplaylist/jwplayer.js"
               data-name="feature/disable-visualplaylist"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/disable-visualplaylist">
                feature/disable-visualplaylist
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/display-icon-visible-paused-mobile/jwplayer.js"
               data-name="feature/display-icon-visible-paused-mobile"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/display-icon-visible-paused-mobile">
                feature/display-icon-visible-paused-mobile
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/flash-poster/jwplayer.js"
               data-name="feature/flash-poster"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/flash-poster">
                feature/flash-poster
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/flash-seeked/jwplayer.js"
               data-name="feature/flash-seeked"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/flash-seeked">
                feature/flash-seeked
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/flash-throttled-error/jwplayer.js"
               data-name="feature/flash-throttled-error"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/flash-throttled-error">
                feature/flash-throttled-error
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/flash-throttled-instream-ad-pause/jwplayer.js"
               data-name="feature/flash-throttled-instream-ad-pause"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/flash-throttled-instream-ad-pause">
                feature/flash-throttled-instream-ad-pause
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/karma-browser-targets/jwplayer.js"
               data-name="feature/karma-browser-targets"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/karma-browser-targets">
                feature/karma-browser-targets
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/local-storage/jwplayer.js"
               data-name="feature/local-storage"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/local-storage">
                feature/local-storage
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/overlay-opened-flag/jwplayer.js"
               data-name="feature/overlay-opened-flag"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/overlay-opened-flag">
                feature/overlay-opened-flag
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/pointer-event-support/jwplayer.js"
               data-name="feature/pointer-event-support"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/pointer-event-support">
                feature/pointer-event-support
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/preload-flash-provider/jwplayer.js"
               data-name="feature/preload-flash-provider"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/preload-flash-provider">
                feature/preload-flash-provider
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/preload-flash-provider-2/jwplayer.js"
               data-name="feature/preload-flash-provider-2"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/preload-flash-provider-2">
                feature/preload-flash-provider-2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/preload-hls/jwplayer.js"
               data-name="feature/preload-hls"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/preload-hls">
                feature/preload-hls
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/remove-p-use-ssl/jwplayer.js"
               data-name="feature/remove-p-use-ssl"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/remove-p-use-ssl">
                feature/remove-p-use-ssl
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/remove-skin-console-message/jwplayer.js"
               data-name="feature/remove-skin-console-message"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/remove-skin-console-message">
                feature/remove-skin-console-message
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/ssl-repo/jwplayer.js"
               data-name="feature/ssl-repo"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/ssl-repo">
                feature/ssl-repo
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/update-util-unit-test/jwplayer.js"
               data-name="feature/update-util-unit-test"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/update-util-unit-test">
                feature/update-util-unit-test
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/feature/use-debuggable-trycatch/jwplayer.js"
               data-name="feature/use-debuggable-trycatch"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="feature/use-debuggable-trycatch">
                feature/use-debuggable-trycatch
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/master/jwplayer.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/merge/release/jwplayer.js"
               data-name="merge/release"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="merge/release">
                merge/release
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/patch/firefox-throttle/jwplayer.js"
               data-name="patch/firefox-throttle"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="patch/firefox-throttle">
                patch/firefox-throttle
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/polyfill/promise/jwplayer.js"
               data-name="polyfill/promise"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="polyfill/promise">
                polyfill/promise
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/refactor/instream/jwplayer.js"
               data-name="refactor/instream"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="refactor/instream">
                refactor/instream
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/refactor/set-item/jwplayer.js"
               data-name="refactor/set-item"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="refactor/set-item">
                refactor/set-item
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/refactor/set-playlist/jwplayer.js"
               data-name="refactor/set-playlist"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="refactor/set-playlist">
                refactor/set-playlist
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/refactor/setup-steps/jwplayer.js"
               data-name="refactor/setup-steps"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="refactor/setup-steps">
                refactor/setup-steps
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/release/jwplayer.js"
               data-name="release"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="release">
                release
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/tech-debt/ios7/jwplayer.js"
               data-name="tech-debt/ios7"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="tech-debt/ios7">
                tech-debt/ios7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/test/api-methods-and-members/jwplayer.js"
               data-name="test/api-methods-and-members"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="test/api-methods-and-members">
                test/api-methods-and-members
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/test/grunt-karma-remote/jwplayer.js"
               data-name="test/grunt-karma-remote"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="test/grunt-karma-remote">
                test/grunt-karma-remote
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/test/require-node-4/jwplayer.js"
               data-name="test/require-node-4"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="test/require-node-4">
                test/require-node-4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/test/unit-test-fixes/jwplayer.js"
               data-name="test/unit-test-fixes"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="test/unit-test-fixes">
                test/unit-test-fixes
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/typescript/jwplayer.js"
               data-name="typescript"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="typescript">
                typescript
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jwplayer/jwplayer/blob/v7.1.x/jwplayer.js"
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
              <a href="/jwplayer/jwplayer/tree/v7.2.0-beta.0/jwplayer.js"
                 data-name="v7.2.0-beta.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.2.0-beta.0">v7.2.0-beta.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.2.0-alpha.0/jwplayer.js"
                 data-name="v7.2.0-alpha.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.2.0-alpha.0">v7.2.0-alpha.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.2.0/jwplayer.js"
                 data-name="v7.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.2.0">v7.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.5/jwplayer.js"
                 data-name="v7.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.5">v7.1.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.4/jwplayer.js"
                 data-name="v7.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.4">v7.1.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.3/jwplayer.js"
                 data-name="v7.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.3">v7.1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.2/jwplayer.js"
                 data-name="v7.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.2">v7.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.1/jwplayer.js"
                 data-name="v7.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.1">v7.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.0-beta.1/jwplayer.js"
                 data-name="v7.1.0-beta.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.0-beta.1">v7.1.0-beta.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.0-2/jwplayer.js"
                 data-name="v7.1.0-2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.0-2">v7.1.0-2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.0-1/jwplayer.js"
                 data-name="v7.1.0-1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.0-1">v7.1.0-1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.0-0/jwplayer.js"
                 data-name="v7.1.0-0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.0-0">v7.1.0-0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.1.0/jwplayer.js"
                 data-name="v7.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.1.0">v7.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.3-beta.2/jwplayer.js"
                 data-name="v7.0.3-beta.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.3-beta.2">v7.0.3-beta.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.3-beta.1/jwplayer.js"
                 data-name="v7.0.3-beta.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.3-beta.1">v7.0.3-beta.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.3/jwplayer.js"
                 data-name="v7.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.3">v7.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.2-beta.1/jwplayer.js"
                 data-name="v7.0.2-beta.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.2-beta.1">v7.0.2-beta.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.2/jwplayer.js"
                 data-name="v7.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.2">v7.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.1-rc.2/jwplayer.js"
                 data-name="v7.0.1-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.1-rc.2">v7.0.1-rc.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.1-rc.1/jwplayer.js"
                 data-name="v7.0.1-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.1-rc.1">v7.0.1-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.1-beta.2/jwplayer.js"
                 data-name="v7.0.1-beta.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.1-beta.2">v7.0.1-beta.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.1-beta.1/jwplayer.js"
                 data-name="v7.0.1-beta.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.1-beta.1">v7.0.1-beta.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.1/jwplayer.js"
                 data-name="v7.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.1">v7.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.0-rc.4/jwplayer.js"
                 data-name="v7.0.0-rc.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.0-rc.4">v7.0.0-rc.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.0-rc.3/jwplayer.js"
                 data-name="v7.0.0-rc.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.0-rc.3">v7.0.0-rc.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.0-rc.2/jwplayer.js"
                 data-name="v7.0.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.0-rc.2">v7.0.0-rc.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.0-rc.1.patch.1/jwplayer.js"
                 data-name="v7.0.0-rc.1.patch.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.0-rc.1.patch.1">v7.0.0-rc.1.patch.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.0-rc.1/jwplayer.js"
                 data-name="v7.0.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.0-rc.1">v7.0.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.0-beta.3/jwplayer.js"
                 data-name="v7.0.0-beta.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.0-beta.3">v7.0.0-beta.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v7.0.0/jwplayer.js"
                 data-name="v7.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v7.0.0">v7.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.12.6-development/jwplayer.js"
                 data-name="v6.12.6-development"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.12.6-development">v6.12.6-development</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.12.5/jwplayer.js"
                 data-name="v6.12.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.12.5">v6.12.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.12.0/jwplayer.js"
                 data-name="v6.12.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.12.0">v6.12.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.11.0-rc.3/jwplayer.js"
                 data-name="v6.11.0-rc.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.11.0-rc.3">v6.11.0-rc.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.11.0-rc.2/jwplayer.js"
                 data-name="v6.11.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.11.0-rc.2">v6.11.0-rc.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.11.0-rc.1/jwplayer.js"
                 data-name="v6.11.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.11.0-rc.1">v6.11.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.11.0/jwplayer.js"
                 data-name="v6.11.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.11.0">v6.11.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.10.0-rc.1/jwplayer.js"
                 data-name="v6.10.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.10.0-rc.1">v6.10.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.10.0/jwplayer.js"
                 data-name="v6.10.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.10.0">v6.10.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.9.0-rc.2/jwplayer.js"
                 data-name="v6.9.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.9.0-rc.2">v6.9.0-rc.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.9.0-rc.1/jwplayer.js"
                 data-name="v6.9.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.9.0-rc.1">v6.9.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.9.0/jwplayer.js"
                 data-name="v6.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.9.0">v6.9.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.8.0/jwplayer.js"
                 data-name="v6.8.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.8.0">v6.8.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.7.0-rc.1/jwplayer.js"
                 data-name="v6.7.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.7.0-rc.1">v6.7.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.7.0/jwplayer.js"
                 data-name="v6.7.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.7.0">v6.7.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.6.0-rc.2/jwplayer.js"
                 data-name="v6.6.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.6.0-rc.2">v6.6.0-rc.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.6.0-rc.1/jwplayer.js"
                 data-name="v6.6.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.6.0-rc.1">v6.6.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.6.0/jwplayer.js"
                 data-name="v6.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.6.0">v6.6.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.5.0-alpha+ads-events-added/jwplayer.js"
                 data-name="v6.5.0-alpha+ads-events-added"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.5.0-alpha+ads-events-added">v6.5.0-alpha+ads-events-added</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.5.0/jwplayer.js"
                 data-name="v6.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.5.0">v6.5.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.4.0/jwplayer.js"
                 data-name="v6.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.4.0">v6.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.3.0/jwplayer.js"
                 data-name="v6.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.3.0">v6.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.2.0-rc.1/jwplayer.js"
                 data-name="v6.2.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.2.0-rc.1">v6.2.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.2.0/jwplayer.js"
                 data-name="v6.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.2.0">v6.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.1.0/jwplayer.js"
                 data-name="v6.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.1.0">v6.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.0.0-rc.4/jwplayer.js"
                 data-name="v6.0.0-rc.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.0.0-rc.4">v6.0.0-rc.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.0.0-rc.3/jwplayer.js"
                 data-name="v6.0.0-rc.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.0.0-rc.3">v6.0.0-rc.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.0.0-rc.2/jwplayer.js"
                 data-name="v6.0.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.0.0-rc.2">v6.0.0-rc.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.0.0-rc.1/jwplayer.js"
                 data-name="v6.0.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.0.0-rc.1">v6.0.0-rc.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/v6.0.0/jwplayer.js"
                 data-name="v6.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v6.0.0">v6.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.12/jwplayer.js"
                 data-name="mediaplayer-6.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.12">mediaplayer-6.12</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.11-rc3/jwplayer.js"
                 data-name="mediaplayer-6.11-rc3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.11-rc3">mediaplayer-6.11-rc3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.11-rc2/jwplayer.js"
                 data-name="mediaplayer-6.11-rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.11-rc2">mediaplayer-6.11-rc2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.11-rc1/jwplayer.js"
                 data-name="mediaplayer-6.11-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.11-rc1">mediaplayer-6.11-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.11/jwplayer.js"
                 data-name="mediaplayer-6.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.11">mediaplayer-6.11</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.10-rc1/jwplayer.js"
                 data-name="mediaplayer-6.10-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.10-rc1">mediaplayer-6.10-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.9-rc2/jwplayer.js"
                 data-name="mediaplayer-6.9-rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.9-rc2">mediaplayer-6.9-rc2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.9-rc1/jwplayer.js"
                 data-name="mediaplayer-6.9-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.9-rc1">mediaplayer-6.9-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.9/jwplayer.js"
                 data-name="mediaplayer-6.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.9">mediaplayer-6.9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.8/jwplayer.js"
                 data-name="mediaplayer-6.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.8">mediaplayer-6.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.7-rc1/jwplayer.js"
                 data-name="mediaplayer-6.7-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.7-rc1">mediaplayer-6.7-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.7/jwplayer.js"
                 data-name="mediaplayer-6.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.7">mediaplayer-6.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.6-rc2/jwplayer.js"
                 data-name="mediaplayer-6.6-rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.6-rc2">mediaplayer-6.6-rc2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.6-rc1/jwplayer.js"
                 data-name="mediaplayer-6.6-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.6-rc1">mediaplayer-6.6-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.6/jwplayer.js"
                 data-name="mediaplayer-6.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.6">mediaplayer-6.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.5/jwplayer.js"
                 data-name="mediaplayer-6.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.5">mediaplayer-6.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.4/jwplayer.js"
                 data-name="mediaplayer-6.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.4">mediaplayer-6.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.3/jwplayer.js"
                 data-name="mediaplayer-6.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.3">mediaplayer-6.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.2-rc1/jwplayer.js"
                 data-name="mediaplayer-6.2-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.2-rc1">mediaplayer-6.2-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.2/jwplayer.js"
                 data-name="mediaplayer-6.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.2">mediaplayer-6.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.1/jwplayer.js"
                 data-name="mediaplayer-6.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.1">mediaplayer-6.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/mediaplayer-6.0/jwplayer.js"
                 data-name="mediaplayer-6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="mediaplayer-6.0">mediaplayer-6.0</a>
            </div>
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/jw6-rc4/jwplayer.js"
                 data-name="jw6-rc4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="jw6-rc4">jw6-rc4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/jw6-rc3/jwplayer.js"
                 data-name="jw6-rc3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="jw6-rc3">jw6-rc3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/jw6-rc2/jwplayer.js"
                 data-name="jw6-rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="jw6-rc2">jw6-rc2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/jw6-rc1/jwplayer.js"
                 data-name="jw6-rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="jw6-rc1">jw6-rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/copy-into-master/buffering-intervals-fix/jwplayer.js"
                 data-name="copy-into-master/buffering-intervals-fix"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="copy-into-master/buffering-intervals-fix">copy-into-master/buffering-intervals-fix</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/breaks-remove/jwplayer.js"
                 data-name="breaks-remove"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="breaks-remove">breaks-remove</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jwplayer/jwplayer/tree/ad-events-added/jwplayer.js"
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
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jwplayer/jwplayer/tree/jw6-rc4" class="" data-branch="jw6-rc4" data-pjax="true" itemscope="url"><span itemprop="title">jwplayer</span></a></span></span><span class="separator">/</span><strong class="final-path">jwplayer.js</strong>
    </div>
  </div>

<include-fragment class="commit-tease" src="/jwplayer/jwplayer/contributors/jw6-rc4/jwplayer.js">
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
      <a href="/jwplayer/jwplayer/raw/jw6-rc4/jwplayer.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/jwplayer/jwplayer/blame/jw6-rc4/jwplayer.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/jwplayer/jwplayer/commits/jw6-rc4/jwplayer.js" class="btn btn-sm " rel="nofollow">History</a>
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
    34.6 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">if(typeof jwplayer==&quot;undefined&quot;){jwplayer=function(a){if(jwplayer.api){return jwplayer.api.selectPlayer(a)}};jwplayer.version=&quot;6.0.2790&quot;;jwplayer.vid=document.createElement(&quot;video&quot;);jwplayer.audio=document.createElement(&quot;audio&quot;);jwplayer.source=document.createElement(&quot;source&quot;);(function(d){var j=document,g=window,b=navigator,h=&quot;undefined&quot;,f=&quot;string&quot;,c=&quot;object&quot;;var k=d.utils=function(){};k.exists=function(m){switch(typeof(m)){case f:return(m.length&gt;0);break;case c:return(m!==null);case h:return false}return true};k.styleDimension=function(m){return m+(m.toString().indexOf(&quot;%&quot;)&gt;0?&quot;&quot;:&quot;px&quot;)};k.getAbsolutePath=function(s,r){if(!k.exists(r)){r=j.location.href}if(!k.exists(s)){return undefined}if(a(s)){return s}var t=r.substring(0,r.indexOf(&quot;://&quot;)+3);var q=r.substring(t.length,r.indexOf(&quot;/&quot;,t.length+1));var n;if(s.indexOf(&quot;/&quot;)===0){n=s.split(&quot;/&quot;)}else{var o=r.split(&quot;?&quot;)[0];o=o.substring(t.length+q.length+1,o.lastIndexOf(&quot;/&quot;));n=o.split(&quot;/&quot;).concat(s.split(&quot;/&quot;))}var m=[];for(var p=0;p&lt;n.length;p++){if(!n[p]||!k.exists(n[p])||n[p]==&quot;.&quot;){continue}else{if(n[p]==&quot;..&quot;){m.pop()}else{m.push(n[p])}}}return t+q+&quot;/&quot;+m.join(&quot;/&quot;)};function a(n){if(!k.exists(n)){return}var o=n.indexOf(&quot;://&quot;);var m=n.indexOf(&quot;?&quot;);return(o&gt;0&amp;&amp;(m&lt;0||(m&gt;o)))}k.extend=function(){var m=k.extend[&quot;arguments&quot;];if(m.length&gt;1){for(var o=1;o&lt;m.length;o++){for(var n in m[o]){try{if(k.exists(m[o][n])){m[0][n]=m[o][n]}}catch(p){}}}return m[0]}return null};k.log=function(n,m){if(typeof console!=h&amp;&amp;typeof console.log!=h){if(m){console.log(n,m)}else{console.log(n)}}};var e=k.userAgentMatch=function(n){var m=b.userAgent.toLowerCase();return(m.match(n)!==null)};function l(m){return function(){return e(m)}}k.isIE=l(/msie/i);k.isFF=l(/firefox/i);k.isIOS=l(/iP(hone|ad|od)/i);k.isIPod=l(/iP(hone|od)/i);k.isIPad=l(/iPad/i);k.isAndroid=function(m){if(m){return e(new RegExp(&quot;android.*&quot;+m,&quot;i&quot;))}else{return e(/android/i)}};k.isMobile=function(){return k.isIOS()||k.isAndroid()};k.saveCookie=function(m,n){j.cookie=&quot;jwplayer.&quot;+m+&quot;=&quot;+n+&quot;; path=/&quot;};k.getCookies=function(){var p={};var o=j.cookie.split(&quot;; &quot;);for(var n=0;n&lt;o.length;n++){var m=o[n].split(&quot;=&quot;);if(m[0].indexOf(&quot;jwplayer.&quot;)==0){p[m[0].substring(9,m[0].length)]=m[1]}}return p};k.typeOf=function(n){var m=typeof n;if(m===&quot;object&quot;){if(!n){return&quot;null&quot;}return(n instanceof Array)?&quot;array&quot;:m}else{return m}};k.translateEventResponse=function(o,m){var q=k.extend({},m);if(o==d.events.JWPLAYER_FULLSCREEN&amp;&amp;!q.fullscreen){q.fullscreen=q.message==&quot;true&quot;?true:false;delete q.message}else{if(typeof q.data==c){q=k.extend(q,q.data);delete q.data}else{if(typeof q.metadata==c){k.deepReplaceKeyName(q.metadata,[&quot;__dot__&quot;,&quot;__spc__&quot;,&quot;__dsh__&quot;],[&quot;.&quot;,&quot; &quot;,&quot;-&quot;])}}}var n=[&quot;position&quot;,&quot;duration&quot;,&quot;offset&quot;];for(var p in n){if(q[n[p]]){q[n[p]]=Math.round(q[n[p]]*1000)/1000}}return q};k.flashVersion=function(){if(k.isAndroid()){return 0}var m=b.plugins,n;if(m!=h){n=m[&quot;Shockwave Flash&quot;];if(n){return parseInt(n.description.replace(/\D+(\d+)\..*/,&quot;$1&quot;))}}if(typeof g.ActiveXObject!=h){try{n=new ActiveXObject(&quot;ShockwaveFlash.ShockwaveFlash&quot;);if(n){return parseInt(n.GetVariable(&quot;$version&quot;).split(&quot; &quot;)[1].split(&quot;,&quot;)[0])}}catch(o){}}return 0};k.getScriptPath=function(o){var m=j.getElementsByTagName(&quot;script&quot;);for(var n=0;n&lt;m.length;n++){var p=m[n].src;if(p&amp;&amp;p.indexOf(o)&gt;=0){return p.substr(0,p.indexOf(o))}}return&quot;&quot;};k.deepReplaceKeyName=function(t,o,m){switch(d.utils.typeOf(t)){case&quot;array&quot;:for(var q=0;q&lt;t.length;q++){t[q]=d.utils.deepReplaceKeyName(t[q],o,m)}break;case c:for(var p in t){var s,r;if(o instanceof Array&amp;&amp;m instanceof Array){if(o.length!=m.length){continue}else{s=o;r=m}}else{s=[o];r=[m]}var n=p;for(var q=0;q&lt;s.length;q++){n=n.replace(new RegExp(o[q],&quot;g&quot;),m[q])}t[n]=d.utils.deepReplaceKeyName(t[p],o,m);if(p!=n){delete t[p]}}break}return t};var i=k.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};k.getPluginPathType=function(n){if(typeof n!=f){return}n=n.split(&quot;?&quot;)[0];var o=n.indexOf(&quot;://&quot;);if(o&gt;0){return i.ABSOLUTE}var m=n.indexOf(&quot;/&quot;);var p=k.extension(n);if(o&lt;0&amp;&amp;m&lt;0&amp;&amp;(!p||!isNaN(p))){return i.CDN}return i.RELATIVE};k.getPluginName=function(m){return m.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,&quot;$2&quot;)};k.getPluginVersion=function(m){return m.replace(/[^-]*-?([^\.]*).*$/,&quot;$1&quot;)};k.isYouTube=function(m){return(m.indexOf(&quot;youtube.com&quot;)&gt;-1||m.indexOf(&quot;youtu.be&quot;)&gt;-1)};k.isRtmp=function(m,n){return(m.indexOf(&quot;rtmp&quot;)==0||n==&quot;rtmp&quot;)};k.foreach=function(o,n){for(var m in o){if(o.hasOwnProperty(m)){n(m)}}};k.isHTTPS=function(){return(g.location.href.indexOf(&quot;https&quot;)==0)}})(jwplayer);(function(o){var d=&quot;video/&quot;,i=&quot;audio/&quot;,g=&quot;image&quot;,j=&quot;mp4&quot;,c=&quot;webm&quot;,n=&quot;ogg&quot;,b=&quot;aac&quot;,k=&quot;mp3&quot;,l=&quot;vorbis&quot;,m={mp4:d+j,vorbis:i+n,ogg:d+n,webm:d+c,aac:i+j,mp3:i+k,hls:&quot;application/vnd.apple.mpegurl&quot;},h={mp4:m[j],f4v:m[j],m4v:m[j],mov:m[j],m4a:m[b],f4a:m[b],aac:m[b],mp3:m[k],ogv:m[n],ogg:m[l],oga:m[l],webm:m[c],m3u8:m.hls},d=&quot;video&quot;,f={flv:d,f4v:d,mov:d,m4a:d,m4v:d,mp4:d,aac:d,mp3:&quot;sound&quot;,smil:&quot;rtmp&quot;,m3u8:&quot;hls&quot;};var a=o.extensionmap={};for(var e in h){a[e]={html5:h[e]}}for(e in f){if(!a[e]){a[e]={}}a[e].flash=f[e]}a.types=m;a.mimeType=function(q){for(var p in m){if(m[p]==q){return p}}};a.extType=function(p){return a.mimeType(h[p])}})(jwplayer.utils);(function(b){var a=b.loaderstatus={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},c=document;b.scriptloader=function(e){var f=a.NEW,h=jwplayer.events,d=new h.eventdispatcher();b.extend(this,d);this.load=function(){var k=b.scriptloader.loaders[e];if(k&amp;&amp;(k.getStatus()==a.NEW||k.getStatus()==a.LOADING)){k.addEventListener(h.ERROR,g);k.addEventListener(h.COMPLETE,i);return}b.scriptloader.loaders[e]=this;if(f==a.NEW){f=a.LOADING;var j=c.createElement(&quot;script&quot;);if(j.addEventListener){j.onload=i;j.onerror=g}else{if(j.readyState){j.onreadystatechange=function(){if(j.readyState==&quot;loaded&quot;||j.readyState==&quot;complete&quot;){i()}}}}c.getElementsByTagName(&quot;head&quot;)[0].appendChild(j);j.src=e}};function g(j){f=a.ERROR;d.sendEvent(h.ERROR)}function i(j){f=a.COMPLETE;d.sendEvent(h.COMPLETE)}this.getStatus=function(){return f}};b.scriptloader.loaders={}})(jwplayer.utils);(function(a){a.trim=function(b){return b.replace(/^\s*/,&quot;&quot;).replace(/\s*$/,&quot;&quot;)};a.pad=function(c,d,b){if(!b){b=&quot;0&quot;}while(c.length&lt;d){c=b+c}return c};a.xmlAttribute=function(b,c){for(var d=0;d&lt;b.attributes.length;d++){if(b.attributes[d].name&amp;&amp;b.attributes[d].name.toLowerCase()==c.toLowerCase()){return b.attributes[d].value.toString()}}return&quot;&quot;};a.jsonToString=function(f){var h=h||{};if(h&amp;&amp;h.stringify){return h.stringify(f)}var c=typeof(f);if(c!=&quot;object&quot;||f===null){if(c==&quot;string&quot;){f=&#39;&quot;&#39;+f.replace(/&quot;/g,&#39;\\&quot;&#39;)+&#39;&quot;&#39;}else{return String(f)}}else{var g=[],b=(f&amp;&amp;f.constructor==Array);for(var d in f){var e=f[d];switch(typeof(e)){case&quot;string&quot;:e=&#39;&quot;&#39;+e.replace(/&quot;/g,&#39;\\&quot;&#39;)+&#39;&quot;&#39;;break;case&quot;object&quot;:if(a.exists(e)){e=a.jsonToString(e)}break}if(b){if(typeof(e)!=&quot;function&quot;){g.push(String(e))}}else{if(typeof(e)!=&quot;function&quot;){g.push(&#39;&quot;&#39;+d+&#39;&quot;:&#39;+String(e))}}}if(b){return&quot;[&quot;+String(g)+&quot;]&quot;}else{return&quot;{&quot;+String(g)+&quot;}&quot;}}};a.extension=function(b){if(!b||b.substr(0,4)==&quot;rtmp&quot;){return&quot;&quot;}b=b.substring(b.lastIndexOf(&quot;/&quot;)+1,b.length).split(&quot;?&quot;)[0].split(&quot;#&quot;)[0];if(b.lastIndexOf(&quot;.&quot;)&gt;-1){return b.substr(b.lastIndexOf(&quot;.&quot;)+1,b.length).toLowerCase()}};a.stringToColor=function(b){b=b.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,&quot;$2&quot;);if(b.length==3){b=b.charAt(0)+b.charAt(0)+b.charAt(1)+b.charAt(1)+b.charAt(2)+b.charAt(2)}return parseInt(b,16)}})(jwplayer.utils);(function(a){a.events={COMPLETE:&quot;COMPLETE&quot;,ERROR:&quot;ERROR&quot;,API_READY:&quot;jwplayerAPIReady&quot;,JWPLAYER_READY:&quot;jwplayerReady&quot;,JWPLAYER_FULLSCREEN:&quot;jwplayerFullscreen&quot;,JWPLAYER_RESIZE:&quot;jwplayerResize&quot;,JWPLAYER_ERROR:&quot;jwplayerError&quot;,JWPLAYER_MEDIA_BEFOREPLAY:&quot;jwplayerMediaBeforePlay&quot;,JWPLAYER_MEDIA_BEFORECOMPLETE:&quot;jwplayerMediaBeforeComplete&quot;,JWPLAYER_COMPONENT_SHOW:&quot;jwplayerComponentShow&quot;,JWPLAYER_COMPONENT_HIDE:&quot;jwplayerComponentHide&quot;,JWPLAYER_MEDIA_BUFFER:&quot;jwplayerMediaBuffer&quot;,JWPLAYER_MEDIA_BUFFER_FULL:&quot;jwplayerMediaBufferFull&quot;,JWPLAYER_MEDIA_ERROR:&quot;jwplayerMediaError&quot;,JWPLAYER_MEDIA_LOADED:&quot;jwplayerMediaLoaded&quot;,JWPLAYER_MEDIA_COMPLETE:&quot;jwplayerMediaComplete&quot;,JWPLAYER_MEDIA_SEEK:&quot;jwplayerMediaSeek&quot;,JWPLAYER_MEDIA_TIME:&quot;jwplayerMediaTime&quot;,JWPLAYER_MEDIA_VOLUME:&quot;jwplayerMediaVolume&quot;,JWPLAYER_MEDIA_META:&quot;jwplayerMediaMeta&quot;,JWPLAYER_MEDIA_MUTE:&quot;jwplayerMediaMute&quot;,JWPLAYER_MEDIA_LEVELS:&quot;jwplayerMediaLevels&quot;,JWPLAYER_MEDIA_LEVEL_CHANGED:&quot;jwplayerMediaLevelChanged&quot;,JWPLAYER_CAPTIONS_CHANGED:&quot;jwplayerCaptionsChanged&quot;,JWPLAYER_CAPTIONS_LIST:&quot;jwplayerCaptionsList&quot;,JWPLAYER_PLAYER_STATE:&quot;jwplayerPlayerState&quot;,state:{BUFFERING:&quot;BUFFERING&quot;,IDLE:&quot;IDLE&quot;,PAUSED:&quot;PAUSED&quot;,PLAYING:&quot;PLAYING&quot;},JWPLAYER_PLAYLIST_LOADED:&quot;jwplayerPlaylistLoaded&quot;,JWPLAYER_PLAYLIST_ITEM:&quot;jwplayerPlaylistItem&quot;,JWPLAYER_PLAYLIST_COMPLETE:&quot;jwplayerPlaylistComplete&quot;,JWPLAYER_DISPLAY_CLICK:&quot;jwplayerViewClick&quot;,JWPLAYER_CONTROLS:&quot;jwplayerViewControls&quot;,JWPLAYER_INSTREAM_CLICK:&quot;jwplayerInstreamClicked&quot;,JWPLAYER_INSTREAM_DESTROYED:&quot;jwplayerInstreamDestroyed&quot;}})(jwplayer);(function(a){var b=jwplayer.utils;a.eventdispatcher=function(h,c){var e=h,g=c,f,d;this.resetEventListeners=function(){f={};d=[]};this.resetEventListeners();this.addEventListener=function(i,l,k){try{if(!b.exists(f[i])){f[i]=[]}if(b.typeOf(l)==&quot;string&quot;){l=(new Function(&quot;return &quot;+l))()}f[i].push({listener:l,count:k})}catch(j){b.log(&quot;error&quot;,j)}return false};this.removeEventListener=function(j,l){if(!f[j]){return}try{for(var i=0;i&lt;f[j].length;i++){if(f[j][i].listener.toString()==l.toString()){f[j].splice(i,1);break}}}catch(k){b.log(&quot;error&quot;,k)}return false};this.addGlobalListener=function(k,j){try{if(b.typeOf(k)==&quot;string&quot;){k=(new Function(&quot;return &quot;+k))()}d.push({listener:k,count:j})}catch(i){b.log(&quot;error&quot;,i)}return false};this.removeGlobalListener=function(k){if(!k){return}try{for(var i=0;i&lt;d.length;i++){if(d[i].listener.toString()==k.toString()){d.splice(i,1);break}}}catch(j){b.log(&quot;error&quot;,j)}return false};this.sendEvent=function(k,m){if(!b.exists(m)){m={}}b.extend(m,{id:e,version:jwplayer.version,type:k});if(g){b.log(k,m)}if(b.typeOf(f[k])!=&quot;undefined&quot;){for(var j=0;j&lt;f[k].length;j++){try{f[k][j].listener(m)}catch(l){b.log(&quot;There was an error while handling a listener: &quot;+l.toString(),f[k][j].listener)}if(f[k][j]){if(f[k][j].count===1){delete f[k][j]}else{if(f[k][j].count&gt;0){f[k][j].count=f[k][j].count-1}}}}}var i;for(i=0;i&lt;d.length;i++){try{d[i].listener(m)}catch(l){b.log(&quot;There was an error while handling a listener: &quot;+l.toString(),d[i].listener)}if(d[i]){if(d[i].count===1){delete d[i]}else{if(d[i].count&gt;0){d[i].count=d[i].count-1}}}}}}})(jwplayer.events);(function(a){var c={},b={};a.plugins=function(){};a.plugins.loadPlugins=function(e,d){b[e]=new a.plugins.pluginloader(new a.plugins.model(c),d);return b[e]};a.plugins.registerPlugin=function(h,g,f,e){var d=a.utils.getPluginName(h);if(!c[d]){c[d]=new a.plugins.plugin(h)}c[d].registerPlugin(h,g,f,e)}})(jwplayer);(function(a){a.plugins.model=function(b){this.addPlugin=function(c){var d=a.utils.getPluginName(c);if(!b[d]){b[d]=new a.plugins.plugin(c)}return b[d]};this.getPlugins=function(){return b}}})(jwplayer);(function(b){var a=jwplayer.utils,c=jwplayer.events,d=&quot;undefined&quot;;b.pluginmodes={FLASH:0,JAVASCRIPT:1,HYBRID:2};b.plugin=function(e){var l=a.loaderstatus.NEW,m,k,f,n;var g=new c.eventdispatcher();a.extend(this,g);function h(){switch(a.getPluginPathType(e)){case a.pluginPathType.ABSOLUTE:return e;case a.pluginPathType.RELATIVE:return a.getAbsolutePath(e,window.location.href)}}function j(o){n=setTimeout(function(){l=a.loaderstatus.COMPLETE;g.sendEvent(c.COMPLETE)},1000)}function i(o){l=a.loaderstatus.ERROR;g.sendEvent(c.ERROR)}this.load=function(){if(l==a.loaderstatus.NEW){if(e.lastIndexOf(&quot;.swf&quot;)&gt;0){m=e;l=a.loaderstatus.COMPLETE;g.sendEvent(c.COMPLETE);return}else{if(a.getPluginPathType(e)==a.pluginPathType.CDN){l=a.loaderstatus.COMPLETE;g.sendEvent(c.COMPLETE);return}}l=a.loaderstatus.LOADING;var o=new a.scriptloader(h());o.addEventListener(c.COMPLETE,j);o.addEventListener(c.ERROR,i);o.load()}};this.registerPlugin=function(r,q,p,o){if(n){clearTimeout(n);n=undefined}f=q;if(p&amp;&amp;o){m=o;k=p}else{if(typeof p==&quot;string&quot;){m=p}else{if(typeof p==&quot;function&quot;){k=p}else{if(!p&amp;&amp;!o){m=r}}}}l=a.loaderstatus.COMPLETE;g.sendEvent(c.COMPLETE)};this.getStatus=function(){return l};this.getPluginName=function(){return a.getPluginName(e)};this.getFlashPath=function(){if(m){switch(a.getPluginPathType(m)){case a.pluginPathType.ABSOLUTE:return m;case a.pluginPathType.RELATIVE:if(e.lastIndexOf(&quot;.swf&quot;)&gt;0){return a.getAbsolutePath(m,window.location.href)}return a.getAbsolutePath(m,h())}}return null};this.getJS=function(){return k};this.getTarget=function(){return f};this.getPluginmode=function(){if(typeof m!=d&amp;&amp;typeof k!=d){return b.pluginmodes.HYBRID}else{if(typeof m!=d){return b.pluginmodes.FLASH}else{if(typeof k!=d){return b.pluginmodes.JAVASCRIPT}}}};this.getNewInstance=function(p,o,q){return new k(p,o,q)};this.getURL=function(){return e}}})(jwplayer.plugins);(function(b){var a=b.utils,c=b.events;b.plugins.pluginloader=function(i,h){var o=a.loaderstatus.NEW,g=false,d=false,k=false,l,m=h,e=new c.eventdispatcher();a.extend(this,e);function f(){if(k){e.sendEvent(c.ERROR,{message:l})}else{if(!d){d=true;o=a.loaderstatus.COMPLETE;e.sendEvent(c.COMPLETE)}}}function n(){if(!m){f()}if(!d&amp;&amp;!k){var r=0,q=i.getPlugins();for(var s in m){var t=a.getPluginName(s),w=q[t],v=w.getJS(),u=w.getTarget(),p=w.getStatus();if(p==a.loaderstatus.LOADING||p==a.loaderstatus.NEW){r++}else{if(v&amp;&amp;(!u||parseFloat(u)&gt;parseFloat(b.version))){k=true;l=&quot;Incompatible player version&quot;;f()}}}if(r==0){f()}}}this.setupPlugins=function(w,s,z){var r={length:0,plugins:{}},u={length:0,plugins:{}},t=i.getPlugins();for(var v in s.plugins){var x=a.getPluginName(v),y=t[x],A=y.getFlashPath(),B=y.getJS(),p=y.getURL();if(A){r.plugins[A]=a.extend({},s.plugins[v]);r.plugins[A].pluginmode=y.getPluginmode();r.length++}if(B&amp;&amp;s.plugins&amp;&amp;s.plugins[p]){var q=document.createElement(&quot;div&quot;);q.id=w.id+&quot;_&quot;+x;q.style.position=&quot;absolute&quot;;q.style.top=0;q.style.zIndex=u.length+10;u.plugins[x]=y.getNewInstance(w,a.extend({},s.plugins[p]),q);u.length++;w.onReady(z(u.plugins[x],q,true));w.onResize(z(u.plugins[x],q))}}w.plugins=u.plugins;return r};this.load=function(){if(a.exists(h)&amp;&amp;a.typeOf(h)!=&quot;object&quot;){n();return}o=a.loaderstatus.LOADING;g=true;for(var q in h){if(a.exists(q)){var r=i.addPlugin(q);r.addEventListener(c.COMPLETE,n);r.addEventListener(c.ERROR,j)}}var p=i.getPlugins();for(q in p){p[q].load()}g=false;n()};var j=this.pluginFailed=function(p){if(!k){k=true;l=&quot;File not found&quot;;f()}};this.getStatus=function(){return o}}})(jwplayer);(function(a){a.playlist=function(c){var d=[];if(a.utils.typeOf(c)==&quot;array&quot;){for(var b=0;b&lt;c.length;b++){d.push(new a.playlist.item(c[b]))}}else{d.push(new a.playlist.item(c))}return d}})(jwplayer);(function(b){var a=b.item=function(d){var c=jwplayer.utils.extend({},a.defaults,d);if(c.sources.length==0){c.sources=[new b.source(c)]}for(var e=0;e&lt;c.sources.length;e++){c.sources[e]=new b.source(c.sources[e])}return c};a.defaults={description:&quot;&quot;,image:&quot;&quot;,mediaid:&quot;&quot;,title:&quot;&quot;,tags:&quot;&quot;,duration:-1,sources:[]}})(jwplayer.playlist);(function(d){var b=undefined,a=jwplayer.utils,c={file:b,label:b,bitrate:b,width:b,height:b,type:b};d.source=function(f){var e=a.extend({},c);for(var g in c){if(a.exists(f[g])){e[g]=f[g];delete f[g]}}if(e.type&amp;&amp;e.type.indexOf(&quot;/&quot;)&gt;0){e.type=a.extensionmap.mimeType(e.type)}return e}})(jwplayer.playlist);(function(b){var a=b.utils,c=b.events,d=document;var e=b.embed=function(t){var p=new e.config(t.config),i,k,j=p.width,l=p.height,n=&quot;Error loading player: &quot;,h=b.plugins.loadPlugins(t.id,p.plugins);p.id=t.id;k=d.getElementById(t.id);i=d.createElement(&quot;div&quot;);i.id=k.id;i.style.width=j.toString().indexOf(&quot;%&quot;)&gt;0?j:(j+&quot;px&quot;);i.style.height=l.toString().indexOf(&quot;%&quot;)&gt;0?l:(l+&quot;px&quot;);k.parentNode.replaceChild(i,k);function m(w,v){for(var u in v){if(typeof w[u]==&quot;function&quot;){(w[u]).call(w,v[u])}}}function f(){if(a.typeOf(p.playlist)==&quot;array&quot;&amp;&amp;p.playlist.length&lt;2){if(p.playlist.length==0||!p.playlist[0].sources||p.playlist[0].sources.length==0){r();return}}if(h.getStatus()==a.loaderstatus.COMPLETE){for(var w=0;w&lt;p.modes.length;w++){if(p.modes[w].type&amp;&amp;e[p.modes[w].type]){var x=p.modes[w].config,u=a.extend({},x?e.config.addConfig(p,x):p),v=new e[p.modes[w].type](i,p.modes[w],u,h,t);if(v.supportsConfig()){v.addEventListener(c.ERROR,g);v.embed();m(t,u.events);return t}}}if(p.fallback){a.log(&quot;No suitable players found and fallback enabled&quot;);new e.download(i,p,r)}else{a.log(&quot;No suitable players found and fallback disabled&quot;);q()}}}function q(){i.parentNode.replaceChild(k,i)}function g(u){s(i,n+u.message)}function o(u){s(i,&quot;Could not load plugins: &quot;+u.message)}function r(){s(i,n+&quot;No playable sources found&quot;)}function s(u,w){if(!p.fallback){return}var v=u.style;v.backgroundColor=&quot;#000&quot;;v.color=&quot;#FFF&quot;;v.width=a.styleDimension(p.width);v.height=a.styleDimension(p.height);v.display=&quot;table&quot;;v.opacity=1;var y=document.createElement(&quot;p&quot;),x=y.style;x.verticalAlign=&quot;middle&quot;;x.textAlign=&quot;center&quot;;x.display=&quot;table-cell&quot;;x.font=&quot;15px/20px Arial, Helvetica, sans-serif&quot;;y.innerHTML=w.replace(&quot;:&quot;,&quot;:&lt;br&gt;&quot;);u.innerHTML=&quot;&quot;;u.appendChild(y)}b.embed.errorScreen=s;h.addEventListener(c.COMPLETE,f);h.addEventListener(c.ERROR,o);h.load();return t}})(jwplayer);(function(d){var a=d.utils,h=d.embed,b=d.playlist.item,f=undefined;var c=h.config=function(j){function m(q,p,o){for(var n=0;n&lt;q.length;n++){var r=q[n].type;if(!q[n].src){q[n].src=o[r]?o[r]:p+&quot;jwplayer.&quot;+r+(r==&quot;flash&quot;?&quot;.swf&quot;:&quot;.js&quot;)}}}var l={fallback:true,height:270,primary:&quot;html5&quot;,width:480,base:f},i={html5:{type:&quot;html5&quot;},flash:{type:&quot;flash&quot;}},k=a.extend(l,j);if(!k.base){k.base=a.getScriptPath(&quot;jwplayer.js&quot;)}if(!k.modes){k.modes=(k.primary==&quot;flash&quot;)?[i.flash,i.html5]:[i.html5,i.flash]}if(k.listbar){k.playlistsize=k.listbar.size;k.playlistposition=k.listbar.position}m(k.modes,k.base,{html5:k.html5player,flash:k.flashplayer});e(k);return k};c.addConfig=function(i,j){e(j);return a.extend(i,j)};function e(l){if(!l.playlist){var n={};for(var k in b.defaults){g(l,n,k)}if(!n.sources){if(l.levels){n.sources=l.levels;delete l.levels}else{var j={};g(l,j,&quot;file&quot;);g(l,j,&quot;type&quot;);n.sources=j.file?[j]:[]}}l.playlist=[n]}else{for(var m=0;m&lt;l.playlist.length;m++){l.playlist[m]=new b(l.playlist[m])}}}function g(k,i,j){if(a.exists(k[j])){i[j]=k[j];delete k[j]}}})(jwplayer);(function(e){var g=e.embed,j=e.utils,i=document,h=&quot;pointer&quot;,c=&quot;none&quot;,a=&quot;block&quot;,f=&quot;100%&quot;,d=&quot;relative&quot;,b=&quot;absolute&quot;;g.download=function(n,y,l){var q=j.extend({},y),u,o=q.width?q.width:480,r=q.height?q.height:320,z,s,k=y.logo?y.logo:{prefix:&quot;http://p.jwpcdn.com/&quot;,file:&quot;logo.png&quot;,margin:10};function x(){var E,F,D,G,C=q.playlist,J,B,G,H=[&quot;mp4&quot;,&quot;aac&quot;,&quot;mp3&quot;];if(C&amp;&amp;C.length){J=C[0];B=J.sources;for(G=0;G&lt;B.length;G++){var A=B[G],I=A.type?A.type:j.extensionmap.extType(j.extension(A.file));if(A.file){for(G in H){if(I==H[G]){E=A.file;F=J.image}else{if(j.isYouTube(A.file)){D=A.file}}}if(E||D){continue}}}}else{return}if(E){z=E;s=F;if(k.prefix){if(j.isHTTPS()){k.prefix=k.prefix.replace(&quot;http://&quot;,&quot;https://ssl.&quot;)}k.prefix+=e.version.split(/\W/).splice(0,2).join(&quot;/&quot;)}t();p()}else{if(D){m(D)}else{l()}}}function t(){if(n){u=v(&quot;a&quot;,&quot;display&quot;,n);v(&quot;div&quot;,&quot;icon&quot;,u);v(&quot;div&quot;,&quot;logo&quot;,u);if(z){u.setAttribute(&quot;href&quot;,j.getAbsolutePath(z))}}}function w(A,C){var D=i.querySelectorAll(A);for(var B=0;B&lt;D.length;B++){for(var E in C){D[B].style[E]=C[E]}}}function p(){var A=&quot;#&quot;+n.id+&quot; .jwdownload&quot;;n.style.width=&quot;&quot;;n.style.height=&quot;&quot;;w(A+&quot;display&quot;,{width:j.styleDimension(Math.max(320,o)),height:j.styleDimension(Math.max(180,r)),background:&quot;black center no-repeat &quot;+(s?&quot;url(&quot;+s+&quot;)&quot;:&quot;&quot;),backgroundSize:&quot;contain&quot;,position:d,border:c,display:a});w(A+&quot;display div&quot;,{position:b,width:f,height:f});w(A+&quot;logo&quot;,{top:k.margin+&quot;px&quot;,right:k.margin+&quot;px&quot;,background:&quot;top right no-repeat url(&quot;+k.prefix+k.file+&quot;)&quot;});w(A+&quot;icon&quot;,{background:&quot;center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs28lqwkAYB/CZqNVDDj2r6FN41QeIy8Fe+gj6BL275Q08u9FbT8ZdwVfotSBYEPUkxFOoks4EKiJdaDuTjMn3wWBO0V/+sySR8SNSqVRKIR8qaXHkzlqS9jCfzzWcTCYp9hF5o+59sVjsiRzcegSckFzcjT+ruN80TeSlAjCAAXzdJSGPFXRpAAMYwACGZQkSdhG4WCzehMNhqV6vG6vVSrirKVEw66YoSqDb7cqlUilE8JjHd/y1MQefVzqdDmiaJpfLZWHgXMHn8F6vJ1cqlVAkEsGuAn83J4gAd2RZymQygX6/L1erVQt+9ZPWb+CDwcCC2zXGJaewl/DhcHhK3DVj+KfKZrMWvFarcYNLomAv4aPRSFZVlTlcSPA5fDweW/BoNIqFnKV53JvncjkLns/n/cLdS+92O7RYLLgsKfv9/t8XlDn4eDyiw+HA9Jyz2eyt0+kY2+3WFC5hluej0Ha7zQQq9PPwdDq1Et1sNsx/nFBgCqWJ8oAK1aUptNVqcYWewE4nahfU0YQnk4ntUEfGMIU2m01HoLaCKbTRaDgKtaVLk9tBYaBcE/6Artdr4RZ5TB6/dC+9iIe/WgAMYADDpAUJAxjAAAYwgGFZgoS/AtNNTF7Z2bL0BYPBV3Jw5xFwwWcYxgtBP5OkE8i9G7aWGOOCruvauwADALMLMEbKf4SdAAAAAElFTkSuQmCC)&quot;})}function v(A,D,C){var B=i.createElement(A);if(D){B.className=&quot;jwdownload&quot;+D}if(C){C.appendChild(B)}return B}function m(A){var B=v(&quot;embed&quot;,&quot;&quot;,n);B.src=&quot;http://www.youtube.com/v/&quot;+(/v[=\/](\w*)|\/(\w+)$|^(\w+)$/i).exec(A).slice(1).join(&quot;&quot;);B.type=&quot;application/x-shockwave-flash&quot;;B.width=o;B.height=r}x()}})(jwplayer);(function(c){var b=c.utils,d=c.events,a={};var e=c.embed.flash=function(l,m,q,k,o){var h=new c.events.eventdispatcher(),i=b.flashVersion();b.extend(this,h);function r(t,s,u){var v=document.createElement(&quot;param&quot;);v.setAttribute(&quot;name&quot;,s);v.setAttribute(&quot;value&quot;,u);t.appendChild(v)}function p(t,u,s){return function(v){try{if(s){document.getElementById(o.id+&quot;_wrapper&quot;).appendChild(u)}var x=document.getElementById(o.id).getPluginConfig(&quot;display&quot;);if(typeof t.resize==&quot;function&quot;){t.resize(x.width,x.height)}u.style.left=x.x;u.style.top=x.h}catch(w){}}}function j(u){if(!u){return{}}var w={};for(var t in u){var s=u[t];for(var v in s){w[t+&quot;.&quot;+v]=s[v]}}return w}function g(v){if(!v){return{}}var y={},x=[];for(var s in v){var u=b.getPluginName(s);var t=v[s];x.push(s);for(var w in t){y[u+&quot;.&quot;+w]=t[w]}}y.plugins=x.join(&quot;,&quot;);return y}function n(u){var s={};for(var t in u){if(typeof(u[t])==&quot;object&quot;){s[t]=&quot;[[JSON]]&quot;+b.jsonToString(u[t])}else{s[t]=u[t]}}return s}this.embed=function(){q.id=o.id;if(i&lt;10){h.sendEvent(d.ERROR,{message:&quot;Flash version must be 10.0 or greater&quot;});return false}var D;var x=b.extend({},q);if(l.id+&quot;_wrapper&quot;==l.parentNode.id){D=document.getElementById(l.id+&quot;_wrapper&quot;)}else{D=document.createElement(&quot;div&quot;);D.id=l.id+&quot;_wrapper&quot;;D.style.position=&quot;relative&quot;;D.style.width=b.styleDimension(x.width);D.style.height=b.styleDimension(x.height);l.parentNode.replaceChild(D,l);D.appendChild(l)}var t=k.setupPlugins(o,x,p);if(t.length&gt;0){b.extend(x,g(t.plugins))}else{delete x.plugins}if(typeof x[&quot;dock.position&quot;]!=&quot;undefined&quot;){if(x[&quot;dock.position&quot;].toString().toLowerCase()==&quot;false&quot;){x.dock=x[&quot;dock.position&quot;];delete x[&quot;dock.position&quot;]}}var C=b.getCookies();for(var u in C){if(typeof(x[u])==&quot;undefined&quot;){x[u]=C[u]}}var E=&quot;#000000&quot;,A,v=x.wmode?x.wmode:(x.height&amp;&amp;x.height&lt;=40?&quot;transparent&quot;:&quot;opaque&quot;),w=[&quot;height&quot;,&quot;width&quot;,&quot;modes&quot;,&quot;events&quot;,&quot;primary&quot;,&quot;base&quot;,&quot;fallback&quot;];for(var z=0;z&lt;w.length;z++){delete x[w[z]]}var s=window.location.pathname.split(&quot;/&quot;);s.splice(s.length-1,1);s=s.join(&quot;/&quot;);x.base=s+&quot;/&quot;;a[l.id]=n(x);if(b.isIE()){var B=&#39;&lt;object classid=&quot;clsid:D27CDB6E-AE6D-11cf-96B8-444553540000&quot; &quot; width=&quot;100%&quot; height=&quot;100%&quot; id=&quot;&#39;+l.id+&#39;&quot; name=&quot;&#39;+l.id+&#39;&quot; tabindex=0&quot;&quot;&gt;&#39;;B+=&#39;&lt;param name=&quot;movie&quot; value=&quot;&#39;+m.src+&#39;&quot;&gt;&#39;;B+=&#39;&lt;param name=&quot;allowfullscreen&quot; value=&quot;true&quot;&gt;&#39;;B+=&#39;&lt;param name=&quot;allowscriptaccess&quot; value=&quot;always&quot;&gt;&#39;;B+=&#39;&lt;param name=&quot;seamlesstabbing&quot; value=&quot;true&quot;&gt;&#39;;B+=&#39;&lt;param name=&quot;wmode&quot; value=&quot;&#39;+v+&#39;&quot;&gt;&#39;;B+=&#39;&lt;param name=&quot;bgcolor&quot; value=&quot;&#39;+E+&#39;&quot;&gt;&#39;;B+=&quot;&lt;/object&gt;&quot;;l.outerHTML=B;A=document.getElementById(l.id)}else{var y=document.createElement(&quot;object&quot;);y.setAttribute(&quot;type&quot;,&quot;application/x-shockwave-flash&quot;);y.setAttribute(&quot;data&quot;,m.src);y.setAttribute(&quot;width&quot;,&quot;100%&quot;);y.setAttribute(&quot;height&quot;,&quot;100%&quot;);y.setAttribute(&quot;bgcolor&quot;,E);y.setAttribute(&quot;id&quot;,l.id);y.setAttribute(&quot;name&quot;,l.id);y.setAttribute(&quot;tabindex&quot;,0);r(y,&quot;allowfullscreen&quot;,&quot;true&quot;);r(y,&quot;allowscriptaccess&quot;,&quot;always&quot;);r(y,&quot;seamlesstabbing&quot;,&quot;true&quot;);r(y,&quot;wmode&quot;,v);l.parentNode.replaceChild(y,l);A=y}o.container=A;o.setPlayer(A,&quot;flash&quot;)};this.supportsConfig=function(){if(i){if(q){try{var u=q.playlist[0],s=u.sources;if(typeof s==&quot;undefined&quot;){return true}else{for(var t=0;t&lt;s.length;t++){if(s[t].file&amp;&amp;f(s[t].file,s[t].type)){return true}}}}catch(v){return false}}else{return true}}return false};function f(s,t){if(b.isYouTube(s)){return true}if(b.isRtmp(s,t)){return true}if(t==&quot;hls&quot;){return true}var u=b.extensionmap[t?t:b.extension(s)];if(!u){return false}return !!(u.flash)}};e.getVars=function(f){return a[f]}})(jwplayer);(function(c){var a=c.utils,b=a.extensionmap,d=c.events;c.embed.html5=function(g,h,o,f,k){var j=this,e=new d.eventdispatcher();a.extend(j,e);function l(q,r,p){return function(s){try{var t=document.querySelector(&quot;#&quot;+g.id+&quot; .jwmain&quot;);if(p){t.appendChild(r)}if(typeof q.resize==&quot;function&quot;){q.resize(t.clientWidth,t.clientHeight);setTimeout(function(){q.resize(t.clientWidth,t.clientHeight)},400)}r.left=t.style.left;r.top=t.style.top}catch(u){}}}j.embed=function(){if(c.html5){f.setupPlugins(k,o,l);g.innerHTML=&quot;&quot;;var p=c.utils.extend({},o);var q=new c.html5.player(p);k.container=document.getElementById(k.id);k.setPlayer(q,&quot;html5&quot;)}else{var r=new a.scriptloader(h.src);r.addEventListener(d.ERROR,i);r.addEventListener(d.COMPLETE,j.embed);r.load()}};function i(p){j.sendEvent(p.type,{message:&quot;HTML5 player not found&quot;})}j.supportsConfig=function(){if(!!c.vid.canPlayType){try{if(a.typeOf(o.playlist)==&quot;string&quot;){return true}else{var p=o.playlist[0].sources;for(var r=0;r&lt;p.length;r++){var q=p[r].file,s=p[r].type;if(n(q,s)){return true}}}}catch(t){return false}}return false};function n(p,q){if(navigator.userAgent.match(/BlackBerry/i)!==null){return false}if(a.isRtmp(p,q)){return false}var r=b[q?q:a.extension(p)];if(!r){return false}if(r.flash&amp;&amp;!r.html5){return false}return m(r.html5)}function m(p){var q=c.vid;if(!p){return true}try{if(q.canPlayType(p)){return true}else{return false}}catch(r){return false}}}})(jwplayer);(function(d){var c=[],a=d.utils,e=d.events,b=e.state,g=document;var f=d.api=function(t){var x=this,h={},l={},A={},o=[],i=undefined,D=false,p=[],y=undefined,s={},n={};x.container=t;x.id=t.id;x.getBuffer=function(){return w(&quot;jwGetBuffer&quot;)};x.getContainer=function(){return x.container};x.addButton=function(H,F,G,K){try{n[K]=G;var J=&quot;jwplayer(&#39;&quot;+x.id+&quot;&#39;).callback(&#39;&quot;+K+&quot;&#39;)&quot;;w(&quot;jwDockAddButton&quot;,H,F,J,K)}catch(I){a.log(&quot;Could not add dock button&quot;+I.message)}};x.removeButton=function(F){w(&quot;jwDockRemoveButton&quot;,F)},x.callback=function(F){if(n[F]){n[F]()}};x.getDuration=function(){return w(&quot;jwGetDuration&quot;)};x.getFullscreen=function(){return w(&quot;jwGetFullscreen&quot;)};x.getStretching=function(){return w(&quot;jwGetStretching&quot;)};x.getHeight=function(){return w(&quot;jwGetHeight&quot;)};x.getLockState=function(){return w(&quot;jwGetLockState&quot;)};x.getMeta=function(){return x.getItemMeta()};x.getMute=function(){return w(&quot;jwGetMute&quot;)};x.getPlaylist=function(){var G=w(&quot;jwGetPlaylist&quot;);if(x.renderingMode==&quot;flash&quot;){a.deepReplaceKeyName(G,[&quot;__dot__&quot;,&quot;__spc__&quot;,&quot;__dsh__&quot;],[&quot;.&quot;,&quot; &quot;,&quot;-&quot;])}for(var F=0;F&lt;G.length;F++){if(!a.exists(G[F].index)){G[F].index=F}}return G};x.getPlaylistItem=function(F){if(!a.exists(F)){F=x.getCurrentItem()}return x.getPlaylist()[F]};x.getPosition=function(){return w(&quot;jwGetPosition&quot;)};x.getRenderingMode=function(){return x.renderingMode};x.getState=function(){return w(&quot;jwGetState&quot;)};x.getVolume=function(){return w(&quot;jwGetVolume&quot;)};x.getWidth=function(){return w(&quot;jwGetWidth&quot;)};x.setFullscreen=function(F){if(!a.exists(F)){w(&quot;jwSetFullscreen&quot;,!w(&quot;jwGetFullscreen&quot;))}else{w(&quot;jwSetFullscreen&quot;,F)}return x};x.setStretching=function(F){w(&quot;jwSetStretching&quot;,F);return x};x.setMute=function(F){if(!a.exists(F)){w(&quot;jwSetMute&quot;,!w(&quot;jwGetMute&quot;))}else{w(&quot;jwSetMute&quot;,F)}return x};x.lock=function(){return x};x.unlock=function(){return x};x.load=function(F){w(&quot;jwLoad&quot;,F);return x};x.playlistItem=function(F){w(&quot;jwPlaylistItem&quot;,parseInt(F));return x};x.playlistPrev=function(){w(&quot;jwPlaylistPrev&quot;);return x};x.playlistNext=function(){w(&quot;jwPlaylistNext&quot;);return x};x.resize=function(G,F){if(x.renderingMode==&quot;html5&quot;){i.jwResize(G,F)}else{var H=g.getElementById(x.id+&quot;_wrapper&quot;);if(H){H.style.width=a.styleDimension(G);H.style.height=a.styleDimension(F)}}return x};x.play=function(F){if(typeof F==&quot;undefined&quot;){F=x.getState();if(F==b.PLAYING||F==b.BUFFERING){w(&quot;jwPause&quot;)}else{w(&quot;jwPlay&quot;)}}else{w(&quot;jwPlay&quot;,F)}return x};x.pause=function(F){if(typeof F==&quot;undefined&quot;){F=x.getState();if(F==b.PLAYING||F==b.BUFFERING){w(&quot;jwPause&quot;)}else{w(&quot;jwPlay&quot;)}}else{w(&quot;jwPause&quot;,F)}return x};x.stop=function(){w(&quot;jwStop&quot;);return x};x.seek=function(F){w(&quot;jwSeek&quot;,F);return x};x.setVolume=function(F){w(&quot;jwSetVolume&quot;,F);return x};x.loadInstream=function(G,F){y=new f.instream(this,i,G,F);return y};x.getQualityLevels=function(){return w(&quot;jwGetQualityLevels&quot;)};x.getCurrentQuality=function(){return w(&quot;jwGetCurrentQuality&quot;)};x.setCurrentQuality=function(F){w(&quot;jwSetCurrentQuality&quot;,F)};x.getCaptionsList=function(){return w(&quot;jwGetCaptionsList&quot;)};x.getCurrentCaptions=function(){return w(&quot;jwGetCurrentCaptions&quot;)};x.setCurrentCaptions=function(F){w(&quot;jwSetCurrentCaptions&quot;,F)};x.getControls=function(){return w(&quot;jwGetControls&quot;)};x.getSafeRegion=function(){return w(&quot;jwGetSafeRegion&quot;)};x.setControls=function(F){w(&quot;jwSetControls&quot;,F)};var r={onBufferChange:e.JWPLAYER_MEDIA_BUFFER,onBufferFull:e.JWPLAYER_MEDIA_BUFFER_FULL,onError:e.JWPLAYER_ERROR,onFullscreen:e.JWPLAYER_FULLSCREEN,onMeta:e.JWPLAYER_MEDIA_META,onMute:e.JWPLAYER_MEDIA_MUTE,onPlaylist:e.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:e.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:e.JWPLAYER_PLAYLIST_COMPLETE,onReady:e.API_READY,onResize:e.JWPLAYER_RESIZE,onComplete:e.JWPLAYER_MEDIA_COMPLETE,onSeek:e.JWPLAYER_MEDIA_SEEK,onTime:e.JWPLAYER_MEDIA_TIME,onVolume:e.JWPLAYER_MEDIA_VOLUME,onBeforePlay:e.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:e.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:e.JWPLAYER_DISPLAY_CLICK,onControls:e.JWPLAYER_CONTROLS,onQualityLevels:e.JWPLAYER_MEDIA_LEVELS,onQualityChange:e.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:e.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:e.JWPLAYER_CAPTIONS_CHANGED};a.foreach(r,function(F){x[F]=C(r[F],z)});var v={onBuffer:b.BUFFERING,onPause:b.PAUSED,onPlay:b.PLAYING,onIdle:b.IDLE};a.foreach(v,function(F){x[F]=C(v[F],q)});function C(F,G){return function(H){return G(F,H)}}x.remove=function(){if(!D){throw&quot;Cannot call remove() before player is ready&quot;;return}m(this)};function m(F){p=[];f.destroyPlayer(F.id)}x.setup=function(F){if(d.embed){m(x);var G=d(x.id);G.config=F;return new d.embed(G)}return x};x.registerPlugin=function(I,H,G,F){d.plugins.registerPlugin(I,H,G,F)};x.setPlayer=function(F,G){i=F;x.renderingMode=G};x.detachMedia=function(){if(x.renderingMode==&quot;html5&quot;){return w(&quot;jwDetachMedia&quot;)}};x.attachMedia=function(){if(x.renderingMode==&quot;html5&quot;){return w(&quot;jwAttachMedia&quot;)}};function q(F,G){if(!l[F]){l[F]=[];z(e.JWPLAYER_PLAYER_STATE,E(F))}l[F].push(G);return x}function E(F){return function(H){var G=H.newstate,J=H.oldstate;if(G==F){var I=l[G];if(I){for(var K=0;K&lt;I.length;K++){if(typeof I[K]==&quot;function&quot;){I[K].call(this,{oldstate:J,newstate:G})}}}}}}function B(F,G,H){if(!A[F]){A[F]={}}if(!A[F][G]){A[F][G]=[];z(G,k(F,G))}A[F][G].push(H);return x}function k(F,G){return function(I){if(F==I.component){var H=A[F][G];if(H){for(var J=0;J&lt;H.length;J++){if(typeof H[J]==&quot;function&quot;){H[J].call(this,I)}}}}}}function j(F,G){try{F.jwAddEventListener(G,&#39;function(dat) { jwplayer(&quot;&#39;+x.id+&#39;&quot;).dispatchEvent(&quot;&#39;+G+&#39;&quot;, dat); }&#39;)}catch(H){a.log(&quot;Could not add internal listener&quot;)}}function z(F,G){if(!h[F]){h[F]=[];if(i&amp;&amp;D){j(i,F)}}h[F].push(G);return x}x.dispatchEvent=function(H){if(h[H]){var G=a.translateEventResponse(H,arguments[1]);for(var F=0;F&lt;h[H].length;F++){if(typeof h[H][F]==&quot;function&quot;){h[H][F].call(this,G)}}}};x.dispatchInstreamEvent=function(F){if(y){y.dispatchEvent(F,arguments)}};function w(){if(D){var H=arguments[0],F=[];for(var G=1;G&lt;arguments.length;G++){F.push(arguments[G])}if(typeof i!=&quot;undefined&quot;&amp;&amp;typeof i[H]==&quot;function&quot;){switch(F.length){case 4:return(i[H])(F[0],F[1],F[2],F[3]);case 3:return(i[H])(F[0],F[1],F[2]);case 2:return(i[H])(F[0],F[1]);case 1:return(i[H])(F[0]);default:return(i[H])()}}return null}else{p.push(arguments)}}x.playerReady=function(F){D=true;if(!i){x.setPlayer(g.getElementById(F.id))}x.container=g.getElementById(x.id);a.foreach(h,function(G){j(i,G)});z(e.JWPLAYER_PLAYLIST_ITEM,function(G){s={}});z(e.JWPLAYER_MEDIA_META,function(G){a.extend(s,G.metadata)});x.dispatchEvent(e.API_READY);while(p.length&gt;0){w.apply(this,p.shift())}};x.getItemMeta=function(){return s};x.getCurrentItem=function(){return w(&quot;jwGetPlaylistIndex&quot;)};function u(H,J,I){var F=[];if(!J){J=0}if(!I){I=H.length-1}for(var G=J;G&lt;=I;G++){F.push(H[G])}return F}return x};f.selectPlayer=function(i){var h;if(!a.exists(i)){i=0}if(i.nodeType){h=i}else{if(typeof i==&quot;string&quot;){h=g.getElementById(i)}}if(h){var j=f.playerById(h.id);if(j){return j}else{return f.addPlayer(new f(h))}}else{if(typeof i==&quot;number&quot;){return c[i]}}return null};f.playerById=function(i){for(var h=0;h&lt;c.length;h++){if(c[h].id==i){return c[h]}}return null};f.addPlayer=function(h){for(var i=0;i&lt;c.length;i++){if(c[i]==h){return h}}c.push(h);return h};f.destroyPlayer=function(j){var i=-1,k;for(var m=0;m&lt;c.length;m++){if(c[m].id==j){i=m;k=c[m];continue}}if(i&gt;=0){var n=k.id,h=g.getElementById(n+(k.renderingMode==&quot;flash&quot;?&quot;_wrapper&quot;:&quot;&quot;));if(a.clearCss){a.clearCss(&quot;#&quot;+n)}if(h){var l=g.createElement(&quot;div&quot;);l.id=n;h.parentNode.replaceChild(l,h)}c.splice(i,1)}return null};d.playerReady=function(i){var h=d.api.playerById(i.id);if(h){h.playerReady(i)}else{d.api.selectPlayer(i.id).playerReady(i)}}})(jwplayer);(function(b){var c=b.events,a=c.state;b.api.instream=function(e,k,o,r){var j=e,d=k,i=o,l=r,g={},q={};function h(){j.callInternal(&quot;jwLoadInstream&quot;,o,r)}function n(s,t){d.jwInstreamAddEventListener(t,&#39;function(dat) { jwplayer(&quot;&#39;+j.id+&#39;&quot;).dispatchInstreamEvent(&quot;&#39;+t+&#39;&quot;, dat); }&#39;)}function f(s,t){if(!g[s]){g[s]=[];n(d,s)}g[s].push(t);return this}function p(s,t){if(!q[s]){q[s]=[];f(c.JWPLAYER_PLAYER_STATE,m(s))}q[s].push(t);return this}function m(s){return function(u){var t=u.newstate,w=u.oldstate;if(t==s){var v=q[t];if(v){for(var x=0;x&lt;v.length;x++){if(typeof v[x]==&quot;function&quot;){v[x].call(this,{oldstate:w,newstate:t,type:u.type})}}}}}}this.dispatchEvent=function(v,u){if(g[v]){var t=_utils.translateEventResponse(v,u[1]);for(var s=0;s&lt;g[v].length;s++){if(typeof g[v][s]==&quot;function&quot;){g[v][s].call(this,t)}}}};this.onError=function(s){return f(c.JWPLAYER_ERROR,s)};this.onFullscreen=function(s){return f(c.JWPLAYER_FULLSCREEN,s)};this.onMeta=function(s){return f(c.JWPLAYER_MEDIA_META,s)};this.onMute=function(s){return f(c.JWPLAYER_MEDIA_MUTE,s)};this.onComplete=function(s){return f(c.JWPLAYER_MEDIA_COMPLETE,s)};this.onSeek=function(s){return f(c.JWPLAYER_MEDIA_SEEK,s)};this.onTime=function(s){return f(c.JWPLAYER_MEDIA_TIME,s)};this.onVolume=function(s){return f(c.JWPLAYER_MEDIA_VOLUME,s)};this.onBuffer=function(s){return p(a.BUFFERING,s)};this.onPause=function(s){return p(a.PAUSED,s)};this.onPlay=function(s){return p(a.PLAYING,s)};this.onIdle=function(s){return p(a.IDLE,s)};this.onInstreamClick=function(s){return f(c.JWPLAYER_INSTREAM_CLICK,s)};this.onInstreamDestroyed=function(s){return f(c.JWPLAYER_INSTREAM_DESTROYED,s)};this.play=function(s){d.jwInstreamPlay(s)};this.pause=function(s){d.jwInstreamPause(s)};this.seek=function(s){d.jwInstreamSeek(s)};this.destroy=function(){d.jwInstreamDestroy()};this.getState=function(){return d.jwInstreamGetState()};this.getDuration=function(){return d.jwInstreamGetDuration()};this.getPosition=function(){return d.jwInstreamGetPosition()};h()}})(jwplayer)};</td>
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
      <li>&copy; 2015 <span title="0.04997s from github-fe118-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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

