/* This file is generated by scripts/process-messages/index.js. Do not edit! */

import { DEV } from 'esm-env';

var bold = 'font-weight: bold';
var normal = 'font-weight: normal';

/**
 * Tried to unmount a component that was not mounted
 */
export function lifecycle_double_unmount() {
	if (DEV) {
		console.warn(`%c[svelte] ${"lifecycle_double_unmount"}\n%c${"Tried to unmount a component that was not mounted"}`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("lifecycle_double_unmount");
	}
}

/**
 * %parent% passed a value to %child% with `bind:`, but the value is owned by %owner%. Consider creating a binding between %owner% and %parent%
 * @param {string} parent
 * @param {string} child
 * @param {string} owner
 */
export function ownership_invalid_binding(parent, child, owner) {
	if (DEV) {
		console.warn(`%c[svelte] ${"ownership_invalid_binding"}\n%c${`${parent} passed a value to ${child} with \`bind:\`, but the value is owned by ${owner}. Consider creating a binding between ${owner} and ${parent}`}`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("ownership_invalid_binding");
	}
}

/**
 * %component% mutated a value owned by %owner%. This is strongly discouraged. Consider passing values to child components with `bind:`, or use a callback instead
 * @param {string | undefined | null} [component]
 * @param {string | undefined | null} [owner]
 */
export function ownership_invalid_mutation(component, owner) {
	if (DEV) {
		console.warn(`%c[svelte] ${"ownership_invalid_mutation"}\n%c${`${component} mutated a value owned by ${owner}. This is strongly discouraged. Consider passing values to child components with \`bind:\`, or use a callback instead`}`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("ownership_invalid_mutation");
	}
}