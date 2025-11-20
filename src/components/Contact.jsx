import { openingHours, socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
 	useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' });
		
		const timeline = gsap.timeline({
		 scrollTrigger: {
			trigger: '#contact',
			start: 'top center',
		 },
		 ease: "power1.inOut"
		})
	 
	 timeline
		.from(titleSplit.words, {
		 opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.from('#contact h3, #contact p', {
			opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.to('#f-right-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }).to('#f-left-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }, '<')
	})
 
 return (
	<footer id="contact">
	 <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
	 <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
	 
	 <div className="content">
		<h2>Where to Find Us</h2>
		
		<div>
		 <h3>Visit Our Bar</h3>
		<div className="map-wrapper" style={{ width: '100%', maxWidth: '100%', height: '500px', margin: '1rem 0' }} aria-label="Map showing our bar location">
			<iframe
				title="Our Bar Location"
				src="https://www.google.com/maps?q=456,+Raq+Blvd.+%23404,+Los+Angeles,+CA+90210&output=embed"
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			/>
			<p style={{ marginTop: '0.5rem' }}>
				<a
					href="https://www.google.com/maps/search/?api=1&query=456+Raq+Blvd+%23404+Los+Angeles+CA+90210"
					target="_blank"
					rel="noopener noreferrer"
				>					
				</a>
			</p>
		</div>
		 <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
		</div>
		
		<div>
		 <h3>Contact Us</h3>
		 <p>(555) 987-6543</p>
		 <p>hello@jsmcocktail.com</p>
		</div>
		
		<div>
		 <h3>Open Every Day</h3>
		 {openingHours.map((time) => (
			<p key={time.day}>
			 {time.day} : {time.time}
			</p>
		 ))}
		</div>
		
		<div>
		 <h3>Socials</h3>
		 
		 <div className="flex-center gap-5">
			{socials.map((social) => (
			 <a
			 	key={social.name}
				href={social.url}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={social.name}
			 >
				<img src={social.icon} />
			 </a>
			))}
		 </div>
		</div>
	 </div>
	<button
		id="to-top"
		onClick={() =>
			gsap.to(document.scrollingElement || document.documentElement, {
				scrollTop: 0,
				duration: 0.1,
				ease: 'power1.inOut',
			})
		}
		aria-label="Scroll to top"
		title="Scroll to top"
		style={{
			position: 'fixed',
			right: '1rem',
			bottom: '1.5rem',
			width: '48px',
			height: '48px',
			borderRadius: '50%',
			border: 'none',
			background: '#111',
			color: '#fff',
			display: 'grid',
			placeItems: 'center',
			cursor: 'pointer',
			boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
			zIndex: 1000,
		}}
	>
		<span aria-hidden="true" style={{ fontSize: '1.25rem', lineHeight: 1 }}>
			↑
		</span>
	</button>
	</footer>
 )
}

export default Contact
