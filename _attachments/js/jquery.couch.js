
    

  

<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>share/www/script/jquery.couch.js at trunk from apache/couchdb - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    <link href="https://d3nwyuy0nl342s.cloudfront.net/0cfe7bcf9861977dc4a8beff3c88349740c311e5/stylesheets/bundle_common.css" media="screen" rel="stylesheet" type="text/css" />
<link href="https://d3nwyuy0nl342s.cloudfront.net/0cfe7bcf9861977dc4a8beff3c88349740c311e5/stylesheets/bundle_github.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script type="text/javascript">
      if (typeof console == "undefined" || typeof console.log == "undefined")
        console = { log: function() {} }
    </script>
    <script type="text/javascript" charset="utf-8">
      var GitHub = {
        assetHost: 'https://d3nwyuy0nl342s.cloudfront.net'
      }
      var github_user = null
      
    </script>
    <script src="https://d3nwyuy0nl342s.cloudfront.net/0cfe7bcf9861977dc4a8beff3c88349740c311e5/javascripts/jquery/jquery-1.4.2.min.js" type="text/javascript"></script>
    <script src="https://d3nwyuy0nl342s.cloudfront.net/0cfe7bcf9861977dc4a8beff3c88349740c311e5/javascripts/bundle_common.js" type="text/javascript"></script>
<script src="https://d3nwyuy0nl342s.cloudfront.net/0cfe7bcf9861977dc4a8beff3c88349740c311e5/javascripts/bundle_github.js" type="text/javascript"></script>


    
    <script type="text/javascript" charset="utf-8">
      GitHub.spy({
        repo: "apache/couchdb"
      })
    </script>

    
  <link href="https://github.com/apache/couchdb/commits/trunk.atom" rel="alternate" title="Recent Commits to couchdb:trunk" type="application/atom+xml" />

        <meta name="description" content="couchdb - Mirror of Apache CouchDB" />
    <script type="text/javascript">
      GitHub.nameWithOwner = GitHub.nameWithOwner || "apache/couchdb";
      GitHub.currentRef = 'trunk';
      GitHub.commitSHA = "0ce2c544b632cb6b405738d5e83d618e079a5d9c";
      GitHub.currentPath = 'share/www/script/jquery.couch.js';
      GitHub.masterBranch = "trunk";

      
    </script>
  

        <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-3769691-2']);
      _gaq.push(['_setDomainName', 'none']);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script');
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        ga.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(ga);
      })();
    </script>

    
  </head>

  

  <body class="logged_out page-blob">
    

    

    

    

    

    <div class="subnavd" id="main">
      <div id="header" class="true">
        
          <a class="logo boring" href="https://github.com">
            <img alt="github" class="default" src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/header/logov3.png" />
            <!--[if (gt IE 8)|!(IE)]><!-->
            <img alt="github" class="hover" src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/header/logov3-hover.png" />
            <!--<![endif]-->
          </a>
        
        
        <div class="topsearch">
  
    <ul class="nav logged_out">
      <li class="pricing"><a href="/plans">Pricing and Signup</a></li>
      <li class="explore"><a href="/explore">Explore GitHub</a></li>
      <li class="features"><a href="/features">Features</a></li>
      <li class="blog"><a href="/blog">Blog</a></li>
      <li class="login"><a href="/login?return_to=https://github.com/apache/couchdb/blob/trunk/share/www/script/jquery.couch.js">Login</a></li>
    </ul>
  
</div>

      </div>

      
      
        
    <div class="site">
      <div class="pagehead repohead vis-public  mirror  instapaper_ignore readability-menu">

      
      <div id="entice">
        <div class="explanation">
          <h2><strong>apache</strong> is using GitHub to share code with you!</h2>
        <p>
          GitHub is more than just a place to share code. It's a place to keep tabs on your favorite developers and projects, easily contribute fixes and new features, and visualize what's going on inside your codebase!
        </p>
        </div>
        <div class="signup">
          <a href="/signup/free?green&amp;referral_code=entice-banner" id="entice-signup-button">Sign Up Now</a>
          <p id="oss-caption">Free for open source</p>
        </div>
      </div>
      
    

      <div class="title-actions-bar">
        <h1>
          <a href="/apache">apache</a> / <strong><a href="https://github.com/apache/couchdb">couchdb</a></strong>
          
          
            <span class="mirror-flag">
              <span class="text">mirrored from <a href="git://git.apache.org/couchdb.git">git://git.apache.org/couchdb.git</a></span>
            </span>
          
        </h1>

        
    <ul class="actions">
      

      
        <li class="for-owner" style="display:none"><a href="https://github.com/apache/couchdb/admin" class="minibutton btn-admin "><span><span class="icon"></span>Admin</span></a></li>
        <li>
          <a href="/apache/couchdb/toggle_watch" class="minibutton btn-watch " id="watch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', 'fcf5ba7561db8ab730424f06e19edbd1e005f8cf'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Watch</span></a>
          <a href="/apache/couchdb/toggle_watch" class="minibutton btn-watch " id="unwatch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', 'fcf5ba7561db8ab730424f06e19edbd1e005f8cf'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Unwatch</span></a>
        </li>
        
          
            <li class="for-notforked" style="display:none"><a href="/apache/couchdb/fork" class="minibutton btn-fork " id="fork_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', 'fcf5ba7561db8ab730424f06e19edbd1e005f8cf'); f.appendChild(s);f.submit();return false;"><span><span class="icon"></span>Fork</span></a></li>
            <li class="for-hasfork" style="display:none"><a href="#" class="minibutton btn-fork " id="your_fork_button"><span><span class="icon"></span>Your Fork</span></a></li>
          

          
          
        
      
      
      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers"><a href="/apache/couchdb/watchers" title="Watchers" class="tooltipped downwards">663</a></li>
          <li class="forks"><a href="/apache/couchdb/network" title="Forks" class="tooltipped downwards">124</a></li>
        </ul>
      </li>
    </ul>

      </div>

        
  <ul class="tabs">
    <li><a href="https://github.com/apache/couchdb" class="selected" highlight="repo_source">Source</a></li>
    <li><a href="https://github.com/apache/couchdb/commits/trunk" highlight="repo_commits">Commits</a></li>
    <li><a href="/apache/couchdb/network" highlight="repo_network">Network</a></li>
    <li><a href="/apache/couchdb/pulls" highlight="repo_pulls">Pull Requests (3)</a></li>

    

    

    
    <li><a href="/apache/couchdb/graphs" highlight="repo_graphs">Graphs</a></li>

    <li class="contextswitch nochoices">
      <span class="toggle leftwards" >
        <em>Branch:</em>
        <code>trunk</code>
      </span>
    </li>
  </ul>

  <div style="display:none" id="pl-description"><p><em class="placeholder">click here to add a description</em></p></div>
  <div style="display:none" id="pl-homepage"><p><em class="placeholder">click here to add a homepage</em></p></div>

  <div class="subnav-bar">
  
  <ul>
    <li>
      
      <a href="/apache/couchdb/branches" class="dropdown">Switch Branches (21)</a>
      <ul>
        
          
          
            <li><a href="/apache/couchdb/blob/0.10.x/share/www/script/jquery.couch.js" action="show">0.10.x</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/0.11.x/share/www/script/jquery.couch.js" action="show">0.11.x</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/0.8.x/share/www/script/jquery.couch.js" action="show">0.8.x</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/0.9.x/share/www/script/jquery.couch.js" action="show">0.9.x</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/1.0.x/share/www/script/jquery.couch.js" action="show">1.0.x</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/1.1.x/share/www/script/jquery.couch.js" action="show">1.1.x</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/account/share/www/script/jquery.couch.js" action="show">account</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/design_resources/share/www/script/jquery.couch.js" action="show">design_resources</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/form/share/www/script/jquery.couch.js" action="show">form</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/improve_range_support/share/www/script/jquery.couch.js" action="show">improve_range_support</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/list-iterator/share/www/script/jquery.couch.js" action="show">list-iterator</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/lucene-search/share/www/script/jquery.couch.js" action="show">lucene-search</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/md5_revids/share/www/script/jquery.couch.js" action="show">md5_revids</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/mochiweb-1.4.1/share/www/script/jquery.couch.js" action="show">mochiweb-1.4.1</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/new_replicator/share/www/script/jquery.couch.js" action="show">new_replicator</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/rep_security/share/www/script/jquery.couch.js" action="show">rep_security</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/replicationnotification/share/www/script/jquery.couch.js" action="show">replicationnotification</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/runtimeconfig/share/www/script/jquery.couch.js" action="show">runtimeconfig</a></li>
          
        
          
          
            <li><a href="/apache/couchdb/blob/tail_header/share/www/script/jquery.couch.js" action="show">tail_header</a></li>
          
        
          
            <li><strong>trunk &#x2713;</strong></li>
            
          
          
            <li><a href="/apache/couchdb/blob/use-osx-bundled-icu/share/www/script/jquery.couch.js" action="show">use-osx-bundled-icu</a></li>
          
        
      </ul>
    </li>
    <li>
      <a href="#" class="dropdown ">Switch Tags (15)</a>
              <ul>
                      
              <li><a href="/apache/couchdb/blob/bulk_transactions/share/www/script/jquery.couch.js">bulk_transactions</a></li>
            
                      
              <li><a href="/apache/couchdb/blob/1.0.2/share/www/script/jquery.couch.js">1.0.2</a></li>
            
                      
              <li><a href="/apache/couchdb/blob/1.0.1/share/www/script/jquery.couch.js">1.0.1</a></li>
            
                      
              <li><a href="/apache/couchdb/blob/1.0.0/share/www/script/jquery.couch.js">1.0.0</a></li>
            
                      
              <li><a href="/apache/couchdb/blob/0.11.2/share/www/script/jquery.couch.js">0.11.2</a></li>
            
                      
              <li><a href="/apache/couchdb/blob/0.11.1/share/www/script/jquery.couch.js">0.11.1</a></li>
            
                      
              <li><a href="/apache/couchdb/blob/0.11.0/share/www/script/jquery.couch.js">0.11.0</a></li>
            
                      
              <li><a href="/apache/couchdb/blob/0.10.2/share/www/script/jquery.couch.js">0.10.2</a></li>
            
                      
              <li><a href="/apache/couchdb/blob/0.10.1/share/www/script/jquery.couch.js">0.10.1</a></li>
            
                      
              <li><a href="/apache/couchdb/blob/0.10.0/share/www/script/jquery.couch.js">0.10.0</a></li>
            
                      
              <li><a href="/apache/couchdb/blob/0.9.2/share/www/script/jquery.couch.js">0.9.2</a></li>
            
                      
              <li><a href="/apache/couchdb/blob/0.9.1/share/www/script/jquery.couch.js">0.9.1</a></li>
            
                      
              <li><a href="/apache/couchdb/blob/0.9.0/share/www/script/jquery.couch.js">0.9.0</a></li>
            
                      
              <li><a href="/apache/couchdb/blob/0.8.1/share/www/script/jquery.couch.js">0.8.1</a></li>
            
                      
              <li><a href="/apache/couchdb/blob/0.8.0/share/www/script/jquery.couch.js">0.8.0</a></li>
            
                  </ul>
      
    </li>
    <li>
    
    <a href="/apache/couchdb/branches" class="manage">Branch List</a>
    
    </li>
  </ul>
