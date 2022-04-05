import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer>
			<span>
				© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022
			</span>
			<ul className={styles.sociallinks}>
				<li className={styles.link}>
					<a href="https://vk.com">
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="#585CC6"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9.75 0C4.36516 0 0 4.36516 0 9.75C0 15.1348 
								4.36516 19.5 9.75 19.5C15.1348 19.5 19.5 15.1348 
								19.5 9.75C19.5 4.36516 15.1348 0 9.75 0ZM13.4997 
								11.0002C13.4997 11.0002 14.362 11.8513 14.5742 
								12.2464C14.5803 12.2545 14.5834 12.2627 14.5854 
								12.2667C14.6717 12.412 14.692 12.5247 14.6494 
								12.609C14.5783 12.7491 14.3345 12.8182 14.2513 
								12.8243H12.7278C12.6222 12.8243 12.4008 12.7969 
								12.1327 12.612C11.9265 12.4678 11.7234 12.2312 11.5253 
								12.0006C11.2298 11.6573 10.9738 11.3608 10.7159 
								11.3608C10.6831 11.3607 10.6505 11.3659 10.6194 
								11.376C10.4244 11.439 10.1745 11.7173 10.1745 12.4587C10.1745 
								12.6902 9.99172 12.8233 9.86273 12.8233H9.165C8.92734 12.8233 
								7.6893 12.74 6.59242 11.5832C5.24977 10.1664 4.04117 7.32469 
								4.03102 7.29828C3.95484 7.11445 4.11227 7.01594 4.28391 
								7.01594H5.82258C6.02773 7.01594 6.09477 7.14086 6.14148 
								7.25156C6.19633 7.38055 6.39742 7.89344 6.7275 8.47031C7.26273 
								9.41078 7.59078 9.79266 7.85383 9.79266C7.90315 9.79208 7.9516 
								9.77953 7.995 9.75609C8.33828 9.56516 8.2743 8.34133 8.25906 
								8.08742C8.25906 8.03969 8.25805 7.54 8.08234 7.30031C7.95641 
								7.12664 7.74211 7.06063 7.61211 7.03625C7.66473 6.96364 7.73405 
								6.90477 7.81422 6.86461C8.04984 6.7468 8.47438 6.72953 8.89586 
								6.72953H9.13047C9.5875 6.73563 9.70531 6.76508 9.87086 6.80672C10.206 
								6.88695 10.2131 7.10328 10.1837 7.84367C10.1745 8.05391 10.1654 8.29156 
								10.1654 8.57188C10.1654 8.63281 10.1623 8.69781 10.1623 8.76688C10.1522 
								9.14367 10.14 9.57125 10.4061 9.74695C10.4408 9.76872 10.4809 9.78033 
								10.5219 9.78047C10.6143 9.78047 10.8926 9.78047 11.6462 8.48758C11.8786 
								8.07143 12.0805 7.639 12.2505 7.19367C12.2657 7.16727 12.3104 7.08602 
								12.3632 7.05453C12.4022 7.03466 12.4454 7.02455 12.4891 7.02508H14.298C14.495 
								7.02508 14.6301 7.05453 14.6555 7.1307C14.7002 7.25156 14.6473 7.62023 13.8216 
								8.73844L13.453 9.22492C12.7045 10.206 12.7045 10.2558 13.4997 11.0002Z"
							/>
						</svg>
					</a>
				</li>
				<li className={styles.link}>
					<a href="htps://google.com">
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="#585CC6"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 
								19.75 0.25 15.3848 0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 
								0.25 19.75 4.61522 19.75 10ZM15.075 8.57438C15.8618 8.57438 16.5004 
								9.21297 16.5004 9.99981C16.5004 10.5814 16.1469 11.0831 15.6794 
								11.3112C15.7022 11.4481 15.7136 11.5849 15.7136 11.7331C15.7136 
								13.9226 13.1706 15.6902 10.0232 15.6902C6.87585 15.6902 4.33287 
								13.9226 4.33287 11.7331C4.33287 11.5849 4.34427 11.4367 4.36708 
								11.2998C3.86533 11.0717 3.52322 10.5814 3.52322 9.99981C3.52322 
								9.21297 4.16182 8.57438 4.94866 8.57438C5.32497 8.57438 5.67848 
								8.73402 5.92936 8.9735C6.91006 8.25508 8.26708 7.81034 9.78375 
								7.76473L10.5022 4.36648C10.525 4.29806 10.5592 4.24104 10.6162 
								4.20683C10.6732 4.17262 10.7416 4.16122 10.8101 4.17262L13.1706 
								4.67437C13.3302 4.33227 13.6723 4.1042 14.0715 4.1042C14.6302 4.1042 
								15.0864 4.56034 15.0864 5.11911C15.0864 5.67788 14.6302 6.13402 14.0715 
								6.13402C13.5241 6.13402 13.0794 5.70069 13.0566 5.16473L10.9469 
								4.71999L10.2969 7.76473C11.7794 7.82174 13.125 8.27788 14.0943 
								8.9735C14.3452 8.72262 14.6873 8.57438 15.075 8.57438ZM7.76533 
								9.99981C7.20655 9.99981 6.75041 10.456 6.75041 11.0147C6.75041 
								11.5735 7.20655 12.0296 7.76533 12.0296C8.3241 12.0296 8.78024 
								11.5735 8.78024 11.0147C8.78024 10.456 8.3241 9.99981 7.76533 
								9.99981ZM10.0118 14.4358C10.3995 14.4358 11.7223 14.3902 12.418 
								13.6946C12.5206 13.5919 12.5206 13.4323 12.4408 13.3182C12.3381 
								13.2156 12.1671 13.2156 12.0644 13.3182C11.6197 13.7516 10.696 
								13.9112 10.0232 13.9112C9.35041 13.9112 8.41533 13.7516 7.98199 
								13.3182C7.87936 13.2156 7.70831 13.2156 7.60568 13.3182C7.50304 
								13.4209 7.50304 13.5919 7.60568 13.6946C8.28989 14.3788 9.6241 
								14.4358 10.0118 14.4358ZM11.2206 11.0147C11.2206 11.5735 11.6767 
								12.0296 12.2355 12.0296C12.7943 12.0296 13.2504 11.5735 13.2504 
								11.0147C13.2504 10.456 12.7943 9.99981 12.2355 9.99981C11.6767 
								9.99981 11.2206 10.456 11.2206 11.0147Z"
							/>
						</svg>
					</a>
				</li>
				<li className={styles.link}>
					<a href="https://telegram.com">
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="#585CC6"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 
								19.75 0.25 15.3848 0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 
								0.25 19.75 4.61522 19.75 10ZM10.3482 7.44812C9.39992 7.84257 7.50459 
								8.65896 4.66226 9.89732C4.20071 10.0809 3.95893 10.2604 3.93692 
								10.436C3.89973 10.7327 4.27131 10.8495 4.7773 11.0087C4.84613 
								11.0303 4.91744 11.0527 4.99055 11.0765C5.48837 11.2383 6.15802 
								11.4276 6.50615 11.4351C6.82193 11.442 7.17438 11.3118 7.5635 
								11.0446C10.2192 9.25193 11.59 8.34584 11.6761 8.3263C11.7368 
								8.31252 11.821 8.2952 11.878 8.34587C11.935 8.39654 11.9294 8.4925 
								11.9233 8.51825C11.8865 8.67517 10.4279 10.0312 9.67313 10.7329C9.43783 
								10.9517 9.27091 11.1069 9.23679 11.1423C9.16036 11.2217 9.08246 11.2968 
								9.00759 11.369C8.5451 11.8148 8.19828 12.1492 9.02679 12.6951C9.42494 
								12.9575 9.74353 13.1745 10.0614 13.3909C10.4085 13.6273 10.7547 13.8631 
								11.2027 14.1567C11.3168 14.2315 11.4258 14.3092 11.5319 14.3849C11.9359 
								14.6729 12.2988 14.9316 12.7472 14.8904C13.0077 14.8664 13.2769 14.6214 
								13.4135 13.8908C13.7365 12.164 14.3714 8.42274 14.5182 6.88103C14.531 
								6.74596 14.5148 6.57309 14.5019 6.49721C14.4889 6.42133 14.4617 6.31321 
								14.3631 6.23317C14.2463 6.13838 14.0659 6.11839 13.9853 6.11981C13.6186 
								6.12627 13.0559 6.32191 10.3482 7.44812Z"
							/>
						</svg>
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;