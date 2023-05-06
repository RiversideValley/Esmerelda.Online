/**
 * Make a link external.
 *
 * Usage:
 * ```
 * <a href="https://example.com/" {...external}>Example</a>
 * ```
 */
export const externalLink: Partial<HTMLAnchorElement> = {
	target: '_blank',
	rel: 'noreferrer noopener'
};

export type NavBarItem = {
	name: string;
	path: string;
	icon?: string;
};

export type NavBarIcon = {
	name?: string;
	path: string;
	external?: boolean;
	icon: string;
};
