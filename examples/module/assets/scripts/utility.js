function select(selector, parent = document) {
    return parent.querySelector(selector)
}

function selectAll(selector, parent = document){
    return [...parent.querySelectorAll(selector)]

}

export {select, selectAll}

export default 'hello, modules.'