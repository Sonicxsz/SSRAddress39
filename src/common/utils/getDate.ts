import { FormEvent } from "react";

export function getDateToday(isFuture = 1) {
    const currentTime = new Date();
    let year = currentTime.getFullYear();
    let month = currentTime.getMonth() + isFuture;
    let day = currentTime.getDate();
    if (month === 13) {
        return `${year + 1}-${'01'}-${15}`;
    } else {
        return `${year}-${month}-${day}`;
    }
}

export async function formSend(e:FormEvent, data:any) {
    e.preventDefault();
    console.log(data);
    const response = await fetch('send.php', {
        method: 'POST',
        body: data,
    });
    console.log(response);
}
