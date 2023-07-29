const mock_categories = [
    {
        id: 1,
        name: 'Work',
        count_active: 2,
        count_archived: 1
    },
    {
        id: 2,
        name: 'Personal',
        count_active: 1,
        count_archived: 1
    },
    {
        id: 3,
        name: 'Study',
        count_active: 1,
        count_archived: 2
    },

];

import {render_table} from "./table.js";
import {add_note, notes} from "./state.js";

render_table(notes)

const modal_select = document.querySelector('#category')
const modal = document.querySelector('.modal')
const modal_save_btn = document.querySelector('#save_btn')

mock_categories.map((category) => {
    const item = document.createElement('option')
    item.textContent = category.name
    modal_select.appendChild(item)
})


const add_btn = document.querySelector('.add_note_btn')


add_btn.addEventListener('click', () => {
    modal.classList.remove('visible')
})

modal_save_btn.addEventListener('click', () => {
    const name = modal.children[1].value
    const content = modal.children[3].value
    const category = modal.children[4].children[1].value

    if (name !== '') {
        add_note({name, category, content})
        render_table(notes)
        modal.children[1].value = ''
        modal.children[3].value = ''
        modal.classList.add('visible')
    }
})



