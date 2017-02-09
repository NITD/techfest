var app = { };

(function () {
	var renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(new THREE.Color(0xffffff), 1);
	document.getElementById('full-layout-bg').appendChild(renderer.domElement);

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
	camera.position.set(0, 0, 10);
	camera.lookAt(scene.position);
	scene.add(camera);

	var geometry = new THREE.PlaneGeometry(20, 20, 50, 50);
	var material = new THREE.MeshBasicMaterial({ color: 0xeeeeee, wireframe: true });
	var mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);
	
	window.addEventListener('resize', function () {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix;
		renderer.setSize(window.innerWidth, window.innerHeight);
	});

	renderer.render(scene, camera);
	app.isAnimating2 = false;
	app.animate2 = function () {
		mesh.rotation.z += 0.0005;
		renderer.render(scene, camera);
		if (app.isAnimating2) {
			requestAnimationFrame(app.animate2);
		}
	};
}());

(function () {
	document.getElementById('nav-show-icon').addEventListener('click', function () {
		document.getElementById('nav').classList.add('overlay-active');
	});
	document.getElementById('nav-hide-icon').addEventListener('click', function () {
		document.getElementById('nav').classList.remove('overlay-active');
	});
	document.getElementById('initiative-link').addEventListener('click', function () {
		app.isAnimating2 = true;
		app.animate2();
		document.getElementById('nav').classList.remove('overlay-active');
		setTimeout(function () {
			document.getElementById('full-layout').classList.add('overlay-active');
		}, 500);
	});
	document.getElementById('full-layout-hide-icon').addEventListener('click', function () {
		app.isAnimating2 = false;
		document.getElementById('full-layout').classList.remove('overlay-active');
	});
}());
