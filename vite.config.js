import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
	registerType: "prompt",
	includeAssets: ["favicon.ico", "apple-touch-icon.jpg"],
	manifest: {
		name: "Travel Easy",
		short_name: "Travel Easy",
		description: "Lakewood Tourist Spots",
		icons: [
			{
				src: "./icon-192x192.jpg",
				sizes: "192x192",
				type: "image/jpg",
			},
			{
				src: "./icon-512x512.jpg",
				sizes: "512x512",
				type: "image/jpg",
				purpose: "favicon",
			},
			{
				src: "/apple-touch-icon.jpg",
				sizes: "180x180",
				type: "image/jpg",
				purpose: "apple touch icon",
			},
			{
				src: "./icon-144x144.jpg",
				sizes: "144x144",
				type: "image/jpg",
				purpose: "any",
			},
			{
				src: "./icon-256x256.jpg",
				sizes: "256x256",
				type: "image/jpg",
				purpose: "icon",
			},
		],
		theme_color: "#181818",
		background_color: "#e8eac2",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "portrait",
	},
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), VitePWA(manifestForPlugin)],
});
