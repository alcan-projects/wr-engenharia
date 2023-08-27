const ScrollBar = (direction) => {
    const element = document.getElementById("container_fluid");

    if(direction === "next") {
        element.scrollTop = element.scrollTop + element.clientHeight;
    }
    else if(direction === "back") {
        element.scrollTop = element.scrollTop - element.clientHeight;
    }
}