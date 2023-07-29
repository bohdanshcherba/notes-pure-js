import {categories} from "./state.js";


export const open_modal = (
    {
        name_field = '',
        content_field = '',
        category_field = '',
        onSave = (name, content, category) => {}
    }
) => {

    const modal_select = document.querySelector('#category')
    const modal = document.querySelector('.modal')
    const modal_save_btn = document.querySelector('#save_btn')


    modal.classList.remove('visible')
    modal_select.innerHTML = ''
    categories.map((category) => {
        const item = document.createElement('option')
        item.textContent = category.name
        modal_select.appendChild(item)
    })

    modal.children[1].value = name_field
    modal.children[3].value = content_field
    modal.children[4].children[1].value = category_field

    const onClick = () => {
        const name = modal.children[1].value
        const content = modal.children[3].value
        const category = modal.children[4].children[1].value

        if (name !== '') {

            onSave(name, content, category)

            modal.children[1].value = ''
            modal.children[3].value = ''
            modal.classList.add('visible')
        }
        modal_save_btn.removeEventListener('click',onClick)
    }

    modal_save_btn.addEventListener('click', onClick)



}
