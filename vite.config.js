import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
	registerType: "prompt",
	includeAssets: ["favicon.ico", "apple-touch-icon.png"],
	manifest: {
		name: "Travel Easy",
		short_name: "Travel Easy",
		description: "Lakewood Tourist Spots",
		icons: [
			{
				src: "./icon-192x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "./icon-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "./icon-144x144.png",
				sizes: "144x144",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "./icon-256x256.png",
				sizes: "256x256",
				type: "image/png",
				purpose: "any",
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

export default defineConfig({
	plugins: [react(), VitePWA(manifestForPlugin)],
});
