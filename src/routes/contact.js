import { element, style } from '@mkenzo_8/puffin'

const ContactStyle = style`
	& a {
		padding:0;
		text-decoration:underline;"
	}
`

const Contact = () => {
	return element`
		<div class="${ContactStyle}">
			<h3>Contact</h3>
			<p>eMail: mespinsanz@gmail.com </p>
			<p><a href="https://twitter.com/mkenzo_8" >Personal Twitter</a></p>
			<p><a href="https://github.com/PuffinJS/puffin">Source Code</a></p>
		</div>
	`
}

export default Contact