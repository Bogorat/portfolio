import type { AstroInstance } from 'astro';
import { Github, Instagram, Mail, Facebook } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'arylide',
	favicon: 'favicon.ico',
	owner: 'arylide',
	profileImage: 'profile.jpg',
	socialLinks: [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com',
			icon: Instagram,
		} as SocialLink,
		{
			name: 'Facebook',
			url: 'https://www.facebook.com',
			icon: Facebook,
		} as SocialLink,
		{
			name: 'Email',
			url: 'mailto:tmp@gmail.com',
			icon: Mail,
		} as SocialLink,
	
	],
};
