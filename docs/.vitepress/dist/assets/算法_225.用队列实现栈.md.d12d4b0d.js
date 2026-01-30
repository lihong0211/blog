import{_ as s,c as n,o as a,a as p}from"./app.bf2af4c6.js";const C=JSON.parse('{"title":"225. \u7528\u961F\u5217\u5B9E\u73B0\u6808","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9898\u76EE\u63CF\u8FF0","slug":"\u9898\u76EE\u63CF\u8FF0","link":"#\u9898\u76EE\u63CF\u8FF0","children":[]},{"level":2,"title":"\u9898\u89E3\u4EE3\u7801","slug":"\u9898\u89E3\u4EE3\u7801","link":"#\u9898\u89E3\u4EE3\u7801","children":[]}],"relativePath":"\u7B97\u6CD5/225.\u7528\u961F\u5217\u5B9E\u73B0\u6808.md"}'),l={name:"\u7B97\u6CD5/225.\u7528\u961F\u5217\u5B9E\u73B0\u6808.md"},o=p(`<h1 id="_225-\u7528\u961F\u5217\u5B9E\u73B0\u6808" tabindex="-1"><a href="https://leetcode.cn/problems/implement-stack-using-queues/" target="_blank" rel="noreferrer">225. \u7528\u961F\u5217\u5B9E\u73B0\u6808</a> <a class="header-anchor" href="#_225-\u7528\u961F\u5217\u5B9E\u73B0\u6808" aria-hidden="true">#</a></h1><blockquote><p>\u539F\u9898\u94FE\u63A5\uFF1A<a href="https://leetcode.cn/problems/implement-stack-using-queues/" target="_blank" rel="noreferrer">LeetCode 225. \u7528\u961F\u5217\u5B9E\u73B0\u6808</a></p></blockquote><h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1">\u9898\u76EE\u63CF\u8FF0 <a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u8BF7\u4F60\u4EC5\u4F7F\u7528\u4E24\u4E2A\u961F\u5217\u5B9E\u73B0\u4E00\u4E2A\u540E\u5165\u5148\u51FA\uFF08LIFO\uFF09\u7684\u6808\uFF0C\u5E76\u652F\u6301\u666E\u901A\u6808\u7684\u5168\u90E8\u56DB\u79CD\u64CD\u4F5C\uFF08<code>push</code>\u3001<code>top</code>\u3001<code>pop</code> \u548C <code>empty</code>\uFF09\u3002</p><p>\u5B9E\u73B0 <code>MyStack</code> \u7C7B\uFF1A</p><pre><code>- \`void push(int x)\` \u5C06\u5143\u7D20 x \u538B\u5165\u6808\u9876\u3002

- \`int pop()\` \u79FB\u9664\u5E76\u8FD4\u56DE\u6808\u9876\u5143\u7D20\u3002

- \`int top()\` \u8FD4\u56DE\u6808\u9876\u5143\u7D20\u3002

- \`boolean empty()\` \u5982\u679C\u6808\u662F\u7A7A\u7684\uFF0C\u8FD4\u56DE \`true\` \uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE \`false\` \u3002
</code></pre><p><strong>\u6CE8\u610F\uFF1A</strong></p><pre><code>- \u4F60\u53EA\u80FD\u4F7F\u7528\u961F\u5217\u7684\u6807\u51C6\u64CD\u4F5C \u2014\u2014 \u4E5F\u5C31\u662F \`push to back\`\u3001\`peek/pop from front\`\u3001\`size\` \u548C \`is empty\` \u8FD9\u4E9B\u64CD\u4F5C\u3002

- \u4F60\u6240\u4F7F\u7528\u7684\u8BED\u8A00\u4E5F\u8BB8\u4E0D\u652F\u6301\u961F\u5217\u3002 \u4F60\u53EF\u4EE5\u4F7F\u7528 list \uFF08\u5217\u8868\uFF09\u6216\u8005 deque\uFF08\u53CC\u7AEF\u961F\u5217\uFF09\u6765\u6A21\u62DF\u4E00\u4E2A\u961F\u5217 , \u53EA\u8981\u662F\u6807\u51C6\u7684\u961F\u5217\u64CD\u4F5C\u5373\u53EF\u3002
</code></pre><p><strong>\u793A\u4F8B\uFF1A</strong></p><p><strong>\u8F93\u5165\uFF1A</strong> [&quot;MyStack&quot;, &quot;push&quot;, &quot;push&quot;, &quot;top&quot;, &quot;pop&quot;, &quot;empty&quot;] [[], [1], [2], [], [], []] <strong>\u8F93\u51FA\uFF1A</strong> [null, null, null, 2, 2, false]</p><p><strong>\u89E3\u91CA\uFF1A</strong> MyStack myStack = new MyStack(); myStack.push(1); myStack.push(2); myStack.top(); // \u8FD4\u56DE 2 myStack.pop(); // \u8FD4\u56DE 2 myStack.empty(); // \u8FD4\u56DE False</p><p><strong>\u63D0\u793A\uFF1A</strong></p><pre><code>- \`1 &lt;= x &lt;= 9\`

- \u6700\u591A\u8C03\u7528\`100\` \u6B21 \`push\`\u3001\`pop\`\u3001\`top\` \u548C \`empty\`

- \u6BCF\u6B21\u8C03\u7528 \`pop\` \u548C \`top\` \u90FD\u4FDD\u8BC1\u6808\u4E0D\u4E3A\u7A7A
</code></pre><p>**\u8FDB\u9636\uFF1A**\u4F60\u80FD\u5426\u4EC5\u7528\u4E00\u4E2A\u961F\u5217\u6765\u5B9E\u73B0\u6808\u3002</p><p><strong>\u96BE\u5EA6\uFF1A</strong> Easy</p><hr><h2 id="\u9898\u89E3\u4EE3\u7801" tabindex="-1">\u9898\u89E3\u4EE3\u7801 <a class="header-anchor" href="#\u9898\u89E3\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u4F7F\u7528\u4E24\u4E2A\u961F\u5217</span></span>
<span class="line"><span style="color:#676E95;">// var MyStack = function() {</span></span>
<span class="line"><span style="color:#676E95;">//   this.queue1 = []</span></span>
<span class="line"><span style="color:#676E95;">//   this.queue2 = []</span></span>
<span class="line"><span style="color:#676E95;">// };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// /** </span></span>
<span class="line"><span style="color:#676E95;">//  * @param {number} x</span></span>
<span class="line"><span style="color:#676E95;">//  * @return {void}</span></span>
<span class="line"><span style="color:#676E95;">//  */</span></span>
<span class="line"><span style="color:#676E95;">// MyStack.prototype.push = function(x) {</span></span>
<span class="line"><span style="color:#676E95;">//   this.queue1.push(x)</span></span>
<span class="line"><span style="color:#676E95;">// };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// /**</span></span>
<span class="line"><span style="color:#676E95;">//  * @return {number}</span></span>
<span class="line"><span style="color:#676E95;">//  */</span></span>
<span class="line"><span style="color:#676E95;">// MyStack.prototype.pop = function() {</span></span>
<span class="line"><span style="color:#676E95;">//   while(this.queue1.length &gt; 1) {</span></span>
<span class="line"><span style="color:#676E95;">//     this.queue2.push(this.queue1.shift())</span></span>
<span class="line"><span style="color:#676E95;">//   }</span></span>
<span class="line"><span style="color:#676E95;">//   const top = this.queue1.shift()</span></span>
<span class="line"><span style="color:#676E95;">//   while(this.queue2.length) {</span></span>
<span class="line"><span style="color:#676E95;">//     this.queue1.push(this.queue2.shift())</span></span>
<span class="line"><span style="color:#676E95;">//   }</span></span>
<span class="line"><span style="color:#676E95;">//   return top</span></span>
<span class="line"><span style="color:#676E95;">// };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// /**</span></span>
<span class="line"><span style="color:#676E95;">//  * @return {number}</span></span>
<span class="line"><span style="color:#676E95;">//  */</span></span>
<span class="line"><span style="color:#676E95;">// MyStack.prototype.top = function() {</span></span>
<span class="line"><span style="color:#676E95;">//   const len = this.queue1.length</span></span>
<span class="line"><span style="color:#676E95;">//   return this.queue1[len - 1]</span></span>
<span class="line"><span style="color:#676E95;">// };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// /**</span></span>
<span class="line"><span style="color:#676E95;">//  * @return {boolean}</span></span>
<span class="line"><span style="color:#676E95;">//  */</span></span>
<span class="line"><span style="color:#676E95;">// MyStack.prototype.empty = function() {</span></span>
<span class="line"><span style="color:#676E95;">//   return !this.queue1.length</span></span>
<span class="line"><span style="color:#676E95;">// };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4F7F\u7528\u4E00\u4E2A\u961F\u5217</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> MyStack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">queue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/** </span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">x</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#FFCB6B;">MyStack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">shift</span><span style="color:#F07178;">())</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#FFCB6B;">MyStack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">shift</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#FFCB6B;">MyStack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">top</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">queue</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#FFCB6B;">MyStack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">empty</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!this.</span><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Your MyStack object will be instantiated and called as such:</span></span>
<span class="line"><span style="color:#676E95;"> * var obj = new MyStack()</span></span>
<span class="line"><span style="color:#676E95;"> * obj.push(x)</span></span>
<span class="line"><span style="color:#676E95;"> * var param_2 = obj.pop()</span></span>
<span class="line"><span style="color:#676E95;"> * var param_3 = obj.top()</span></span>
<span class="line"><span style="color:#676E95;"> * var param_4 = obj.empty()</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"></span></code></pre></div>`,18),e=[o];function t(c,r,y,F,i,D){return a(),n("div",null,e)}const A=s(l,[["render",t]]);export{C as __pageData,A as default};
