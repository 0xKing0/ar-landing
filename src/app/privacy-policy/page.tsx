import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#0a110f] text-white selection:bg-military-green selection:text-black font-rajdhani text-lg">
            <Header />

            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-12 border-l-4 border-military-green pl-5">
                        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter font-orbitron mb-4">
                            <span className="text-military-green">Privacy Policy</span>
                        </h1>
                        <p className="text-gray-400 font-rajdhani text-lg uppercase tracking-widest">
                            Last Updated: 10.01.2026
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <section>
                            <p>
                                This Privacy Policy (“Policy”) explains how the Milsy mobile application (“Milsy,” the “App,” “we,” “us,” or “our”) collects, uses, stores, discloses, and protects personal data when you access or use the App. This Policy applies to all users of Milsy and should be read together with the Milsy Terms and Conditions. By using Milsy, you confirm that you have read and understood this Policy. If you do not agree with this Policy, you must not use the App.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
                            <p>
                                Milsy processes personal data in accordance with applicable data protection laws, including the Turkish Law on the Protection of Personal Data No. 6698 (“KVKK”), and where applicable, other mandatory legal requirements. For the purposes of KVKK, Milsy acts as the data controller (veri sorumlusu) in relation to the processing activities described in this Policy. If you have questions about this Policy or wish to exercise your legal rights, you may contact us at <a href="mailto:privacy@infrasync.tech" className="text-military-green hover:text-military-green-light underline decoration-military-green/30">privacy@infrasync.tech</a> or <a href="mailto:partners@infrasync.tech" className="text-military-green hover:text-military-green-light underline decoration-military-green/30">partners@infrasync.tech</a>, or via our registered address in Türkiye: [Company Legal Name], [Address], Türkiye.
                            </p>
                        </section>

                        <section>
                            <p>
                                Milsy collects personal data through three main channels: data you provide directly, data collected automatically when you use the App, and limited data received from third parties. When you create an account and use Milsy features, you may provide personal data such as your name, username/operator name, email address, and profile details, including an optional profile photo and biography. When you participate in teams, squads, chats, announcements, and events, Milsy processes content you submit such as messages, posts, event participation indications (including voting and attendance confirmations where offered), and any related metadata required to operate these features. When you use the in-app marketplace, Milsy processes the information necessary to display listings and enable user-to-user communication, including listing titles, descriptions, photos, prices, and messages exchanged between users regarding an item. Milsy also processes information you submit when contacting support, sending feedback, or reporting problems.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
                            <p>
                                In addition, Milsy automatically collects certain technical and usage data when you use the App. This may include device information such as device model, operating system version, app version, language settings, and identifiers required for security and functionality, including push notification tokens and device identifiers where permitted. Milsy also processes usage data such as screens viewed, feature interactions, timestamps, and diagnostic data such as log files, performance metrics, and crash reports to maintain and improve the App. Where location-based features are enabled, Milsy may process approximate location data if you permit it in your device settings, and it will only process precise location data if you explicitly grant permission and a feature requires it. You may control and withdraw such permissions at any time through your device settings.
                            </p>
                        </section>

                        <section>
                            <p>
                                Milsy may receive limited information from third-party sources only as necessary to operate the App. This may include platform-level technical signals or subscription or purchase verification data from Apple App Store or Google Play if Milsy offers paid services, as well as aggregated diagnostic or performance information from analytics or crash reporting providers. Milsy does not purchase personal data from third-party data brokers.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
                            <p>
                                Milsy processes personal data primarily to provide and operate the services you request. This includes creating and maintaining your account, enabling team and community functions such as roles, permissions, and membership, supporting messaging and communication features, facilitating event creation and participation flows, and enabling marketplace listing display and user-to-user communication. Milsy also processes personal data to maintain the security of the platform, prevent abuse, detect fraud, enforce policies, troubleshoot issues, monitor performance, and improve the App’s functionality and user experience. Where permitted, Milsy may use personal data to personalize certain aspects of the App, such as improving relevance of content or recommendations within the platform. Milsy also processes personal data to communicate with you about service-related matters, including account notices, security alerts, and operational messages. Where required by law, Milsy will obtain your consent for certain categories of processing, including the use of optional features such as location access and certain types of notifications, and you may withdraw such consent at any time without affecting the lawfulness of prior processing.
                            </p>
                        </section>

                        <section>
                            <p>
                                Milsy may share personal data in limited circumstances. Some information you provide may be visible to other users as part of the functioning of the App. For example, your username/operator name, profile photo, team membership (depending on your settings and the team’s configuration), content you post in team channels or chats, marketplace listings and listing images, and certain event participation information may be accessible to other users in the relevant context. You acknowledge that content and information you share within Milsy may be viewed, saved, copied, or shared by other users, and Milsy is not responsible for how other users use information you voluntarily disclose to them, except to the extent required by law. Milsy may also share personal data with service providers that support the operation of the App, such as infrastructure hosting, database services, analytics, crash reporting, moderation tooling, and customer support systems. These providers process personal data on our behalf and under our instructions, subject to contractual confidentiality and security obligations. Milsy may further disclose personal data where it believes such disclosure is required to comply with law, respond to lawful requests, protect the rights and safety of users or the public, investigate suspected illegal activity, or enforce our Terms and Conditions and platform policies. If Milsy is involved in a corporate transaction such as a merger, acquisition, restructuring, or asset sale, personal data may be transferred as part of that transaction subject to applicable legal safeguards.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
                            <p>
                                Personal data may be stored or processed in Türkiye or in other countries depending on our service providers’ infrastructure. Where cross-border transfers occur, Milsy will take reasonable steps to implement appropriate safeguards in accordance with KVKK requirements and industry standards. Milsy retains personal data only for as long as necessary to fulfill the purposes described in this Policy, including providing services, maintaining security, complying with legal obligations, resolving disputes, and enforcing agreements. If you request account deletion or use any available self-service deletion option, Milsy will delete or anonymize your personal data within a reasonable timeframe unless retention is required by law or necessary for legitimate interests such as security, fraud prevention, or the establishment, exercise, or defense of legal claims. Where you have posted content in group chats or shared spaces, portions of that content may remain visible to other users for continuity of conversations and records, but may be disassociated from your profile where feasible.
                            </p>
                        </section>

                        <section>
                            <p>
                                Milsy implements administrative, technical, and organizational measures designed to protect personal data against unauthorized access, alteration, disclosure, or destruction. Such measures may include access controls, encryption where appropriate, secure storage practices, and monitoring. However, no method of transmission or storage is completely secure and Milsy cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials and for safeguarding your device and access to the App.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
                            <p>
                                Subject to applicable law, you may have rights under KVKK to learn whether your personal data is processed, to request information about processing, to learn the purposes of processing and whether data is used in accordance with those purposes, to know the third parties to whom data is transferred domestically or internationally, to request correction of incomplete or inaccurate data, to request deletion or destruction under legal conditions, to request notification of correction or deletion to third parties, to object to results against you arising from processing exclusively through automated systems, and to request compensation if you suffer damage due to unlawful processing. You may exercise your rights by contacting us at <a href="mailto:privacy@infrasync.tech" className="text-military-green hover:text-military-green-light underline decoration-military-green/30">privacy@infrasync.tech</a>. We may request reasonable verification of identity before fulfilling your request.
                            </p>
                        </section>

                        <section>
                            <p>
                                Where processing is based on consent, including for optional location access, push notifications, or other optional features, you may withdraw consent at any time through your device settings, in-app preferences (if available), or by contacting us. Withdrawal of consent will not affect the lawfulness of processing carried out before the withdrawal. Milsy is intended for users aged 18 and older, and we do not knowingly collect personal data from individuals under 18. If we become aware that an account belongs to a person under 18, we may suspend or terminate the account and delete associated personal data in accordance with law and this Policy.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
                            <p>
                                The App may contain links to third-party services or websites, including pages belonging to teams, event venues, or external platforms. Milsy is not responsible for the privacy practices of third parties, and your use of third-party services is governed by their own privacy policies and terms. Milsy may update this Policy from time to time by publishing a revised version and updating the “Last Updated” date. Where appropriate, we may also provide additional notice of material changes within the App. Your continued use of Milsy after changes become effective constitutes acceptance of the updated Policy.
                            </p>
                        </section>

                        <section>
                            <p>
                                If you have any questions, concerns, or requests regarding this Privacy Policy, you may contact us at <a href="mailto:privacy@infrasync.tech" className="text-military-green hover:text-military-green-light underline decoration-military-green/30">privacy@infrasync.tech</a> or <a href="mailto:partners@infrasync.tech" className="text-military-green hover:text-military-green-light underline decoration-military-green/30">partners@infrasync.tech</a>, or via our registered address in Türkiye: InfraSync Teknoloji Ticaret Limited Şirketi, Pınarbaşı Mah. Antalya Teknokent C block 71/105 Kepez/Antalya Türkiye.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
