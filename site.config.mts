import type { AstroInstance } from 'astro';
import { Github, Instagram, Mail, Facebook } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'arylide',
	favicon: 'favicon.png',
	owner: 'arylide',
	profileImage: 'about_profile.jpg',
	socialLinks: [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/laearylide/',
			icon: Instagram,
		} as SocialLink,
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/Arylide/',
			icon: Facebook,
		} as SocialLink,
		{
			name: 'Email',
			url: 'mailto:contact@arylide.fr',
			icon: Mail,
		} as SocialLink,
	
	],
};
