export const fadeInStagger = {
	initial: {
		opacity: 0,
		y: '50%',
	},
	animate: (index) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.1 * index,
			ease: 'easeInOut',
		},
	}),
};