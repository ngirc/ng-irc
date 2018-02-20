## AMA with WebReflection (2018-Feb-14)

<sub><sup>[12:58]</sup></sub> **@icebox**

ANNOUNCE: in two minutes  "Wed, Feb 14th, at 13.00 CET (GMT+1) a 1 hour #angularjs (Freenode) AMA (Ask Me Anything) with me about hyperHTML, standards, transpilers, bundlers, esm modules, and the meaning of keyed VS non keyed JS benchmarks + your questions. See you there" - https://twitter.com/WebReflection/status/961352362962059264
- - -

<sub><sup>[12:59]</sup></sub> **Pyrrhus666**

welcome webreflection
- - -

<sub><sup>[12:59]</sup></sub> **webreflection**

thank you Pyrrhus666
- - -

<sub><sup>[12:59]</sup></sub> **@icebox**

webreflection: thanks a lot to be here

While AMA (Ask Me Anything) event is in progress, please, keep your usual questions about angular(js) after the event
- - -

<sub><sup>[13:00]</sup></sub> **webreflection**

thank you for inviting me
- - -

<sub><sup>[13:00]</sup></sub> **@icebox**

AMA (Ask Me Anything) event in #angularjs channel is starting
- - -

<sub><sup>[13:00]</sup></sub> **webreflection**

yeah ... and just to be clear, I wouldn't probably know how to answer that :D
- - -

<sub><sup>[13:00]</sup></sub> **@icebox**

The session is lasting in about one hour

:P

The format includes a list of four or five questions on a few main topics: hyperHTML, standards, transpilers, bundlers, esm modules, and the meaning of keyed VS non keyed JS benchmarks... and, of course, your questions

I am honored and excited to introduce you WebReflection, formerly JS engineer at @nokia, @facebook, @twitter, hyperHTML founder and lately member of Node.js Modules Team

Now, please give a warm welcome to WebReflection

it seems we have very well educated users or very shy :)
- - -

<sub><sup>[13:02]</sup></sub> **Elarcis**

Hello again!

Hello webreflection, thank you so much for coming
- - -

<sub><sup>[13:02]</sup></sub> **webreflection**

hi there, I've just realized my introduction is almost as long as the Khaleesi one

I have no dragons though, but ready for the AMA :-)
- - -

<sub><sup>[13:03]</sup></sub> **@icebox**

ahahah... so 1st topic... hyperHTML is a fast and light virtual DOM alternative, a new framework to develop web apps (almost one year old), based on template literals without using a virtual DOM and without tweaking innerHTML.
- - -

<sub><sup>[13:03]</sup></sub> **SargoDarya**

Oh right, there's the AMA happening.
- - -

<sub><sup>[13:04]</sup></sub> **@icebox**

What is briefly hyperHTML? and Why hyperHTML? apart why not :)
- - -

<sub><sup>[13:05]</sup></sub> **webreflection**

let's say I was bored to create forms that per each change should've updated a view. Not even create them, compose them through procedural DOM API ... document.createElement, addEventListener, appendChild, and everything else that would've given me way more control than just an innerHTML

I've always been a huge fan of bare DOM based libraries, applications, solutions, and it's not by accident that I wrote 3 years ago a post called "The DOM Is Not Slow, your abstraction is"

http://webreflection.blogspot.de/2015/04/the-dom-is-not-slow-your-abstraction-is.html
- - -

<sub><sup>[13:06]</sup></sub> **Pyrrhus666**

icebox posted that a while back :)
- - -

<sub><sup>[13:07]</sup></sub> **webreflection**

However, writing DOM manually is very, **very**, boring!
- - -

<sub><sup>[13:07]</sup></sub> **Elarcis**

Pyrrhus666: Multiple times :P
- - -

<sub><sup>[13:07]</sup></sub> **@icebox**

ok ok... you know I am a fan of hyperHTML :)
- - -

<sub><sup>[13:07]</sup></sub> **webreflection**

well, abstraction have a very valid reason to exist
- - -

<sub><sup>[13:07]</sup></sub> **SargoDarya**

webreflection: You mean like, document.createElement? :P
- - -

<sub><sup>[13:07]</sup></sub> **webreflection**

I mean anything we do manually to compose reactive UI in general

even with jQuery and th eclassic "throw it there, modify later"
- - -

<sub><sup>[13:08]</sup></sub> **Elarcis**

