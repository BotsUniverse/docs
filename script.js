// fill the 'href' for each and every link in table of contents
document.querySelectorAll(".listitem-link").forEach(
  (link) => {
    link.href = `#${link.innerHTML}`;
  }
)


// assign id to all the sub items with the child->bot-uname
document.querySelectorAll(".sub-item").forEach(
  (subContent) => {
    subContent.id = subContent.children[0].innerHTML;
  }
)