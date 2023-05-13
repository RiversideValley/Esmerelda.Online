// Components
// export { default as PageSection } from "./PageSection/PageSection.svelte";
// export { default as TreeView } from "./TreeView/TreeView.svelte";
// export { default as HeaderChip } from "./HeaderChip/HeaderChip.svelte";
// export { default as Contributor } from "./Contributor/Contributor.svelte";
// export { default as FeatureCard } from "./FeatureCard/FeatureCard.svelte";
// export { default as ColorSwatch } from "./ColorSwatch/ColorSwatch.svelte";
// export { default as TerminalCommand } from "./TerminalCommand/TerminalCommand.svelte";
// export { default as Titlebar } from "./Titlebar/Titlebar.svelte";
// export { default as BlogCard } from "./BlogCard/BlogCard.svelte";
// export { default as Metadata } from "./Metadata.svelte";
// export { default as ProductCard } from "./Professional/ProductCard/ProductCard.svelte";
export { default as NavBar } from './NavBar/NavBar.svelte';

// Actions
export * from './utils';
export { default as tilt } from './tilt';

import type { NavBarIcon, NavBarItem } from './utils';
import Alert from "@fluentui/svg-icons/icons/alert_urgent_24_filled.svg?raw"

export const NavBarItems: NavBarItem = [
    {
        name: "{UserName}",
        path: "/_federal/account",
        icon: ""
    }
];

export const NavBarIcons: NavBarIcon = [
    {
        name: "Notifications",
        path: "/_federal/notifications",
        icon: Alert
    }
];
