(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{48:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));n(0);var r=n(66);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={id:"dispatcher-ko-KR",title:"Dispatcher"},o=[{value:"API",id:"api",children:[]},{value:"예시",id:"예시",children:[]}],p={rightToc:o},l="wrapper";function b(e){var t=e.components,n=i(e,["components"]);return Object(r.b)(l,a({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Dispatcher는 등록된 callback에 데이터를 중계할 때 사용된다. 일반적인 pub-sub 시스템과는 다음 두 항목이 다르다:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"콜백은 이벤트를 개별적으로 구독하지 않는다. 모든 데이터 변동은 등록된 모든 콜백에 전달된다."),Object(r.b)("li",{parentName:"ul"},"콜백이 실행될 때 콜백의 전체나 일부를 중단할 수 있다.")),Object(r.b)("p",null,"소스 코드를 보려면 ",Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/facebook/flux/blob/master/src/Dispatcher.js"}),"Dispatcher.js"),"에서 확인할 수 있다."),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"register(function callback): string")),"\n모든 데이터 변동이 있을 때 실행될 콜백을 등록한다. ",Object(r.b)("inlineCode",{parentName:"p"},"waitFor()"),"에서 사용 가능한 토큰을 반환한다.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"unregister(string id): void")),"\n토큰으로 콜백을 제거한다.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"waitFor(array<string> ids): void")),"\n현재 실행한 콜백이 진행되기 전에 특정 콜백을 지연하게 한다. 데이터 변동에 응답하는 콜백에만 사용해야 한다.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"dispatch(object payload): void"))," 등록된 모든 콜백에 데이터를 전달한다.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"isDispatching(): boolean"))," 이 Dispatcher가 지금 데이터를 전달하고 있는지 확인한다."))),Object(r.b)("h2",{id:"예시"},"예시"),Object(r.b)("p",null,"가상의 비행 목적지 양식에서 국가를 선택했을 때 기본 도시를 선택하는 예를 보자:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"var flightDispatcher = new Dispatcher();\n\n// 어떤 국가를 선택했는지 계속 추적한다\nvar CountryStore = {country: null};\n\n// 어느 도시를 선택했는지 계속 추적한다\nvar CityStore = {city: null};\n\n// 선택된 도시의 기본 항공료를 계속 추적한다\nvar FlightPriceStore = {price: null};\n")),Object(r.b)("p",null,"사용자가 선택한 도시를 변경하면 데이터를 전달한다:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"flightDispatcher.dispatch({\n  actionType: 'city-update',\n  selectedCity: 'paris'\n});\n")),Object(r.b)("p",null,"이 데이터 변동은 ",Object(r.b)("inlineCode",{parentName:"p"},"CityStore"),"가 소화한다:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"flightDispatcher.register(function(payload) {\n  if (payload.actionType === 'city-update') {\n    CityStore.city = payload.selectedCity;\n  }\n});\n")),Object(r.b)("p",null,"사용자가 국가를 선택하면 데이터를 전달한다:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"flightDispatcher.dispatch({\n  actionType: 'country-update',\n  selectedCountry: 'australia'\n});\n")),Object(r.b)("p",null,"이 데이터는 두 store에 의해 소화된다:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"})," CountryStore.dispatchToken = flightDispatcher.register(function(payload) {\n  if (payload.actionType === 'country-update') {\n    CountryStore.country = payload.selectedCountry;\n  }\n});\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"CountryStore"),"가 등록한 콜백을 업데이트 할 때 반환되는 토큰을 참조값으로 저장했다. 이 토큰은 ",Object(r.b)("inlineCode",{parentName:"p"},"waitFor()"),"\n에서 사용할 수 있고 ",Object(r.b)("inlineCode",{parentName:"p"},"CityStore"),"가 갱신하는 것보다 먼저 ",Object(r.b)("inlineCode",{parentName:"p"},"CountryStore"),"를 갱신하도록 보장할 수 있다."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"CityStore.dispatchToken = flightDispatcher.register(function(payload) {\n  if (payload.actionType === 'country-update') {\n    // `CountryStore.country`는 업데이트 되지 않는다\n    flightDispatcher.waitFor([CountryStore.dispatchToken]);\n    // `CountryStore.country`는 업데이트가 될 수 있음이 보장되었다\n\n    // 새로운 국가의 기본 도시를 선택한다\n    CityStore.city = getDefaultCityForCountry(CountryStore.country);\n  }\n});\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"waitFor()"),"는 다음과 같이 묶을 수 있다:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"FlightPriceStore.dispatchToken =\n  flightDispatcher.register(function(payload) {\n    switch (payload.actionType) {\n      case 'country-update':\n      case 'city-update':\n        flightDispatcher.waitFor([CityStore.dispatchToken]);\n        FlightPriceStore.price =\n          getFlightPriceStore(CountryStore.country, CityStore.city);\n        break;\n  }\n});\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"country-update"),"는 콜백이 등록된 순서 즉 ",Object(r.b)("inlineCode",{parentName:"p"},"CountryStore"),", ",Object(r.b)("inlineCode",{parentName:"p"},"CityStore"),", ",Object(r.b)("inlineCode",{parentName:"p"},"FlightPriceStore")," 순서로 실행되도록 보장된다."))}b.isMDXComponent=!0},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r),i=a.a.createContext({}),c=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=c(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),b=c(n),u=r,s=b[o+"."+u]||b[u]||l[u]||i;return n?a.a.createElement(s,Object.assign({},{ref:t},p,{components:n})):a.a.createElement(s,Object.assign({},{ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);