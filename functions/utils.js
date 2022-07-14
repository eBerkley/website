const path = require("path");
const fs = require("fs");

const list = [
  { name: "accessibility", title: "Accessibility" },
  { name: "styling", title: "Styling" },
  { name: "technical-decisions", title: "Technical Decisions" },
  { name: "additional-documentation", title: "Additional Documentation" },
];

const data = {
  home: {
    name: "home",
    title: "Welcome to my Website!",
    summary: [
      "This website was designed to showcase my knowledge and capabilities when it comes to web development. The content found inside is designed to serve as the code documentation itself, which allows users to both read about the design decisions made and see the outcome in real time.",
    ],
    content: [
      {
        section: "overall-design",
        title: "Overall Design",
        content: [
          "This website was built using the 'create-react-app' framework, and uses the react-router library to be used as a single page application. All the actual content listed in each page is requested using Javascript's fetch api, and served using an api I have written using express.",
          "My goal for the application was to give it as clean and dynamic of a user interface as possible, without making sacrifices or compromises in accessibility. Every part of the website was designed to be as usable by an abled person using a full screen monitor as a visually impared person on their phone.",
          "Finally, and most importantly, I wanted to build something I could be proud of. Although while learning about web development I had built other applications, they were of a much smaller scope and were typically the result of following along with tutorials made to teach concepts like react itself. This website was made without the assistance of any guide or tutorial, and design decisions made are my own.",
        ],
      },
      {
        section: "further-reading",
        title: "Further Reading",
        content: [
          "As this landing page is only meant to serve as an introduction, documentation will primarily be found by clicking the 'articles' tab listed above. Articles are listed in alphabetical order alone, so feel free to browse as you see fit.",
          "Alternatively, the process of building this website from start to finish can be found in my public Github repository, shown in the icon above or in the side navbar, depending on platform.",
        ],
      },
    ],
  },
  index: {
    name: "index",
    title: "Articles Index",
    summary: [
      "This page is a placeholder for where articles would normally appear. If you are on a computer, you can find the list of articles on the left. If on mobile, press the 'See More...' button to open the navigation panel.",
    ],
    content: [
      {
        section: "get-started!",
        title: "Select an article from the sidebar to get started!",
        content: [],
      },
    ],
  },
  accessibility: {
    name: "accessibility",
    title: "Accessibility",
    summary: [
      "As said in the home page, one of my main goals was to design a clean and dynamic user interface without sacrificing accessibility. This required not only spending time making just one version of the website look good, but every single view, whether it was the desktop version, mobile version, or a screen reader.",
    ],
    content: [
      {
        section: "mobile-responsive-design",
        title: "Mobile / Responsive Design",
        content: [
          "Although mobile responsiveness is likely the single most common accessibility need, it is not hard to find websites who fail or neglect to ensure that mobile users can access their content in a simple manner. Content may overflow out of their containers and become unreadable, the top navbar may take up half the screen, and some content may just appear missing. To prevent these issues, I spent likely multiple hours in total with chrome's device toolbar open, fiddling with different sizes of devices while making small tweaks to ensure that everything worked exactly the way I wanted it to.",
          "The most noticeable design decision is the side nav bar that appears at screen sizes with low device widths. Although this component is always created regardless of device width, it only becomes available when needed, which helps to ensure it does not interfere with keyboard navigation. It can be opened using the button in the top navbar, and then closed by either removing focus from the navbar in any way, or pressing the escape key.",
          "In addition to the mobile view, there is also a layout change that occurs when there is no longer enough room for 2 side navbars but still enough room for one, which is referred to internally as tablet mode. Since all it does is reposition the 'in this article' section, it is certainly not the most groundbreaking change, but it does add a nice middle ground between mobile and monitor viewing.",
          "Also, although it is less important, if the application detects that the user's primary input method has no hover capability, such as a touchscreen, the github link button will always be expanded, ensuring users are capable of reading the text.",
        ],
      },
      {
        section: "keyboard-navigation",
        title: "Keyboard Navigation",
        content: [
          "Keyboard navigation could be needed for multiple reasons, most notably due to reduced mobility or screen reader usage, so I wanted to ensure that the website's layout was as straightforward as possible. As an added bonus, if the website detects the user is navigating with the tab button, a button is revealed that users can activate with the enter key to skip directly to the main content, allowing them to skip over the navigation links if they want.",
          "Additionally, regarding the mobile view's side navbar, focusing the element with the keyboard will automatically open the navbar, and removing focus will close it. Furthermore, although the mobile side nav bar is always created, I have ensured that it won't interfere with any sort of keyboard navigation or screen reading while not using a mobile view, therefore preventing the content inside from being accessed a second time.",
        ],
      },
      {
        section: "visibility",
        title: "Visibility",
        content: [
          "Since I already touched on screen readers a bit above, I thought I should also mention that the consistently high contrast text means that people with reduced visibility should have an easier time reading the text. I have also ensured that any element that signals to the reader what they are currently reading, have already read, and have not read yet are styled differently in both font color and decoration, which ensures colorblind users can interpret the text in the same way fully sighted ones can. Additionally, none of the text is small enough to strain the eye in any way.",
          "As an aside, although nearly every element on the page is capable of going through some sort of visible transition, since some users may experience discomfort due to the heightened motion, I have configured the css to disable animations if the user requests so.",
        ],
      },
    ],
  },
  styling: {
    name: "styling",
    title: "Styling",
    summary: [
      "Although with the somewhat limited color palette used there is not as much to talk about as there otherwise would be, I still had several decisions to make regarding how color was used throughout the website.",
    ],
    content: [
      {
        section: "navigation",
        title: "Navigation",
        content: [
          "The top navbar itself does not have a whole lot going on with it. A button to go to the landing page / articles page, a button that toggles between themes, and a link to the github repo. If the view width is thin enough to trigger the mobile view, then the theme button and github link are removed to ensure they can not overflow into the document.",
          "The 'Articles' sidenav is similarly simple, but the 'In This Article' is something I'm rather proud of. This is less to do with styling, and more to do with how it's done.",
          "A custom react hook using javascripts 'IntersectionObserver' api is used to watch all of the sections in the document, and when any of the sections become visible it sets a Map that contains a key value pair for all of the sections to true for that element. When it leaves the visible area, it is set to false. Then, the first section in the map is sent to the table of contents component and the corresponding tag is given the 'aria-current' value. From here, css is used to style the element using the 'aria-current' attribute selector, and every anchor tag after it is given a different style than the default using the general sibling combinator, '~', which matches every anchor tag that both descends from the same parent and comes after the a tag with the 'aria-current' selector.",
          "If you want to see the exact code used, the javascript can be seen in the files 'useFirstVisibleSection.js' and 'useImprovedToc.js' in the src/utils folder.",
        ],
      },
      {
        section: "content",
        title: "Content",
        content: [
          "Simplicity definitely drove just about all the decisions made regarding the styling of the main content, although it's really due to me not wanting to add anything unnecessary. Outside of each section heading's link styling, the only thing about them that deviates from default html styling is the primary/secondary theme colors used across the entire document. Black and white definitely is not the most creative, and there isn't anything going on besides text and headings, but I believed changing that would be overcomplicating something that should be simple.",
        ],
      },
      {
        section: "themes",
        title: "Themes",
        content: [
          "For the actual themes, although nearly every color used in the document is changed in some way, the colors stay similar with the exception of the foreground and background colors. The other theme colors correlate to the color used for focused links, the color used for links to content that have been viewed already, and the border colors for the section navigation. outside of these mostly static utility colors, there is just the foreground / background colors, and an unchanging color used for some borders.",
        ],
      },
    ],
  },
  "technical-decisions": {
    name: "technical-decisions",
    title: "Technical Decisions",
    summary: [
      "This is referring to decisions made regarding the actual code behind the website, rather than its functionality. As a reminder, all actual code can be found in the Github repository.",
    ],
    content: [
      {
        section: "react",
        title: "React",
        content: [
          "My decision to use the React framework was just due to it being what I had been using most recently. I certainly could have built an application using vanilla javascript, which is what I actually learned web development with, but thought it would be easier to build something from the ground up using React. As for making it a single page application, I wanted to experiment with the concept when it came to actual websites, because it is hard to get a feel for without making something without multiple links to visit.",
        ],
      },
      {
        section: "css",
        title: "CSS",
        content: [
          "The CSS I wrote for the app frequently relies on variables, most notably when it comes to colors. This is due to a couple things, most notably them being somewhat self documenting, much easier to edit in the event that something small needs to be tweaked, and more dynamic.",
          "The dynamism was especially appreciated when making the button that changes the websites theme, as the function called only has to change one attribute for the entire document, which is the 'html' element's class name. This is instead of anywhere between 2 to 5 attributes for most elements in the document if I edited their css directly.",
          "Additionally, the media queries used, such as most of the ones for the responsive design and the one that turns off transitions if requested, mostly change variables and are therefore only needed to be written once instead of once every time the value is used.",
        ],
      },
      {
        section: "class-naming",
        title: "Class Naming",
        content: [
          "I decided to name elements using the 'Block Element Modifier' convention, due to the fact that it made naming classes require much less thought and creativity on my part. Plus, it has the added benefit of making it easier to tell what each class name means, and where the element is located. Although it may not be the prettiest naming convention, it is semantic, which is in contrast to most modular solutions which append a hash to each class name.",
        ],
      },
      {
        section: "api-usage",
        title: "API Usage",
        content: [
          "Even though the website itself is a single page application, this website still relies on fetching data from a server to display content to the user. I believed it would be more realistic in that way, as typically websites similar to what this one is imitating would have no way of delivering every bit of content to the user upon loading the page.",
          "Instead, upon loading the page, a file is fetched that contains all the article's internal and external names. From there, each page visited results in that page's content being requested and sent. However, if they click a link that sends them to a page they are already on, the content should not be sent a second time, as it is already loaded internally.",
          "Because of this, theoretically it would not be hard to implement a system in which the user could opt in to saving all the articles saved internally, which would allow the site to be used fully offline after loaded. However, I deemed this outside the scope of this project.",
          "Finally, with the way the application requests the name of each article upon being loaded, this means it would not be necessary to change the code of the app itself to add / change content. The only exceptions to this are the homepage and article index page, due to the application knowing their internal names.",
        ],
      },
    ],
  },
  "additional-documentation": {
    name: "additional-documentation",
    title: "Additional Documentation",
    summary: [
      "Although the process itself has been somewhat documented in the 20+ commits the repo contains, I figured I should talk about some things in depth a little bit more, especially since some decisions and context were never fully given in the commits themselves.",
    ],
    content: [
      {
        section: "code-refactoring",
        title: "Code Refactoring",
        content: [
          "If you briefly look through the names of each commit, you will likely notice that many of them either directly say they contain refactoring, or allude to it in some way. This is due to me changing my mind on how I wanted to set up the routing of the application work. At the beginning of the project, most state was contained in a now deleted component named 'Article', which was rendered by another route, which was then rendered by yet another route.",
          "Once I realized that I had been putting most stateful operations way too deep in the component tree, I started to reorganize the project in a way that made more sense, including deleting the 'Article' component entirely. However, I did this in the middle of doing multiple other things, and I decided I should announce refactoring if done, no matter how small, just in case the project structure became hard to follow along to.",
        ],
      },
      {
        section: "overall-goal-setting",
        title: "Overall Goal Setting",
        content: [
          "Going into the project, although I was certain I was going to focus on making the site as responsive as possible, I realized responsiveness alone doesn't equal a fully fleshed out website. Knowing this, I decided pretty early on that I wanted most, if not all, of the sites 'content' to serve as the main documentation for the project, as it would both be a convenient location and much better than paragraph after paragraph of lorem ipsum.",
          "From here, I was able to focus most of my energy towards just assembling a basic responsive website, while occasionally adding some additional functionality, such as the changeable themes, dynamic table of contents, and having the content sent through an api as needed rather than it being sent alongside the website itself.",
        ],
      },
      {
        section: "deploying",
        title: "Deploying",
        content: [
          "Additionally, deploying the website with a fully fledged custom domain and an SSL certificate was on my mind well before starting the actual development of this website. Originally I planned on deploying to heroku, but upon seeing that obtaining an SSL certificate with a custom domain would be more difficult, I decided to use netlify instead. However, in doing so, I had to redo parts of the project due to netlify using serverless hosting and a static CDN.",
          "Although the setback did not last too long, I still ended up needing to change most of the backend as well as the location the api fetched data from. Thankfully. aside from this, the code I already had worked fine.",
        ],
      },
    ],
  },
};

function getResponse(page) {
  return data[page];
}

function getList() {
  return list;
}

module.exports = { getResponse, getList };
