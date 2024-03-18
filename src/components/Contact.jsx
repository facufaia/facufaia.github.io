import { forwardRef, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = forwardRef((props, reference) => {
	const form = useRef()
	Contact.displayName = 'Contact'

	const notify = () => toast('Email sent!')

	const [name, setName] = useState(null)
	const [email, setEmail] = useState(null)
	const [text, setText] = useState(null)

	const sendEmail = (e) => {
		e.preventDefault()

		console.log(form.current)
		emailjs
			.sendForm(
				import.meta.env.VITE_APP_EMAILSERVICE_ID,
				import.meta.env.VITE_APP_TEMPLATE_ID,
				form.current,
				{
					publicKey: import.meta.env.VITE_APP_APIKEY,
				}
			)
			.then(
				() => {
					console.log('SUCCESS!')
				},
				(error) => {
					console.log('FAILED...', error)
				}
			)
		notify()
		setEmail('')
		setName('')
		setText('')
	}

	return (
		<section
			ref={reference}
			className='flex flex-col gap-16 h-screen w-full md:px-20'
		>
			<h2 className='text-center text-4xl tracking-wider md:text-5xl'>
				Contact
			</h2>
			<form
				ref={form}
				onSubmit={(e) => {
					sendEmail(e)
				}}
				className='px-6 gap-6 flex flex-col'
			>
				<div className='pb-4 z-30 text-[#dce2ef] flex flex-col gap-6 w-full'>
					<div className='flex flex-col gap-2 w-full'>
						<label className='text-lg md:text-xl'>Name</label>
						<input
							type='text'
							name='user_name'
							placeholder='john'
							className='contact_form_input w-full max-w-full bg-transparent border border-[#b3b8c3] py-2 px-2 text-base rounded-md md:text-lg'
							value={name || ''}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='flex flex-col gap-2 w-full'>
						<label className='text-lg md:text-xl'>Email</label>
						<input
							type='email'
							name='user_email'
							placeholder='johndoe@gmail.com'
							className='contact_form_input w-full max-w-full bg-transparent border border-[#b3b8c3] py-2 px-2 text-base rounded-md md:text-lg'
							value={email || ''}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='flex flex-col gap-2 w-full'>
						<label className='text-lg md:text-xl'>Message</label>
						<textarea
							name='message'
							placeholder={
								'Dear Facundo,\n\nI would like to hire you for a project.\nPlease contact me at your earliest convenience.\n\nThank you.'
							}
							className='w-full max-w-full bg-transparent border border-[#b3b8c3] py-3 px-2 text-base rounded-md h-44 md:text-lg'
							value={text || ''}
							onChange={(e) => setText(e.target.value)}
						/>
					</div>
				</div>
				<button
					type='submit'
					className='hover:bg-quaternary-500 tracking-wider bg-quaternary-600 disabled:bg-quaternary-800 text-lg py-2 px-4 rounded-md md:text-2xl'
					disabled={!(text && email && name)}
				>
					SEND
				</button>
			</form>
			<ToastContainer
				autoClose={3000}
				draggable='touch'
				hideProgressBar={true}
				position='bottom-right'
				closeButton={false}
				theme='dark'
				className={'text-xl'}
				toastClassName={'bg-'}
			/>
			<div className='cloud-background-quinary' />
		</section>
	)
})

export default Contact
