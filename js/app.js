if (window.location.protocol === 'https:') {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/sw.js');
	}	
}

window.addEventListener('DOMContentLoaded', function(e) {
	const js_hash = '1840b6b0';
	const css_hash = '2c81975a';


	Object.values(Object.freeze({
		js: {
			hash: js_hash,
			ext: 'js',
			elem: 'script',
			src: 'src',
			attr: {
				type: 'module',
				crossorigin: true,
				defer: true
			},
			child: document.body
		},
		css : {
			hash: css_hash,
			ext: 'css',
			elem: 'link',
			src: 'href',
			attr: {
				rel: "stylesheet",
				type: 'text/css'
			},
			child: document.head
		}
	})).forEach( ({ hash, ext ,elem, src, attr, child }) => {
		const t = +new Date()
		const url = `//${window.location.host}/assets/index.${hash}.${ext}?v=${t}`;
		const component = document.createElement(elem);
		Object.keys(attr).forEach(k => component.setAttribute(k, attr[k]));
		component.setAttribute(src, url);
		child.appendChild(component);
	});

}, false);