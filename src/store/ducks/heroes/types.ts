/**
 * Action types
 */

export enum HeroesTypes {
	LOAD_REQUEST = '@heroes/LOAD_REQUEST',
	LOAD_SUCCESS = '@heroes/LOAD_SUCCESS',
	LOAD_FAILURE = '@heroes/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface ImagesSizes {
	xs: string;
	sm: string;
	md: string;
	lg: string;
}

export interface Hero {
	id: number;
	name: string;
	images: ImagesSizes;
}

/**
 * State type
 */
export interface HeroesState {
	readonly data: Hero[];
	readonly loading: boolean;
	readonly error: boolean;
}
