# Falcon for OWL

<img width="120" src="assets/images/falcon-hd.png"></img>

Falcon immensely enhances the user experience on OWL. With Falcon, OWL loads over **65% faster** on average. Falcon also improves the visual layout of OWL (including styling of buttons, forms, etc.) Falcon operates completely on the front-end and has no connection to the back-end.

Falcon is available for install on the <a href="https://chrome.google.com/webstore/detail/falcon/cgmgdjmahmpdflojkflmlockjeagenmf">Chrome Web Store</a>, and is coming soon for Mozilla Firefox and Safari.

<img src="assets/images/overview.png">


# Features
Falcon enhances the OWL experience and offers many new features that are not available on OWL. Some of the features are highlighted below:

-----

### Dark Mode

<img src="/assets/images/dark mode.png"/>

-----

### Load pages without refreshing

When you navigate OWL, it will be much faster because a full refresh is not done every time you go to a new page. (This feature is disabled on Gradebook, Test/Quizzes, and Forum)

<img src="/assets/images/lightning fast pjax.png"/>

-----

### Edit course names

Especially useful when you're just starting a new semester, and you're not used to the course codes yet.

<img src="/assets/images/Custom course names.png"/>

-----

### Revamped Resources page

The new resources page is extremely fast and offers an instant file-browsing experience. No more full page refresh just to browse folders. And if for any reason you need to access the old resources system, you are just one click away.

<img src="/assets/images/new resources.png"/>

-----

### Powerful New Editor

Falcon includes a new editor which you can use to create flow charts, diagrams, and more. Each course gets its own editor and changes are saved instantly. You can also export your diagrams as PNG, JPG or SVG.

<img src="/assets/images/Falcon editor.png"/>

-----

### Instant Search & Sorting of Announcements, Assignments, etc

OWL offers sorting of announcements, assignments, etc. but it takes a *full* page refresh just to sort, making it an awful experience. Falcon sorts *instantly* while allowing you to search instantly. Falcon also allows you to search tables, too.

<img src="/assets/images/sort-and-search-tables.png?cachebust"/>


----
### Coming Soon: Lessen the initial page load

OWL currently has no checks in place to ensure that a resource is not loaded more than once. This results in many libraries and packages being requested multiple times. Falcon will soon resolve this issue.

----

Of course, the features listed here are the main features you can visually interact with / see on OWL. There are many minor enhancements to OWL itself that Falcon makes that improves the user experience. One of which is a more modern and updated look without taking away from the OWL you are familiar with.

# Installation
Falcon is available on the <a href="https://chrome.google.com/webstore/detail/falcon/cgmgdjmahmpdflojkflmlockjeagenmf">Chrome Web Store</a> for easy install.

You can also install it manually as well. It's pretty straight forward!

1. Clone or download this project as a Zip file, and extract it
2. Go to `chrome://extensions` and toggle on `Developer Mode` on the top right
3. On the same page, you should now see three new buttons. Click on the `Load unpacked` button and choose the extracted folder
4. That's it! Falcon is now running!

If there are any updates, then you will need to manually re-install it. However, once it's available on the Chrome store, updating Falcon is just like updating any other Chrome extensions.

# Security Notice
Falcon was built with security in mind. Using Falcon does not compromise the security of OWL. In fact, it enhances certain security elements of OWL, particularly in the case of POST-based browsing.

Falcon works on top of OWL, and it makes no external requests to any external endpoints (with the exception of asset files). Falcon also does not collect any inputs, form data, session data, or any other relevant information. You are free to inspect the source code!


# Run into issues?
If you run into any issues, then I'd really appreciate it if you could either create a <a href="https://github.com/RishabSwift/Falcon/issues"> new issue here </a> or email me at swift@hey.com.

If you encounter any issues that prevent you from using OWL normally, please disable or uninstall Falcon until it is fixed.


# Contribution
Feel free to fork it / create a pull request! If you have any questions, ideas, or concerns, please send them over to swift@hey.com or create a <a href="https://github.com/RishabSwift/Falcon/issues"> new issue </a>.


# License

MIT License

Copyright (c) 2021 RishabSwift

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
