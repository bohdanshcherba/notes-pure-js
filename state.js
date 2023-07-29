import {extractDatesFromText} from "./utils.js";

const mock_notes = [
    {
        id: 1,
        name: 'Note 1',
        created: new Date('2023-07-27'),
        category: 'Work',
        content: 'This is the content of Note 1.',
        dates: []
    },
    {
        id: 2,
        name: 'Note 2',
        created: new Date('2023-07-26'),
        category: 'Personal',
        content: 'This is the content of Note 2.',
        dates: ['2023-07-26']
    },
    {
        id: 3,
        name: 'Note 3',
        created: new Date('2023-07-25'),
        category: 'Study',
        content: 'This is the content of Note 3.',
        dates: []
    },
    {
        id: 4,
        name: 'Note 4',
        created: new Date('2023-07-24'),
        category: 'Work',
        content: 'This is the content of Note 4.',
        dates: []
    },
    {
        id: 5,
        name: 'Note 5',
        created: new Date('2023-07-23'),
        category: 'Personal',
        content: 'This is the content of Note 5.',
        dates: []
    },
    {
        id: 6,
        name: 'Note 6',
        created: new Date('2023-07-22'),
        category: 'Study',
        content: 'This is the content of Note 6.',
        dates: []
    },
    {
        id: 7,
        name: 'Note 7',
        created: new Date('2023-07-21'),
        category: 'Work',
        content: 'This is the content of Note 7.',
        dates: []
    },
]

export let notes = mock_notes

export const delete_note = (item) => {
    notes = notes.filter(i => i.id !== item.id);
}
export const add_note = ({name, category, content}) => {
    notes.push({
        id: Math.random(),
        name: name,
        created: new Date(),
        category: category,
        content: content,
        dates: extractDatesFromText(content)
    },)
}
