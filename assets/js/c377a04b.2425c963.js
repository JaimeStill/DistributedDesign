"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[971],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),p=d(a),u=r,g=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return a?n.createElement(g,o(o({ref:e},m),{},{components:a})):n.createElement(g,o({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1269:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1,slug:"/",title:"Overview"},o="Distributed Design",s={unversionedId:"index",id:"index",title:"Overview",description:"This repository is a work in progress. The current APIs and documentation are subject to change. See the GitHub Project to track progress to initial concept.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/distributed-design/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",title:"Overview"},sidebar:"docsSidebar"},l={},d=[{value:"Terminology",id:"terminology",level:2},{value:"Layout",id:"layout",level:2}],m={toc:d},p="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"distributed-design"},"Distributed Design"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This repository is a work in progress. The current APIs and documentation are subject to change. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/users/JaimeStill/projects/6"},"GitHub Project")," to track progress to initial concept."),(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JaimeStill/distributed-design/blob/main/notes.md"},"Notes")," for info that hasn't made it into the docs yet.")),(0,r.kt)("p",null,"This repository demonstrates a .NET microservice API (each microservice is referred to as a ",(0,r.kt)("strong",{parentName:"p"},"node"),") that takes as few external dependencies as possible. SQL Server serves as the underlying storage mechanism."),(0,r.kt)("p",null,"In addition to standard data retrieval and mutations, this architecture also focuses on easily enabling cross-node communication and distributed real time data synchronization. It attempts to provide a minimal and easy to incorporate approach to defining microservice infrastructure inspired by the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-data-persistence/cqrs-pattern.html"},"Command Query Responsibility Segregation (CQRS)"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-data-persistence/service-per-team.html"},"Event Sourcing"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-data-persistence/saga-pattern.html"},"Saga")," patterns."),(0,r.kt)("h2",{id:"terminology"},"Terminology"),(0,r.kt)("p",null,"This project uses the following terminology to describe different facets of its infrastructure:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Term"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"API")),(0,r.kt)("td",{parentName:"tr",align:null},"A .NET Web API project that establishes HTTP and Web Socket endpoints for a ",(0,r.kt)("strong",{parentName:"td"},"Node"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/proposals/Proposals.Api"},"Proposals.Api"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"App")),(0,r.kt)("td",{parentName:"tr",align:null},"A client that interfaces with one or more ",(0,r.kt)("strong",{parentName:"td"},"Nodes"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"Pending")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Command")),(0,r.kt)("td",{parentName:"tr",align:null},"A ",(0,r.kt)("strong",{parentName:"td"},"Service")," that defines user-driven public data mutation methods."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/proposals/Proposals.Services/Command/ProposalCommand.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"ProposalCommand")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Contract")),(0,r.kt)("td",{parentName:"tr",align:null},"An ",(0,r.kt)("strong",{parentName:"td"},"Entity")," that facilitates interaction between ",(0,r.kt)("strong",{parentName:"td"},"Nodes"),". A ",(0,r.kt)("strong",{parentName:"td"},"Contract")," can be thought of as a ",(0,r.kt)("em",{parentName:"td"},"public")," ",(0,r.kt)("strong",{parentName:"td"},"Entity"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/contracts/workflows/Classes/Package.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"Package")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Entity")),(0,r.kt)("td",{parentName:"tr",align:null},"A data model represented by an underlying store table that encapsulates an aspect of the associated ",(0,r.kt)("strong",{parentName:"td"},"Node")," domain."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/proposals/Proposals.Entities/Proposal.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"Proposal")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"EventHub")),(0,r.kt)("td",{parentName:"tr",align:null},"A strongly-typed SignalR ",(0,r.kt)("inlineCode",{parentName:"td"},"Hub")," that broadcasts ",(0,r.kt)("strong",{parentName:"td"},"Entity"),"-based mutation events."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"Interface: ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/workflows/Workflows.Services/Event/IPackageEventHub.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"IPackageEventHub"))),(0,r.kt)("li",null,"Hub: ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/workflows/Workflows.Services/Event/PackageEventHub.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"PackageEventHub")))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"EventListener")),(0,r.kt)("td",{parentName:"tr",align:null},"A SignalR client that facilitates reacting to  ",(0,r.kt)("strong",{parentName:"td"},"Entity"),"-based mutation events broadcast by an ",(0,r.kt)("strong",{parentName:"td"},"EventHub"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"Pending")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Gateway")),(0,r.kt)("td",{parentName:"tr",align:null},"The publicly-exposed API interface defined by a ",(0,r.kt)("strong",{parentName:"td"},"Node")," that facilitates cross-node interaction."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"API: ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/workflows/Workflows.Api/Controllers/GatewayController.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"GatewayController"))),(0,r.kt)("li",null,"Client: ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/contracts/workflows/WorkflowsGateway.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"WorkflowsGateway"))),(0,r.kt)("li",null,"Configuration: ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/proposals/Proposals.Api/appsettings.Development.json#L11"},(0,r.kt)("inlineCode",{parentName:"a"},"appsettings.json")))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Hook")),(0,r.kt)("td",{parentName:"tr",align:null},"An asynchronous delegate function that allows logic to be executed at critical moments within a ",(0,r.kt)("strong",{parentName:"td"},"Command")," action."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"Definition: ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/core/Services/EntityCommand.cs#L39"},(0,r.kt)("inlineCode",{parentName:"a"},"AfterAdd"))),(0,r.kt)("li",null,"Implementation: ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/proposals/Proposals.Services/Command/ProposalCommand.cs#L17"},(0,r.kt)("inlineCode",{parentName:"a"},"AfterAdd")))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Node")),(0,r.kt)("td",{parentName:"tr",align:null},"A microservice backend that encapsulates a single micro domain. This term was selected in place of ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"Service"))," to avoid confusion. ",(0,r.kt)("strong",{parentName:"td"},"Service")," is an overloaded term that already carries a different definition in this architecture."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/proposals"},"proposals"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Query")),(0,r.kt)("td",{parentName:"tr",align:null},"A ",(0,r.kt)("strong",{parentName:"td"},"Service")," that facilitates retrieval of ",(0,r.kt)("strong",{parentName:"td"},"Entity")," data."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/proposals/Proposals.Services/Query/ProposalQuery.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"ProposalQuery")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Saga")),(0,r.kt)("td",{parentName:"tr",align:null},"A ",(0,r.kt)("strong",{parentName:"td"},"Service")," that defines system-drive private data mutation methods; they isolate reactionary logic for determining how to handle effects of mutations triggered through ",(0,r.kt)("strong",{parentName:"td"},"Events"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"Pending")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Service")),(0,r.kt)("td",{parentName:"tr",align:null},"A class that exposes functionality and is registered with the .NET Dependency Injection service container. ",(0,r.kt)("strong",{parentName:"td"},"Query"),", ",(0,r.kt)("strong",{parentName:"td"},"Command"),", ",(0,r.kt)("strong",{parentName:"td"},"EventListener"),", and ",(0,r.kt)("strong",{parentName:"td"},"Saga")," are all examples of services with a targeted intent."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/core/Gateway/GatewayService.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"GatewayService")))))),(0,r.kt)("h2",{id:"layout"},"Layout"),(0,r.kt)("p",null,"The layout of the repository is expressed as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/docs"},"docs")," - Repository documentation, hosted at ",(0,r.kt)("a",{parentName:"li",href:"https://jaimestill.github.io/distributed-design"},"https://jaimestill.github.io/distributed-design"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes"},"nodes")," - All ",(0,r.kt)("strong",{parentName:"li"},"Node"),"-related infrastructure.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/contracts"},"contracts")," - Projects that define publicly available ",(0,r.kt)("strong",{parentName:"li"},"Entity")," classes and their underlying infrastructure.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/contracts/core"},"core")," - Core contracts not associated with a specific ",(0,r.kt)("strong",{parentName:"li"},"Node"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/contracts/workflows"},"workflows")," - Contracts associated with the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/workflows"},"workflows")," ",(0,r.kt)("strong",{parentName:"li"},"Node"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core"},"core")," - Class library that contains all of the core infrastructure for building out a ",(0,r.kt)("strong",{parentName:"li"},"Node"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Controllers"},"Controllers")," - Abstract ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-7.0#controllerbase-class"},"Controller")," definitions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Data"},"Data")," - Infrastructure for building out Entity Framework Core related features."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Entities"},"Entities")," - Core classes and interfaces for building ",(0,r.kt)("strong",{parentName:"li"},"Entity")," classes for a ",(0,r.kt)("strong",{parentName:"li"},"Node"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Extensions"},"Extensions")," - Extension methods that provide enhanced functionality and / or standardizes ",(0,r.kt)("strong",{parentName:"li"},"Node")," configuration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Gateway"},"Gateway")," - Infrastructure for building a ",(0,r.kt)("strong",{parentName:"li"},"Gateway")," within a ",(0,r.kt)("strong",{parentName:"li"},"Node"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Messages"},"Messages")," - Return types that wrap a data type with metadata about the results of the operation that was performed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Middleware"},"Middleware")," - Contains ",(0,r.kt)("strong",{parentName:"li"},"Node")," specific ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-7.0"},"middleware"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Services"},"Services")," - Core classes and interfaces for building ",(0,r.kt)("strong",{parentName:"li"},"Command"),", ",(0,r.kt)("strong",{parentName:"li"},"Query"),", ",(0,r.kt)("strong",{parentName:"li"},"Event"),", and ",(0,r.kt)("strong",{parentName:"li"},"Saga")," services for a ",(0,r.kt)("strong",{parentName:"li"},"Node"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/proposals"},"proposals")," - A simple demonstration ",(0,r.kt)("strong",{parentName:"li"},"Node")," that facilitates the development of proposals."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/workflows"},"workflows")," - A simple demonstration ",(0,r.kt)("strong",{parentName:"li"},"Node")," that facilitates the staffing of packages through pre-defined workflows. Packages are generated from external services through the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/contracts/workflows/Classes/Package.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"Package"))," contract via the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/contracts/workflows/WorkflowsGateway.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"WorkflowsGateway")),".")))))}c.isMDXComponent=!0}}]);