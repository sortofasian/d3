import './Contact.scss'

import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormEvent, useState } from 'react'
const apiUrl = process.env.REACT_APP_API_URL

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [missing, setMissing] = useState({ name: false, email: false, message: false })

    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const nextMissing = { name: false, email: false, message: false }
        if (name.length === 0) nextMissing.name = true
        if (email.length === 0) nextMissing.email = true
        if (message.length === 0) nextMissing.message = true
        setMissing(nextMissing)

        if (Object.values(nextMissing).includes(true)) return

        setLoading(true)
        try {
            await fetch(`${apiUrl}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name, email: email, message: message })
            }).then((res) => res.json())
        } catch {
            setLoading(false)
        }
    }
    return (
        <form className='contact' onSubmit={handleSubmit}>
            <div
                className={`contact-missing ${
                    Object.values(missing).includes(true) ? 'missing' : ''
                }`}
            >
                Please complete highlighted fields
            </div>
            <div>
                <label>Name</label>
                <input
                    className={missing.name ? 'missing' : ''}
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <label>Email</label>
                <input
                    className={missing.email ? 'missing' : ''}
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className='contact-message'>
                <label>Message</label>
                <textarea
                    title='Message'
                    className={`${missing.message ? 'missing' : ''} message`}
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value)
                        e.target.style.height = 'auto'
                        e.target.style.height = e.target.scrollHeight + 'px'
                    }}
                />
            </div>
            {loading ? (
                <div className='contact-loading'>
                    <FontAwesomeIcon icon={faCog} spin />
                </div>
            ) : (
                <button className='contact-button submit' type='submit'>
                    Send
                </button>
            )}
        </form>
    )
}

export default Contact
