import fetch from 'node-fetch'

interface Email {
    message?: string
}

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

export default async function sendEmail({ message }: Email) {
    return await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
            personalizations: [
                {
                    to: [
                        {
                            email: 'loai.shaheen@gmail.com'
                        }
                    ],
                    subject: 'Consultation request'
                }
            ],
            from: {
                email: 'loai.shaheen@gmail.com@gmail.com',
                name: 'Estimate Request'
            },
            content: [
                {
                    type: 'text/html',
                    value: message
                }
            ]
        })
    });
}