webreflection: I can certainly relate to that
- - -

<sub><sup>[13:08]</sup></sub> **webreflection**

so one day I've decided I had enough, and I wanted to find a way to address all interesting nodes inside a generic UI, writing it as if I was writing plain HTML

I always thought there was potential behind template literals, but I could quite never look beyond the mere string as result
- - -

<sub><sup>[13:09]</sup></sub> **SargoDarya**

I so understand that.
- - -

<sub><sup>[13:10]</sup></sub> **webreflection**

The day I've realized tag template literals could accept any kind of interpolation and return any kind of value and, being just functions, could also be bound to an external context, is the day I've created my first prototype of hyperHTML

the concept behind is summarized in this gist called hyperHTML the nitty gritty https://gist.github.com/WebReflection/d3aad260ac5007344a0731e797c8b1a4

using the template literals signature to actually create via HTMLTemplateElement content addressed once per each template literal, which is unique, and updated/refreshed as many tiimes as I wanted

``` tag`same ${1} literal` === tag`same ${2} literal` ``` was the other A-HA moment I had to relate templates to their context. These are unique, by standard, and Babel transpiles them as unique too

imagining function tag(tpl, ...interpolations) { return tpl; } that's it, same template, unique identifier as same frozen Array

When I've realized I could then re-write the initial DBMonster table full of ugly hacks in such semantic way

https://github.com/WebReflection/hyperHTML/blob/master/test/dbmonster.html#L25-L57

I've realized I was into something interesting, something new, something to improve in terms of usability but already promising and blazing fast

live demo here: https://webreflection.github.io/hyperHTML/test/dbmonster.html
- - -

<sub><sup>[13:14]</sup></sub> **Elarcis**

thanks, I was going to ask about it
- - -

<sub><sup>[13:14]</sup></sub> **webreflection**

that's it, that's how hyperHTML was born
- - -

<sub><sup>[13:14]</sup></sub> **@icebox**

nice recap and thanks for the details

any question about this topic?

well... those details introduce the 2nd topic... standards as platform
- - -

<sub><sup>[13:15]</sup></sub> **Elarcis**

writing my question
- - -

<sub><sup>[13:16]</sup></sub> **@icebox**

Elarcis: ah ok...

Elarcis: go ahead
- - -

<sub><sup>[13:17]</sup></sub> **Elarcis**

webreflection: if I may ask a question, the idea is in itself simple but the execution is clever, do you have any idea why it hadn’t be done before? was it a discovery waiting to be made, would other developers deem it "too basic" and not investigate? or as you described it, it was a lucky "A-HA" moment?
- - -

<sub><sup>[13:18]</sup></sub> **webreflection**

to every developer I've talked to in those days, nobody knew that the template part of the signature of a tag function was unique

that was the key to relate a template, ragardless of its interpolations, to a context, part of the function "hidden signature" itself
- - -

<sub><sup>[13:19]</sup></sub> **@icebox**

indeed that is counter-intuitive, but after you know it, it does make sense
- - -

<sub><sup>[13:19]</sup></sub> **webreflection**

no other library made this connection/association before, and it was discovered by me just hacking around trying to relate those info

as soon as I've shown its potentials though, others try to follow with a similar approach (e.g. lit-html 6 months later)

lit-html is out of the Polymer team/project, which connect what I've said until now to the next topic indeed: standards as platform

let me start saying one thing:

I used to be an ActionScript developer, but then I took an arrow to the knee.
- - -

<sub><sup>[13:20]</sup></sub> **@icebox**

:)
- - -

<sub><sup>[13:20]</sup></sub> **Pyrrhus666**

webreflection, this uniqueness, is that ´per spec´, or a lucky coincidence of the implementation ? (sorry if that should be obvious)
- - -

<sub><sup>[13:21]</sup></sub> **Elarcis**

:D
- - -

<sub><sup>[13:21]</sup></sub> **webreflection**

Pyrrhus666 is per spec
- - -

<sub><sup>[13:21]</sup></sub> **Pyrrhus666**

thankfully :)
- - -

<sub><sup>[13:21]</sup></sub> **Elarcis**

It would be ironic that sticking to standards as you do, you’d use an implementation side-effect :D
- - -

<sub><sup>[13:21]</sup></sub> **webreflection**

