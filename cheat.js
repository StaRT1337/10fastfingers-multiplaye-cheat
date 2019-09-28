/*
    10fastfingers multiplayer cheat.
    only works on 10ff.net and not on the conventional website.
    copy the code into the console only once the wait time finishes.
*/

const highlight = document.getElementsByClassName("highlight");
const input = document.getElementsByTagName("input")[0];
const event = new InputEvent("input", {data: "k"});

setInterval(() => {
    if (highlight.length > 0) {
        input.value = highlight[0].innerText + " ";
        input.dispatchEvent(event)
    }
});