(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{303:function(n,a,e){"use strict";e.r(a),a.default='<p>As mentioned in <a href="/guides/getting-started/#using-a-configuration">Getting Started</a>, there are multiple ways to define the <code>entry</code> property in your webpack configuration. We will show you the ways you <strong>can</strong> configure the <code>entry</code> property, in addition to explaining why it may be useful to you.</p>\n<h2 id="single-entry-shorthand-syntax">Single Entry (Shorthand) Syntax<a href="#single-entry-shorthand-syntax" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Usage: <code>entry: string|Array&#x3C;string></code></p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'./path/to/my/entry/file.js\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>The single entry syntax for the <code>entry</code> property is a shorthand for:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    main<span class="token punctuation">:</span> <span class="token string">\'./path/to/my/entry/file.js\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="tip">\n<p><strong>What happens when you pass an array to <code>entry</code>?</strong> Passing an array of file paths to the <code>entry</code> property creates what is known as a <strong>"multi-main entry"</strong>. This is useful when you would like to inject multiple dependent files together and graph their dependencies into one "chunk".</p>\n</blockquote>\n<p>This is a great choice when you are looking to quickly setup a webpack configuration for an application or tool with one entry point (i.e. a library). However, there is not much flexibility in extending or scaling your configuration with this syntax.</p>\n<h2 id="object-syntax">Object Syntax<a href="#object-syntax" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Usage: <code>entry: {[entryChunkName: string]: string|Array&#x3C;string>}</code></p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    app<span class="token punctuation">:</span> <span class="token string">\'./src/app.js\'</span><span class="token punctuation">,</span>\n    adminApp<span class="token punctuation">:</span> <span class="token string">\'./src/adminApp.js\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>The object syntax is more verbose. However, this is the most scalable way of defining entry/entries in your application.</p>\n<blockquote class="tip">\n<p><strong>"Scalable webpack configurations"</strong> are ones that can be reused and combined with other partial configurations. This is a popular technique used to separate concerns by environment, build target, and runtime. They are then merged using specialized tools like <a href="https://github.com/survivejs/webpack-merge">webpack-merge</a>.</p>\n</blockquote>\n<h2 id="scenarios">Scenarios<a href="#scenarios" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Below is a list of entry configurations and their real-world use cases:</p>\n<h3 id="separate-app-and-vendor-entries">Separate App and Vendor Entries<a href="#separate-app-and-vendor-entries" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<blockquote class="tip">\n<p>In webpack version &#x3C; 4 it was common to add vendors as separate entrypoint to compile it as separate file (in combination with the <code>CommonsChunkPlugin</code>). <br><br> This is discouraged in webpack 4. Instead the <code>optimization.splitChunks</code> option takes care of separating vendors and app modules and creating a separate file. <strong>Do not</strong> create a entry for vendors or other stuff which is not the starting point of execution.</p>\n</blockquote>\n<h3 id="multi-page-application">Multi Page Application<a href="#multi-page-application" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    pageOne<span class="token punctuation">:</span> <span class="token string">\'./src/pageOne/index.js\'</span><span class="token punctuation">,</span>\n    pageTwo<span class="token punctuation">:</span> <span class="token string">\'./src/pageTwo/index.js\'</span><span class="token punctuation">,</span>\n    pageThree<span class="token punctuation">:</span> <span class="token string">\'./src/pageThree/index.js\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p><strong>What does this do?</strong> We are telling webpack that we would like 3 separate dependency graphs (like the above example).</p>\n<p><strong>Why?</strong> In a multi-page application, the server is going to fetch a new HTML document for you. The page reloads this new document and assets are redownloaded. However, this gives us the unique opportunity to do multiple things:</p>\n<ul>\n<li>Use <code>optimization.splitChunks</code> to create bundles of shared application code between each page. Multi-page applications that reuse a lot of code/modules between entry points can greatly benefit from these techniques, as the amount of entry points increase.</li>\n</ul>\n<blockquote class="tip">\n<p>As a rule of thumb: Use exactly one entry point for each HTML document.</p>\n</blockquote>\n'}}]);