every engine but Firefox less than 54 got it right and Babel transpiles it right too, so it works down to IE9 or Babel targets
- - -

<sub><sup>[13:21]</sup></sub> **Pyrrhus666**

still trying to grasp the gist you posted.
- - -

<sub><sup>[13:22]</sup></sub> **webreflection**

it's there, no need to grasp it now ;-)
- - -

<sub><sup>[13:22]</sup></sub> **Elarcis**

haha
- - -

<sub><sup>[13:22]</sup></sub> **Pyrrhus666**

I know :)
- - -

<sub><sup>[13:22]</sup></sub> **@icebox**

there is a nice comparison with lit-html https://gist.github.com/WebReflection/fadcc419f5ccaae92bc167d8ff5c611b
- - -

<sub><sup>[13:22]</sup></sub> **webreflection**

I also have a better / more gradual presentation smewhere, I'll try to post it later

icebox, stop distracting everyone :D
- - -

<sub><sup>[13:22]</sup></sub> **@icebox**

yes, sir :)

webreflection: why standards are so important in a world dominated  by transpilers and bundlers?
- - -

<sub><sup>[13:24]</sup></sub> **webreflection**

so, well, I like standards because every time I've bet for non-standards I've found myself starting from scratch, like in the ActionScript case. Crapberry on top, my good old AS1 swf demos stopped working after a major Flash update so even backward compatibility was lost.

Every time I worked with standards, I was sure the product would've lasted for years, and that's indeed the case beside few notable exception
- - -

<sub><sup>[13:25]</sup></sub> **@icebox**

yep but it seems transpilers, or new laguages, like Typescript, mitigate that effect
- - -

<sub><sup>[13:25]</sup></sub> **webreflection**

The biggest one that hit me the worst has been abandoning WebSQL ... that was the first time I've bet in a standard that actually got removed and required me maintain ing the old code

transpilers are one thing, new languages are way different
- - -

<sub><sup>[13:26]</sup></sub> **@icebox**

I am afraid this topic is quite opinionated... what is your vision?
- - -

<sub><sup>[13:27]</sup></sub> **webreflection**

take CoffeeScript as example, there are few "die hard" around, but once ECMAScript started evolving there was almost no reason to stick with it

so, few developers did take the time to learn a new non standard language, and after 2 years needed time to learn new parts of the JavaScript they left behind

i've been sitting comfortable in the standard JS side for 18+ years and never a single time regret that: performance when I need? check! Compatibility? Check. IDE / tooling support? Check (well, whatever is there)
- - -

<sub><sup>[13:29]</sup></sub> **Elarcis**

webreflection: fair point
- - -

<sub><sup>[13:29]</sup></sub> **@icebox**

feel free to ask questions, please :)
- - -

<sub><sup>[13:29]</sup></sub> **webreflection**

transpilers instead brought earlier standards to every browser, in an era evergreen browsers where not the majority

if used moderately, transpilers are an awesome resource. Before going down this hole though, if you have questions about "why standards" please ask
- - -

<sub><sup>[13:32]</sup></sub> **Pyrrhus666**

as a child of the great browser wars, I´m still wary of standards, but I concur that things have improved.
- - -

<sub><sup>[13:32]</sup></sub> **webreflection**

worth mentioning that without counter/non-standards proposals idea, standards would be less prone to change/adapt/improve so I'm actually happy there's always somebody with a different, maybe better, idea
- - -

<sub><sup>[13:32]</sup></sub> **Pyrrhus666**

do you see any difference between TS (selling itself as a superset of ES) or, e.g., clojurescript ?
- - -

<sub><sup>[13:34]</sup></sub> **webreflection**

different targets, constrains, also different experience for developers. I know few TS caveats that kept me far away from it, and I wouldn't be as fast and confident with clojurescript. Did I say I never regret that I stick with JS ? :-)

I've seen languages and tools fading away, yet the core language I use to develop is still there. This is valuable, specially for me. I'm old and learn slower than daily developers around me
- - -

<sub><sup>[13:35]</sup></sub> **@icebox**

webreflection: my point about TS is the following one... and for large projects? why not? it seems a valid help
- - -

<sub><sup>[13:35]</sup></sub> **webreflection**

flowtype is a valid help too, with sugar for the IDE that will be removed, and pretty much nothing that will be different from what you expect

