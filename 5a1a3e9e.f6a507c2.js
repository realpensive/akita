(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(s,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(107)),s={title:"Success/Error Handling"},i={unversionedId:"additional/notifications",id:"additional/notifications",isDocsHomePage:!1,title:"Success/Error Handling",description:"When we perform an HTTP request, we want to notify the user whether it succeeded or not. There are several methodologies you can use to do that:",source:"@site/docs/additional/notifications.mdx",slug:"/additional/notifications",permalink:"/akita/docs/additional/notifications",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/additional/notifications.mdx",version:"current",sidebar:"docs",previous:{title:"Array Utils",permalink:"/akita/docs/additional/array"},next:{title:"Plain JS Usage",permalink:"/akita/docs/additional/js"}},c=[{value:"Local Component State",id:"local-component-state",children:[]},{value:"Store&#39;s State",id:"stores-state",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When we perform an HTTP request, we want to notify the user whether it succeeded or not. There are several methodologies you can use to do that:"),Object(a.b)("h2",{id:"local-component-state"},"Local Component State"),Object(a.b)("p",null,"A local component state is useful when only the current component needs to know about the request's ",Object(a.b)("inlineCode",{parentName:"p"},"status"),", so we can set it once in the component and forget about it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'}),"class TodosService {\n  updateTodo() {\n    return this.http.post().pipe(\n      tap(() => this.store.updateEntity()\n    )\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.component.ts"',title:'"todos.component.ts"'}),'@Component({\n  template: `\n    <div *ngIf="error">{{ error }}</div>\n    <div *ngIf="success">Success!!</div>\n  `\n})\nclass TodosComponent {\n  updateTodo() {\n    this.todosService.updateTodo().subscribe({\n      next: () => (this.success = true),\n      error: error => (this.error = `\ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f`)\n    })\n  }\n}\n')),Object(a.b)("p",null,"The benefit is that we don't need to save the ",Object(a.b)("inlineCode",{parentName:"p"},"status")," in the store and ",Object(a.b)("inlineCode",{parentName:"p"},"reset")," it on destroy."),Object(a.b)("p",null,"A different case is when you don't need to show the ",Object(a.b)("inlineCode",{parentName:"p"},"state")," in the component because you're using a global ",Object(a.b)("inlineCode",{parentName:"p"},"alert")," design, for example. In such a case, you can handle it directly on the service:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'}),"import { throwError } from 'rxjs';\n\nclass TodosService {\n  constructor(private toaster: Toaster) {}\n  \n  updateTodo() {\n    return this.http.post().pipe(\n      tap(() => {\n        this.store.updateEntity();\n        this.toaster.success(`\ud83e\udd84`);\n      }),\n      catchError((err) => {\n        this.toaster.error(`\ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f`);\n        return throwError(err);  \n      })\n    )\n  }\n}\n")),Object(a.b)("h2",{id:"stores-state"},"Store's State"),Object(a.b)("p",null,"If you want to communicate the error to other components or services you can save the ",Object(a.b)("inlineCode",{parentName:"p"},"error")," in the store:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'}),"class TodosService {\n  constructor(private toaster: Toaster) {}\n  \n  updateTodo() {\n    return this.http.post().pipe(\n      tap(() => this.store.updateEntity()),\n      catchError((err) => {\n        this.store.setError(`\ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f`);\n        return throwError(err); \n      })\n    )\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.component.ts"',title:'"todos.component.ts"'}),'@Component({\n  template: `<div *ngIf="error$ | async as err">{{ err }}</div>`\n})\nclass TodosComponent {\n  error$ = this.todosQuery.selectError();\n  \n  updateTodo() {\n    this.todosService.updateTodo().subscribe();\n  }\n}\n')))}p.isMDXComponent=!0}}]);