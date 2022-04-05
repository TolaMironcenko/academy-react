import classNames from 'classnames';
import React from 'react';
import Ht from '../Ht/Ht'
import P from '../P/P';
import styles from './FlashMessage.module.css'

const FlashMessageSuccess = ({ active, setActive, success }) => {
	if (success === 'success') {
		return (
			<div
				className={
					active
						? classNames(styles.FlashMessageSuccess, styles.active)
						: styles.FlashMessageSuccess
				}
			>
				<svg
					className={styles.okicn}
					width="78"
					height="78"
					viewBox="0 0 78 78"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M39.0001 68.64C57.9545 68.64 73.3201 
						53.2744 73.3201 34.32C73.3201 15.3656 57.9545 
						0 39.0001 0C20.0456 0 4.68005 15.3656 4.68005 
						34.32C4.68005 44.9926 9.55162 54.5274 17.1924 
						60.822C17.2046 60.832 17.1937 60.8515 17.1788 
						60.8464C17.1696 60.8433 17.1601 60.8501 17.1601 
						60.8598V71.5042C17.1601 74.4834 20.3003 76.4171 
						22.9606 75.076L34.972 69.0212C35.6355 68.6867 
						36.3787 68.5494 37.1206 68.5894C37.7428 68.623 
						38.3695 68.64 39.0001 68.64Z"
						fill="#7DED61"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M50.3011 24.3463C51.3602 25.1584 51.5623 
						26.6744 50.753 27.7356L38.7426 43.4829C38.3191 
						44.0381 37.6773 44.3832 36.9816 44.4295C36.286 
						44.4757 35.6042 44.2188 35.1113 43.7245L27.4883 
						36.0814C26.5455 35.1362 26.5455 33.6063 27.4883 
						32.6611C28.4345 31.7124 29.9713 31.7124 30.9176 
						32.6611L36.5783 38.3367L46.9031 24.7994C47.7154 
						23.7344 49.2381 23.5313 50.3011 24.3463Z"
						fill="white"
					/>
				</svg>
				<svg
					className={styles.greenicn}
					width="84"
					height="75"
					viewBox="0 0 84 75"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="20.6074"
						cy="9.29547"
						r="9.29547"
						fill="#7DED61"
					/>
					<circle
						cx="80.0986"
						cy="47.7167"
						r="3.71819"
						fill="#7DED61"
					/>
					<path
						d="M79.4438 11.0254C82.4971 18.5484 78.8737 
						27.1222 71.3507 30.1755C70.5208 30.5123 69.6781 
						30.7679 68.8315 30.9459C64.1204 31.9367 58.8591 
						33.2841 56.3382 37.3856C53.3951 42.1741 55.0036 
						48.3927 59.3496 51.9571C68.015 59.0642 75.0268 
						68.4316 79.3829 79.6188C92.9059 114.348 75.7149 
						153.464 40.9856 166.987C6.25636 180.51 -32.8599 
						163.319 -46.3829 128.59C-59.9059 93.8608 -42.7149 
						54.7445 -7.98562 41.2215C7.18342 35.3149 23.1894 
						35.2679 37.5341 39.9824C42.7299 41.6901 48.6536 40.072 
						51.5174 35.4126L52.5823 33.68C54.694 30.2442 53.7172 
						25.8192 52.2006 22.0823C49.1473 14.5593 52.7707 5.9855 
						60.2937 2.93221C67.8167 -0.121075 76.3906 3.50236 79.4438 
						11.0254Z"
						fill="#7DED61"
					/>
				</svg>
				<div className={styles.text}>
					<Ht tag='h2' style={{
						fontSize: '32px',
						lineHeight: '0',
						letterSpacing: '-0.035em',
						color: '#333333'
					}}>Успешно!</Ht>
					<P style={{
						fontWeight: '400',
						fontSize: '14px',
						lineHeight: '22px',
						color: '#333333'
					}}>Спасибо за отзыв о нашей компании :)</P>
				</div>
				<button
					className={styles.ecx}
					onClick={() => setActive(false)}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 11.5561L17.7781 5.77807L18.7613 6.76129L12.9832 
							12.5394L18.7613 18.3174L17.7781 19.3006L12 13.5226L6.22193 
							19.3006L5.23871 18.3174L11.0168 12.5394L5.23871 6.76129L6.22193 
							5.77807L12 11.5561Z"
							fill="#333333"
						/>
					</svg>
				</button>
			</div>
		);
	}
	else {
		return (
			<div
				style={{ background: '#F64B3C' }}
				className={
					active
						? classNames(styles.FlashMessageSuccess, styles.active)
						: styles.FlashMessageSuccess
				}>
				<svg
					className={styles.okicn}
					width="78"
					height="78"
					viewBox="0 0 78 78"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M47.8056 67.6794C48.1345 67.4706 48.4934 
						67.3124 48.8666 67.2006C63.0119 62.9621 73.3201 
						49.8448 73.3201 34.32C73.3201 15.3656 57.9545 0 
						39.0001 0C20.0456 0 4.68005 15.3656 4.68005 34.32C4.68005 
						47.8227 12.4779 59.5042 23.8159 65.1068C23.8287 65.1132 
						23.8235 65.1326 23.8092 65.1315C23.8001 65.1308 23.7931 
						65.1396 23.7958 65.1483L26.9038 74.9903C27.6948 77.4949 
						30.6439 78.5705 32.8615 77.1631L47.8056 67.6794Z"
						fill="#C81912"
					/>
					<path
						d="M48.8134 27.6379C49.6418 26.8095 49.6418 25.4664 
						48.8134 24.638L48.362 24.1865C47.5336 23.3581 46.1904 
						23.3581 45.362 24.1865L39 30.5486L32.6379 24.1865C31.8095 
						23.3581 30.4664 23.3581 29.638 24.1865L29.1865 24.638C28.3581 
						25.4664 28.3581 26.8095 29.1865 27.6379L35.5486 34L29.1865 
						40.3621C28.3581 41.1905 28.3581 42.5336 29.1865 43.362L29.638 
						43.8135C30.4664 44.6419 31.8095 44.6419 32.6379 43.8135L39 
						37.4514L45.362 43.8135C46.1904 44.6419 47.5336 44.6419 48.362 
						43.8135L48.8134 43.362C49.6419 42.5336 49.6418 41.1905 48.8134 
						40.3621L42.4514 34L48.8134 27.6379Z"
						fill="white"
					/>
				</svg>
				<svg
					className={styles.greenicn}
					width="93"
					height="87"
					viewBox="0 0 93 87"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="33.9429"
						cy="36.8291"
						r="6.82918"
						fill="#C81912"
					/>
					<circle
						cx="79"
						cy="27"
						r="13"
						fill="#C81912"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M32.5511 49.4389C32.4191 48.7781 31.9357 48.2427 
						31.2918 48.0441C30.5686 47.8211 29.7827 48.0647 29.3124 
						48.6576L26.6097 52.0647C24.7585 54.3983 21.7904 55.5017 
						18.8235 55.2372C11.5519 54.5888 4.04597 55.1701 -3.42021 
						57.1407C-37.9518 66.2549 -58.5567 101.637 -49.4425 136.168C-40.3282 
						170.7 -4.9463 191.305 29.5853 182.191C64.1169 173.077 84.7218 137.695 
						75.6076 103.163C70.3813 83.3616 56.5177 68.1397 39.13 60.4747C36.2342 
						59.1982 34.0008 56.6967 33.3809 53.5934L32.5511 49.4389Z"
						fill="#C81912"
					/>
					<circle
						cx="21.5475"
						cy="4.54749"
						r="3.49096"
						transform="rotate(-22.0902 21.5475 4.54749)"
						fill="#C81912"
					/>
				</svg>
				<div className={styles.text}>
					<Ht tag='h2' style={{
						fontSize: '32px',
						lineHeight: '0',
						letterSpacing: '-0.035em',
						color: '#FFFFFF'
					}}>Что-то не так...</Ht>
					<P style={{
						fontWeight: '400',
						fontSize: '14px',
						lineHeight: '22px',
						color: '#FFFFFF'
					}}>Не получилось отправить отзыв. Попробуйте еще раз!</P>
				</div>
				<button
					className={styles.ecx}
					onClick={() => setActive(false)}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 11.5561L17.7781 5.77807L18.7613 6.76129L12.9832 
							12.5394L18.7613 18.3174L17.7781 19.3006L12 13.5226L6.22193 
							19.3006L5.23871 18.3174L11.0168 12.5394L5.23871 6.76129L6.22193 
							5.77807L12 11.5561Z"
							fill="#333333"
						/>
					</svg>
				</button>
			</div>
		);
	}
};

export default FlashMessageSuccess;