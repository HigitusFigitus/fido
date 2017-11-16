'use strict';

module.exports = (url) => {
    const attachment = {
        fallback: 'A random image of a cute doggo.',
        color: '#3366ff',
        title: 'Here\'s a cute ' + url.split('/')[5] + '!',
        title_link: url,
        image_url: url,
        thumb_url: url,
        footer: 'Brought to you by Fido',
        footer_icon: 'https://i.pinimg.com/originals/c5/89/19/c589199b232461921c479b2fcb32d7a2.jpg'
    }

    const response = {
        attachments: [attachment]
    }

    return response;
}