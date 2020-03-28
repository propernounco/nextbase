import CallIcon from '../public/static/svg/dialpad.svg'
import EmailIcon from '../public/static/svg/email.svg'

const CallEmail = (props) => {

	return(
		<div className="call-email-container">
			<a href="" className="call">
				<CallIcon /> call
			</a>
			<a href="" className="email">
				<EmailIcon /> email
			</a>
		</div>			
	)	

}

export default CallEmail