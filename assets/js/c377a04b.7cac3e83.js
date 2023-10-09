"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[971],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var i=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=i.createContext({}),d=function(t){var e=i.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},m=function(t){var e=d(t.components);return i.createElement(l.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),p=d(a),u=n,g=p["".concat(l,".").concat(u)]||p[u]||c[u]||r;return a?i.createElement(g,s(s({ref:e},m),{},{components:a})):i.createElement(g,s({ref:e},m))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[p]="string"==typeof t?t:n,s[1]=o;for(var d=2;d<r;d++)s[d]=a[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1269:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=a(7462),n=(a(7294),a(3905));const r={sidebar_position:1,slug:"/",title:"Overview"},s="Distributed Design",o={unversionedId:"index",id:"index",title:"Overview",description:"This repository demonstrates a minimal .NET microservice framework (each microservice is referred to as a node) that takes as few external dependencies as possible. In addition to standard data retrieval and mutations, this architecture also focuses on easily enabling cross-node communication and distributed real time data synchronization. SQL Server serves as the underlying storage mechanism through Entity Framework. SignalR is used for real time data synchronization.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/distributed-design/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",title:"Overview"},sidebar:"docsSidebar",next:{title:"Getting Started",permalink:"/distributed-design/getting-started"}},l={},d=[{value:"Terminology",id:"terminology",level:2},{value:"Directory Structure",id:"directory-structure",level:2}],m={toc:d},p="wrapper";function c(t){let{components:e,...a}=t;return(0,n.kt)(p,(0,i.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"distributed-design"},"Distributed Design"),(0,n.kt)("p",null,"This repository demonstrates a minimal .NET microservice framework (each microservice is referred to as a ",(0,n.kt)("strong",{parentName:"p"},"node"),") that takes as few external dependencies as possible. In addition to standard data retrieval and mutations, this architecture also focuses on easily enabling cross-node communication and distributed real time data synchronization. SQL Server serves as the underlying storage mechanism through Entity Framework. SignalR is used for real time data synchronization."),(0,n.kt)("h2",{id:"terminology"},"Terminology"),(0,n.kt)("p",null,"This project uses the following terminology to describe different facets of its infrastructure:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Term"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"API")),(0,n.kt)("td",{parentName:"tr",align:null},"A .NET Web API project that provides a configuration point and establishes HTTP and Web Socket endpoints for a ",(0,n.kt)("strong",{parentName:"td"},"Node"),"."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/proposals/Proposals.Api"},(0,n.kt)("inlineCode",{parentName:"a"},"Proposals.Api")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"App")),(0,n.kt)("td",{parentName:"tr",align:null},"A client that interfaces with one or more ",(0,n.kt)("strong",{parentName:"td"},"Nodes"),"."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/tree/main/apps/proposals"},(0,n.kt)("inlineCode",{parentName:"a"},"proposals")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Command")),(0,n.kt)("td",{parentName:"tr",align:null},"A ",(0,n.kt)("strong",{parentName:"td"},"Service")," that defines user-driven public data mutation methods."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/proposals/Proposals.Services/Command/ProposalCommand.cs"},(0,n.kt)("inlineCode",{parentName:"a"},"ProposalCommand")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Contract")),(0,n.kt)("td",{parentName:"tr",align:null},"An ",(0,n.kt)("strong",{parentName:"td"},"Entity")," that facilitates interaction between ",(0,n.kt)("strong",{parentName:"td"},"Nodes"),". A ",(0,n.kt)("strong",{parentName:"td"},"Contract")," can be thought of as a ",(0,n.kt)("em",{parentName:"td"},"public")," ",(0,n.kt)("strong",{parentName:"td"},"Entity"),"."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/contracts/workflows/Classes/Package.cs"},(0,n.kt)("inlineCode",{parentName:"a"},"Package")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Entity")),(0,n.kt)("td",{parentName:"tr",align:null},"A data model represented by an underlying store table that encapsulates an aspect of the associated ",(0,n.kt)("strong",{parentName:"td"},"Node")," domain."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/proposals/Proposals.Entities/Proposal.cs"},(0,n.kt)("inlineCode",{parentName:"a"},"Proposal")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"EventHub")),(0,n.kt)("td",{parentName:"tr",align:null},"A strongly-typed SignalR ",(0,n.kt)("inlineCode",{parentName:"td"},"Hub")," that broadcasts ",(0,n.kt)("strong",{parentName:"td"},"Entity"),"-based mutation events."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"Interface: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/workflows/Workflows.Services/Event/IPackageEventHub.cs"},(0,n.kt)("inlineCode",{parentName:"a"},"IPackageEventHub"))),(0,n.kt)("li",null,"Hub: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/workflows/Workflows.Services/Event/PackageEventHub.cs"},(0,n.kt)("inlineCode",{parentName:"a"},"PackageEventHub")))))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"EventListener")),(0,n.kt)("td",{parentName:"tr",align:null},"A SignalR client that facilitates reacting to ",(0,n.kt)("strong",{parentName:"td"},"Contract"),"-based mutation events broadcast by an ",(0,n.kt)("strong",{parentName:"td"},"EventHub"),"."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,".NET: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/proposals/Proposals.Services/Event/Listeners/PackageEventListener.cs"},(0,n.kt)("inlineCode",{parentName:"a"},"PackageListener"))),(0,n.kt)("li",null,"TypeScript: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/apps/libs/distributed/projects/toolkit/src/nodes/package-listener.ts"},(0,n.kt)("inlineCode",{parentName:"a"},"PackageListener")))))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Gateway")),(0,n.kt)("td",{parentName:"tr",align:null},"The publicly-exposed API interface defined by a ",(0,n.kt)("strong",{parentName:"td"},"Node")," that facilitates cross-node interaction."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"API: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/workflows/Workflows.Api/Controllers/GatewayController.cs"},(0,n.kt)("inlineCode",{parentName:"a"},"GatewayController"))),(0,n.kt)("li",null,"Client: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/contracts/workflows/WorkflowsGateway.cs"},(0,n.kt)("inlineCode",{parentName:"a"},"WorkflowsGateway"))),(0,n.kt)("li",null,"Configuration: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/proposals/Proposals.Api/appsettings.Development.json#L14"},(0,n.kt)("inlineCode",{parentName:"a"},"appsettings.json")))))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Hook")),(0,n.kt)("td",{parentName:"tr",align:null},"An asynchronous delegate function that allows logic to be executed at critical moments within a ",(0,n.kt)("strong",{parentName:"td"},"Command")," action."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"Definition: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/core/Services/EntityCommand.cs#L39"},(0,n.kt)("inlineCode",{parentName:"a"},"AfterAdd"))),(0,n.kt)("li",null,"Implementation: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/proposals/Proposals.Services/Command/ProposalCommand.cs#L26"},(0,n.kt)("inlineCode",{parentName:"a"},"AfterAdd")))))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Node")),(0,n.kt)("td",{parentName:"tr",align:null},"A microservice backend that encapsulates a single micro domain. This term was selected in place of ",(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"Service"))," to avoid confusion. ",(0,n.kt)("strong",{parentName:"td"},"Service")," is an overloaded term that already carries a different definition in this architecture."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/proposals"},(0,n.kt)("inlineCode",{parentName:"a"},"proposals")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Query")),(0,n.kt)("td",{parentName:"tr",align:null},"A ",(0,n.kt)("strong",{parentName:"td"},"Service")," that facilitates retrieval of ",(0,n.kt)("strong",{parentName:"td"},"Entity")," data."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/proposals/Proposals.Services/Query/ProposalQuery.cs"},(0,n.kt)("inlineCode",{parentName:"a"},"ProposalQuery")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Saga")),(0,n.kt)("td",{parentName:"tr",align:null},"A ",(0,n.kt)("strong",{parentName:"td"},"Service")," that defines system-driven private data mutation methods; they isolate reactionary logic for determining how to handle effects of mutations triggered through external node ",(0,n.kt)("strong",{parentName:"td"},"Events"),". Typically, a Saga is defined when you want to adjust internal ",(0,n.kt)("strong",{parentName:"td"},"Entities")," in response to changes in associated external ",(0,n.kt)("strong",{parentName:"td"},"Contracts"),"."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/proposals/Proposals.Services/Saga/PackageSaga.cs"},(0,n.kt)("inlineCode",{parentName:"a"},"PackageSaga")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Service")),(0,n.kt)("td",{parentName:"tr",align:null},"A class that exposes functionality and is registered with the .NET Dependency Injection service container. ",(0,n.kt)("strong",{parentName:"td"},"Query"),", ",(0,n.kt)("strong",{parentName:"td"},"Command"),", ",(0,n.kt)("strong",{parentName:"td"},"EventListener"),", and ",(0,n.kt)("strong",{parentName:"td"},"Saga")," are all examples of services with a targeted intent."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/core/Gateway/GatewayService.cs"},(0,n.kt)("inlineCode",{parentName:"a"},"GatewayService")))))),(0,n.kt)("h2",{id:"directory-structure"},"Directory Structure"),(0,n.kt)("p",null,"The layout of the repository is expressed as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/.devcontainer"},".devcontainer")," - ",(0,n.kt)("a",{parentName:"li",href:"https://containers.dev/"},"Dev Container")," configuration for running this project in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/features/codespaces"},"GitHub Codespaces"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/.github/workflows"},".github/workflows")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/features/actions"},"GitHub Actions")," workflows for deploying docs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/.vscode"},".vscode")," - ",(0,n.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/editor/tasks"},"Tasks")," and ",(0,n.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/editor/debugging"},"Debug")," configurations for VS Code."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/apps"},"apps")," - All app-related infrastructure.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/apps/libs"},"libs")," - Contains local npm libraries that define common infrastructure for app development.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/apps/libs/contracts"},"contracts")," - Libraries that define publicly available entity classes and their underlying infrastructure.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/apps/libs/contracts/core"},"core")," - Core contracts not associated with a specific node."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/apps/libs/contracts/workflows"},"workflows")," - ContractsS associated with the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/workflows"},"workflows")," node."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/apps/libs/core"},"core")," - Library that contains all of the core infrastructure for building apps that interface with nodes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/apps/libs/distributed"},"distributed")," - Angular workspace that defines the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/apps/libs/distributed/projects/toolkit"},(0,n.kt)("inlineCode",{parentName:"a"},"@distributed/toolkit"))," library. Contains Angular-specific infrastructure that can be shared between Angular apps."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/apps/proposals"},"proposals")," - Angular app interface for the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/proposals"},(0,n.kt)("inlineCode",{parentName:"a"},"proposals"))," node."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/apps/workflows"},"workflows")," - Angular app interface for the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/workflows"},(0,n.kt)("inlineCode",{parentName:"a"},"workflows"))," node."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/docs"},"docs")," - Repository documentation, hosted at ",(0,n.kt)("a",{parentName:"li",href:"https://jaimestill.github.io/distributed-design"},"https://jaimestill.github.io/distributed-design"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes"},"nodes")," - All node-related infrastructure.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/contracts"},"contracts")," - Projects that define publicly available entity classes and their underlying infrastructure.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/contracts/core"},"core")," - Core contracts not associated with a specific node."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/contracts/workflows"},"workflows")," - Contracts associated with the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/workflows"},"workflows")," node."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core"},"core")," - Class library that contains all of the core infrastructure for building out a node.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Controllers"},"Controllers")," - Abstract ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-7.0#controllerbase-class"},"Controller")," definitions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Data"},"Data")," - Infrastructure for building out Entity Framework Core related features."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Entities"},"Entities")," - Core classes and interfaces for building entity classes for a node."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Extensions"},"Extensions")," - Extension methods that provide enhanced functionality and / or standardizes node configuration."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Gateway"},"Gateway")," - Infrastructure for building a gateway within a node."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Messages"},"Messages")," - Return types that wrap a data type with metadata about the results of the operation that was performed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Middleware"},"Middleware")," - Contains node specific ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-7.0"},"middleware")," infrastructure."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Services"},"Services")," - Core classes and interfaces for building command, query, event, and saga services for a node.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/core/Services/Events"},"Events")," - Infrastructure for building SignalR-based event hubs and clients."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/proposals"},"proposals")," - A simple demonstration node that facilitates the development of proposals."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/nodes/workflows"},"workflows")," - A simple demonstration node that facilitates the staffing of packages through pre-defined workflows. Packages are generated from external services through the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/contracts/workflows/Classes/Package.cs"},(0,n.kt)("inlineCode",{parentName:"a"},"Package"))," contract via the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/blob/main/nodes/contracts/workflows/WorkflowsGateway.cs"},(0,n.kt)("inlineCode",{parentName:"a"},"WorkflowsGateway")),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/tree/main/scripts"},"scripts")," - PowerShell scripts that facilitate management of Azure cloud deployment (see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/blob/main/scripts/deploy-azure.ps1"},"deploy-azure.ps1"),") and local npm libraries (see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/blob/main/scripts/clean-apps.ps1"},"clean-apps.ps1"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JaimeStill/distributed-design/blob/main/deploy.json"},(0,n.kt)("inlineCode",{parentName:"a"},"deploy.json"))," - Contains metadata for simplifying Azure cloud deployment.")))}c.isMDXComponent=!0}}]);