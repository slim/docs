(window.webpackJsonp=window.webpackJsonp||[]).push([[27,24],{GYK1:function(e,t,n){"use strict";t.a=[{id:1,title:"Conference",languages:"French and english-speaking tracks",offers:[{title:"2 days on-site event",price:129,limitDate:"2022-08-20"},{title:"1-day on-site event",price:89,limitDate:"2022-08-20"},{title:"2 days on-site event",price:169,startDate:"2022-08-21"},{title:"1-day on-site event",price:109,startDate:"2022-08-21"},{title:"Online ticket",price:59}]},{id:2,title:"Workshops",languages:"Learn the best of API Platform 3",offers:[{title:"Workshop API Platform 3",price:500},{title:"Workshop DDD",price:500},{title:"2-days workshops",price:800},{title:"Full package: 2 workshops and 2-days conference",price:900}]}]},UYRS:function(e,t,n){"use strict";var a=n("q1tI"),i=n("3nhQ");t.a=function(e){var t=Object(a.useContext)(i.a).isEventBriteLoaded,n=Object(a.useState)(!1),r=n[0],l=n[1];Object(a.useLayoutEffect)((function(){var n;t&&!r&&(null===(n=window.EBWidgets)||void 0===n||n.createWidget({widgetType:"checkout",eventId:"304104152707",modal:!0,modalTriggerElementId:e}),l(!0))}),[t,e,r,l])}},c63E:function(e,t,n){"use strict";var a=n("zLVn"),i=n("q1tI"),r=n.n(i),l=n("UYRS"),c=n("0sn9"),o=["children","id"];t.a=function(e){var t=e.children,n=e.id,i=Object(a.a)(e,o);return Object(l.a)(n),r.a.createElement(c.a,Object.assign({id:n},i),t)}},fHej:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("TJpk"),l=n("Wbzz"),c=n("I8rh"),o=n("/Uhd"),s=n("ldzH"),m=n("DZGb"),p=n("3nhQ"),u=function(e){var t=e.data,n=Object(a.useContext)(p.a).edition;return i.a.createElement(s.b,{className:"conf__partners",section:"partners"},i.a.createElement("div",{className:"container"},i.a.createElement(m.a,null,"Our ",i.a.createElement("strong",null,"partners")),i.a.createElement("div",{className:"partners__section partners__bronze"},i.a.createElement(o.a,null,t.map((function(e){var t=e.name,a=e.logo,r=e.link;return i.a.createElement(o.b,{key:t,autosize:!0,padding:20,className:"partners__item"},i.a.createElement("a",{href:r,title:""+t,key:t,target:"_blank",rel:"nofollow noreferrer noopener"},i.a.createElement("img",{width:"200",height:"200",loading:"lazy",src:"/con/"+n+"/partners/"+a+".png",alt:t})))})))),i.a.createElement("div",{className:"partners__section"},i.a.createElement("a",{className:"conf__button square empty",href:"mailto:events@les-tilleuls.coop",target:"_blank",rel:"noopener noreferrer"},"Become sponsor"))))},d=n("SXI4"),f=n("l3up"),h=n("psCg"),g=n("3XM5"),E=n("GYK1"),v=n("Wgwc"),k=n.n(v),b=n("0sn9"),w=n("UYRS"),y=function(e){var t=e.price;Object(w.a)("price"+t.id);var n=t.offers.filter((function(e){return function(e){return(!e.limitDate||!k()(e.limitDate).isBefore(k()(),"day"))&&(!e.startDate||!k()(e.startDate).isAfter(k()(),"day"))}(e)}));return i.a.createElement(o.b,{padding:5,className:"conf__pricing-item"},i.a.createElement("div",{className:"conf__pricing-card",id:"price"+t.id},i.a.createElement("div",{className:"pricing__header"},i.a.createElement("h3",{className:"h5 lined lined-white"},t.title),i.a.createElement("span",{className:"overline"},t.languages)),i.a.createElement("div",{className:"pricing__content dotted-corner corner-bottom"},n.map((function(e,t){return i.a.createElement("div",{key:e.title+"-"+t,className:"pricing__offer active"},i.a.createElement("span",{className:"overline offer__title"},e.title),i.a.createElement("span",{className:"h4 pricing__amount"},e.price,"€"))}))),i.a.createElement(b.a,{className:"square",size:"small"},"Buy tickets")))},_=function(){return i.a.createElement(s.b,{className:"conf__pricing",section:"pricing"},i.a.createElement("div",{className:"container"},i.a.createElement(m.a,{dark:!0},i.a.createElement("strong",null,"Pricing")),i.a.createElement(o.a,null,E.a.map((function(e){return i.a.createElement(y,{key:e.id,price:e})})),i.a.createElement(o.b,{className:"pricing__discount"},i.a.createElement("div",{className:"discount__content dotted-corner"},i.a.createElement("p",{className:"discount__title h6 lined lined-white"},"Student or unemployed developer?"),i.a.createElement("p",null,"Your ticket is ",i.a.createElement("strong",null,"free*")),i.a.createElement("a",{className:"conf__button small square white",href:"mailto:events@les-tilleuls.coop"},"Contact us!"),i.a.createElement("small",null,"*certificate will be needed"))))))},P=[{name:"France tv",logo:"france-tv",link:"https://www.francetelevisions.fr/",rank:1},{name:"SensioLabs",logo:"sensiolabs",link:"https://sensiolabs.com/fr/",rank:2},{name:"Alice's garden",logo:"alice-garden",link:"https://www.alicesgarden.fr/",rank:2},{name:"LinkValue",logo:"linkvalue",link:"https://link-value.fr/",rank:2},{name:"Platform.sh",logo:"platform-sh",link:"https://platform.sh/",rank:2},{name:"Apimatic",logo:"apimatic",link:"https://www.apimatic.io/",rank:3},{name:"Fairness",logo:"fairness",link:"https://fairness.coop/",rank:4},{name:"Euratechnologies",logo:"euratechnologies",link:"https://www.euratechnologies.com/",rank:5},{name:"Sticker mule",logo:"sticker-mule",link:"https://mule.to/p33m",rank:5}],N=(n("2FHB"),n("c63E")),I=n("cFx2");t.default=function(){return i.a.createElement(f.a,null,i.a.createElement(r.Helmet,{titleTemplate:""},i.a.createElement("title",null,I.a+": meet the best API experts!"),i.a.createElement("meta",{property:"og:title",content:I.a+": meet the best API experts!"}),i.a.createElement("meta",{name:"twitter:title",content:I.a+": meet the best API experts!"})),i.a.createElement(c.a,{date:"September 15 - 16, 2022 | Lille & online",baseline:"The only event dedicated to API Platform and its ecosystem",button:i.a.createElement("div",{className:"conf__cover-buttons"},i.a.createElement(N.a,{className:"pink",id:"cover",size:"large"},"Buy tickets"),i.a.createElement(l.Link,{to:"/con/2022/schedule"},i.a.createElement("div",{className:"conf__button"},"Full schedule")))}),i.a.createElement(d.a,{numberVisibles:12},i.a.createElement("p",{className:"conf__section-subtitle"},"Discover our amazing international speakers!")),i.a.createElement(_,null),i.a.createElement("div",{className:"pt-50"},i.a.createElement(h.a,{subtitle:" The on-site edition will take place in Lille, meeting point of European cities and touristic capital of the Flemish region. If you can't attend the event physically, you can watch both tracks online."})),i.a.createElement(u,{data:P}),i.a.createElement(g.a,null))}},l3up:function(e,t,n){"use strict";n("K/os");var a=n("q1tI"),i=n.n(a),r=n("Wgwc"),l=n.n(r),c=n("TJpk"),o=n.n(c),s={logoLink:"/",links:[{to:"/con/2022/",text:"Home",mobileOnly:!0},{to:"/con/2022/speakers",text:"Speakers"},{to:"/con/2022/#pricing",text:"Pricing"},{to:"/con/2022/#venue",text:"Venue"},{to:"/con/2022/schedule",text:"Schedule"},{to:"/con/2022/#partners",text:"Partners"},{to:"/con/2021/review",text:"2021 review"}]},m=[{title:"Previous edition",links:[{title:"2021 review",link:"/con/2021/review"},{title:"2021 archive",link:"/con/2021/"}]},{title:"The event",links:[{title:"Speakers",link:"/con/2022/speakers"},{title:"Venue",link:"/con/2022/#venue"},{title:"Schedule",link:"/con/2022/schedule"},{title:"Pricing",link:"/con/2022/#pricing"},{title:"Partners",link:"/con/2022/#partners"}]},{title:"Legal",links:[{title:"Code of conduct",link:"/con/2022/code-of-conduct"},{title:"FAQ",link:"/con/2022/faq"},{title:"Transparency",link:"/con/2022/transparency"}]}],p=n("GYK1"),u=n("3nhQ"),d=n("SU53"),f=n("YwZP"),h={TITLE:"API Platform Conference 2022",DESCRIPTION:"The international conference dedicated to API Platform and its ecosystem",OG_IMAGE:"https://api-platform.com/conf-facebook-2022.png",URL:"https://api-platform.com/con/2022/"},g=n("RHlq"),E=n("c63E");t.a=function(e){var t=e.logoAlwaysVisible,n=e.children,r=p.a.map((function(e){var t=e.offers.sort((function(e,t){return l()(e.limitDate).isAfter(l()(t.limitDate))?1:l()(t.limitDate).isAfter(l()(e.limitDate))?-1:0})),n=t.find((function(e){return l()(e.limitDate).isAfter(l()())}))||t[t.length-1];return{"@type":"Offer",availability:"https://schema.org/InStock",price:n.price+".00",name:1===e.offers.length?e.title:e.title+" - "+n.title,priceCurrency:"EUR",url:"https://www.eventbrite.fr/e/api-platform-conference-2022-tickets-304104152707",validFrom:"2022-04-07"}})),c={"@context":"https://schema.org","@type":"Event",name:"API Platform Conference 2022",description:"The international conference dedicated to API Platform and its ecosystem",url:"https://api-platform.com/con/2022/",eventStatus:"http://schema.org/EventScheduled",eventAttendanceMode:"https://schema.org/MixedEventAttendanceMode",startDate:"2022-09-15",endDate:"2022-09-15",organizer:{"@type":"Organization",name:"Les-Tilleuls.coop",url:"https://les-tilleuls.coop/en"},location:[{"@type":"Place",name:"Euratechnologies",address:{"@type":"PostalAddress",addressLocality:"Lille",addressRegion:"Hauts de France",postalCode:"59000",streetAddress:"Place de Saintignon, 165 avenue de Bretagne"}},{"@type":"VirtualLocation",url:"https://api-platform.com/con/2022/"}],image:h.OG_IMAGE,offers:r},v=Object(f.useLocation)().pathname,k=Object(a.useState)([]),b=k[0],w=k[1],y=Object(a.useMemo)((function(){var e=null==b?void 0:b[b.length-1];return e&&"home"!==e&&b.length?v+"#"+b[b.length-1]:v}),[b,v]);Object(a.useEffect)((function(){window.history.replaceState({},"",y)}),[y]);var _=Object(a.useState)(!1),P=_[0],N=_[1];return Object(a.useEffect)((function(){var e=document.createElement("script");e.src="https://www.eventbrite.com/static/widgets/eb_widgets.js",e.onload=function(){N(!0)},document.body.appendChild(e)}),[N]),i.a.createElement(u.a.Provider,{value:{nav:s,activeLink:y,edition:"2022",isEventBriteLoaded:P}},i.a.createElement(d.a.Provider,{value:{sectionsVisibles:b,setSectionsVisibles:w}},i.a.createElement(o.a,null,i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(c)),i.a.createElement("script",{defer:!0,src:"https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"})),i.a.createElement(g.a,{edition:"2022",meta:h,logoAlwaysVisible:t,footer:m,navButton:i.a.createElement(E.a,{className:"pink",size:"small",id:"nav"},"Buy ticket")},n)))}},qdKg:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("fHej");t.default=function(){return i.a.createElement(r.default,null)}}}]);
//# sourceMappingURL=component---src-pages-con-index-tsx-439396120a1dcf3b0579.js.map