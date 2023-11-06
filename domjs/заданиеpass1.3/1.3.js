const node_for_click = document.getElementById("for_click")
function find_edit() {
    const div3 = document.getElementsByTagName ('div')[3]
    console.log(div3.innerText)
    div3.innerText = 'Belyaev'

    const div4 = document.getElementsByTagName ('div')[4]
    console.log(div4.innerText)
    div4.innerText = 'Artyom'

    const div5 = document.getElementsByTagName ('div')[5]
    console.log(div5.innerText)
    div5.innerText = 'Sergeevich'
}
node_for_click.addEventListener("click", find_edit)