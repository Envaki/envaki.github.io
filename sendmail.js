const TOKEN = '5869058937:AAH3kWPtduDnGYMHn6seheAUA4byi1UvWm4';
const CHAT_ID = '-1001893740855';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.querySelector('.success');
const send = document.querySelector('#send');

document.querySelector('#zakazform').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let message = '<b> Заявка з сайта</b> \n';

    message += `<b> Замовник:</b> ${this.name.value}` + ' ' + `${this.lastname.value}\n`;
   // message += `<b> Last name:</b> ${this.lastname.value} \n`;
    message += `<b> Email:</b> ${this.email.value} \n`;
    message += `<b> Послуга:</b> ${this.select.value} \n`;
    message += `<b> Telephone:</b> ${this.tel.value} \n`;
    message += `<b> Text:</b> ${this.Message.value} \n`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = "";
        this.lastname.value = "";
        this.email.value = "";
        this.select.value = "";
        this.tel.value = "";
        this.Message.value = "";
        success.style.display = 'block';
        send.style.display = 'none';
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(()=>{
        console.log('Конец');
    })
})