// interface Options {
// 	threshold?: number;
// 	root?: Element;
// 	rootMargin?: string;
// }

export function isVisible(node, options = {}) {
	const { threshold = 0.1, root = null, rootMargin = '0px' } = options || {};

	let inView = false;

	function update(entries) {
		console.log('update');
		entries.forEach((entry) => {
			if (entry.isIntersecting !== inView) {
				inView = entry.isIntersecting;
				node.dispatchEvent(
					new CustomEvent('visible', {
						detail: { inView }
					})
				);
			}
		});
	}

	const observer = new IntersectionObserver(update, { threshold, root, rootMargin });
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
