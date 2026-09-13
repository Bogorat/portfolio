import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'Arylide',
	favicon: 'favicon.ico',
	owner: 'Arylide',
	profileImage: 'profile.jpg',
	socialLinks: [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com',
			icon: Instagram,
		} as SocialLink,
	],
};
