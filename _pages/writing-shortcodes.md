---
layout:    page
title:     Using Shortcodes
permalink: /writing/shortcodes/
---

[p--markdown]: {{ site.baseurl }}/writing/markdown

One of the biggest reasons we use [Markdown][p--markdown] to write content on the website is because it helps really separate the _content_ you're writing from the _layout_ that displays it, which helps you focus on writing content and writing it well. Sometimes, though, you need just a little bit of control over how your content is being displayed. That's where shortcodes come in.

-----

## What are shortcodes?

[I already know what they are, show me the ones I can use.](#shortcodes)

If you aren't familiar with what shortcodes are or how they work, they are simple tags that you write into your content that represent a piece of layout—a box, a button, etc. When WordPress converts your Markdown content into HTML, it detects these shortcode tags, processes them and turns them into specifically formatted code.

Take the following shortcode for example:

{% highlight plaintext %}
[box color="red"]
This text is in a box.
[/box]
{% endhighlight %}

When rendered, this might produce something like:

<div style="background:#fff4f4;border:2px solid #cc3333;padding:6px 9px">
    <p>This text is in a box.</p>
</div>

-----

## Available shortcodes {#shortcodes}

The **New Orleans** theme provides a few useful shortcodes for you to use:

[Buttons](#sc-button) \| [Grids](#sc-grid) \| [Images](#sc-image)

-----

### Buttons — `[btn]` {#sc-button}

Creates links that are styled as buttons, allowing you to emphasize specific calls to action in your content.

#### Example

{% include example/start.html %}
{% highlight plaintext %}
[btn color="success" href="http://google.com"]Click Here[/btn]
{% endhighlight %}       
{% include example/mid.html %}
![]({{ site.baseurl }}/images/sc-button.png)  
_(Screenshot taken from site)_
{% include example/end.html %}

#### Attributes

Name    | Default   | Description
--------|-----------|---------------------------------------------------------------------------
href    | —         | **Required.** The URL the button should link to.
color   | `default` | The button color. You can choose any of the theme colors.
outline | `false`   | Styles the button in reverse—uses a transparent background and uses the supplied color for the border and text.
size    | —         | Adjusts the size of the button. Possible choices are `xs`, `sm` and `lg`. Omit this option to use the default size.

-----

### Grid display — `[row]` and `[col]` {#sc-grid}

The row and column shortcodes allow you to create a system of grid-style containers and display content in them. The width of the page is split into **12** single columns; the total width of all the columns in a row should be less than or equal to 12.

#### Example

{% include example/start.html %}
{% highlight plaintext %}
[row]
[col width="8"]

This container is _eight_ columns wide. Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Suspendisse pharetra mauris eu diam
pulvinar, bibendum scelerisque lorem mattis. Nunc fringilla tellus
eu nisi elementum iaculis. Mauris pulvinar risus justo, ac maximus
libero convallis a. Aliquam enim ex, faucibus quis dui tempor,
consequat scelerisque neque.

[/col]
[col width="4"]

This container is _four_ columns wide. Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Vestibulum vitae vulputate ipsum.
Sed lectus augue, posuere molestie interdum in, maximus quis leo.
Donec vel turpis interdum nunc rutrum finibus.

[/col]
[/row]
{% endhighlight %}
{% include example/mid.html %}
![]({{ '/images/sc-grid.png' | prepend: site.baseurl }})
_(Screenshot taken from site)_
{% include example/end.html %}

#### Attributes

-----

### Images — `[image]` {#sc-image}
