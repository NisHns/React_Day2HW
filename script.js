const Top = document.getElementById("top");
const Mid1 = document.getElementById("mid1");
const Mid2 = document.getElementById("mid2");
const Mid3 = document.getElementById("mid3");
const Mid4 = document.getElementById("mid4");
const Mid5 = document.getElementById("mid5");
const Mid6 = document.getElementById("mid6");
const Foot = document.getElementById("foot");

const h1 = React.createElement('h1', {}, "Topics covered");

const p1 = React.createElement('p', {}, "The following is a list of all the topics we cover in the MDN learning area.");

const a1 = React.createElement('a', { href: "#", target: "blank" }, "Getting started with the web");

const p2 = React.createElement('p', {}, "Provides a practical introduction to web development for complete beginners.");

const a2 = React.createElement('a', { href: "#", target: "blank" }, "HTML-Structuring the web");

const p3 = React.createElement('p', {}, "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.");

const a3 = React.createElement('a', { href: "#", target: "blank" }, "CSS-Styling the web");

const p4 = React.createElement('p', {}, "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.");

ReactDOM.render(h1, Top);
ReactDOM.render(p1, Mid1);
ReactDOM.render(a1, Mid2);
ReactDOM.render(p2, Mid3);
ReactDOM.render(a2, Mid4);
ReactDOM.render(p3, Mid5);
ReactDOM.render(a3, Mid6);
ReactDOM.render(p4, Foot);