Even MS Core IDE got extremely helpful with inferred types though, so sometimes the "large project" issue seems to be overrated. I've worked in very large projects too and types were the least of our problems

but that's just my experience, I know many others would feel lost or less confident without types around, which I understand, but not my scriptish cup of tea
- - -

<sub><sup>[13:37]</sup></sub> **Pyrrhus666**

I´m probably of your generation, but I´m a pragmatic coder. yes, languages and frameworks come and go, but the stuff I make isn´t  built to last more than 5 years, usually. so I tend to go with the flow (sic)
- - -

<sub><sup>[13:38]</sup></sub> **@icebox**

agreed... but nowadays the company prefer hiring young programmers thinking types and ides give them super powers
- - -

<sub><sup>[13:38]</sup></sub> **webreflection**

if you are happy there, stay there. I'm happy with JS, but not everyone is

funny because every company that contacts me usually writes stuff like: "it's very hard these days to find someone that actually knows JS for real"
- - -

<sub><sup>[13:39]</sup></sub> **@icebox**

ah... that is nice to know
- - -

<sub><sup>[13:39]</sup></sub> **webreflection**

but yeah, there are many offers around react, typescript, angular too

if they would hire me for React I wouldn't be any more valuable than the average beginner, and I will try to sneak in hyperHTML instead at day #1
- - -

<sub><sup>[13:40]</sup></sub> **@icebox**

next topic?
- - -

<sub><sup>[13:40]</sup></sub> **Pyrrhus666**

go for it
- - -

<sub><sup>[13:40]</sup></sub> **@icebox**

The are a lot of "standards" for the modules (amd, umd, cjs, esm...) used in different contexts (browser and Node.js)... It seems we have a legacy heritage to harmonize and fragmentation to manage: really the task seems very complex
- - -

<sub><sup>[13:40]</sup></sub> **webreflection**

I like those double quotes around "standards" because indeed there is only *one* JavaScript standard when it comes to modules and that's ESM (ECMAScript Module).
- - -

<sub><sup>[13:40]</sup></sub> **@icebox**

You are member of Node.js Modules Team... What is the state of art and what is your proposal?
- - -

<sub><sup>[13:41]</sup></sub> **webreflection**

quick reference back: transpilers can be awesome, but also unreliable or an escapeless lock-in.

unreliable when it comes to expectations (i.e. native extends in Babel have been broken 'till version 7)
- - -

<sub><sup>[13:41]</sup></sub> **@icebox**

(that is my main afraid)
- - -

<sub><sup>[13:42]</sup></sub> **webreflection**

escapeless because once there is a huge code base around features not even fully implemented yet, it's a problem to move away from these

which is why sane developers suggest to never adopt features that are not at least in stage 3, but then there are cases, like modules, that got prematurely adopted and caused a little mess

Indeed "thanks" to transpilers, bundlers, and premature adoption of a standard not fully finalized yet, we've trapped ourselves behind the "what am I loading? CJS or ESM?" curse, which is the reason there is a team of about 40 developers trying to solve and address all possible related issues.

This evening there will be first international meeting about the current status, but more or less it can be summarized as such:

  * the `.mjs` extension might be used to disambiguate within hybrid/commonjs packages

  * packages can be published as ESM to avoid any possible ambiguity and keep using `.js` files (my favorite option)

  * there will be (hopefully soon) a flag to start any node application as module/ESM like it's possible already in browsers via `<script type=module>` and in both SpiderMonkey or JavaScriptCore via the `-m` flag.

AFAIK the ideal goal of the modules team is to pave a graceful migration pattern with different options so that developers can pick their favorite way to migrate and bundlers can also benefit from all these hints (extension, flags, package field).
- - -

<sub><sup>[13:45]</sup></sub> **@icebox**

it seems a lot of work
- - -

<sub><sup>[13:45]</sup></sub> **webreflection**

the biggest problem is to make core code, developers, and users agree on a result that works for everyone
- - -

<sub><sup>[13:46]</sup></sub> **@icebox**

webreflection: this burden touches only lib publishers or also the users?
- - -

<sub><sup>[13:46]</sup></sub> **webreflection**

if we all were on the same line, modules would've been a 5 minutes task to talk about: "we used to do this, now we can do also this to use ESM like in browsers"

that's not the case, so much disagreement within the community itself

lib publishers need to be aware of possibility they have to ... publish

the dual module is one way to go
- - -

<sub><sup>[13:47]</sup></sub> **@icebox**

at last hyperHTML is published in three flavors
- - -

<sub><sup>[13:47]</sup></sub> **webreflection**

So, it's for sure that for quite some time, CJS will be still around, and ESM + CJS modules will also be quite common (most of my recent projects is published as dual module)
- - -

<sub><sup>[13:48]</sup></sub> **@icebox**

and UMD
- - -

<sub><sup>[13:48]</sup></sub> **webreflection**

hyperHTML has actually 4 flavors
- - -

<sub><sup>[13:48]</sup></sub> **@icebox**

ESM, CJS, UMD and CDN?
- - -

<sub><sup>[13:48]</sup></sub> **webreflection**

yes, and none of them works as expected when bundlers try to transpile it regardless there should be no reason

but that's because bundlers decide that the *browser* field of a package.json is for bundlers, instead of browsers

I use that field to let unpkg.com CDN deliver my pre-bundled version of the library

https://unpkg.com/hyperhtml
- - -

<sub><sup>[13:49]</sup></sub> **@icebox**

any question?
- - -

<sub><sup>[13:49]</sup></sub> **webreflection**

I just type this, and the pre-bundled, ES5 compatible, hyperHTML function is available for projects such Code Pen, or also pages that wouldn't care having a single hyperHTML entry as global

just to provide another example, HyperHTMLElement class is published also in various flavor, but the one I like the most is as ESM

https://unpkg.com/hyperhtml-element?module

this brings in automatically via unpkg.cdn feature the `import {...} from 'hyperhtml'`

transformed automatically in

import { Component, bind, define, hyper, wire } from 'https://unpkg.com/hyperhtml@^2.5.8/esm?module';

for modules publishers and library authors unpkg.cdn is the best thing ever
- - -

<sub><sup>[13:52]</sup></sub> **@icebox**

agreed... until you want to load locally the resources :)
- - -

