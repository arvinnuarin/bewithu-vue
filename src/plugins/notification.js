/*=========================================================================================
  File Name: notification.js
  Description: Display Toast Notification Plugin
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

const notification = (type, title, desc) => {
    
    let payload = type === 'success' ? { title:title, text: desc, color:'primary',
        iconPack: 'feather', icon:'icon-check-circle', time: 4000 } : { title: title, text: desc, color: 'danger',
        iconPack: 'feather', icon:'icon-alert-circle', time: 4000 };

    window.$v.$vs.notify(payload);
}

export default notification;