</div>

  
  
  
  
  
  



        
    <div id="repo_details" class="metabox clearfix">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request&hellip;</div>

        <a href="/apache/couchdb/downloads" class="download-source" id="download_button" title="Download source, tagged packages and binaries."><span class="icon"></span>Downloads</a>

      <div id="repository_desc_wrapper">
      <div id="repository_description" rel="repository_description_edit">
        
          <p>Mirror of Apache CouchDB
            <span id="read_more" style="display:none">&mdash; <a href="#readme">Read more</a></span>
          </p>
        
      </div>

      <div id="repository_description_edit" style="display:none;" class="inline-edit">
        <form action="/apache/couchdb/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="fcf5ba7561db8ab730424f06e19edbd1e005f8cf" /></div>
          <input type="hidden" name="field" value="repository_description">
          <input type="text" class="textfield" name="value" value="Mirror of Apache CouchDB">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>

      
      <div class="repository-homepage" id="repository_homepage" rel="repository_homepage_edit">
        <p><a href="http://" rel="nofollow"></a></p>
      </div>

      <div id="repository_homepage_edit" style="display:none;" class="inline-edit">
        <form action="/apache/couchdb/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="fcf5ba7561db8ab730424f06e19edbd1e005f8cf" /></div>
          <input type="hidden" name="field" value="repository_homepage">
          <input type="text" class="textfield" name="value" value="">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>
      </div>
      <div class="rule "></div>
            <div id="url_box" class="url-box">
        <ul class="clone-urls">
          
            
            <li id="http_clone_url"><a href="https://github.com/apache/couchdb.git" data-permissions="Read-Only">HTTP</a></li>
            <li id="public_clone_url"><a href="git://github.com/apache/couchdb.git" data-permissions="Read-Only">Git Read-Only</a></li>
          
          
        </ul>
        <input type="text" spellcheck="false" id="url_field" class="url-field" />
              <span style="display:none" id="url_box_clippy"></span>
      <span id="clippy_tooltip_url_box_clippy" class="clippy-tooltip tooltipped" title="copy to clipboard">
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="14"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://d3nwyuy0nl342s.cloudfront.net/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=url_box_clippy&amp;copied=&amp;copyto=">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://d3nwyuy0nl342s.cloudfront.net/flash/clippy.swf?v5"
             width="14"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=url_box_clippy&amp;copied=&amp;copyto="
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      </span>

        <p id="url_description">This URL has <strong>Read+Write</strong> access</p>
      </div>
    </div>

    <div class="frame frame-center tree-finder" style="display:none">
      <div class="breadcrumb">
        <b><a href="/apache/couchdb">couchdb</a></b> /
        <input class="tree-finder-input" type="text" name="query" autocomplete="off" spellcheck="false">
      </div>

      
        <div class="octotip">
          <p>
            <a href="/apache/couchdb/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever">Dismiss</a>
            <strong>Octotip:</strong> You've activated the <em>file finder</em> by pressing <span class="kbd">t</span>
            Start typing to filter the file list. Use <span class="kbd badmono">↑</span> and <span class="kbd badmono">↓</span> to navigate,
            <span class="kbd">enter</span> to view files.
          </p>
        </div>
      

      <table class="tree-browser" cellpadding="0" cellspacing="0">
        <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
        <tr class="js-no-results no-results" style="display: none">
          <th colspan="2">No matching files</th>
        </tr>
        <tbody class="js-results-list">
        </tbody>
      </table>
    </div>

    <div id="jump-to-line" style="display:none">
      <h2>Jump to Line</h2>
      <form>
        <input class="textfield" type="text">
        <div class="full-button">
          <button type="submit" class="classy">
            <span>Go</span>
          </button>
        </div>
      </form>
    </div>


        

      </div><!-- /.pagehead -->

      

  





<script type="text/javascript">
  GitHub.downloadRepo = '/apache/couchdb/archives/trunk'
  GitHub.revType = "ref"

  GitHub.controllerName = "blob"
  GitHub.actionName     = "show"
  GitHub.currentAction  = "blob#show"

  

  
</script>






