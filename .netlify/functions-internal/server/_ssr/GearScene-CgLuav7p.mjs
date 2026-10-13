import { i as __toESM } from "../_runtime.mjs";
import { a as ExtrudeGeometry, c as require_jsx_runtime, l as require_react, n as useFrame, o as Path, r as useThree, s as Shape, t as Canvas } from "../_libs/@react-three/fiber+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GearScene-CgLuav7p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function gearShape(outer, inner, teeth, toothDepth) {
	const shape = new Shape();
	const step = Math.PI * 2 / (teeth * 4);
	for (let i = 0; i < teeth * 4; i++) {
		const phase = i % 4;
		const r = phase === 0 || phase === 3 ? outer : outer + toothDepth;
		const a = i * step;
		const x = Math.cos(a) * r;
		const y = Math.sin(a) * r;
		if (i === 0) shape.moveTo(x, y);
		else shape.lineTo(x, y);
	}
	shape.closePath();
	const hole = new Path();
	hole.absarc(0, 0, inner, 0, Math.PI * 2, true);
	shape.holes.push(hole);
	return shape;
}
function Gear({ position, radius, teeth, speed, color, opacity }) {
	const ref = (0, import_react.useRef)(null);
	const geo = (0, import_react.useMemo)(() => {
		const g = new ExtrudeGeometry(gearShape(radius, radius * .32, teeth, radius * .16), {
			depth: radius * .16,
			bevelEnabled: false,
			curveSegments: 24
		});
		g.center();
		return g;
	}, [radius, teeth]);
	useFrame((_, delta) => {
		if (ref.current) ref.current.rotation.z += delta * speed;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref,
		position,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			geometry: geo,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				wireframe: true,
				color,
				transparent: true,
				opacity
			})
		})
	});
}
function Rig() {
	const { camera, pointer } = useThree();
	useFrame(() => {
		camera.position.x += (pointer.x * 1.4 - camera.position.x) * .04;
		camera.position.y += (pointer.y * .9 - camera.position.y) * .04;
		camera.lookAt(0, 0, 0);
	});
	return null;
}
function GearScene() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		dpr: [1, 1.6],
		camera: {
			position: [
				0,
				0,
				9
			],
			fov: 45
		},
		gl: {
			antialias: true,
			alpha: true
		},
		style: { pointerEvents: "none" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rig, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			rotation: [
				.35,
				-.3,
				0
			],
			scale: .52,
			position: [
				2.2,
				.4,
				0
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gear, {
					position: [
						0,
						0,
						0
					],
					radius: 2.6,
					teeth: 22,
					speed: .16,
					color: "#00b4d8",
					opacity: .32
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gear, {
					position: [
						3.6,
						2.1,
						-1.2
					],
					radius: 1.35,
					teeth: 14,
					speed: -.3,
					color: "#7fd8ea",
					opacity: .18
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gear, {
					position: [
						-3.4,
						-2,
						-1.6
					],
					radius: 1,
					teeth: 12,
					speed: .38,
					color: "#ff7a00",
					opacity: .16
				})
			]
		})]
	});
}
//#endregion
export { GearScene as default };