<sub><sup>[13:52]</sup></sub> **webreflection**

the only complain I have is that is maintained by @mjackson which is an awesome developer but has the same initials of the extension I don't like: `.mjs`
- - -

<sub><sup>[13:52]</sup></sub> **@icebox**

ahahah
- - -

<sub><sup>[13:52]</sup></sub> **webreflection**

I can load locally the resources keeping projects on the same directory level

I could do this instead: import {...} from '../../hyperhtml' and bring it in from the outer folder

that case works in unpkg.cdn too because projects are all in the same folder/structure
- - -

<sub><sup>[13:53]</sup></sub> **@icebox**

I meant mixing libs with different flavors... you need something, usually a bundler, to mitigate the diffs
- - -

<sub><sup>[13:53]</sup></sub> **webreflection**

something I actually need to update about HyperHTMLElement code

yes, bundlers are the only way to go to publish production code
- - -

<sub><sup>[13:54]</sup></sub> **@icebox**

(sadly) I say

anyway last topic... performance...
- - -

<sub><sup>[13:54]</sup></sub> **webreflection**

I am not a huge fan of bundlers only when it comes to development ... I don't want to depend on bundlers to test teh code I've written the way I've written
- - -

<sub><sup>[13:54]</sup></sub> **Pyrrhus666**

slightly related maybe : how do you see the current state of the es ecosystem (wrt npm packages mostly) ? random breakage because of dependencies is a real big threat nowadays...
- - -

<sub><sup>[13:54]</sup></sub> **webreflection**

I have ~5 minutes, I'll try to be as quick as possible
- - -

<sub><sup>[13:54]</sup></sub> **@icebox**

When do the benchmarks (for a framework) matter? Because the choice of a framework is not based (only) on its speed... What is the mean of keyed vs. non-keyed benchmarks?
- - -

<sub><sup>[13:54]</sup></sub> **Pyrrhus666**

oh, skip my q then, go on.
- - -

<sub><sup>[13:55]</sup></sub> **webreflection**

I'll answer this evening or via DM in twitter if you want ;-)
- - -

<sub><sup>[13:55]</sup></sub> **Elarcis**

I’m back! sorry, colleague asked me a question T_T
- - -

<sub><sup>[13:55]</sup></sub> **webreflection**

> When do the benchmarks (for a framework) matter?

When you have a performance issue to solve.

> What is the mean of keyed vs. non-keyed benchmarks?

imagine I have a list

