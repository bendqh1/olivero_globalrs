window.addEventListener('load', () => {

    // Create and append an element inside which a clone will appear

    document.body.insertAdjacentHTML('beforeend', `
        <aside class="cbwtphone_wrapper">
        </aside>
    `)

    // Clone an element

    const myClone = document.querySelector('.whatsapp_link').cloneNode(true);

    // Append the clone into the created-appended element above

    document.querySelector('.cbwtphone_wrapper').appendChild(myClone);

    // Remove sidebar image if there is an hero image for a webpage which is not the homepage

    if  (
        document.querySelector('#block-globalrs-content > div > article > div > div.text-content.clearfix.field.field--name-body.field--type-text-with-summary.field--label-hidden.field__item > img')
        ) {
        document.querySelector('.region--sidebar .block:first-of-type:has(img)').remove();
    };

});