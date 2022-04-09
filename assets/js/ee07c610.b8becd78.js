(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[66939],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86307:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"Deploy First Application"},l={unversionedId:"end-user/quick-start-cli",id:"version-v1.3/end-user/quick-start-cli",isDocsHomePage:!1,title:"Deploy First Application",description:"Welcome to KubeVela! In this guide, we'll walk you through how to install KubeVela, and deploy your first simple application.",source:"@site/versioned_docs/version-v1.3/end-user/quick-start-cli.md",sourceDirName:"end-user",slug:"/end-user/quick-start-cli",permalink:"/docs/end-user/quick-start-cli",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/quick-start-cli.md",version:"v1.3",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649421307,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"Deploy First Application"},sidebar:"version-v1.3/docs",previous:{title:"Installation",permalink:"/docs/install"},next:{title:"Multi-Cluster App Delivery",permalink:"/docs/case-studies/multi-cluster"}},s=[{value:"Installation",id:"installation",children:[]},{value:"A Simple Application",id:"a-simple-application",children:[]},{value:"Next Step",id:"next-step",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to KubeVela! In this guide, we'll walk you through how to install KubeVela, and deploy your first simple application."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Make sure you have finished and verified KubeVela installation following ",(0,i.kt)("a",{parentName:"p",href:"/docs/install"},"this guide"),"."),(0,i.kt)("h2",{id:"a-simple-application"},"A Simple Application"),(0,i.kt)("p",null,"A simple deployment definition in KubeVela looks as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: gateway\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n')),(0,i.kt)("p",null,"Now deploy it to KubeVela:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"vela up -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela-app.yaml\n")),(0,i.kt)("p",null,"This command will deploy a web service component to target environment, which in our case is the Kubernetes cluster that KubeVela itself is installed."),(0,i.kt)("p",null,"After deployed, you can now directly visit this application as it already attached with a ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress")," trait (assume your cluster has ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"},"ingress controller")," installed)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ curl -H "Host:testsvc.example.com" http://<some ip address>/\n<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')),(0,i.kt)("p",null,"Great! You have finished deploying your first KubeVela application, the simplest component can only have one component, the rest fields are all optional including trait, policies and workflow."),(0,i.kt)("h2",{id:"next-step"},"Next Step"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Learn how to do ",(0,i.kt)("a",{parentName:"li",href:"../case-studies/multi-cluster"},"Multi-Cluster App Delivery"),",Components and traits are just the beginning of your vela sail, there're more powerful features around Policy and Workflow."),(0,i.kt)("li",{parentName:"ul"},"Refer to ",(0,i.kt)("a",{parentName:"li",href:"../quick-start"},"VelaUX")," for UI Console experience.")))}c.isMDXComponent=!0}}]);