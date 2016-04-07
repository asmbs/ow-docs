---
layout:    page
title:     Using Markdown
permalink: /writing/markdown/
---

[commonmark]:          http://commonmark.org
[commonmark-ref]:      http://commonmark.org/help/
[commonmark-tutorial]: http://commonmark.org/help/tutorial/
[commonmark-demo]:     http://spec.commonmark.org/dingus/


[Skip to the cheatsheet](#cheatsheet)

If you edited content on last year's site, you're probably already familiar with Markdown. If not, the [CommonMark][commonmark] organization (the group that maintains the official Markdown standard) does a great job of introducing it:

> Markdown is a simple way to format text that looks great on any device. It doesn’t do anything fancy like change the font size, color, or type — just the essentials, using keyboard symbols you already know.  

Put another way, Markdown **is not** a programming language or syntax. It **is** a _method for writing plain text_ to convey things like emphasis, heading hierarchy and linking with simple symbols instead of code. For example, you can wrap text in \_an underscore\_ to denote _emphasis in italics_, or you can use \*\*two asterisks\*\* to denote **emphasis in bold**.

The [CommonMark][commonmark] site includes a lot of great resources to help you learn to write using Markdown, linked below. We've also provided a simple cheatsheet to help get you started.

-----

**CommonMark Resources:**  
[Reference Sheet][commonmark-ref] |
[Interactive Tutorial][commonmark-tutorial] |
[Parsing Demo][commonmark-demo]

-----

## Cheatsheet {#cheatsheet}

-----

### The Basics

{% include example/start.html %}
{% highlight plaintext %}
Separate paragraphs by a single blank line.

This is a new paragraph.

Use _one underscore_ for italic text.  
Use **two asterisks** for bold text.

-----

Use three or more hyphens or asterisks, with a blank line above and
below, to denote a horizontal rule.
{% endhighlight %}
{% include example/mid.html %}
Separate paragraphs by a single blank line.

This is a new paragraph.

Use _one underscore_ for italic text.  
Use **two asterisks** for bold text.

-----

Use three or more hyphens or asterisks, with a blank line above and
below, to denote a horizontal rule.
{% include example/end.html %}

-----

### Headings

{% include example/start.html %}
{% highlight plaintext %}
Hashes (#) at the beginning of a line denote a heading. Use 1-6 hashes
for the corresponding heading level.

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
{% endhighlight %}
{% include example/mid.html %}
Hashes (#) at the beginning of a line denote a heading. Use 1-6 hashes
for the corresponding heading level.

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
{% include example/end.html %}

-----

### Links

{% include example/start.html %}
{% highlight plaintext %}
Here is a [regular inline link](http://google.com). The link display
text is placed in brackets, and the URL is placed in parentheses
immediately after the brackets.

This is a [reference-style link][ref]. You can use a reference
identifier (here "ref") in brackets instead of the full URL in
parentheses. As long as that reference is defined (see below)
_anywhere_ in the document, the link will be created.

[ref]: http://google.com
{% endhighlight %}
{% include example/mid.html %}
Here is a [regular inline link](http://google.com). The link display
text is placed in brackets, and the URL is placed in parentheses
immediately after the brackets.

This is a [reference-style link][ref]. You can use a reference
identifier in brackets instead of the full URL in parentheses.
As long as that reference is defined _anywhere_ in the document,
the link will be created.

[ref]: http://google.com
{% include example/end.html %}

-----

### Lists

{% include example/start.html %}
{% highlight plaintext %}
## Ordered Lists

1. Item one. Numbers must be followed by a period, not another
   character.
2. Item two.
3. Item three.

## Unordered lists

- Item one. Unordered lists can use a hyphen (-) or an
  asterisk(*) to mark items.
* Item two.
* Item three.

{% endhighlight %}
{% include example/mid.html %}
## Ordered lists

1. Item one. Numbers must be followed by a period, not another
   character.
2. Item two.
3. Item three.

## Unordered lists

- Item one. Unordered lists can use a hyphen (-) or an
  asterisk(*) to mark items.
* Item two.
- Item three.
{% include example/end.html %}
