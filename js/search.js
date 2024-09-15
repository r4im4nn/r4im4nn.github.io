const SEARCH = document.querySelector('.input_search input'),
    TABLE_ROWS = document.querySelectorAll('tbody tr'),
    TABLE_HEADING = document.querySelectorAll('thead th');

SEARCH.addEventListener('input', searchInTable);

function searchInTable() {
    TABLE_ROWS.forEach((row, i) => {
        let TABLE_DATA = row.textContent.toLowerCase(),
            SEARCH_data = SEARCH.value.toLowerCase();

        row.classList.toggle('hide', TABLE_DATA.indexOf(SEARCH_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    })

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });
}

