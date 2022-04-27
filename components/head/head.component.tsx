import Head from 'next/head';

export const HeadComponent = (
    {
        siteTitle
    }: {
        siteTitle: string
    }
) => {

    return (

        <Head>
            <title>{siteTitle}</title>
            <meta name="description" content="Products page with netx js" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

    )

}
