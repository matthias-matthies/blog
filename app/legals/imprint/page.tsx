const ImprintPage = () => {
    return (
        <article className={"prose lg:prose-xl"}>
            <h1>Imprint</h1>

            <p>Responsible for the content of this website according to § 5 TMG:</p>

            <p>
                {process.env.IMPRINT_OWNER}<br />
                {process.env.IMPRINT_STREET}<br />
                {process.env.IMPRINT_ZIP} {process.env.IMPRINT_TOWN}<br />
                {process.env.IMPRINT_COUNTRY}
            </p>

            <h2>Contact:</h2>

            <p>Email: {process.env.IMPRINT_EMAIL}</p>

            <h2>Disclaimer:</h2>

            <p>Although I carefully check the content, I assume no liability for the content of external links. The operators of these sites are solely responsible for their content.</p>

            <p>Last updated: {process.env.IMPRINT_UPDATED}.</p>
        </article>
    )
}

export default ImprintPage
