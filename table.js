import {delete_note, notes, update_note} from "./state.js";
import {open_modal} from "./modal.js";

const keys = ['name', 'created', 'category', 'content', 'dates']
const table = document.getElementsByClassName('content')[0]

const onEdit = (item) => {
    open_modal({
        name_field: item.name,
        content_field: item.content,
        category_field: item.category,
        onSave: (name, content, category) => {
            update_note({id: item.id, name, category, content, archived: item.archived})
            render_table(notes)
        }
    })
}

const onArchive = (item) => {
    update_note({...item, archived: !item.archived})
    render_table(notes)
}

const onDelete = (item) => {
    delete_note(item)
    render_table(notes)
}

const add_row = (item) => {

    const row = document.createElement('div')
    row.classList.add('row', 'table_row')
    if(item.archived ){
        row.classList.add('archived')

    }
    const ico = document.createElement('button')
    ico.classList.add('table_item', 'table_row_ico')
    ico.textContent = 'ico'

    row.appendChild(ico)
    keys.map(key => {
        const column = document.createElement('div')
        column.classList.add('table_item')
        if (key === 'created') {
            column.textContent = item[key].toLocaleDateString()
        } else {
            column.textContent = item[key]
        }

        row.appendChild(column)

    })
    const edit_btn = document.createElement('button')
    const archive_btn = document.createElement('button')
    const delete_btn = document.createElement('button')
    const btns = document.createElement('div')

    edit_btn.classList.add('table_item', 'nav_btn')
    edit_btn.textContent = 'edit'
    edit_btn.addEventListener('click', () => onEdit(item))

    archive_btn.classList.add('table_item', 'nav_btn')
    archive_btn.textContent = 'archive'
    archive_btn.addEventListener('click', () => onArchive(item))

    delete_btn.classList.add('table_item', 'nav_btn')
    delete_btn.textContent = 'delete'
    delete_btn.addEventListener('click', () => onDelete(item))

    btns.appendChild(edit_btn)
    btns.appendChild(archive_btn)
    btns.appendChild(delete_btn)
    btns.classList.add('table_item_navigation')

    row.appendChild(btns)

    table.appendChild(row)

    return item
}

export const render_table = (data) => {
    table.innerHTML = ''
    data.map((item) => {
        add_row(item)
    })

}