`list = [{name: 'me', age: 39}, {name: 'js', age: 20}]`

now, using pseudo code I've previously written as common example, imagine you create this layout

https://paste.gnome.org/pozybhn8m

oh ... nice Polari, it created on the fly that for me

you have created a layout with `<LI>` strictly related to the object they represent. Now, if any other third parts script would interfere with those `<LI>` nodes, adding lsiteners, data attributes, or anything else not covered by the template operations, we might have a problem

The non-keyed version of any library will update, or trash and recreate, those nodes ... if these are already in the DOM, properties and content get updated

if these are not in the DOM, these get created but not related to the info these represent

if these are in the DOM but the list is finished, these get trashed

the moment you have a simple function like this

```js
const uid = ((wm, i) =>
  obj => wm.get(obj) || (wm.set(obj, ++i), i)
)(new WeakMap, 0);
```

to relate those objects, and the moment you sort objects by age

`list.sort((a, b) => a.age - b.age);`

performing again the same templating over those nodes will potentially cause a disaster: listeners and dataset properties have values related to other nodes/info/id (bound, arrows, etc)
- - -

<sub><sup>[14:00]</sup></sub> **Elarcis**

oh, indeed
- - -

<sub><sup>[14:00]</sup></sub> **@icebox**

webreflection: I think your time is over...
- - -

<sub><sup>[14:00]</sup></sub> **Elarcis**

noooo
- - -

<sub><sup>[14:00]</sup></sub> **webreflection**

`<LI>` elements already created to represent those objects need to be re-updated in all their perts, even if nothing changed in the object, only the order of those `<LI>`
- - -

<sub><sup>[14:00]</sup></sub> **Elarcis**

it was so short
- - -

<sub><sup>[14:01]</sup></sub> **@icebox**

Thank WebReflection for the time you spent speaking with us
- - -

<sub><sup>[14:01]</sup></sub> **webreflection**

well, I think if you understood how non keyed work, you might as well quickly get how keyed works
- - -

<sub><sup>[14:01]</sup></sub> **@icebox**

I think so

Thank #angularjs community for attending this event

We hope you had fun, and we look forward to seeing you at the next event
- - -

<sub><sup>[14:01]</sup></sub> **Elarcis**

webreflection: yeah, thank you fore clarifying it for me, I never really thought of it
- - -

<sub><sup>[14:01]</sup></sub> **@icebox**

hyperHTML site is https://viperhtml.js.org/

You can support hyperHTML and other WebReflection projects in Open Collective:  https://opencollective.com/webreflection
- - -

<sub><sup>[14:01]</sup></sub> **Elarcis**

icebox: very informative, thank you webreflection!
- - -

<sub><sup>[14:01]</sup></sub> **webreflection**

that ID, used as keyed=${uid} will relate each `<LI>` to the object with info it represents. That's hyperHTML by deafult if you "wire" an object to some content
- - -

<sub><sup>[14:02]</sup></sub> **Pyrrhus666**

thanks webreflection :)
- - -

<sub><sup>[14:02]</sup></sub> **webreflection**

Thank You all !!!
- - -

<sub><sup>[14:02]</sup></sub> **@icebox**

The log of the chat will be published on the site of #angularjs community http://ngirc.js.org/
- - -

<sub><sup>[14:02]</sup></sub> **webreflection**

my DM in twitter are open
- - -

<sub><sup>[14:02]</sup></sub> **@icebox**

So Long, and Thanks for All the Fish :P
- - -

<sub><sup>[14:02]</sup></sub> **webreflection**

I hope my 1 hour rant gave you something
- - -

<sub><sup>[14:02]</sup></sub> **@icebox**

thanks a lot
- - -

<sub><sup>[14:02]</sup></sub> **selckin**

was interesting, cheers
- - -

<sub><sup>[14:02]</sup></sub> **Elarcis**

webreflection: now you’re contractually obligated to use Angular 5 in your next project! MWAHAHA
- - -

<sub><sup>[14:03]</sup></sub> **webreflection**

:run-away:
- - -

<sub><sup>[14:03]</sup></sub> **Elarcis**

webreflection: it was really interesting, thank you :P
- - -

<sub><sup>[14:03]</sup></sub> **nnodot**

Thanks! I'll dig in the log. I've missed this AMA... Heard of it only 5 minutes before it's end... :-/
- - -
