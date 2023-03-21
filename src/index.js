// https://www.npmjs.com/package/wake_on_lan
const wol = require('wake_on_lan');

function wakeUp(mac, address, port = 9) {
    if(!mac) {
        return Promise.reject(new Error('mac不能为空'));
    } else if(!address) {
        return Promise.reject(new Error('address不能为空'));
    } else {
        return new Promise((resolve, reject) => {
            wol.wake(mac, {
                address,
                port
            }, err => {
                if (err) reject(err);
                else resolve();
            })
        })
    }
    
}

module.exports = wakeUp;