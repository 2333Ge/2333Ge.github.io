(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{609:function(t,r,e){"use strict";e.r(r);var a={name:"RelatedPosts",props:{relatedType:{type:String,default:"category"}},computed:{list(){return this.$site.pages.filter(t=>"post"===t.pid&&(!t.frontmatter.excludeRelatedPost&&this.isRelatedPost(t)))}},methods:{isRelatedPost(t){let r,e=[];const a=this;return"category"===a.relatedType&&(r=["category","categories"]),"tag"===a.relatedType&&(r=["tag","tags"]),e=Array.of(()=>{if("string"==typeof a.$frontmatter[r[0]]&&"string"==typeof t.frontmatter[r[0]])return a.$frontmatter[r[0]]===t.frontmatter[r[0]]},()=>{if(Array.isArray(t.frontmatter[r[1]]))return t.frontmatter[r[1]].includes(a.$frontmatter[r[0]])},()=>{if(Array.isArray(a.$frontmatter[r[1]]))return a.$frontmatter[r[1]].includes(t.frontmatter[r[0]])},()=>{if(Array.isArray(t.frontmatter[r[1]])&&Array.isArray(a.$frontmatter[r[1]]))return a.$frontmatter[r[1]].some(e=>t.frontmatter[r[1]].includes(e))}),e.some(t=>t())}}},n=e(10),o=Object(n.a)(a,(function(){var t=this,r=t._self._c;return r("ul",t._l(t.list,(function(e){return r("li",{key:e.key},[r("router-link",{attrs:{to:e.path}},[t._v(t._s(e.title))])],1)})),0)}),[],!1,null,null,null);r.default=o.exports}}]);