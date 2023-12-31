

import {render_table, render_table_categories} from "./table.js";
import {add_note, categories, notes} from "./state.js";
import {open_modal} from "./modal.js";

render_table(notes)


const add_btn = document.querySelector('.add_note_btn')

add_btn.addEventListener('click', () => {
    open_modal({
        onSave:(name, content, category)=>{
            add_note({name, content, category})
            render_table(notes)
        }
    })
})





