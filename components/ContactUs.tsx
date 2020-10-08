import React from 'react'
import Head from 'next/head';

interface ContactProps {
    styles?: string
}

interface ContactState {
    error: string
}

export default class ContactUs extends React.Component<ContactProps, ContactState> {
    private firstName: string
    private lastName: string
    private email: string
    private phoneNumber: string
    private message: string

    constructor(props) {
        super(props)

        this.state = {
            error: ''
        }
    }

    validate() {
        if (this.firstName === undefined || this.lastName === undefined || this.email === undefined) {
            this.setState({ error: 'Please make sure the first name, last name, and email fields are filled out' })
            return -1
        }

        if (this.message === undefined) {
            this.setState({ error: 'Please fill out the message field with a brief description' })
            return -2
        }

        this.setState({ error: '' })
        return 0
    }

    sendMessage = () => {
        if (this.validate() != 0) {
            return
        }

        const message = `
        <div style="font-family: inherit"><span style="font-size: 18px; font-family: tahoma,geneva,sans-serif">Name: ${this.firstName} ${this.lastName}</span></div>
        <div style="font-family: inherit"><span style="font-size: 18px; font-family: tahoma,geneva,sans-serif">Email: ${this.email}</span></div>
        <div style="font-family: inherit"><span style="font-size: 18px; font-family: tahoma,geneva,sans-serif">Phone number: ${this.phoneNumber == undefined ? 'Not Provided' : this.phoneNumber}</span></div>
        <div style="font-family: inherit"><span style="font-size: 18px; font-family: tahoma,geneva,sans-serif">Message: ${this.message == undefined ? 'Not Provided' : this.message}</span></div>
        `

        fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });

        this.setState({ error: 'Message Sent' })
    }

    render() {
        return (
            <div className="bg-transparent py-24 px-4 lg:h-full overflow-hidden bg-orange-3 sm:px-6 lg:px-8 mt-8">
                <div className="relative max-w-xl mx-auto lg:h-full">
                    <div className="text-center">
                        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
                            Get In Touch
                        </h2>
                    </div>
                    <div className="mt-12">
                        <form action="#" method="POST" className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8" >
                            <div>
                                <label htmlFor="first_name" className="block text-sm font-medium leading-5 text-gray-800">First name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="first_name" onChange={({ target: { value } }) => this.firstName = value} className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 border" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block text-sm font-medium leading-5 text-gray-800">Last name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="last_name" onChange={({ target: { value } }) => this.lastName = value} className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 border" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-800">Email</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="email" type="email" onChange={({ target: { value } }) => this.email = value} className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 border" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone_number" className="block text-sm font-medium leading-5 text-gray-800">Phone Number</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="phone_number" onChange={({ target: { value } }) => this.phoneNumber = value} className="form-input py-3 px-4 block w-full transition ease-in-out duration-150 border" placeholder="+1 (555) 987-6543" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium leading-5 text-gray-800">Message</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <textarea id="message" rows={4} onChange={({ target: { value } }) => this.message = value} className="form-textarea resize-none py-3 px-4 block w-full transition ease-in-out duration-150 border" placeholder="A small description of what you're looking for"></textarea>
                                </div>
                            </div>
                            {
                                this.state.error === '' ? null : (
                                    <div className="sm:col-span-2  text-center">
                                        <a className="mr-4 text-base leading-6 font-medium text-red-500">
                                            {this.state.error}
                                        </a>
                                    </div>
                                )
                            }
                            <div className="sm:col-span-2 align-center">
                                <span className="w-full inline-flex rounded-md shadow-sm">
                                    <button type="button" onClick={this.sendMessage} className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-800 bg-gray-400 hover:bg-gray-300 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                        Send
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <div className="flex flex-row pl-2 pt-10 text-gray-900 text-3xl">
                                <i className="fas fa-phone" />
                                <h2 className="text-gray-900 text-2xl leading-8 pl-4"> 519 500 2506</h2>
                            </div>
                            <div className="flex flex-row pl-2 pt-8 text-gray-900 text-3xl">
                                <i className="fas fa-envelope"></i>
                                <h2 className="text-gray-900 text-2xl leading-8 pl-4"> qsh.legal@gmail.com</h2>
                            </div>
                        </div>
                        <div className="flex flex-col pl-40 pt-10 text-gray-900 space-y-2 text-5xl">
                            <i onClick={() => window.open("https://www.facebook.com/shaheenparalegalservices", "_blank")} className="fab fa-facebook-square"></i>
                            <i onClick={() => window.open("https://www.linkedin.com/in/qusai-shaheen-874b18139/", "_blank")} className="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}