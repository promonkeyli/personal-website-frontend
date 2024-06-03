import Head from "next/head";

export type HeadMeta = {
	/* meta title */
	title?: string;
	/* meta description */
	description?: string;
};

export default function (props: HeadMeta) {
	const { title = "", description = "" } = props;

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
		</Head>
	);
}