<div class="flash-messages"></div>


  <div id="commit">
    <div class="group">
        
  <div class="envelope commit">
    <div class="human">
      
        <div class="message"><pre><a href="/apache/couchdb/commit/0ce2c544b632cb6b405738d5e83d618e079a5d9c">View groups: only open the databases when needed</a> </pre></div>
      

      <div class="actor">
        <div class="gravatar">
          
          <img src="https://secure.gravatar.com/avatar/2917e5688cd7ddb0b78e822a51b2179d?s=140&d=https://d3nwyuy0nl342s.cloudfront.net%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="30" height="30"  />
        </div>
        <div class="name"><a href="/fdmanana">fdmanana</a> <span>(author)</span></div>
        <div class="date">
          <abbr class="relatize" title="2011-04-23 15:56:49">Sat Apr 23 15:56:49 -0700 2011</abbr>
        </div>
      </div>

      

    </div>
    <div class="machine">
      <span>c</span>ommit&nbsp;&nbsp;<a href="/apache/couchdb/commit/0ce2c544b632cb6b405738d5e83d618e079a5d9c" hotkey="c">0ce2c544b632cb6b4057</a><br />
      <span>t</span>ree&nbsp;&nbsp;&nbsp;&nbsp;<a href="/apache/couchdb/tree/0ce2c544b632cb6b405738d5e83d618e079a5d9c" hotkey="t">f6bd542c4ae330692ac2</a><br />
      
        <span>p</span>arent&nbsp;
        
        <a href="/apache/couchdb/tree/6bdfd36621bb9f66feffc08e5af11c31b7c76052" hotkey="p">6bdfd36621bb9f66feff</a>
      

    </div>
  </div>

    </div>
  </div>



  <div id="slider">

  

    <div class="breadcrumb" data-path="share/www/script/jquery.couch.js/">
      <b><a href="/apache/couchdb/tree/291465059019d57605d7548feeeab621704b23d0">couchdb</a></b> / <a href="/apache/couchdb/tree/291465059019d57605d7548feeeab621704b23d0/share">share</a> / <a href="/apache/couchdb/tree/291465059019d57605d7548feeeab621704b23d0/share/www">www</a> / <a href="/apache/couchdb/tree/291465059019d57605d7548feeeab621704b23d0/share/www/script">script</a> / jquery.couch.js       <span style="display:none" id="clippy_3051">share/www/script/jquery.couch.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://d3nwyuy0nl342s.cloudfront.net/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_3051&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://d3nwyuy0nl342s.cloudfront.net/flash/clippy.swf?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_3051&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="share/www/script/jquery.couch.js/">
        
          <ul class="big-actions">
            
            <li><a class="file-edit-link minibutton" href="/apache/couchdb/file-edit/__current_ref__/share/www/script/jquery.couch.js"><span>Edit this file</span></a></li>
          </ul>
        

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://d3nwyuy0nl342s.cloudfront.net/images/icons/txt.png" width="16" /></span>
                <span class="mode" title="File Mode">100644</span>
                
                  <span>1092 lines (1042 sloc)</span>
                
                <span>40.849 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/apache/couchdb/raw/trunk/share/www/script/jquery.couch.js" id="raw-url">raw</a></li>
                
                  <li><a href="/apache/couchdb/blame/trunk/share/www/script/jquery.couch.js">blame</a></li>
                
                <li><a href="/apache/couchdb/commits/trunk/share/www/script/jquery.couch.js">history</a></li>
              </ul>
            </div>
            
  <div class="data type-javascript">
    
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
</pre>
          </td>
          <td width="100%">
            
              
                <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">// Licensed under the Apache License, Version 2.0 (the &quot;License&quot;); you may not</span></div><div class='line' id='LC2'><span class="c1">// use this file except in compliance with the License. You may obtain a copy of</span></div><div class='line' id='LC3'><span class="c1">// the License at</span></div><div class='line' id='LC4'><span class="c1">//</span></div><div class='line' id='LC5'><span class="c1">//   http://www.apache.org/licenses/LICENSE-2.0</span></div><div class='line' id='LC6'><span class="c1">//</span></div><div class='line' id='LC7'><span class="c1">// Unless required by applicable law or agreed to in writing, software</span></div><div class='line' id='LC8'><span class="c1">// distributed under the License is distributed on an &quot;AS IS&quot; BASIS, WITHOUT</span></div><div class='line' id='LC9'><span class="c1">// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the</span></div><div class='line' id='LC10'><span class="c1">// License for the specific language governing permissions and limitations under</span></div><div class='line' id='LC11'><span class="c1">// the License.</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><span class="cm">/**</span></div><div class='line' id='LC14'><span class="cm"> * @namespace</span></div><div class='line' id='LC15'><span class="cm"> * $.couch is used to communicate with a CouchDB server, the server methods can</span></div><div class='line' id='LC16'><span class="cm"> * be called directly without creating an instance. Typically all methods are</span></div><div class='line' id='LC17'><span class="cm"> * passed an &lt;code&gt;options&lt;/code&gt; object which defines a success callback which</span></div><div class='line' id='LC18'><span class="cm"> * is called with the data returned from the http request to CouchDB, you can</span></div><div class='line' id='LC19'><span class="cm"> * find the other settings that can be used in the &lt;code&gt;options&lt;/code&gt; object</span></div><div class='line' id='LC20'><span class="cm"> * from &lt;a href=&quot;http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings&quot;&gt;</span></div><div class='line' id='LC21'><span class="cm"> * jQuery.ajax settings&lt;/a&gt;</span></div><div class='line' id='LC22'><span class="cm"> * &lt;pre&gt;&lt;code&gt;$.couch.activeTasks({</span></div><div class='line' id='LC23'><span class="cm"> *   success: function (data) {</span></div><div class='line' id='LC24'><span class="cm"> *     console.log(data);</span></div><div class='line' id='LC25'><span class="cm"> *   }</span></div><div class='line' id='LC26'><span class="cm"> * });&lt;/code&gt;&lt;/pre&gt;</span></div><div class='line' id='LC27'><span class="cm"> * Outputs (for example):</span></div><div class='line' id='LC28'><span class="cm"> * &lt;pre&gt;&lt;code&gt;[</span></div><div class='line' id='LC29'><span class="cm"> *  {</span></div><div class='line' id='LC30'><span class="cm"> *   &quot;pid&quot; : &quot;&lt;0.11599.0&gt;&quot;,</span></div><div class='line' id='LC31'><span class="cm"> *   &quot;status&quot; : &quot;Copied 0 of 18369 changes (0%)&quot;,</span></div><div class='line' id='LC32'><span class="cm"> *   &quot;task&quot; : &quot;recipes&quot;,</span></div><div class='line' id='LC33'><span class="cm"> *   &quot;type&quot; : &quot;Database Compaction&quot;</span></div><div class='line' id='LC34'><span class="cm"> *  }</span></div><div class='line' id='LC35'><span class="cm"> *]&lt;/code&gt;&lt;/pre&gt;</span></div><div class='line' id='LC36'><span class="cm"> */</span></div><div class='line' id='LC37'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">couch</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">couch</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC40'>&nbsp;&nbsp;<span class="cm">/** @lends $.couch */</span></div><div class='line' id='LC41'><br/></div><div class='line' id='LC42'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC43'><span class="cm">   * @private</span></div><div class='line' id='LC44'><span class="cm">   */</span></div><div class='line' id='LC45'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">encodeDocId</span><span class="p">(</span><span class="nx">docID</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">parts</span> <span class="o">=</span> <span class="nx">docID</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">);</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">parts</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="s2">&quot;_design&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">parts</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s2">&quot;_design/&quot;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">parts</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">));</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">docID</span><span class="p">);</span></div><div class='line' id='LC52'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC55'><span class="cm">   * @private</span></div><div class='line' id='LC56'><span class="cm">   */</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">uuidCache</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">couch</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">urlPrefix</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC62'><br/></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC64'><span class="cm">     * You can obtain a list of active tasks by using the /_active_tasks URL.</span></div><div class='line' id='LC65'><span class="cm">     * The result is a JSON array of the currently running tasks, with each task</span></div><div class='line' id='LC66'><span class="cm">     * being described with a single object.</span></div><div class='line' id='LC67'><span class="cm">     * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/uploads/</span></div><div class='line' id='LC68'><span class="cm">     * all/documentation/couchbase-api-misc.html#couchbase-api-misc_active-task</span></div><div class='line' id='LC69'><span class="cm">     * s_get&quot;&gt;docs for /_active_tasks&lt;/a&gt;</span></div><div class='line' id='LC70'><span class="cm">     * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/jQuery.ajax</span></div><div class='line' id='LC71'><span class="cm">     * /#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC72'><span class="cm">     */</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">activeTasks</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">(</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">urlPrefix</span> <span class="o">+</span> <span class="s2">&quot;/_active_tasks&quot;</span><span class="p">},</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Active task status could not be retrieved&quot;</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC80'><br/></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC82'><span class="cm">     * Returns a list of all the databases in the CouchDB instance</span></div><div class='line' id='LC83'><span class="cm">     * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/uploads/</span></div><div class='line' id='LC84'><span class="cm">     * all/documentation/couchbase-api-misc.html#couchbase-api-misc_active-task</span></div><div class='line' id='LC85'><span class="cm">     * s_get&quot;&gt;docs for /_all_dbs&lt;/a&gt;</span></div><div class='line' id='LC86'><span class="cm">     * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/jQuery.ajax</span></div><div class='line' id='LC87'><span class="cm">     * /#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC88'><span class="cm">     */</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">allDbs</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">(</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">urlPrefix</span> <span class="o">+</span> <span class="s2">&quot;/_all_dbs&quot;</span><span class="p">},</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;An error occurred retrieving the list of all databases&quot;</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC98'><span class="cm">     * View and edit the CouchDB configuration, called with just the options</span></div><div class='line' id='LC99'><span class="cm">     * parameter the entire config is returned, you can be more specific by</span></div><div class='line' id='LC100'><span class="cm">     * passing the section and option parameters, if you specify a value that</span></div><div class='line' id='LC101'><span class="cm">     * value will be stored in the configuration.</span></div><div class='line' id='LC102'><span class="cm">     * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/uploads/</span></div><div class='line' id='LC103'><span class="cm">     * all/documentation/couchbase-api-config.html#couchbase-api-config_config</span></div><div class='line' id='LC104'><span class="cm">     * -section-key_put&quot;&gt;docs for /_config&lt;/a&gt;</span></div><div class='line' id='LC105'><span class="cm">     * @param {ajaxSettings} options</span></div><div class='line' id='LC106'><span class="cm">     * &lt;a href=&quot;http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings&quot;&gt;</span></div><div class='line' id='LC107'><span class="cm">     * jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC108'><span class="cm">     * @param {String} [section] the section of the config</span></div><div class='line' id='LC109'><span class="cm">     * @param {String} [option] the particular config option</span></div><div class='line' id='LC110'><span class="cm">     * @param {String} [value] value to be set</span></div><div class='line' id='LC111'><span class="cm">     */</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">config</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="nx">section</span><span class="p">,</span> <span class="nx">option</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">req</span> <span class="o">=</span> <span class="p">{</span><span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">urlPrefix</span> <span class="o">+</span> <span class="s2">&quot;/_config/&quot;</span><span class="p">};</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">section</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">req</span><span class="p">.</span><span class="nx">url</span> <span class="o">+=</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">section</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;/&quot;</span><span class="p">;</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">option</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">req</span><span class="p">.</span><span class="nx">url</span> <span class="o">+=</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">option</span><span class="p">);</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">req</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s2">&quot;DELETE&quot;</span><span class="p">;</span>        </div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">req</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s2">&quot;PUT&quot;</span><span class="p">;</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">req</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">toJSON</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">req</span><span class="p">.</span><span class="nx">contentType</span> <span class="o">=</span> <span class="s2">&quot;application/json&quot;</span><span class="p">;</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">req</span><span class="p">.</span><span class="nx">processData</span> <span class="o">=</span> <span class="kc">false</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;An error occurred retrieving/updating the server configuration&quot;</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC135'><span class="cm">     * Returns the session information for the currently logged in user.</span></div><div class='line' id='LC136'><span class="cm">     * @param {ajaxSettings} options</span></div><div class='line' id='LC137'><span class="cm">     * &lt;a href=&quot;http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings&quot;&gt;</span></div><div class='line' id='LC138'><span class="cm">     * jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC139'><span class="cm">     */</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">session</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;GET&quot;</span><span class="p">,</span> <span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">urlPrefix</span> <span class="o">+</span> <span class="s2">&quot;/_session&quot;</span><span class="p">,</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">beforeSend</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">xhr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">setRequestHeader</span><span class="p">(</span><span class="s1">&#39;Accept&#39;</span><span class="p">,</span> <span class="s1">&#39;application/json&#39;</span><span class="p">);</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">complete</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">resp</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">parseJSON</span><span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">responseText</span><span class="p">);</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">status</span> <span class="o">==</span> <span class="mi">200</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">status</span><span class="p">,</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">error</span><span class="p">,</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">reason</span><span class="p">);</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">alert</span><span class="p">(</span><span class="s2">&quot;An error occurred getting session info: &quot;</span> <span class="o">+</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">reason</span><span class="p">);</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC161'><span class="cm">     * @private</span></div><div class='line' id='LC162'><span class="cm">     */</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">userDb</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">couch</span><span class="p">.</span><span class="nx">session</span><span class="p">({</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">resp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">userDb</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">couch</span><span class="p">.</span><span class="nx">db</span><span class="p">(</span><span class="nx">resp</span><span class="p">.</span><span class="nx">info</span><span class="p">.</span><span class="nx">authentication_db</span><span class="p">);</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">(</span><span class="nx">userDb</span><span class="p">);</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC171'><br/></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC173'><span class="cm">     * Create a new user on the CouchDB server, &lt;code&gt;user_doc&lt;/code&gt; is an</span></div><div class='line' id='LC174'><span class="cm">     * object with a &lt;code&gt;name&lt;/code&gt; field and other information you want</span></div><div class='line' id='LC175'><span class="cm">     * to store relating to that user, for example</span></div><div class='line' id='LC176'><span class="cm">     * &lt;code&gt;{&quot;name&quot;: &quot;daleharvey&quot;}&lt;/code&gt;</span></div><div class='line' id='LC177'><span class="cm">     * @param {Object} user_doc Users details</span></div><div class='line' id='LC178'><span class="cm">     * @param {String} password Users password</span></div><div class='line' id='LC179'><span class="cm">     * @param {ajaxSettings} options</span></div><div class='line' id='LC180'><span class="cm">     * &lt;a href=&quot;http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings&quot;&gt;</span></div><div class='line' id='LC181'><span class="cm">      * jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC182'><span class="cm">     */</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">signup</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">user_doc</span><span class="p">,</span> <span class="nx">password</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span>      </div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// prepare user doc based on name and password</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">user_doc</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">prepareUserDoc</span><span class="p">(</span><span class="nx">user_doc</span><span class="p">,</span> <span class="nx">password</span><span class="p">);</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">couch</span><span class="p">.</span><span class="nx">userDb</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">db</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">db</span><span class="p">.</span><span class="nx">saveDoc</span><span class="p">(</span><span class="nx">user_doc</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC191'><br/></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC193'><span class="cm">     * Populates a user doc with a new password.</span></div><div class='line' id='LC194'><span class="cm">     * @param {Object} user_doc User details</span></div><div class='line' id='LC195'><span class="cm">     * @param {String} new_password New Password</span></div><div class='line' id='LC196'><span class="cm">     */</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">prepareUserDoc</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">user_doc</span><span class="p">,</span> <span class="nx">new_password</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">hex_sha1</span> <span class="o">==</span> <span class="s2">&quot;undefined&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">alert</span><span class="p">(</span><span class="s2">&quot;creating a user doc requires sha1.js to be loaded in the page&quot;</span><span class="p">);</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">user_prefix</span> <span class="o">=</span> <span class="s2">&quot;org.couchdb.user:&quot;</span><span class="p">;</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">user_doc</span><span class="p">.</span><span class="nx">_id</span> <span class="o">=</span> <span class="nx">user_doc</span><span class="p">.</span><span class="nx">_id</span> <span class="o">||</span> <span class="nx">user_prefix</span> <span class="o">+</span> <span class="nx">user_doc</span><span class="p">.</span><span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">new_password</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// handle the password crypto</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">user_doc</span><span class="p">.</span><span class="nx">salt</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">couch</span><span class="p">.</span><span class="nx">newUUID</span><span class="p">();</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">user_doc</span><span class="p">.</span><span class="nx">password_sha</span> <span class="o">=</span> <span class="nx">hex_sha1</span><span class="p">(</span><span class="nx">new_password</span> <span class="o">+</span> <span class="nx">user_doc</span><span class="p">.</span><span class="nx">salt</span><span class="p">);</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">user_doc</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s2">&quot;user&quot;</span><span class="p">;</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">user_doc</span><span class="p">.</span><span class="nx">roles</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">user_doc</span><span class="p">.</span><span class="nx">roles</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">user_doc</span><span class="p">;</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC215'><br/></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC217'><span class="cm">     * Authenticate against CouchDB, the &lt;code&gt;options&lt;/code&gt; parameter is</span></div><div class='line' id='LC218'><span class="cm">      *expected to have &lt;code&gt;name&lt;/code&gt; and &lt;code&gt;password&lt;/code&gt; fields.</span></div><div class='line' id='LC219'><span class="cm">     * @param {ajaxSettings} options</span></div><div class='line' id='LC220'><span class="cm">     * &lt;a href=&quot;http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings&quot;&gt;</span></div><div class='line' id='LC221'><span class="cm">     * jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC222'><span class="cm">     */</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">login</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;POST&quot;</span><span class="p">,</span> <span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">urlPrefix</span> <span class="o">+</span> <span class="s2">&quot;/_session&quot;</span><span class="p">,</span> <span class="nx">dataType</span><span class="o">:</span> <span class="s2">&quot;json&quot;</span><span class="p">,</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="o">:</span> <span class="p">{</span><span class="nx">name</span><span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span> <span class="nx">password</span><span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">password</span><span class="p">},</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">beforeSend</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">xhr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">setRequestHeader</span><span class="p">(</span><span class="s1">&#39;Accept&#39;</span><span class="p">,</span> <span class="s1">&#39;application/json&#39;</span><span class="p">);</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">complete</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">resp</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">parseJSON</span><span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">responseText</span><span class="p">);</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">status</span> <span class="o">==</span> <span class="mi">200</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">status</span><span class="p">,</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">error</span><span class="p">,</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">reason</span><span class="p">);</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">alert</span><span class="p">(</span><span class="s2">&quot;An error occurred logging in: &quot;</span> <span class="o">+</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">reason</span><span class="p">);</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC243'><br/></div><div class='line' id='LC244'><br/></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC246'><span class="cm">     * Delete your current CouchDB user session</span></div><div class='line' id='LC247'><span class="cm">     * @param {ajaxSettings} options</span></div><div class='line' id='LC248'><span class="cm">     * &lt;a href=&quot;http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings&quot;&gt;</span></div><div class='line' id='LC249'><span class="cm">     * jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC250'><span class="cm">     */</span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">logout</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;DELETE&quot;</span><span class="p">,</span> <span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">urlPrefix</span> <span class="o">+</span> <span class="s2">&quot;/_session&quot;</span><span class="p">,</span> <span class="nx">dataType</span><span class="o">:</span> <span class="s2">&quot;json&quot;</span><span class="p">,</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">username</span> <span class="o">:</span> <span class="s2">&quot;_&quot;</span><span class="p">,</span> <span class="nx">password</span> <span class="o">:</span> <span class="s2">&quot;_&quot;</span><span class="p">,</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">beforeSend</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">xhr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">setRequestHeader</span><span class="p">(</span><span class="s1">&#39;Accept&#39;</span><span class="p">,</span> <span class="s1">&#39;application/json&#39;</span><span class="p">);</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">complete</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">resp</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">parseJSON</span><span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">responseText</span><span class="p">);</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">status</span> <span class="o">==</span> <span class="mi">200</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">status</span><span class="p">,</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">error</span><span class="p">,</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">reason</span><span class="p">);</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">alert</span><span class="p">(</span><span class="s2">&quot;An error occurred logging out: &quot;</span> <span class="o">+</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">reason</span><span class="p">);</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC273'><span class="cm">     * @namespace</span></div><div class='line' id='LC274'><span class="cm">     * $.couch.db is used to communicate with a specific CouchDB database</span></div><div class='line' id='LC275'><span class="cm">     * &lt;pre&gt;&lt;code&gt;var $db = $.couch.db(&quot;mydatabase&quot;);</span></div><div class='line' id='LC276'><span class="cm">     *$db.allApps({</span></div><div class='line' id='LC277'><span class="cm">     *  success: function (data) {</span></div><div class='line' id='LC278'><span class="cm">     *    ... process data ...</span></div><div class='line' id='LC279'><span class="cm">     *  }</span></div><div class='line' id='LC280'><span class="cm">     *});</span></div><div class='line' id='LC281'><span class="cm">     * &lt;/code&gt;&lt;/pre&gt;</span></div><div class='line' id='LC282'><span class="cm">     */</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">db</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">db_opts</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">db_opts</span> <span class="o">=</span> <span class="nx">db_opts</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rawDocs</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">maybeApplyVersion</span><span class="p">(</span><span class="nx">doc</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nx">_id</span> <span class="o">&amp;&amp;</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">_rev</span> <span class="o">&amp;&amp;</span> <span class="nx">rawDocs</span><span class="p">[</span><span class="nx">doc</span><span class="p">.</span><span class="nx">_id</span><span class="p">]</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rawDocs</span><span class="p">[</span><span class="nx">doc</span><span class="p">.</span><span class="nx">_id</span><span class="p">].</span><span class="nx">rev</span> <span class="o">==</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">_rev</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// todo: can we use commonjs require here?</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">Base64</span> <span class="o">==</span> <span class="s2">&quot;undefined&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">alert</span><span class="p">(</span><span class="s2">&quot;please include /_utils/script/base64.js in the page for &quot;</span> <span class="o">+</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;base64 support&quot;</span><span class="p">);</span></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doc</span><span class="p">.</span><span class="nx">_attachments</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">_attachments</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doc</span><span class="p">.</span><span class="nx">_attachments</span><span class="p">[</span><span class="s2">&quot;rev-&quot;</span><span class="o">+</span><span class="nx">doc</span><span class="p">.</span><span class="nx">_rev</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;-&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">]]</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">content_type</span> <span class="o">:</span><span class="s2">&quot;application/json&quot;</span><span class="p">,</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">:</span> <span class="nx">Base64</span><span class="p">.</span><span class="nx">encode</span><span class="p">(</span><span class="nx">rawDocs</span><span class="p">[</span><span class="nx">doc</span><span class="p">.</span><span class="nx">_id</span><span class="p">].</span><span class="nx">raw</span><span class="p">)</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="cm">/** @lends $.couch.db */</span><span class="p">{</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">name</span><span class="o">:</span> <span class="nx">name</span><span class="p">,</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">uri</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">urlPrefix</span> <span class="o">+</span> <span class="s2">&quot;/&quot;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;/&quot;</span><span class="p">,</span></div><div class='line' id='LC307'><br/></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC309'><span class="cm">         * Request compaction of the specified database.</span></div><div class='line' id='LC310'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC311'><span class="cm">         * uploads/all/documentation/couchbase-api-db.html#couchbase-api-db_</span></div><div class='line' id='LC312'><span class="cm">         * db-compact_post&quot;&gt;docs for /db/_compact&lt;/a&gt;</span></div><div class='line' id='LC313'><span class="cm">         * @param {ajaxSettings} options</span></div><div class='line' id='LC314'><span class="cm">         * &lt;a href=&quot;http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings&quot;&gt;</span></div><div class='line' id='LC315'><span class="cm">         * jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC316'><span class="cm">         */</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">compact</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="p">{</span><span class="nx">successStatus</span><span class="o">:</span> <span class="mi">202</span><span class="p">});</span></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;POST&quot;</span><span class="p">,</span> <span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span> <span class="o">+</span> <span class="s2">&quot;_compact&quot;</span><span class="p">,</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span> <span class="nx">processData</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;The database could not be compacted&quot;</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC327'><br/></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC329'><span class="cm">         * Cleans up the cached view output on disk for a given view.</span></div><div class='line' id='LC330'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC331'><span class="cm">         * uploads/all/documentation/couchbase-api-db.html#couchbase-api-db</span></div><div class='line' id='LC332'><span class="cm">         * _db-view-cleanup_post&quot;&gt;docs for /db/_compact&lt;/a&gt;</span></div><div class='line' id='LC333'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC334'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC335'><span class="cm">         */</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">viewCleanup</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="p">{</span><span class="nx">successStatus</span><span class="o">:</span> <span class="mi">202</span><span class="p">});</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;POST&quot;</span><span class="p">,</span> <span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span> <span class="o">+</span> <span class="s2">&quot;_view_cleanup&quot;</span><span class="p">,</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span> <span class="nx">processData</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;The views could not be cleaned up&quot;</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC346'><br/></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC348'><span class="cm">         * Compacts the view indexes associated with the specified design</span></div><div class='line' id='LC349'><span class="cm">         * document. You can use this in place of the full database compaction</span></div><div class='line' id='LC350'><span class="cm">         * if you know a specific set of view indexes have been affected by a</span></div><div class='line' id='LC351'><span class="cm">         * recent database change.</span></div><div class='line' id='LC352'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/upl</span></div><div class='line' id='LC353'><span class="cm">         * oads/all/documentation/couchbase-api-db.html#couchbase-api-db_db-</span></div><div class='line' id='LC354'><span class="cm">         * compact-design-doc_post&quot;&gt;docs for /db/_compact/design-doc&lt;/a&gt;</span></div><div class='line' id='LC355'><span class="cm">         * @param {String} groupname Name of design-doc to compact</span></div><div class='line' id='LC356'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC357'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC358'><span class="cm">         */</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">compactView</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">groupname</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="p">{</span><span class="nx">successStatus</span><span class="o">:</span> <span class="mi">202</span><span class="p">});</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;POST&quot;</span><span class="p">,</span> <span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span> <span class="o">+</span> <span class="s2">&quot;_compact/&quot;</span> <span class="o">+</span> <span class="nx">groupname</span><span class="p">,</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span> <span class="nx">processData</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;The view could not be compacted&quot;</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC369'><br/></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC371'><span class="cm">         * Create a new database</span></div><div class='line' id='LC372'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC373'><span class="cm">         * uploads/all/documentation/couchbase-api-db.html#couchbase-api-db_</span></div><div class='line' id='LC374'><span class="cm">         * db_put&quot;&gt;docs for PUT /db/&lt;/a&gt;</span></div><div class='line' id='LC375'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC376'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC377'><span class="cm">         */</span></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">create</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="p">{</span><span class="nx">successStatus</span><span class="o">:</span> <span class="mi">201</span><span class="p">});</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;PUT&quot;</span><span class="p">,</span> <span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span><span class="p">,</span> <span class="nx">contentType</span><span class="o">:</span> <span class="s2">&quot;application/json&quot;</span><span class="p">,</span></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span> <span class="nx">processData</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;The database could not be created&quot;</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC388'><br/></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC390'><span class="cm">         * Deletes the specified database, and all the documents and</span></div><div class='line' id='LC391'><span class="cm">         * attachments contained within it.</span></div><div class='line' id='LC392'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC393'><span class="cm">         * uploads/all/documentation/couchbase-api-db.html#couchbase-api-db_</span></div><div class='line' id='LC394'><span class="cm">         * db_delete&quot;&gt;docs for DELETE /db/&lt;/a&gt;</span></div><div class='line' id='LC395'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC396'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC397'><span class="cm">         */</span></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">drop</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">(</span></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;DELETE&quot;</span><span class="p">,</span> <span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span><span class="p">},</span></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;The database could not be deleted&quot;</span></div><div class='line' id='LC403'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC405'><br/></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC407'><span class="cm">         * Gets information about the specified database.</span></div><div class='line' id='LC408'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC409'><span class="cm">         * uploads/all/documentation/couchbase-api-db.html#couchbase-api-db</span></div><div class='line' id='LC410'><span class="cm">         * _db_get&quot;&gt;docs for GET /db/&lt;/a&gt;</span></div><div class='line' id='LC411'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC412'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC413'><span class="cm">         */</span></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">info</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">(</span></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span><span class="p">},</span></div><div class='line' id='LC417'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Database information could not be retrieved&quot;</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC421'><br/></div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC423'><span class="cm">         * @namespace</span></div><div class='line' id='LC424'><span class="cm">         * $.couch.db.changes provides an API for subscribing to the changes</span></div><div class='line' id='LC425'><span class="cm">         * feed</span></div><div class='line' id='LC426'><span class="cm">         * &lt;pre&gt;&lt;code&gt;var $changes = $.couch.db(&quot;mydatabase&quot;).changes();</span></div><div class='line' id='LC427'><span class="cm">         *$changes.onChange = function (data) {</span></div><div class='line' id='LC428'><span class="cm">         *    ... process data ...</span></div><div class='line' id='LC429'><span class="cm">         * }</span></div><div class='line' id='LC430'><span class="cm">         * $changes.stop();</span></div><div class='line' id='LC431'><span class="cm">         * &lt;/code&gt;&lt;/pre&gt;</span></div><div class='line' id='LC432'><span class="cm">         */</span></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">changes</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">since</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC434'><br/></div><div class='line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// set up the promise object within a closure for this handler</span></div><div class='line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">timeout</span> <span class="o">=</span> <span class="mi">100</span><span class="p">,</span> <span class="nx">db</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">active</span> <span class="o">=</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC438'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">listeners</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span> <span class="o">=</span> <span class="cm">/** @lends $.couch.db.changes */</span> <span class="p">{</span></div><div class='line' id='LC440'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC441'><span class="cm">               * Add a listener callback</span></div><div class='line' id='LC442'><span class="cm">               * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/</span></div><div class='line' id='LC443'><span class="cm">               * files/uploads/all/documentation/couchbase-api-db.html#couch</span></div><div class='line' id='LC444'><span class="cm">               * base-api-db_db-changes_get&quot;&gt;docs for /db/_changes&lt;/a&gt;</span></div><div class='line' id='LC445'><span class="cm">               * @param {Function} fun Callback function to run when</span></div><div class='line' id='LC446'><span class="cm">               * notified of changes.</span></div><div class='line' id='LC447'><span class="cm">               */</span></div><div class='line' id='LC448'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">onChange</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fun</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC449'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">listeners</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">fun</span><span class="p">);</span></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC451'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC452'><span class="cm">               * Stop subscribing to the changes feed</span></div><div class='line' id='LC453'><span class="cm">               */</span></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stop</span> <span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">active</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC456'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// call each listener when there is a change</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">triggerListeners</span><span class="p">(</span><span class="nx">resp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">listeners</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC464'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// when there is a change, call any listeners, then check for</span></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// another change</span></div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">success</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">resp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC467'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span> <span class="o">=</span> <span class="mi">100</span><span class="p">;</span></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">active</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC469'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">since</span> <span class="o">=</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">last_seq</span><span class="p">;</span></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">triggerListeners</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getChangesSince</span><span class="p">();</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">error</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">active</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC476'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setTimeout</span><span class="p">(</span><span class="nx">getChangesSince</span><span class="p">,</span> <span class="nx">timeout</span><span class="p">);</span></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span> <span class="o">=</span> <span class="nx">timeout</span> <span class="o">*</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC480'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// actually make the changes request</span></div><div class='line' id='LC481'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">getChangesSince</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">opts</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">heartbeat</span> <span class="o">:</span> <span class="mi">10</span> <span class="o">*</span> <span class="mi">1000</span><span class="p">},</span> <span class="nx">options</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">feed</span> <span class="o">:</span> <span class="s2">&quot;longpoll&quot;</span><span class="p">,</span></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">since</span> <span class="o">:</span> <span class="nx">since</span></div><div class='line' id='LC485'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">(</span></div><div class='line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">url</span><span class="o">:</span> <span class="nx">db</span><span class="p">.</span><span class="nx">uri</span> <span class="o">+</span> <span class="s2">&quot;_changes&quot;</span><span class="o">+</span><span class="nx">encodeOptions</span><span class="p">(</span><span class="nx">opts</span><span class="p">)},</span></div><div class='line' id='LC488'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC489'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Error connecting to &quot;</span><span class="o">+</span><span class="nx">db</span><span class="p">.</span><span class="nx">uri</span><span class="o">+</span><span class="s2">&quot;/_changes.&quot;</span></div><div class='line' id='LC490'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC492'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// start the first request</span></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">since</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getChangesSince</span><span class="p">();</span></div><div class='line' id='LC495'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">db</span><span class="p">.</span><span class="nx">info</span><span class="p">({</span></div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">info</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">since</span> <span class="o">=</span> <span class="nx">info</span><span class="p">.</span><span class="nx">update_seq</span><span class="p">;</span></div><div class='line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getChangesSince</span><span class="p">();</span></div><div class='line' id='LC500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC501'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC502'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC503'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">promise</span><span class="p">;</span></div><div class='line' id='LC504'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC505'><br/></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC507'><span class="cm">         * Fetch all the docs in this db, you can specify an array of keys to</span></div><div class='line' id='LC508'><span class="cm">         * fetch by passing the &lt;code&gt;keys&lt;/code&gt; field in the</span></div><div class='line' id='LC509'><span class="cm">         * &lt;code&gt;options&lt;/code&gt;</span></div><div class='line' id='LC510'><span class="cm">         * parameter.</span></div><div class='line' id='LC511'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC512'><span class="cm">         * uploads/all/documentation/couchbase-api-db.html#couchbase-api-db_</span></div><div class='line' id='LC513'><span class="cm">         * db-all-docs_get&quot;&gt;docs for /db/all_docs/&lt;/a&gt;</span></div><div class='line' id='LC514'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC515'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC516'><span class="cm">         */</span></div><div class='line' id='LC517'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">allDocs</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC518'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="s2">&quot;GET&quot;</span><span class="p">;</span></div><div class='line' id='LC519'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC520'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">[</span><span class="s2">&quot;keys&quot;</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC521'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span> <span class="o">=</span> <span class="s2">&quot;POST&quot;</span><span class="p">;</span></div><div class='line' id='LC522'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="s2">&quot;keys&quot;</span><span class="p">];</span></div><div class='line' id='LC523'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">options</span><span class="p">[</span><span class="s2">&quot;keys&quot;</span><span class="p">];</span></div><div class='line' id='LC524'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">toJSON</span><span class="p">({</span> <span class="s2">&quot;keys&quot;</span><span class="o">:</span> <span class="nx">keys</span> <span class="p">});</span></div><div class='line' id='LC525'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC526'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC527'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="nx">type</span><span class="p">,</span></div><div class='line' id='LC528'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="o">:</span> <span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC529'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span> <span class="o">+</span> <span class="s2">&quot;_all_docs&quot;</span> <span class="o">+</span> <span class="nx">encodeOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC531'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;An error occurred retrieving a list of all documents&quot;</span></div><div class='line' id='LC533'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC534'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC535'><br/></div><div class='line' id='LC536'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC537'><span class="cm">         * Fetch all the design docs in this db</span></div><div class='line' id='LC538'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC539'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC540'><span class="cm">         */</span></div><div class='line' id='LC541'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">allDesignDocs</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC542'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">allDocs</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span></div><div class='line' id='LC543'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">startkey</span><span class="o">:</span><span class="s2">&quot;_design&quot;</span><span class="p">,</span> <span class="nx">endkey</span><span class="o">:</span><span class="s2">&quot;_design0&quot;</span><span class="p">},</span> <span class="nx">options</span><span class="p">));</span></div><div class='line' id='LC544'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC545'><br/></div><div class='line' id='LC546'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC547'><span class="cm">         * Fetch all the design docs with an index.html, &lt;code&gt;options&lt;/code&gt;</span></div><div class='line' id='LC548'><span class="cm">         * parameter expects an &lt;code&gt;eachApp&lt;/code&gt; field which is a callback</span></div><div class='line' id='LC549'><span class="cm">         * called on each app found.</span></div><div class='line' id='LC550'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC551'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC552'><span class="cm">         */</span></div><div class='line' id='LC553'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">allApps</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC554'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC555'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC556'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">eachApp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC557'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">allDesignDocs</span><span class="p">({</span></div><div class='line' id='LC558'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">resp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC559'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">resp</span><span class="p">.</span><span class="nx">rows</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC560'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">openDoc</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC561'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ddoc</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC562'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">appPath</span><span class="p">,</span> <span class="nx">appName</span> <span class="o">=</span> <span class="nx">ddoc</span><span class="p">.</span><span class="nx">_id</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">);</span></div><div class='line' id='LC563'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">appName</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span></div><div class='line' id='LC564'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">appName</span> <span class="o">=</span> <span class="nx">appName</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">);</span></div><div class='line' id='LC565'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">index</span> <span class="o">=</span> <span class="nx">ddoc</span><span class="p">.</span><span class="nx">couchapp</span> <span class="o">&amp;&amp;</span> <span class="nx">ddoc</span><span class="p">.</span><span class="nx">couchapp</span><span class="p">.</span><span class="nx">index</span><span class="p">;</span></div><div class='line' id='LC566'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC567'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">appPath</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">ddoc</span><span class="p">.</span><span class="nx">_id</span><span class="p">,</span> <span class="nx">index</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">);</span></div><div class='line' id='LC568'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">ddoc</span><span class="p">.</span><span class="nx">_attachments</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC569'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ddoc</span><span class="p">.</span><span class="nx">_attachments</span><span class="p">[</span><span class="s2">&quot;index.html&quot;</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC570'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">appPath</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">ddoc</span><span class="p">.</span><span class="nx">_id</span><span class="p">,</span> <span class="s2">&quot;index.html&quot;</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">);</span></div><div class='line' id='LC571'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC572'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">appPath</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">eachApp</span><span class="p">(</span><span class="nx">appName</span><span class="p">,</span> <span class="nx">appPath</span><span class="p">,</span> <span class="nx">ddoc</span><span class="p">);</span></div><div class='line' id='LC573'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC574'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC575'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC576'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC577'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC578'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC579'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">alert</span><span class="p">(</span><span class="s2">&quot;Please provide an eachApp function for allApps()&quot;</span><span class="p">);</span></div><div class='line' id='LC580'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC581'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC582'><br/></div><div class='line' id='LC583'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC584'><span class="cm">         * Returns the specified doc from the specified db.</span></div><div class='line' id='LC585'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC586'><span class="cm">         * uploads/all/documentation/couchbase-api-dbdoc.html#couchbase-api-</span></div><div class='line' id='LC587'><span class="cm">         * dbdoc_db-doc_get&quot;&gt;docs for GET /db/doc&lt;/a&gt;</span></div><div class='line' id='LC588'><span class="cm">         * @param {String} docId id of document to fetch</span></div><div class='line' id='LC589'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC590'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC591'><span class="cm">         * @param {ajaxSettings} ajaxOptions &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC592'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC593'><span class="cm">         */</span></div><div class='line' id='LC594'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">openDoc</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">docId</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">ajaxOptions</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC595'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC596'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">db_opts</span><span class="p">.</span><span class="nx">attachPrevRev</span> <span class="o">||</span> <span class="nx">options</span><span class="p">.</span><span class="nx">attachPrevRev</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC597'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC598'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">beforeSuccess</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">doc</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC599'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rawDocs</span><span class="p">[</span><span class="nx">doc</span><span class="p">.</span><span class="nx">_id</span><span class="p">]</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC600'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rev</span> <span class="o">:</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">_rev</span><span class="p">,</span></div><div class='line' id='LC601'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">raw</span> <span class="o">:</span> <span class="nx">req</span><span class="p">.</span><span class="nx">responseText</span></div><div class='line' id='LC602'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC603'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC604'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC605'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC606'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC607'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">beforeSuccess</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">doc</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC608'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">doc</span><span class="p">[</span><span class="s2">&quot;jquery.couch.attachPrevRev&quot;</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC609'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rawDocs</span><span class="p">[</span><span class="nx">doc</span><span class="p">.</span><span class="nx">_id</span><span class="p">]</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC610'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rev</span> <span class="o">:</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">_rev</span><span class="p">,</span></div><div class='line' id='LC611'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">raw</span> <span class="o">:</span> <span class="nx">req</span><span class="p">.</span><span class="nx">responseText</span></div><div class='line' id='LC612'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC613'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC614'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC615'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC616'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC617'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span><span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span> <span class="o">+</span> <span class="nx">encodeDocId</span><span class="p">(</span><span class="nx">docId</span><span class="p">)</span> <span class="o">+</span> <span class="nx">encodeOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">)},</span></div><div class='line' id='LC618'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC619'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;The document could not be retrieved&quot;</span><span class="p">,</span></div><div class='line' id='LC620'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajaxOptions</span></div><div class='line' id='LC621'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC622'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC623'><br/></div><div class='line' id='LC624'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC625'><span class="cm">         * Create a new document in the specified database, using the supplied</span></div><div class='line' id='LC626'><span class="cm">         * JSON document structure. If the JSON structure includes the _id</span></div><div class='line' id='LC627'><span class="cm">         * field, then the document will be created with the specified document</span></div><div class='line' id='LC628'><span class="cm">         * ID. If the _id field is not specified, a new unique ID will be</span></div><div class='line' id='LC629'><span class="cm">         * generated.</span></div><div class='line' id='LC630'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC631'><span class="cm">         * uploads/all/documentation/couchbase-api-dbdoc.html#couchbase-api-</span></div><div class='line' id='LC632'><span class="cm">         * dbdoc_db_post&quot;&gt;docs for GET /db/doc&lt;/a&gt;</span></div><div class='line' id='LC633'><span class="cm">         * @param {String} doc document to save</span></div><div class='line' id='LC634'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC635'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC636'><span class="cm">         */</span></div><div class='line' id='LC637'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">saveDoc</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">doc</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC638'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC639'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">db</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC640'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">beforeSend</span> <span class="o">=</span> <span class="nx">fullCommit</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC641'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nx">_id</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC642'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="s2">&quot;POST&quot;</span><span class="p">;</span></div><div class='line' id='LC643'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">uri</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span><span class="p">;</span></div><div class='line' id='LC644'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC645'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="s2">&quot;PUT&quot;</span><span class="p">;</span></div><div class='line' id='LC646'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">uri</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span> <span class="o">+</span> <span class="nx">encodeDocId</span><span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nx">_id</span><span class="p">);</span></div><div class='line' id='LC647'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC648'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">versioned</span> <span class="o">=</span> <span class="nx">maybeApplyVersion</span><span class="p">(</span><span class="nx">doc</span><span class="p">);</span></div><div class='line' id='LC649'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC650'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="o">:</span> <span class="nx">uri</span> <span class="o">+</span> <span class="nx">encodeOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">),</span></div><div class='line' id='LC651'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">contentType</span><span class="o">:</span> <span class="s2">&quot;application/json&quot;</span><span class="p">,</span></div><div class='line' id='LC652'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dataType</span><span class="o">:</span> <span class="s2">&quot;json&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="o">:</span> <span class="nx">toJSON</span><span class="p">(</span><span class="nx">doc</span><span class="p">),</span></div><div class='line' id='LC653'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">beforeSend</span> <span class="o">:</span> <span class="nx">beforeSend</span><span class="p">,</span></div><div class='line' id='LC654'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">complete</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC655'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">resp</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">parseJSON</span><span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">responseText</span><span class="p">);</span></div><div class='line' id='LC656'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">status</span> <span class="o">==</span> <span class="mi">200</span> <span class="o">||</span> <span class="nx">req</span><span class="p">.</span><span class="nx">status</span> <span class="o">==</span> <span class="mi">201</span> <span class="o">||</span> <span class="nx">req</span><span class="p">.</span><span class="nx">status</span> <span class="o">==</span> <span class="mi">202</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC657'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doc</span><span class="p">.</span><span class="nx">_id</span> <span class="o">=</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC658'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doc</span><span class="p">.</span><span class="nx">_rev</span> <span class="o">=</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">rev</span><span class="p">;</span></div><div class='line' id='LC659'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">versioned</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC660'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">db</span><span class="p">.</span><span class="nx">openDoc</span><span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nx">_id</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC661'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">attachPrevRev</span> <span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC662'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC663'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doc</span><span class="p">.</span><span class="nx">_attachments</span> <span class="o">=</span> <span class="nx">d</span><span class="p">.</span><span class="nx">_attachments</span><span class="p">;</span></div><div class='line' id='LC664'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC665'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC666'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC667'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC668'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC669'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC670'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC671'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">status</span><span class="p">,</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">error</span><span class="p">,</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">reason</span><span class="p">);</span></div><div class='line' id='LC672'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC673'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">alert</span><span class="p">(</span><span class="s2">&quot;The document could not be saved: &quot;</span> <span class="o">+</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">reason</span><span class="p">);</span></div><div class='line' id='LC674'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC675'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC676'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC677'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC678'><br/></div><div class='line' id='LC679'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC680'><span class="cm">         * Save a list of documents</span></div><div class='line' id='LC681'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC682'><span class="cm">         * uploads/all/documentation/couchbase-api-db.html#couchbase-api-db_</span></div><div class='line' id='LC683'><span class="cm">         * db-bulk-docs_post&quot;&gt;docs for /db/_bulk_docs&lt;/a&gt;</span></div><div class='line' id='LC684'><span class="cm">         * @param {Object[]} docs List of documents to save</span></div><div class='line' id='LC685'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC686'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC687'><span class="cm">         */</span></div><div class='line' id='LC688'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bulkSave</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">docs</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC689'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">beforeSend</span> <span class="o">=</span> <span class="nx">fullCommit</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC690'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="p">{</span><span class="nx">successStatus</span><span class="o">:</span> <span class="mi">201</span><span class="p">,</span> <span class="nx">beforeSend</span> <span class="o">:</span> <span class="nx">beforeSend</span><span class="p">});</span></div><div class='line' id='LC691'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC692'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;POST&quot;</span><span class="p">,</span></div><div class='line' id='LC693'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span> <span class="o">+</span> <span class="s2">&quot;_bulk_docs&quot;</span> <span class="o">+</span> <span class="nx">encodeOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">),</span></div><div class='line' id='LC694'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">contentType</span><span class="o">:</span> <span class="s2">&quot;application/json&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="o">:</span> <span class="nx">toJSON</span><span class="p">(</span><span class="nx">docs</span><span class="p">)</span></div><div class='line' id='LC695'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC696'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC697'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;The documents could not be saved&quot;</span></div><div class='line' id='LC698'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC699'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC700'><br/></div><div class='line' id='LC701'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC702'><span class="cm">         * Deletes the specified document from the database. You must supply</span></div><div class='line' id='LC703'><span class="cm">         * the current (latest) revision and &lt;code&gt;id&lt;/code&gt; of the document</span></div><div class='line' id='LC704'><span class="cm">         * to delete eg &lt;code&gt;removeDoc({_id:&quot;mydoc&quot;, _rev: &quot;1-2345&quot;})&lt;/code&gt;</span></div><div class='line' id='LC705'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC706'><span class="cm">         * uploads/all/documentation/couchbase-api-dbdoc.html#couchbase-api</span></div><div class='line' id='LC707'><span class="cm">         * -dbdoc_db-doc_delete&quot;&gt;docs for DELETE /db/doc&lt;/a&gt;</span></div><div class='line' id='LC708'><span class="cm">         * @param {Object} doc Document to delete</span></div><div class='line' id='LC709'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC710'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC711'><span class="cm">         */</span></div><div class='line' id='LC712'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">removeDoc</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">doc</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC713'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC714'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;DELETE&quot;</span><span class="p">,</span></div><div class='line' id='LC715'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span> <span class="o">+</span></div><div class='line' id='LC716'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">encodeDocId</span><span class="p">(</span><span class="nx">doc</span><span class="p">.</span><span class="nx">_id</span><span class="p">)</span> <span class="o">+</span></div><div class='line' id='LC717'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">encodeOptions</span><span class="p">({</span><span class="nx">rev</span><span class="o">:</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">_rev</span><span class="p">})</span></div><div class='line' id='LC718'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC719'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC720'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;The document could not be deleted&quot;</span></div><div class='line' id='LC721'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC722'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC723'><br/></div><div class='line' id='LC724'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC725'><span class="cm">         * Remove a set of documents</span></div><div class='line' id='LC726'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC727'><span class="cm">         * uploads/all/documentation/couchbase-api-db.html#couchbase-api-db_</span></div><div class='line' id='LC728'><span class="cm">         * db-bulk-docs_post&quot;&gt;docs for /db/_bulk_docs&lt;/a&gt;</span></div><div class='line' id='LC729'><span class="cm">         * @param {String[]} docs List of document id&#39;s to remove</span></div><div class='line' id='LC730'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC731'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC732'><span class="cm">         */</span></div><div class='line' id='LC733'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bulkRemove</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">docs</span><span class="p">,</span> <span class="nx">options</span><span class="p">){</span></div><div class='line' id='LC734'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">docs</span><span class="p">.</span><span class="nx">docs</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span></div><div class='line' id='LC735'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">docs</span><span class="p">.</span><span class="nx">docs</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">doc</span><span class="p">){</span></div><div class='line' id='LC736'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doc</span><span class="p">.</span><span class="nx">_deleted</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC737'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC738'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC739'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="p">{</span><span class="nx">successStatus</span><span class="o">:</span> <span class="mi">201</span><span class="p">});</span></div><div class='line' id='LC740'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC741'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;POST&quot;</span><span class="p">,</span></div><div class='line' id='LC742'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span> <span class="o">+</span> <span class="s2">&quot;_bulk_docs&quot;</span> <span class="o">+</span> <span class="nx">encodeOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">),</span></div><div class='line' id='LC743'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="o">:</span> <span class="nx">toJSON</span><span class="p">(</span><span class="nx">docs</span><span class="p">)</span></div><div class='line' id='LC744'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC745'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC746'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;The documents could not be deleted&quot;</span></div><div class='line' id='LC747'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC748'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC749'><br/></div><div class='line' id='LC750'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC751'><span class="cm">         * The COPY command (which is non-standard HTTP) copies an existing</span></div><div class='line' id='LC752'><span class="cm">         * document to a new or existing document.</span></div><div class='line' id='LC753'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC754'><span class="cm">         * uploads/all/documentation/couchbase-api-dbdoc.html#couchbase-api-</span></div><div class='line' id='LC755'><span class="cm">         * dbdoc_db-doc_copy&quot;&gt;docs for COPY /db/doc&lt;/a&gt;</span></div><div class='line' id='LC756'><span class="cm">         * @param {String[]} docId document id to copy</span></div><div class='line' id='LC757'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC758'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC759'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC760'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC761'><span class="cm">         */</span></div><div class='line' id='LC762'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">copyDoc</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">docId</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">ajaxOptions</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC763'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajaxOptions</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">ajaxOptions</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC764'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">complete</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC765'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">resp</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">parseJSON</span><span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">responseText</span><span class="p">);</span></div><div class='line' id='LC766'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">status</span> <span class="o">==</span> <span class="mi">201</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC767'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC768'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC769'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">status</span><span class="p">,</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">error</span><span class="p">,</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">reason</span><span class="p">);</span></div><div class='line' id='LC770'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC771'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">alert</span><span class="p">(</span><span class="s2">&quot;The document could not be copied: &quot;</span> <span class="o">+</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">reason</span><span class="p">);</span></div><div class='line' id='LC772'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC773'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC774'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC775'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC776'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;COPY&quot;</span><span class="p">,</span></div><div class='line' id='LC777'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span> <span class="o">+</span> <span class="nx">encodeDocId</span><span class="p">(</span><span class="nx">docId</span><span class="p">)</span></div><div class='line' id='LC778'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC779'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC780'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;The document could not be copied&quot;</span><span class="p">,</span></div><div class='line' id='LC781'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajaxOptions</span></div><div class='line' id='LC782'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC783'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC784'><br/></div><div class='line' id='LC785'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC786'><span class="cm">         * Creates (and executes) a temporary view based on the view function</span></div><div class='line' id='LC787'><span class="cm">         * supplied in the JSON request.</span></div><div class='line' id='LC788'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC789'><span class="cm">         * uploads/all/documentation/couchbase-api-db.html#couchbase-api-db</span></div><div class='line' id='LC790'><span class="cm">         * _db-temp-view_post&quot;&gt;docs for /db/_temp_view&lt;/a&gt;</span></div><div class='line' id='LC791'><span class="cm">         * @param {Function} mapFun Map function</span></div><div class='line' id='LC792'><span class="cm">         * @param {Function} reduceFun Reduce function</span></div><div class='line' id='LC793'><span class="cm">         * @param {Function} language Language the map / reduce funs are</span></div><div class='line' id='LC794'><span class="cm">         * implemented in</span></div><div class='line' id='LC795'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC796'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC797'><span class="cm">         */</span></div><div class='line' id='LC798'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">query</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">mapFun</span><span class="p">,</span> <span class="nx">reduceFun</span><span class="p">,</span> <span class="nx">language</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC799'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">language</span> <span class="o">=</span> <span class="nx">language</span> <span class="o">||</span> <span class="s2">&quot;javascript&quot;</span><span class="p">;</span></div><div class='line' id='LC800'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">mapFun</span><span class="p">)</span> <span class="o">!==</span> <span class="s2">&quot;string&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC801'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">mapFun</span> <span class="o">=</span> <span class="nx">mapFun</span><span class="p">.</span><span class="nx">toSource</span> <span class="o">?</span> <span class="nx">mapFun</span><span class="p">.</span><span class="nx">toSource</span><span class="p">()</span></div><div class='line' id='LC802'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="s2">&quot;(&quot;</span> <span class="o">+</span> <span class="nx">mapFun</span><span class="p">.</span><span class="nx">toString</span><span class="p">()</span> <span class="o">+</span> <span class="s2">&quot;)&quot;</span><span class="p">;</span></div><div class='line' id='LC803'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC804'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">body</span> <span class="o">=</span> <span class="p">{</span><span class="nx">language</span><span class="o">:</span> <span class="nx">language</span><span class="p">,</span> <span class="nx">map</span><span class="o">:</span> <span class="nx">mapFun</span><span class="p">};</span></div><div class='line' id='LC805'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">reduceFun</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC806'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">reduceFun</span><span class="p">)</span> <span class="o">!==</span> <span class="s2">&quot;string&quot;</span><span class="p">)</span></div><div class='line' id='LC807'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reduceFun</span> <span class="o">=</span> <span class="nx">reduceFun</span><span class="p">.</span><span class="nx">toSource</span> <span class="o">?</span> <span class="nx">reduceFun</span><span class="p">.</span><span class="nx">toSource</span><span class="p">()</span></div><div class='line' id='LC808'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="s2">&quot;(&quot;</span> <span class="o">+</span> <span class="nx">reduceFun</span><span class="p">.</span><span class="nx">toString</span><span class="p">()</span> <span class="o">+</span> <span class="s2">&quot;)&quot;</span><span class="p">;</span></div><div class='line' id='LC809'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span><span class="p">.</span><span class="nx">reduce</span> <span class="o">=</span> <span class="nx">reduceFun</span><span class="p">;</span></div><div class='line' id='LC810'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC811'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC812'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;POST&quot;</span><span class="p">,</span></div><div class='line' id='LC813'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span> <span class="o">+</span> <span class="s2">&quot;_temp_view&quot;</span> <span class="o">+</span> <span class="nx">encodeOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">),</span></div><div class='line' id='LC814'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">contentType</span><span class="o">:</span> <span class="s2">&quot;application/json&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="o">:</span> <span class="nx">toJSON</span><span class="p">(</span><span class="nx">body</span><span class="p">)</span></div><div class='line' id='LC815'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC816'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC817'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;An error occurred querying the database&quot;</span></div><div class='line' id='LC818'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC819'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC820'><br/></div><div class='line' id='LC821'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC822'><span class="cm">         * Fetch a _list view output, you can specify a list of</span></div><div class='line' id='LC823'><span class="cm">         * &lt;code&gt;keys&lt;/code&gt; in the options object to recieve only those keys.</span></div><div class='line' id='LC824'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC825'><span class="cm">         * uploads/all/documentation/couchbase-api-design.html#couchbase-api</span></div><div class='line' id='LC826'><span class="cm">         * -design_db-design-designdoc-list-listname-viewname_get&quot;&gt;</span></div><div class='line' id='LC827'><span class="cm">         * docs for /db/_design/design-doc/_list/l1/v1&lt;/a&gt;</span></div><div class='line' id='LC828'><span class="cm">         * @param {String} list Listname in the form of ddoc/listname</span></div><div class='line' id='LC829'><span class="cm">         * @param {String} view View to run list against</span></div><div class='line' id='LC830'><span class="cm">         * @param {options} CouchDB &lt;a href=&quot;http://wiki.apache.org/couchdb/</span></div><div class='line' id='LC831'><span class="cm">         * HTTP_view_API&quot;&gt;View Options&lt;/a&gt;</span></div><div class='line' id='LC832'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC833'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC834'><span class="cm">         */</span></div><div class='line' id='LC835'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">list</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">list</span><span class="p">,</span> <span class="nx">view</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">ajaxOptions</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC836'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">list</span> <span class="o">=</span> <span class="nx">list</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">);</span></div><div class='line' id='LC837'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC838'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;GET&#39;</span><span class="p">;</span></div><div class='line' id='LC839'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC840'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">[</span><span class="s1">&#39;keys&#39;</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC841'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;POST&#39;</span><span class="p">;</span></div><div class='line' id='LC842'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="s1">&#39;keys&#39;</span><span class="p">];</span></div><div class='line' id='LC843'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">options</span><span class="p">[</span><span class="s1">&#39;keys&#39;</span><span class="p">];</span></div><div class='line' id='LC844'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">toJSON</span><span class="p">({</span><span class="s1">&#39;keys&#39;</span><span class="o">:</span> <span class="nx">keys</span> <span class="p">});</span></div><div class='line' id='LC845'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC846'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC847'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="nx">type</span><span class="p">,</span></div><div class='line' id='LC848'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="o">:</span> <span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC849'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span> <span class="o">+</span> <span class="s1">&#39;_design/&#39;</span> <span class="o">+</span> <span class="nx">list</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span></div><div class='line' id='LC850'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;/_list/&#39;</span> <span class="o">+</span> <span class="nx">list</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="nx">view</span> <span class="o">+</span> <span class="nx">encodeOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span></div><div class='line' id='LC851'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC852'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajaxOptions</span><span class="p">,</span> <span class="s1">&#39;An error occured accessing the list&#39;</span></div><div class='line' id='LC853'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC854'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC855'><br/></div><div class='line' id='LC856'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC857'><span class="cm">         * Executes the specified view-name from the specified design-doc</span></div><div class='line' id='LC858'><span class="cm">         * design document, you can specify a list of &lt;code&gt;keys&lt;/code&gt;</span></div><div class='line' id='LC859'><span class="cm">         * in the options object to recieve only those keys.</span></div><div class='line' id='LC860'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC861'><span class="cm">         * uploads/all/documentation/couchbase-api-design.html#couchbase-api-</span></div><div class='line' id='LC862'><span class="cm">         * design_db-design-designdoc-view-viewname_get&quot;&gt;docs for /db/</span></div><div class='line' id='LC863'><span class="cm">         * _design/design-doc/_list/l1/v1&lt;/a&gt;</span></div><div class='line' id='LC864'><span class="cm">         * @param {String} name View to run list against</span></div><div class='line' id='LC865'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC866'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC867'><span class="cm">         */</span></div><div class='line' id='LC868'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">view</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC869'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="nx">name</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">);</span></div><div class='line' id='LC870'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC871'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="s2">&quot;GET&quot;</span><span class="p">;</span></div><div class='line' id='LC872'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span><span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC873'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">[</span><span class="s2">&quot;keys&quot;</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC874'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span> <span class="o">=</span> <span class="s2">&quot;POST&quot;</span><span class="p">;</span></div><div class='line' id='LC875'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="s2">&quot;keys&quot;</span><span class="p">];</span></div><div class='line' id='LC876'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">options</span><span class="p">[</span><span class="s2">&quot;keys&quot;</span><span class="p">];</span></div><div class='line' id='LC877'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">toJSON</span><span class="p">({</span> <span class="s2">&quot;keys&quot;</span><span class="o">:</span> <span class="nx">keys</span> <span class="p">});</span></div><div class='line' id='LC878'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC879'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC880'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="nx">type</span><span class="p">,</span></div><div class='line' id='LC881'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="o">:</span> <span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC882'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span> <span class="o">+</span> <span class="s2">&quot;_design/&quot;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span></div><div class='line' id='LC883'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;/_view/&quot;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="nx">encodeOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span></div><div class='line' id='LC884'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC885'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span> <span class="s2">&quot;An error occurred accessing the view&quot;</span></div><div class='line' id='LC886'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC887'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC888'><br/></div><div class='line' id='LC889'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC890'><span class="cm">         * Fetch an arbitrary CouchDB database property</span></div><div class='line' id='LC891'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC892'><span class="cm">         * uploads/all/documentation/couchbase-api.html&quot;&gt;docs for /db/_prop&lt;/a&gt;</span></div><div class='line' id='LC893'><span class="cm">         * @param {String} propName Propery name to fetch</span></div><div class='line' id='LC894'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC895'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC896'><span class="cm">         * @param {ajaxSettings} ajaxOptions &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC897'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC898'><span class="cm">         */</span></div><div class='line' id='LC899'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getDbProperty</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">propName</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">ajaxOptions</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC900'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span><span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span> <span class="o">+</span> <span class="nx">propName</span> <span class="o">+</span> <span class="nx">encodeOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">)},</span></div><div class='line' id='LC901'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC902'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;The property could not be retrieved&quot;</span><span class="p">,</span></div><div class='line' id='LC903'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajaxOptions</span></div><div class='line' id='LC904'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC905'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC906'><br/></div><div class='line' id='LC907'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC908'><span class="cm">         * Set an arbitrary CouchDB database property</span></div><div class='line' id='LC909'><span class="cm">         * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC910'><span class="cm">         * uploads/all/documentation/couchbase-api.html&quot;&gt;docs for /db/_prop&lt;/a&gt;</span></div><div class='line' id='LC911'><span class="cm">         * @param {String} propName Propery name to fetch</span></div><div class='line' id='LC912'><span class="cm">         * @param {String} propValue Propery value to set</span></div><div class='line' id='LC913'><span class="cm">         * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC914'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC915'><span class="cm">         * @param {ajaxSettings} ajaxOptions &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC916'><span class="cm">         * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC917'><span class="cm">         */</span></div><div class='line' id='LC918'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setDbProperty</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">propName</span><span class="p">,</span> <span class="nx">propValue</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">ajaxOptions</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC919'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC920'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;PUT&quot;</span><span class="p">,</span> </div><div class='line' id='LC921'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">uri</span> <span class="o">+</span> <span class="nx">propName</span> <span class="o">+</span> <span class="nx">encodeOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">),</span></div><div class='line' id='LC922'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">:</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">propValue</span><span class="p">)</span></div><div class='line' id='LC923'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC924'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC925'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;The property could not be updated&quot;</span><span class="p">,</span></div><div class='line' id='LC926'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajaxOptions</span></div><div class='line' id='LC927'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC928'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC929'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC930'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC931'><br/></div><div class='line' id='LC932'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">encodeDocId</span><span class="o">:</span> <span class="nx">encodeDocId</span><span class="p">,</span> </div><div class='line' id='LC933'><br/></div><div class='line' id='LC934'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC935'><span class="cm">     * Accessing the root of a CouchDB instance returns meta information about</span></div><div class='line' id='LC936'><span class="cm">     * the instance. The response is a JSON structure containing information</span></div><div class='line' id='LC937'><span class="cm">     * about the server, including a welcome message and the version of the</span></div><div class='line' id='LC938'><span class="cm">     * server.</span></div><div class='line' id='LC939'><span class="cm">     * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/uploads/</span></div><div class='line' id='LC940'><span class="cm">     * all/documentation/couchbase-api-misc.html#couchbase-api-misc_root_get&quot;&gt;</span></div><div class='line' id='LC941'><span class="cm">     * docs for GET /&lt;/a&gt;</span></div><div class='line' id='LC942'><span class="cm">     * @param {ajaxSettings} options &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC943'><span class="cm">     * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC944'><span class="cm">     */</span></div><div class='line' id='LC945'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">info</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC946'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">(</span></div><div class='line' id='LC947'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">urlPrefix</span> <span class="o">+</span> <span class="s2">&quot;/&quot;</span><span class="p">},</span></div><div class='line' id='LC948'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC949'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Server information could not be retrieved&quot;</span></div><div class='line' id='LC950'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC951'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC952'><br/></div><div class='line' id='LC953'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC954'><span class="cm">     * Request, configure, or stop, a replication operation.</span></div><div class='line' id='LC955'><span class="cm">     * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC956'><span class="cm">     * uploads/all/documentation/couchbase-api-misc.html#couchbase-api-</span></div><div class='line' id='LC957'><span class="cm">     * misc_replicate_post&quot;&gt;docs for POST /_replicate&lt;/a&gt;</span></div><div class='line' id='LC958'><span class="cm">     * @param {String} source Path or url to source database</span></div><div class='line' id='LC959'><span class="cm">     * @param {String} target Path or url to target database</span></div><div class='line' id='LC960'><span class="cm">     * @param {ajaxSettings} ajaxOptions &lt;a href=&quot;http://api.jquery.com/</span></div><div class='line' id='LC961'><span class="cm">     * jQuery.ajax/#jQuery-ajax-settings&quot;&gt;jQuery ajax settings&lt;/a&gt;</span></div><div class='line' id='LC962'><span class="cm">     * @param {Object} repOpts Additional replication options</span></div><div class='line' id='LC963'><span class="cm">     */</span></div><div class='line' id='LC964'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">replicate</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">source</span><span class="p">,</span> <span class="nx">target</span><span class="p">,</span> <span class="nx">ajaxOptions</span><span class="p">,</span> <span class="nx">repOpts</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC965'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">repOpts</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">source</span><span class="o">:</span> <span class="nx">source</span><span class="p">,</span> <span class="nx">target</span><span class="o">:</span> <span class="nx">target</span><span class="p">},</span> <span class="nx">repOpts</span><span class="p">);</span></div><div class='line' id='LC966'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">repOpts</span><span class="p">.</span><span class="nx">continuous</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">repOpts</span><span class="p">.</span><span class="nx">cancel</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC967'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajaxOptions</span><span class="p">.</span><span class="nx">successStatus</span> <span class="o">=</span> <span class="mi">202</span><span class="p">;</span></div><div class='line' id='LC968'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC969'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC970'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;POST&quot;</span><span class="p">,</span> <span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">urlPrefix</span> <span class="o">+</span> <span class="s2">&quot;/_replicate&quot;</span><span class="p">,</span></div><div class='line' id='LC971'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="o">:</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">repOpts</span><span class="p">),</span></div><div class='line' id='LC972'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">contentType</span><span class="o">:</span> <span class="s2">&quot;application/json&quot;</span></div><div class='line' id='LC973'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC974'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajaxOptions</span><span class="p">,</span></div><div class='line' id='LC975'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Replication failed&quot;</span></div><div class='line' id='LC976'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC977'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC978'><br/></div><div class='line' id='LC979'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC980'><span class="cm">     * Fetch a new UUID</span></div><div class='line' id='LC981'><span class="cm">     * @see &lt;a href=&quot;http://techzone.couchbase.com/sites/default/files/</span></div><div class='line' id='LC982'><span class="cm">     * uploads/all/documentation/couchbase-api-misc.html#couchbase-api-</span></div><div class='line' id='LC983'><span class="cm">     * misc_uuids_get&quot;&gt;docs for /_uuids&lt;/a&gt;</span></div><div class='line' id='LC984'><span class="cm">     * @param {Int} cacheNum Number of uuids to keep cached for future use</span></div><div class='line' id='LC985'><span class="cm">     */</span></div><div class='line' id='LC986'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">newUUID</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">cacheNum</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC987'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cacheNum</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC988'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cacheNum</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC989'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC990'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">uuidCache</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC991'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajax</span><span class="p">({</span><span class="nx">url</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">urlPrefix</span> <span class="o">+</span> <span class="s2">&quot;/_uuids&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="o">:</span> <span class="p">{</span><span class="nx">count</span><span class="o">:</span> <span class="nx">cacheNum</span><span class="p">},</span> <span class="nx">async</span><span class="o">:</span></div><div class='line' id='LC992'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kc">false</span><span class="p">},</span> <span class="p">{</span></div><div class='line' id='LC993'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">resp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC994'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">uuidCache</span> <span class="o">=</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">uuids</span><span class="p">;</span></div><div class='line' id='LC995'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC996'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC997'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Failed to retrieve UUID batch.&quot;</span></div><div class='line' id='LC998'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC999'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1000'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">uuidCache</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span></div><div class='line' id='LC1001'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1002'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1003'><br/></div><div class='line' id='LC1004'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1005'><span class="cm">   * @private</span></div><div class='line' id='LC1006'><span class="cm">   */</span></div><div class='line' id='LC1007'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">ajax</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">errorMessage</span><span class="p">,</span> <span class="nx">ajaxOptions</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1008'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">successStatus</span><span class="o">:</span> <span class="mi">200</span><span class="p">},</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1009'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajaxOptions</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">contentType</span><span class="o">:</span> <span class="s2">&quot;application/json&quot;</span><span class="p">},</span> <span class="nx">ajaxOptions</span><span class="p">);</span></div><div class='line' id='LC1010'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errorMessage</span> <span class="o">=</span> <span class="nx">errorMessage</span> <span class="o">||</span> <span class="s2">&quot;Unknown error&quot;</span><span class="p">;</span></div><div class='line' id='LC1011'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC1012'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;GET&quot;</span><span class="p">,</span> <span class="nx">dataType</span><span class="o">:</span> <span class="s2">&quot;json&quot;</span><span class="p">,</span> <span class="nx">cache</span> <span class="o">:</span> <span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">msie</span><span class="p">,</span></div><div class='line' id='LC1013'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">beforeSend</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">xhr</span><span class="p">){</span></div><div class='line' id='LC1014'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">ajaxOptions</span> <span class="o">&amp;&amp;</span> <span class="nx">ajaxOptions</span><span class="p">.</span><span class="nx">headers</span><span class="p">){</span></div><div class='line' id='LC1015'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">header</span> <span class="k">in</span> <span class="nx">ajaxOptions</span><span class="p">.</span><span class="nx">headers</span><span class="p">){</span></div><div class='line' id='LC1016'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">setRequestHeader</span><span class="p">(</span><span class="nx">header</span><span class="p">,</span> <span class="nx">ajaxOptions</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="nx">header</span><span class="p">]);</span></div><div class='line' id='LC1017'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1018'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1019'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1020'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">complete</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1021'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC1022'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">resp</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">parseJSON</span><span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">responseText</span><span class="p">);</span></div><div class='line' id='LC1023'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1024'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1025'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">status</span><span class="p">,</span> <span class="nx">req</span><span class="p">,</span> <span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC1026'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1027'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">alert</span><span class="p">(</span><span class="nx">errorMessage</span> <span class="o">+</span> <span class="s2">&quot;: &quot;</span> <span class="o">+</span> <span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC1028'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1029'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1030'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1031'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">ajaxStart</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1032'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">ajaxStart</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC1033'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1034'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">status</span> <span class="o">==</span> <span class="nx">options</span><span class="p">.</span><span class="nx">successStatus</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1035'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">beforeSuccess</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">beforeSuccess</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC1036'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC1037'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1038'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">status</span><span class="p">,</span> <span class="nx">resp</span> <span class="o">&amp;&amp;</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">error</span> <span class="o">||</span></div><div class='line' id='LC1039'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errorMessage</span><span class="p">,</span> <span class="nx">resp</span> <span class="o">&amp;&amp;</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">reason</span> <span class="o">||</span> <span class="s2">&quot;no response&quot;</span><span class="p">);</span></div><div class='line' id='LC1040'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1041'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">alert</span><span class="p">(</span><span class="nx">errorMessage</span> <span class="o">+</span> <span class="s2">&quot;: &quot;</span> <span class="o">+</span> <span class="nx">resp</span><span class="p">.</span><span class="nx">reason</span><span class="p">);</span></div><div class='line' id='LC1042'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1043'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1044'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">obj</span><span class="p">),</span> <span class="nx">ajaxOptions</span><span class="p">));</span></div><div class='line' id='LC1045'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1046'><br/></div><div class='line' id='LC1047'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1048'><span class="cm">   * @private</span></div><div class='line' id='LC1049'><span class="cm">   */</span></div><div class='line' id='LC1050'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">fullCommit</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1051'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC1052'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">options</span><span class="p">.</span><span class="nx">ensure_full_commit</span> <span class="o">!==</span> <span class="s2">&quot;undefined&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1053'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">commit</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">ensure_full_commit</span><span class="p">;</span></div><div class='line' id='LC1054'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">options</span><span class="p">.</span><span class="nx">ensure_full_commit</span><span class="p">;</span></div><div class='line' id='LC1055'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">xhr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1056'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">setRequestHeader</span><span class="p">(</span><span class="s1">&#39;Accept&#39;</span><span class="p">,</span> <span class="s1">&#39;application/json&#39;</span><span class="p">);</span></div><div class='line' id='LC1057'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">setRequestHeader</span><span class="p">(</span><span class="s2">&quot;X-Couch-Full-Commit&quot;</span><span class="p">,</span> <span class="nx">commit</span><span class="p">.</span><span class="nx">toString</span><span class="p">());</span></div><div class='line' id='LC1058'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1059'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1060'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1061'><br/></div><div class='line' id='LC1062'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1063'><span class="cm">   * @private</span></div><div class='line' id='LC1064'><span class="cm">   */</span></div><div class='line' id='LC1065'>&nbsp;&nbsp;<span class="c1">// Convert a options object to an url query string.</span></div><div class='line' id='LC1066'>&nbsp;&nbsp;<span class="c1">// ex: {key:&#39;value&#39;,key2:&#39;value2&#39;} becomes &#39;?key=&quot;value&quot;&amp;key2=&quot;value2&quot;&#39;</span></div><div class='line' id='LC1067'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">encodeOptions</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1068'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">buf</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1069'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="o">===</span> <span class="s2">&quot;object&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1070'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">name</span> <span class="k">in</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1071'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span></div><div class='line' id='LC1072'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="s2">&quot;error&quot;</span><span class="p">,</span> <span class="s2">&quot;success&quot;</span><span class="p">,</span> <span class="s2">&quot;beforeSuccess&quot;</span><span class="p">,</span> <span class="s2">&quot;ajaxStart&quot;</span><span class="p">])</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC1073'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC1074'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC1075'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="p">[</span><span class="s2">&quot;key&quot;</span><span class="p">,</span> <span class="s2">&quot;startkey&quot;</span><span class="p">,</span> <span class="s2">&quot;endkey&quot;</span><span class="p">])</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1076'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">toJSON</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC1077'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1078'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">buf</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;=&quot;</span> <span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">value</span><span class="p">));</span></div><div class='line' id='LC1079'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1080'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1081'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">buf</span><span class="p">.</span><span class="nx">length</span> <span class="o">?</span> <span class="s2">&quot;?&quot;</span> <span class="o">+</span> <span class="nx">buf</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;&amp;&quot;</span><span class="p">)</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC1082'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1083'><br/></div><div class='line' id='LC1084'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1085'><span class="cm">   * @private</span></div><div class='line' id='LC1086'><span class="cm">   */</span></div><div class='line' id='LC1087'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">toJSON</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1088'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span> <span class="o">!==</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1089'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1090'><br/></div><div class='line' id='LC1091'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div><div class='line' id='LC1092'><br/></div></pre></div>
              
            
          </td>
        </tr>
      </table>
    
  </div>


          </div>
        </div>
      </div>
    </div>
  

  </div>


<div class="frame frame-loading" style="display:none;">
  <img src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/ajax/big_spinner_336699.gif" height="32" width="32">
</div>

    </div>
  
      
    </div>

    <div id="footer" class="clearfix">
      <div class="site">
        <div class="sponsor">
          <a href="http://www.rackspace.com" class="logo">
            <img alt="Dedicated Server" height="36" src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/footer/rackspace_logo.png?v2" width="38" />
          </a>
          Powered by the <a href="http://www.rackspace.com ">Dedicated
          Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
          Computing</a> of Rackspace Hosting<span>&reg;</span>
        </div>

        <ul class="links">
          <li class="blog"><a href="https://github.com/blog">Blog</a></li>
          <li><a href="/login/multipass?to=http%3A%2F%2Fsupport.github.com">Support</a></li>
          <li><a href="https://github.com/training">Training</a></li>
          <li><a href="http://jobs.github.com">Job Board</a></li>
          <li><a href="http://shop.github.com">Shop</a></li>
          <li><a href="https://github.com/contact">Contact</a></li>
          <li><a href="http://develop.github.com">API</a></li>
          <li><a href="http://status.github.com">Status</a></li>
        </ul>
        <ul class="sosueme">
          <li class="main">&copy; 2011 <span id="_rrt" title="0.06774s from fe3.rs.github.com">GitHub</span> Inc. All rights reserved.</li>
          <li><a href="/site/terms">Terms of Service</a></li>
          <li><a href="/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
        </ul>
      </div>
    </div><!-- /#footer -->

    
      
      
        <!-- current locale:  -->
        <div class="locales instapaper_ignore readability-footer">
          <div class="site">

            <ul class="choices clearfix limited-locales">
              <li><span class="current">English</span></li>
              
                  <li><a rel="nofollow" href="?locale=de">Deutsch</a></li>
              
                  <li><a rel="nofollow" href="?locale=fr">Français</a></li>
              
                  <li><a rel="nofollow" href="?locale=ja">日本語</a></li>
              
                  <li><a rel="nofollow" href="?locale=pt-BR">Português (BR)</a></li>
              
                  <li><a rel="nofollow" href="?locale=ru">Русский</a></li>
              
                  <li><a rel="nofollow" href="?locale=zh">中文</a></li>
              
              <li class="all"><a href="#" class="minibutton btn-forward js-all-locales"><span><span class="icon"></span>See all available languages</span></a></li>
            </ul>

            <div class="all-locales clearfix">
              <h3>Your current locale selection: <strong>English</strong>. Choose another?</h3>
              
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=en">English</a></li>
                  
                      <li><a rel="nofollow" href="?locale=af">Afrikaans</a></li>
                  
                      <li><a rel="nofollow" href="?locale=be">Беларуская</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ca">Català</a></li>
                  
                      <li><a rel="nofollow" href="?locale=cs">Čeština</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=de">Deutsch</a></li>
                  
                      <li><a rel="nofollow" href="?locale=es">Español</a></li>
                  
                      <li><a rel="nofollow" href="?locale=fr">Français</a></li>
                  
                      <li><a rel="nofollow" href="?locale=hr">Hrvatski</a></li>
                  
                      <li><a rel="nofollow" href="?locale=hu">Magyar</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=id">Indonesia</a></li>
                  
                      <li><a rel="nofollow" href="?locale=it">Italiano</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ja">日本語</a></li>
                  
                      <li><a rel="nofollow" href="?locale=nl">Nederlands</a></li>
                  
                      <li><a rel="nofollow" href="?locale=no">Norsk</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=pl">Polski</a></li>
                  
                      <li><a rel="nofollow" href="?locale=pt-BR">Português (BR)</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ru">Русский</a></li>
                  
                      <li><a rel="nofollow" href="?locale=sr">Српски</a></li>
                  
                      <li><a rel="nofollow" href="?locale=sv">Svenska</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=zh">中文</a></li>
                  
                </ul>
              
            </div>

          </div>
          <div class="fade"></div>
        </div>
      
    

    <script>window._auth_token = "fcf5ba7561db8ab730424f06e19edbd1e005f8cf"</script>
    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>t</dt>
        <dd>Open tree</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>p</dt>
        <dd>Open parent</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selected down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selected up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle select target</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selected as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selected as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>e</dt>
          <dd>Close selected</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selected from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>

    <h3>Source Code Browsing</h3>
    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
      </div>
    </div>
  </div>

</div>
    

    <!--[if IE 8]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie8")
    </script>
    <![endif]-->

    <!--[if IE 7]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie7")
    </script>
    <![endif]-->

    
    <script type='text/javascript'></script>
    
  </body>
</html>

