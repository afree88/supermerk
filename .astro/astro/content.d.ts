declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"produtos": {
"alcatra-bovina.md": {
	id: "alcatra-bovina.md";
  slug: "alcatra-bovina";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"arroz-tipo-1.md": {
	id: "arroz-tipo-1.md";
  slug: "arroz-tipo-1";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"banana-prata.md": {
	id: "banana-prata.md";
  slug: "banana-prata";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"cafe-tradicional.md": {
	id: "cafe-tradicional.md";
  slug: "cafe-tradicional";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"detergente-liquido.md": {
	id: "detergente-liquido.md";
  slug: "detergente-liquido";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"feijao-carioca.md": {
	id: "feijao-carioca.md";
  slug: "feijao-carioca";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"leite-integral.md": {
	id: "leite-integral.md";
  slug: "leite-integral";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"maca-gala.md": {
	id: "maca-gala.md";
  slug: "maca-gala";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"pao-frances-quentinho.md": {
	id: "pao-frances-quentinho.md";
  slug: "pao-frances-quentinho";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"peito-de-frango.md": {
	id: "peito-de-frango.md";
  slug: "peito-de-frango";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"queijo-mussarela.md": {
	id: "queijo-mussarela.md";
  slug: "queijo-mussarela";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"sabonete-hidratante.md": {
	id: "sabonete-hidratante.md";
  slug: "sabonete-hidratante";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
"suco-laranja-integral.md": {
	id: "suco-laranja-integral.md";
  slug: "suco-laranja-integral";
  body: string;
  collection: "produtos";
  data: InferEntrySchema<"produtos">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"configuracoes": {
"loja": {
	id: "loja";
  collection: "configuracoes";
  data: InferEntrySchema<"configuracoes">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
