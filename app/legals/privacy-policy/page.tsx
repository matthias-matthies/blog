const PrivacyPolicyPage = () => {
    return (
        <main className="container mx-auto md:px-0 px-2">
            <article className={"prose lg:prose-xl"}>
                <h1>Privacy Policy</h1>

                <p>This privacy policy informs you about the nature, extent, and purpose of the processing of personal data (hereinafter &quot;data&quot;) on my website {process.env.PRIVACY_POLICY_DOMAIN}.</p>

                <h2>Responsible</h2>

                <p>Responsible for the data processing on this website, I am, {process.env.PRIVACY_POLICY_OWNER}. Contact details are:</p>

                <p>
                    Address: {process.env.PRIVACY_POLICY_STREET}, {process.env.PRIVACY_POLICY_ZIP} {process.env.PRIVACY_POLICY_TOWN}<br />
                    Email: {process.env.PRIVACY_POLICY_EMAIL}
                </p>

                <h2>Data Collection on my Website</h2>

                <p>On my website, I process data that you provide to me, like when you send me a message via the contact form or sign up for one of my services. No cookies are used on my website.</p>

                <h2>Hosting and Domain</h2>

                <p>The hosting services that I use, Vercel, on this website, processes inventory data, contact data, content data, contract data, usage data, meta and communication data of customers, prospects and visitors of this website based on my legitimate interests in an efficient and secure provision of this website according to Art. 6 Para. 1 S. 1 f) GDPR in conjunction with Art. 28 GDPR. The domain of this website is provided by Strato.</p>

                <h2>Your Rights</h2>

                <p>You have the right to receive information about the origin, recipient, and purpose of your stored personal data at any time free of charge. You also have the right to request the correction, blocking, or deletion of this data. For this purpose, as well as for further questions about privacy, you can contact me at the address given in the imprint at any time. Furthermore, you have a right of appeal to the competent supervisory authority.</p>

                <h2>Currency</h2>

                <p>This privacy policy is current and is dated {process.env.PRIVACY_POLICY_UPDATED}. Due to the development of my website or the implementation of new technologies, it may be necessary to change this privacy policy. Matthias Matthies reserves the right to change the privacy policy at any time in compliance with the applicable privacy laws.</p>

                <p>Last update: {process.env.PRIVACY_POLICY_UPDATED}.</p>

                <p>Sincerely,</p>
                <p>{process.env.PRIVACY_POLICY_OWNER}</p>
            </article>
        </main>
    )
}

export default PrivacyPolicyPage
