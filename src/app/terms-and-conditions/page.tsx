import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-[#0a110f] text-white selection:bg-military-green selection:text-black font-rajdhani text-lg">
            <Header />

            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-12 border-l-4 border-military-green pl-5">
                        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter font-orbitron mb-4">
                            <span className="text-military-green">Terms and Conditions</span>
                        </h1>
                        <p className="text-gray-400 font-rajdhani text-lg uppercase tracking-widest">
                            Last Updated: 10.01.2026
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-6 bg-military-green block"></span>
                                1. Acceptance of Terms
                            </h2>
                            <p>
                                By downloading, installing, or using the Milsy mobile application (“Milsy” or the “App”), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions (the “Terms”). These Terms constitute a legally binding agreement between you and the provider of Milsy (referred to as “we,” “us,” or “our”). If you do not agree with any part of these Terms, you must not use the App and should uninstall it. Your continued use of Milsy signifies your acceptance of these Terms, as updated from time to time.
                            </p>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
                            <h2 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-6 bg-military-green block"></span>
                                2. Eligibility and User Accounts
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    <strong>Eligibility:</strong> Milsy is intended only for users who are 18 years of age or older. By creating an account or using the App, you represent and warrant that you are at least 18 years old and legally capable of entering into binding contracts. We do not knowingly allow anyone under 18 to use the App. If you are under 18, you must refrain from using Milsy. We reserve the right to verify your age and to suspend or terminate any account if we suspect the user is under 18.
                                </p>
                                <p>
                                    <strong>Account Registration:</strong> To access certain features of Milsy, you will be required to create an account. You agree to provide accurate, current, and complete information during registration and at all other times when you use the App, and to update this information promptly if it changes. You must not impersonate any other person or entity, and you may not create an account on behalf of someone else. Each user is allowed to create only one account, and accounts are personal to the registered user. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to keep your password secure and not to share it with anyone. If you suspect any unauthorized use of your account or any other breach of security, you must notify us immediately. We are not liable for any loss or damage arising from your failure to safeguard your account credentials.
                                </p>
                                <p>
                                    <strong>Account Responsibility:</strong> You are responsible for all content posted and all actions taken through your account. All use of Milsy must be for legitimate Airsoft-related purposes as intended by the App. You agree not to allow any third party to use your account. If you allow any other person to use your account (which is strongly discouraged), you remain fully responsible for their actions as if they were your own. We reserve the right to suspend or terminate your account if any information provided during registration or afterward proves to be inaccurate, false, or misleading, or if you violate any part of these Terms.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-6 bg-military-green block"></span>
                                3. Team Creation and Autonomy
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    Milsy enables users to form or join Airsoft teams and groups on the platform. Team autonomy is fundamental – each team or group on Milsy is created and managed by its own members or designated team leaders, not by Milsy. Team leaders (organizers or captains) have the ability to manage their team’s membership and content, including setting team rules, scheduling team events, and moderating communications within the team.
                                </p>
                                <p>
                                    Each team operates as an independent community of users. Teams are solely responsible for their internal affairs. This means that all decisions regarding team leadership, team rules or bylaws, acceptance or removal of members, and the organization of team activities are made by the users in that team and not by Milsy. We do not interfere with or oversee the day-to-day management of teams, provided that team activities and content comply with these overall Terms and the law. Milsy does not endorse, sponsor, or guarantee the actions or decisions of any team or its leaders. Any disputes or disagreements between team members (including leadership disputes or team rule enforcement) are generally to be resolved within the team itself. Milsy may, however, step in at our discretion if a team’s conduct or content on the App violates these Terms or applicable law, or to address complaints that pose risks to the community.
                                </p>
                                <p>
                                    By creating or joining a team, you acknowledge that the team and its leaders are not agents or representatives of Milsy. There is no employment, partnership, or agency relationship between Milsy and any team or user. Teams have autonomy in how they coordinate games or manage their group, but team autonomy does not exempt teams or members from complying with Milsy’s Terms and all legal obligations. All teams and members must still abide by the App’s rules concerning content, behavior, and safety as described in these Terms.
                                </p>
                            </div>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
                            <h2 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-6 bg-military-green block"></span>
                                4. Game and Event Organization
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    Milsy provides tools for users and teams to organize Airsoft games, matches, events, or meet-ups (“Events”). However, Milsy itself is not an event organizer or a sponsor of these activities. The App serves solely as a digital coordination platform to help facilitate scheduling, communication, and announcements for Airsoft Events. Users or teams who create an Event in the App are deemed the “Organizers” of that Event and are fully responsible for planning, preparing, and conducting the Event. Milsy does not supervise, direct, or control what happens at the actual physical Event.
                                </p>
                                <p>By using Milsy to coordinate or learn about an Event, you acknowledge and agree that:</p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-military-green">
                                    <li>Milsy is not responsible for the actual running of any offline Event. We do not provide venues, equipment, supervision, referees, or any personnel for Events, nor do we set the rules of engagement for gameplay. All logistics, rules, and safety protocols for an Event are determined by the Organizers and participants themselves.</li>
                                    <li>No Endorsement or Verification: Listing or promoting an Event on the App does not mean Milsy endorses it or has vetted the Organizers or participants. Milsy does not conduct background checks or qualifications verification for Event Organizers or attendees. You should exercise common sense and caution when choosing to participate in any Event.</li>
                                    <li>No Guarantee of Event Quality or Occurrence: Milsy makes no guarantees that any Event will occur as scheduled or that it will meet the expectations of participants. The scheduling and fulfillment of Events depend on the Organizers and attendees. Events may be cancelled, rescheduled, or altered by the Organizers or due to outside factors (such as weather, venue issues, or legal restrictions) without prior notice. Milsy is not responsible for any such changes or cancellations, or for any losses you may incur (such as travel expenses) in reliance on an Event taking place.</li>
                                    <li>Assumption of Risk: Airsoft Events can be inherently risky. All participation in any offline Airsoft game or Event coordinated through Milsy is at your own risk*. You acknowledge that *Airsoft is a physical activity that can involve inherent dangers, including the risk of injury, property damage, or other harm. By choosing to participate in an Event, you agree that you voluntarily assume all risks associated with that Event. Milsy has no control over, and no responsibility for, any injuries, accidents, or harm that may occur to you or others during an Event. (See also Section 10 “Limitation of Liability” below for further limitations on our liability regarding Events.)</li>
                                </ul>
                                <p>
                                    <strong>Organizer Responsibilities:</strong> If you are an Organizer of an Event (for example, you create an Event in the App or are listed as a host or team leader for the Event), you are solely responsible for taking all appropriate measures to ensure the Event is safe, lawful, and conducted in accordance with any applicable Airsoft field rules and local laws. This includes, without limitation: obtaining any necessary permissions or permits for use of a venue, enforcing appropriate safety rules (such as mandatory use of protective eyewear, barrel bags, etc.), communicating rules of engagement to participants, ensuring that all participants are 18 or older (or otherwise legally permitted if local law allows minors with supervision, in which case you are responsible for obtaining parental consents outside of the App), and providing any required waivers or liability releases to participants. You agree that you will not misrepresent any Event details and will act in good faith to carry out the Event as advertised. Milsy is not liable for an Organizer’s failure to properly plan or manage an Event.
                                </p>
                                <p>
                                    <strong>Participant Responsibilities:</strong> If you attend an Event as a participant (whether as player, spectator, or volunteer), you are responsible for your own preparedness and conduct. You must follow the rules set by the Organizers and any venue or field where the Event is held, including safety instructions. If you observe any dangerous conditions or behavior at an Event, you should alert the Organizers immediately and, if necessary, withdraw from the Event. Milsy will not be responsible for supervising any physical Event or enforcing rules on-site – that responsibility lies with the Organizers and the participants themselves.
                                </p>
                                <p>
                                    Milsy expects all Events coordinated through our platform to be conducted in a safe and lawful manner. If we receive reports of an Event organized through the App that is being conducted in an unsafe, illegal, or grossly improper way, we reserve the right to take appropriate action on our platform. Such action may include removing the Event listing from the App, suspending or terminating the accounts of the responsible Organizers, and, if necessary, reporting the issue to the appropriate authorities. However, Milsy does not routinely monitor Events and is not responsible for ensuring any particular Event meets any standard of quality or safety.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-6 bg-military-green block"></span>
                                5. Safety and Legal Compliance
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    Milsy is dedicated to fostering a safe community of Airsoft enthusiasts, but ultimate responsibility for safety and compliance lies with the users. By using the App, you agree to abide by all applicable laws and regulations relating to Airsoft activities, equipment, and gameplay, as well as to adhere to common safety standards within the Airsoft community.
                                </p>
                                <p>
                                    <strong>Legal Compliance:</strong> You are solely responsible for understanding and complying with the laws of your jurisdiction regarding Airsoft. Laws may include restrictions on Airsoft replica weapons (such as required orange tips or markings, power (FPS) limits, or permits for import/export), age restrictions for players, or regulations on where Airsoft can be played. You agree that you will not use Milsy to plan or engage in any activity that is unlawful in the location where it will take place. This includes, for example, using the App to organize games on property without permission, to involve prohibited replica firearms, or to plan any activity that might violate local firearms, public order, or safety laws. If you are unsure about the legality of an Event or an item, it is your responsibility to consult the relevant laws or authorities before proceeding. Milsy disclaims any liability for user conduct that violates the law, and will cooperate with law enforcement as legally required (such as responding to court orders or valid law enforcement requests).
                                </p>
                                <p><strong>Safety Measures:</strong> All users of Milsy are expected to prioritize safety in every aspect of their Airsoft activities. When coordinating or participating in Airsoft games or training:</p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-military-green">
                                    <li><strong>Protective Gear:</strong> You must use appropriate safety equipment (at a minimum, proper eye protection specifically designed for Airsoft or paintball use) during all gameplay. It is strongly recommended to also use face protection, and any other gear (gloves, pads, etc.) as suited to the activity. Organizers should enforce safety gear rules at Events.</li>
                                    <li><strong>Equipment Handling:</strong> Treat all Airsoft replicas as if they are real firearms for safety purposes. Do not brandish or display Airsoft guns in public places where they could be mistaken for real weapons. Always use barrel covers and keep guns on safe when not in active play. Never modify Airsoft replicas in a way that makes them unsafe or unlawful.</li>
                                    <li><strong>Game Rules:</strong> Follow all safety rules commonly accepted in Airsoft (such as engagement distances, fps limits, and “blind man” calls to cease fire if someone is hurt). If an Organizer or field has specific rules, you must follow them. If you are an Organizer, you must communicate and enforce such rules.</li>
                                    <li><strong>No Real Weapons or Illegal Items:</strong> Only lawful Airsoft replicas and props are allowed in games. Real firearms, explosives, knives (beyond typical utility knives or small tools), or any other weapons that are not standard Airsoft equipment must not be brought to any Event organized through Milsy. Likewise, no illegal substances are permitted at Events.</li>
                                    <li><strong>Health and Fitness:</strong> You should ensure that you are physically fit and medically able to participate in Airsoft activities. If you have any condition that could be aggravated by physical exertion or by the stress of Airsoft play (for example, respiratory issues with running, or conditions that could be triggered by adrenaline or being struck by a BB), you must take appropriate precautions or refrain from participation. If you are an Organizer, you should remind participants to consider their fitness and to disclose any relevant medical conditions to someone responsible at the Event (or choose not to participate if appropriate).</li>
                                </ul>
                                <p>
                                    Milsy is not responsible for providing any training, supervision, or safety equipment to users. The App’s role is limited to information sharing and coordination. All users agree that they will exercise caution and their best judgment in all interactions and activities arising from or related to the App. If you plan a match or attend one, you do so voluntarily and at your own risk, and you are responsible for your own safety and the safety of any minors or guests you bring (noting that all users must be 18+, and any minor present as a guest would be outside our platform’s intended use and under your full responsibility).
                                </p>
                                <p>
                                    If you notice a user on Milsy engaging in behavior through the App that could jeopardize safety or constitute illegal activity (for example, someone encouraging violence outside of Airsoft rules or attempting to organize dangerous or criminal activities under the guise of an Airsoft event), please report it to us. We reserve the right to take action to address any safety or legal issues, which may include removing content, warning users, notifying authorities, or suspending accounts as appropriate.
                                </p>
                            </div>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
                            <h2 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-6 bg-military-green block"></span>
                                6. Marketplace and Transactions
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    Milsy includes a peer-to-peer marketplace feature that allows users to list, sell, buy, or trade Airsoft-related gear, equipment, or accessories (“Marketplace”). This Marketplace is provided to facilitate transactions between users, but Milsy is not a traditional retailer or auctioneer. Instead, Milsy functions solely as a platform to allow users to communicate and arrange sales or trades. We are not a party to any transaction between users – any contract of sale or exchange is strictly between the buyer and the seller (or trading parties).
                                </p>
                                <p>
                                    <strong>Listing Items:</strong> Users may list Airsoft guns (replica firearms meeting legal requirements), tactical gear, apparel, or other accessories relevant to Airsoft in the Marketplace, provided such items are legal to buy and sell and comply with these Terms. All listings must be truthful and accurately describe the item’s condition, features, and any relevant legal requirements (for example, if an Airsoft replica is above a certain power that requires a license in your area, that must be stated, and you should only transact in compliance with the law). Users are forbidden from listing any prohibited items, including but not limited to: real firearms or ammunition, explosive devices, narcotics or other illegal substances, any item whose sale is illegal in either the seller’s or buyer’s jurisdiction, or any item that infringes on third-party intellectual property rights. We reserve the right to remove or refuse any listing that, in our sole discretion, is inappropriate, illegal, or in violation of these Terms or our policies.
                                </p>
                                <p>
                                    <strong>No Endorsement or Verification of Items:</strong> Milsy does not pre-inspect items listed on the Marketplace and does not guarantee that listings are accurate, complete, or of any particular quality. The actual existence, quality, safety, legality, or functionality of items listed is the sole responsibility of the users involved in the transaction. We do not certify or endorse any products. Buyers and sellers are responsible for conducting their own due diligence. For example, a buyer should use their judgment to inspect an item in person (if possible) or ask detailed questions before completing a purchase; a seller should be honest and disclose any defects. Any guidance or tips provided by the App (for instance, suggestions on pricing or safety guidelines for transactions) are for general informational purposes and do not constitute a warranty or guarantee by Milsy.
                                </p>
                                <p>
                                    <strong>Transactions Between Users:</strong> When users agree on a sale or trade, all terms of that transaction (including price, payment method, shipping or hand-off arrangements, and any warranties or return policies between the parties) are to be determined solely between the buyer and seller. Milsy is not a party to, nor does it set the terms for, any transaction. We do not act as an agent, broker, payment processor, or delivery service for any party. If you as a buyer agree to purchase an item, you are responsible for paying the seller directly (via whatever payment method you both agree upon, which may be outside the App such as cash on delivery or third-party payment services) and for any costs associated with the transaction (e.g., shipping fees, transfer fees, taxes or duties if applicable). If you as a seller agree to sell or trade an item, you are responsible for delivering the item as promised and for the condition of the item at the time of exchange. Milsy will not mediate or intervene in any payment disputes or shipment issues, except to the limited extent we may choose to offer an in-app rating or feedback mechanism or a basic messaging platform for users to communicate.
                                </p>
                                <p>
                                    <strong>Risk of Transactions:</strong> All transactions are at the sole risk of the participating users. Milsy does not offer any escrow service or purchase protection; we do not refund money or enforce return policies, as we are not part of the transaction. Both buyers and sellers should proceed cautiously and use common sense, especially if meeting in person to exchange goods or money. When meeting in person, it is advisable to meet in a public, safe location and to take appropriate precautions (for example, do not bring large amounts of cash alone to a stranger’s home; consider meeting at an Airsoft field or a public area and perhaps with a friend). Milsy is not responsible for any loss of funds, fraud, or failure to complete a trade by either party. If you believe you have been defrauded or a crime has occurred, you should contact local law enforcement. Milsy will cooperate with law enforcement in any investigation if required by law (such as providing available transaction or user information via valid legal process), but we do not guarantee any resolution.
                                </p>
                                <p>
                                    <strong>User Conduct in Marketplace:</strong> All users must conduct their buying and selling activities honestly and in good faith. You agree not to engage in any deceptive practices, such as misrepresenting an item, hiding important information about condition or legality, or failing to deliver an item after receiving payment. Likewise, buyers must not issue false claims about sellers or unjustified payment disputes. Both buyers and sellers should comply with any applicable consumer protection laws. If you are selling, you are responsible for ensuring that the sale of your item is lawful (for example, if any permits are required to transfer an Airsoft replica in your area, you must comply with those requirements; if taxes apply to a sale, you are responsible for reporting and paying those). Milsy is not responsible for calculating or collecting taxes on your behalf.
                                </p>
                                <p>
                                    Milsy may provide a messaging system for buyers and sellers to communicate about listings. This should be used only for genuine transaction-related communications. Harassment, spam, or off-topic messages are prohibited (see Section 7 on Communication Guidelines). We may also provide a ratings or review system (see Section 8 on Reputation and Feedback) to facilitate trust between users. Use these tools responsibly and fairly.
                                </p>
                                <p>
                                    <strong>Marketplace Disputes:</strong> Because Milsy is not a party to user transactions, you agree that Milsy has no obligation to resolve any dispute between users related to a Marketplace transaction. Users should attempt to resolve disagreements directly. In some cases, we may provide voluntary assistance, such as allowing users to leave public feedback or, at our discretion, looking into reports of severe misconduct (like scamming) and taking appropriate action on the platform (such as suspending a fraudulent seller’s account). However, these actions are at Milsy’s discretion and are not obligations. Under no circumstances will Milsy reimburse funds or provide compensation for unsatisfactory transactions. Any legal claim or dispute arising from a sale (such as breach of contract, misrepresentation, or injury from a product) is solely between the buyer and seller, subject to any consumer rights under law. Both parties agree to release Milsy from any claims, demands, and damages arising out of such disputes (see also Section 10 “Limitation of Liability” and Section 11 “Indemnification”).
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-6 bg-military-green block"></span>
                                7. Communication and Community Guidelines
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    Milsy offers various communication features – such as team chat rooms, direct messaging, forums, or event discussion boards – to allow users to communicate, coordinate, and build the Airsoft community. When using any communication or content-sharing feature in the App, you agree to adhere to these Community Guidelines and behave in a respectful, lawful manner.
                                </p>
                                <p>
                                    <strong>Prohibited Content and Conduct:</strong> You must NOT use Milsy (including any chat, message, profile, or posting) to transmit or facilitate any content or engage in any behavior that:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-military-green">
                                    <li><strong>Violates the law or rights of others:</strong> This includes anything that is unlawful, fraudulent, or which may infringe on the rights of others. For example, do not use the App to plan illegal activities or to share content that violates intellectual property rights (copyrights, trademarks, etc.) or privacy rights.</li>
                                    <li><strong>Is harmful, violent, or threatening:</strong> You may not threaten, intimidate, harass, or bully anyone. Any content advocating real-world violence, self-harm, or harm to others is strictly forbidden. This also means no stalking or doxxing (publishing someone’s private information without consent).</li>
                                    <li><strong>Is hateful or discriminatory:</strong> Milsy has zero tolerance for hate speech or any content that attacks or degrades a person or group based on race, ethnicity, nationality, religion, gender, sexual orientation, disability, or any other characteristic protected by law. Slurs, epithets, or encouragement of hatred or violence towards any group are prohibited.</li>
                                    <li><strong>Is obscene or pornographic:</strong> The App is not to be used for sharing sexually explicit images or pornography. Additionally, do not share graphic violent content that is not directly related to legitimate Airsoft discussions (for instance, discussing Airsoft-related injuries in a factual manner might be acceptable, but sharing gory images for shock value would not).</li>
                                    <li><strong>Is defamatory or abusive:</strong> Do not spread false information with an intent to harm someone’s reputation, and do not engage in name-calling, personal attacks, or excessive profanity directed at others. Criticism should be constructive and civil.</li>
                                    <li><strong>Constitutes spam or unauthorized advertising:</strong> Milsy’s communication tools are for personal and team coordination use, not for unsolicited promotions. Do not send mass messages, post repetitive content, or advertise unrelated products or services. (Legitimate Airsoft gear ads belong in the Marketplace, and team recruitment posts belong in appropriate community sections if available – always follow the intended use of each section.) Pyramid schemes, chain letters, or any form of solicitation that has not been expressly permitted are banned.</li>
                                    <li><strong>Contains malware or security threats:</strong> You must not share any content that contains viruses, worms, Trojan horses, or other harmful code. Also, do not use the platform in any manner that could damage, disable, or impair the App or interfere with any other user’s experience (such as deliberate network interference, flooding chats to disrupt conversation, or hacking attempts).</li>
                                    <li><strong>Impersonation and False Information:</strong> You may not impersonate any person or entity, or falsely claim an affiliation with any group. Also, do not knowingly disseminate false or misleading information (for example, posting false announcements about events or spreading rumors about a user that are untrue).</li>
                                    <li><strong>Violation of Privacy:</strong> Do not post personal or private information about another person without their consent. This includes contact information, real names (if they’re using a pseudonym publicly), addresses, or any sensitive data. Respect the privacy of communications; for instance, do not publicly post the content of a private message without permission of the sender.</li>
                                </ul>
                                <p>
                                    <strong>Use of Communication Features:</strong> All communication on Milsy should be related to Airsoft, the App’s community, and the purposes for which the features are provided (team management, event coordination, gear trading, etc.). Off-topic discussions should be kept to a reasonable minimum and placed in appropriate channels (if general chat forums exist). Users are expected to keep discussions civil and on-topic.
                                </p>
                                <p>
                                    <strong>Monitoring and Moderation:</strong> While Milsy is not responsible for policing every interaction and does not actively monitor all communications, we reserve the right (but do not assume an obligation) to monitor, review, and moderate user communications on the App. We may remove or edit content that violates these Terms or that we find objectionable, and we may do so without notifying the author. Milsy may also terminate or suspend the account of any user who seriously or repeatedly violates the communication guidelines or any other Terms. We are not liable for any failure or delay in removing harmful content, but we strive to maintain a positive community environment. If you see content or behavior that violates these guidelines, you are encouraged to report it to us.
                                </p>
                                <p>
                                    <strong>User Content Ownership:</strong> You retain any rights to the content you create and share on Milsy (such as messages, posts, photos, etc.), but by using the App, you grant us a license to use that content as necessary to operate the service (for example, to display your messages to the intended recipients, or to show your team posts to your team members). This license is generally non-exclusive, worldwide, royalty-free, and sublicensable to the extent needed to provide the service. We do not claim ownership of your content; however, you represent that you have the right to post any content that you submit (for instance, do not upload photos you don’t have permission to use, and do not share material from other sources unless it’s allowed). Any content you post should also comply with the guidelines above (no prohibited content).
                                </p>
                                <p>
                                    Keep in mind that communications on the App are not private between you and other users. For example, team chats can be seen by all team members, and things you post in public forums can be seen by the community. Even private messages could be shared by the other party (violating our rules, but technically possible). Therefore, exercise caution and discretion in what you share. Milsy is not responsible for what other users do with information you have shared with them on the App.
                                </p>
                            </div>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
                            <h2 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-6 bg-military-green block"></span>
                                8. Reputation and Feedback System
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    Milsy may include a reputation or feedback system (“Reputation System”) to allow users to review or rate each other after transactions or interactions – for instance, buyers and sellers in the Marketplace might rate each other, or players might give feedback on team participation or event conduct. The purpose of this system is to foster trust, accountability, and improve the community experience by highlighting positive participation and warning about negative behavior. By using the App, you acknowledge and consent that other users may provide public or semi-public feedback about their interactions with you, and that Milsy may make these user-generated reviews or ratings visible to others.
                                </p>
                                <p>
                                    <strong>User-Generated Nature:</strong> Any ratings, reviews, or feedback in the Reputation System are created by users, not by Milsy. They represent the subjective opinions or experiences of those users. Milsy does not guarantee that feedback is accurate, legitimate, or unbiased. We do not typically verify comments or ratings for truthfulness. It is possible that feedback may be erroneous or, in some cases, malicious. However, we expect all users to use the Reputation System honestly and fairly. You agree not to manipulate the system (for example, do not create fake transactions just to get positive ratings, and do not leave false negative feedback for competitive or personal reasons). Attempts to improperly influence reputation scores — such as retaliation, collusion, or harassment via reviews — are considered a violation of these Terms.
                                </p>
                                <p>
                                    <strong>Feedback Guidelines:</strong> When leaving feedback for another user, you must adhere to the facts and your genuine experience. Feedback should be constructive and relevant to the transaction or interaction in question. The communication guidelines (Section 7) also apply to feedback; this means no profanity, personal insults, or irrelevant/offensive content in a review. Stick to what happened: for example, “Seller shipped the item late and it arrived damaged” is acceptable feedback, whereas personal attacks or unrelated commentary are not. Milsy reserves the right to edit or remove feedback that violates our rules or guidelines, or for any reason at our discretion, but we do not guarantee removal of content that a user dislikes. If you receive unfair or false feedback, you may contact us to request a review, but we will only remove or modify feedback if it clearly violates our policies or is otherwise legally actionable (e.g., defamatory). In general, we encourage users to respond to negative feedback by improving their conduct or by replying courteously with their side of the story, rather than expecting removal.
                                </p>
                                <p>
                                    <strong>No Liability for User Feedback:</strong> Because feedback is produced by other users, Milsy is not liable for any statements in the Reputation System. You agree that you will not hold Milsy responsible for the content of ratings or reviews, even if those comments are negative or allegedly inaccurate. If you have a dispute regarding feedback, your remedy is against the user who posted it, not against Milsy. We do, however, provide means within the App to contest or reply to feedback: for example, the ability to respond publicly to a comment, or to flag a review for moderation if it violates the Terms. We will handle flagged feedback on a case-by-case basis.
                                </p>
                                <p>
                                    <strong>Effect of Reputation:</strong> Reputation scores, badges, or similar indicators on Milsy are intended to be helpful indicators of user trustworthiness or activity level but are not guarantees by Milsy. We do not provide any compensation or formal privileges based solely on reputation (aside from potential in-app recognitions like levels or badges). Likewise, a poor reputation score might influence other users’ willingness to interact with you, but it does not directly limit your access to the App unless it results from rule violations that lead to suspension. Milsy will not remove or change a user’s reputation simply to accommodate that user’s preferences; reputation is an earned measure within the community.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-6 bg-military-green block"></span>
                                9. Suspension and Termination of Accounts
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    Milsy reserves the right to suspend, restrict, or terminate your account and/or access to the App (including access to any particular features such as teams, marketplace, or messaging) at our sole discretion, under the following circumstances:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-military-green">
                                    <li><strong>Violation of Terms:</strong> If you violate or we suspect you have violated any of these Terms or any policies referenced herein (such as the Community Guidelines, Marketplace rules, etc.), we may take immediate action. This includes (but is not limited to) using the App in a manner that is illegal, unsafe, abusive, or that poses a risk to other users or to Milsy.</li>
                                    <li><strong>Prohibited Content/Behavior:</strong> Posting prohibited content, engaging in harassment, fraud, or any misconduct outlined in these Terms can result in suspension or termination without prior notice.</li>
                                    <li><strong>Repeat Infringements or Complaints:</strong> We may suspend or terminate accounts that are subject to multiple user complaints or reports, or those that repeatedly receive negative feedback indicating harmful behavior. We are not required to disclose the details of complaints or our investigation processes, as doing so might infringe on privacy or facilitate evasion of our safeguards, but we will act fairly and reasonably based on the information available to us.</li>
                                    <li><strong>Law Enforcement or Legal Requirement:</strong> If we are requested or ordered by law enforcement or other government authorities to disable or terminate your account (for example, due to your involvement in unlawful activities), we will comply as required by law. Additionally, if you engage in behavior that we believe could be criminal (such as fraud or credible threats of violence), we may terminate your access and report the matter to authorities.</li>
                                    <li><strong>Extended Inactivity:</strong> For efficiency and security, we reserve the right to deactivate accounts that have been inactive for an extended period (for example, no login or usage for a year or more). If we choose to do this, we will typically provide notice to your registered email (if available) before deactivation, giving you a chance to log in and keep the account active.</li>
                                </ul>
                                <p>
                                    When feasible, Milsy may provide you with a warning or notice of potential suspension/termination – for instance, sending you an email or in-app notification about an issue and giving you an opportunity to respond or correct your behavior. However, we are not obligated to provide advance notice or any warning. In severe cases (e.g., egregious abuse, clear danger to others, obvious illegality), we may disable your account immediately.
                                </p>
                                <p>
                                    <strong>Effect of Suspension/Termination:</strong> If your account is suspended, you may be temporarily barred from certain or all App features (for example, you might not be able to post or communicate, or you might not be able to log in at all) until the issue is resolved or the suspension period ends (if any). If your account is terminated, this means your permission to use the App is permanently revoked: you will no longer have access to your account, your profile and content may be deleted or anonymized (subject to our data retention policies and Privacy Policy), and you may be banned from creating a new account. Termination can also include the removal of any teams you have created or transfer of control of those teams to other members, at our discretion. If you had any ongoing Events or listings in the Marketplace, those may be canceled or removed. You agree that if your account is terminated, you will not attempt to create a new account or otherwise circumvent the termination. Any attempt to circumvent (for example, creating a new account under a different name while the old account is banned) is a further violation of these Terms and we reserve the right to terminate any new account you create and take appropriate measures to enforce the ban.
                                </p>
                                <p>
                                    <strong>User Initiated Termination:</strong> You may choose to stop using Milsy at any time. You may delete the App from your device, and if you wish to delete your account entirely, you can contact us or use any self-service account deletion feature if available. Our Privacy Policy details how we handle account deletion and personal data. Keep in mind that certain content you posted (such as messages in a group, or feedback given to others) might remain visible to others even after your account is deleted, as part of ongoing community conversations or records, but it will be disassociated from your profile. Terminating your own account does not absolve you of responsibility for any past actions on the App; sections of these Terms that by their nature should survive termination (such as indemnification, limitations of liability, etc.) will survive.
                                </p>
                                <p>
                                    <strong>No Liability for Removal:</strong> Milsy is not liable to you or any third-party for any termination or suspension of your account, including for loss of access to your content or any potential loss of income, reputation, or opportunities that may result. We provide the App and the accounts at our discretion as a service; maintaining an account is contingent on compliance with these Terms. If you believe a suspension or termination has occurred in error, you may contact us via the information in the Contact section (Section 15) to request a review, and we may (but are not obligated to) consider reinstating your account if appropriate. Any decision by Milsy regarding termination or suspension is final and binding, and there is no entitlement to reinstatement.
                                </p>
                            </div>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
                            <h2 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-6 bg-military-green block"></span>
                                10. Limitation of Liability and Disclaimer of Warranties
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    <strong>Use at Your Own Risk:</strong> Milsy provides the App, including all its services and features, on an “as is” and “as available” basis. While we strive to make the App useful, reliable, and secure, we make no guarantees or warranties of any kind, express or implied, about the accuracy, reliability, availability, or suitability of the App or any content on it. Your use of Milsy is at your sole risk.
                                </p>
                                <p>
                                    To the fullest extent permitted by applicable law, we disclaim all warranties (express, implied, or statutory) regarding the App and its content, including but not limited to any implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, and any warranties arising from course of dealing or usage of trade. We do not warrant that the App will meet your requirements or expectations, or that it will be uninterrupted, timely, secure, or error-free. We do not guarantee any results from the use of the App, or that any defects will be corrected. Milsy also makes no warranty as to the quality or accuracy of any information obtained from or through the App (including, without limitation, any Event listings, user communications, or Marketplace listings).
                                </p>
                                <p>
                                    <strong>No Liability for User Conduct or Events:</strong> You expressly agree that Milsy is not liable for the conduct of any user or third party, whether online or offline. This means we are not responsible for what happens at any Airsoft Event organized through our App or for any personal injuries, death, property damage, or other harm that may occur to you or others in the course of participating in an Event. We do not supervise Events and we do not have control over the actions of participants or Organizers, and therefore we disclaim any and all liability for any incidents or disputes that occur at, before, or after an Event. Similarly, Milsy is not responsible for any interactions between users outside of the App’s digital environment, even if those interactions were initiated via the App. Users are solely responsible for their behavior and agreements with each other.
                                </p>
                                <p>
                                    <strong>No Liability for Marketplace Transactions or Content:</strong> Milsy has no liability for any transactions facilitated through the Marketplace. We are not responsible for any item sold or traded via the App, for the fulfillment of any sale, for the truth or legality of listings, or for the actions of buyers or sellers. Any problems arising from a Marketplace transaction (such as non-delivery of goods, payment issues, counterfeit or defective items, personal injuries or property damage caused by sold items, etc.) are matters strictly between the buyer and seller. You agree not to hold Milsy responsible for any loss or damage of any sort incurred as the result of any transaction (or failed transaction) you engage in with another user. Additionally, Milsy is not liable for user-generated content on the App (such as team posts, messages, profiles, feedback, etc.). We do not guarantee that any content posted by users is true, lawful, or harmless. Any reliance on information from the App or interactions with other users is done at your own discretion and risk.
                                </p>
                                <p>
                                    <strong>Limitation of Liability:</strong> To the maximum extent permitted by law, in no event shall Milsy or its founders, owners, employees, affiliates, agents, partners, or licensors (collectively, the “Milsy Parties”) be liable to you or any third party for any indirect, incidental, consequential, special, exemplary, or punitive damages whatsoever, arising out of or related to your use of or inability to use the App or any Milsy services, even if we have been advised of the possibility of such damages. This limitation of liability covers, without limitation, any damages for lost profits, lost opportunity, lost goodwill, loss of data, service interruption, computer or device damage, or system failure; or for any substitute goods or services; or for any conduct of other users or third parties on the App; or for any content or information obtained through the App.
                                </p>
                                <p>
                                    In particular, and without limiting the generality of the foregoing, Milsy and the Milsy Parties will not be liable for: (a) any injury or damage (whether personal, bodily, emotional, or property) resulting from your attendance at or involvement in any Event coordinated through the App; (b) any damage or loss arising from transactions (sales, trades, etc.) in the Marketplace, including fraud, stolen items, misrepresentations, or broken agreements; (c) unauthorized access to or use of our servers and/or any personal information or financial information stored therein; (d) any interruption or cessation of transmission to or from the App, or any bugs, viruses, trojan horses or the like that may be transmitted to or through our App by any third party; or (e) the defamatory, offensive, or illegal conduct of any third party (including other users).
                                </p>
                                <p>
                                    <strong>Cap on Liability:</strong> To the extent that any of the Milsy Parties are found liable to you for any claim or cause of action arising out of or related to the App or these Terms (including for gross negligence, to the extent such liability is not waivable under law), the total aggregate liability of the Milsy Parties shall not exceed the amount you have paid to us for the use of the App in the six (6) months immediately preceding the event giving rise to the claim (or, if no such payments have been made, an amount equivalent to fifty U.S. dollars (USD $50) or its equivalent in Turkish Lira). This limitation applies collectively to all claims, whether based in contract, tort, or any other legal theory.
                                </p>
                                <p>
                                    <strong>Exceptions:</strong> Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for certain types of damages (for example, in some places you cannot exclude liability for gross negligence or willful misconduct, or for death or personal injury caused by negligence). If you are subject to such laws, some of the above limitations may not apply to you to the extent prohibited. In such cases, Milsy’s liability will be limited to the maximum extent permitted by applicable law. Nothing in these Terms is intended to exclude or limit any condition, warranty, right, or liability which may not be lawfully excluded or limited.
                                </p>
                                <p>
                                    <strong>Release:</strong> You hereby release Milsy and all other Milsy Parties from any and all claims, demands, and damages of every kind and nature, known and unknown, arising out of or in any way connected with any dispute you have with any other user, or with any group, or any Event Organizer, or any buyer or seller, or any other third party, whether it be at an offline Event or online within the App. You agree that this release will apply to claims arising before as well as after the date of this agreement. If you are a resident of a jurisdiction which restricts general releases, then this release is limited to the maximum extent permitted under such law.
                                </p>
                                <p>
                                    <strong>Disclaimer of Warranties:</strong> For clarity, no advice or information (whether oral or written) obtained from Milsy or through the App shall create any warranty not expressly stated in these Terms. Milsy does not guarantee continuous, error-free, secure, or virus-free operation of the App, and you understand that you are responsible for implementing safeguards (like antivirus software and prudent judgement in downloading content or clicking links) to protect your device and data.
                                </p>
                                <p>
                                    By using Milsy, you acknowledge and agree to the foregoing disclaimers and limitations on liability, which are fundamental parts of this agreement between you and us. You understand that without your agreement to these provisions, the services provided by Milsy would not be available to you.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-6 bg-military-green block"></span>
                                11. Indemnification
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    You agree to indemnify, defend, and hold harmless Milsy, its parent company or affiliates (if any), and each of their respective officers, directors, employees, agents, partners, and licensors (the “Indemnified Parties”) from and against any and all losses, liabilities, claims, demands, damages, costs, or expenses (“Claims”), including reasonable attorneys’ fees, arising out of or related to:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-military-green">
                                    <li><strong>Your breach of these Terms:</strong> This includes any violation of the rules, warranties, or agreements set forth in this document or in other policies incorporated by reference.</li>
                                    <li><strong>Your use or misuse of the App:</strong> Any activity in which you engage on or through Milsy that causes harm or damage to any person or property, or violates someone’s rights, or is alleged to do so. This covers both online activities (e.g., things you post or transactions you conduct via the App) and offline consequences (e.g., something that happens at an Event you organized or attended through using the App).</li>
                                    <li><strong>Your content:</strong> Any information, postings, messages, or other material you upload or communicate via Milsy. For example, you will indemnify the Indemnified Parties if content you posted infringes someone’s intellectual property or privacy rights, or if you posted defamatory statements that cause a claim against us.</li>
                                    <li><strong>Your interactions and transactions with other users:</strong> If you have a dispute or issue with another user (for instance, a fight or injury at an Event, or a transaction gone wrong in the Marketplace) and that user (or someone on their behalf) makes a claim against Milsy for whatever reason, you agree to indemnify and hold us harmless from that claim. For instance, if someone you sold an item to claims the item injured them or was illegal, and they sue us, or if a bystander at an Event you organized sues us for an injury, you will cover us.</li>
                                    <li><strong>Your violation of any law or third-party rights:</strong> This captures any situation where your actions via Milsy violate a law (e.g., you organized an Event that violated local regulations, or you sold an item illegally) or someone’s rights (e.g., you used someone’s trademark without permission, or violated another company’s terms by posting their content on our App), leading to a claim against us.</li>
                                </ul>
                                <p>
                                    You agree that the Indemnified Parties have the right to assume the defense and control of any matter that is subject to indemnification by you, and you will cooperate fully in the defense of such claim. This means that we may choose to handle the legal defense of a claim ourselves (likely through our own legal counsel), and if so, you will still be responsible for indemnifying us for the costs and any settlement or judgment. You further agree not to settle any such matter without the prior written consent of Milsy. We will use reasonable efforts to notify you of any claim requiring indemnification as soon as we become aware of it, but any failure to notify promptly does not relieve you of your obligations except to the extent you are materially prejudiced by that failure.
                                </p>
                                <p>
                                    Your indemnification obligations will survive any termination of your account or of these Terms. This means even if you stop using the App or your account is closed, you will still be responsible for any indemnifiable liabilities related to your use that arose before or as a result of termination.
                                </p>
                            </div>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
                            <h2 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-6 bg-military-green block"></span>
                                12. Privacy and Data Protection
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    Your privacy is important to us. Please review our Privacy Policy, which details how Milsy collects, uses, stores, and protects your personal data when you use the App. The Privacy Policy is incorporated into these Terms by reference, meaning that by agreeing to these Terms, you also agree to the terms outlined in our Privacy Policy.
                                </p>
                                <p>
                                    <strong>Personal Information:</strong> In using Milsy, you may provide certain personal information to us (such as your name, contact information, and possibly location or other details) and you may also share personal information with other users (through your profile, messages, or transactions). You agree that we may handle your personal data in accordance with our Privacy Policy. This may include using your data to operate the App’s features (for example, sharing your username and profile details with other team members or trading partners), to improve our services, to communicate with you about updates or issues, and to comply with legal obligations.
                                </p>
                                <p>
                                    <strong>Privacy Choices:</strong> Our Privacy Policy explains the rights and choices you have regarding your personal data (such as how to access or correct your information, or how to adjust your communication preferences). It also explains how cookies or similar technologies may be used in the App. By using the App, you consent to the practices described in the Privacy Policy. If you do not consent to your data being used as described, then you must not use the App.
                                </p>
                                <p>
                                    <strong>User Interactions:</strong> Keep in mind that any content you voluntarily disclose in public areas of the App (such as in a public forum or a team group that other members can see) becomes available to other users who can access that area. We are not responsible for how others might use that public information. Please exercise discretion in what you share publicly.
                                </p>
                                <p>
                                    <strong>Data Security:</strong> We implement measures to protect your personal data, but we cannot guarantee that unauthorized access or data breaches will never occur. By using Milsy, you acknowledge that you understand the risk inherent in sharing information online. In the event of a data breach that affects your personal information, we will notify you as required by law.
                                </p>
                                <p>
                                    If you have any questions about our privacy practices, you can find more details in the Privacy Policy or contact us using the information provided in the Contact section. Remember, using Milsy is also an agreement to how we handle data, so it’s important to read the Privacy Policy carefully.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-6 bg-military-green block"></span>
                                13. Changes to Terms
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    Milsy may revise or update these Terms from time to time. We reserve the right to modify the Terms at our discretion, but we will do so in accordance with applicable law. When we make material changes to the Terms, we will make reasonable efforts to notify you – for example, by posting a notice within the App, updating the “Last Updated” date at the top of the Terms, or sending an email or push notification (if you provided us with contact information).
                                </p>
                                <p>
                                    <strong>Your Responsibility to Review Changes:</strong> It is your responsibility to review the Terms periodically for updates. Continued use of the App after any modifications to the Terms constitutes your acceptance of the revised Terms. If you do not agree to a change in the Terms, you should stop using the App and, if desired, terminate your account. We may also ask you to actively consent to the new terms (for instance, through a pop-up requiring you to agree) before further use of the App in certain cases, especially if required by law.
                                </p>
                                <p>
                                    <strong>Scope of Changes:</strong> Changes to the Terms could include, but are not limited to, updates in how the App operates, additions of new features (which may come with additional rules or conditions), changes needed to comply with new laws, or adjustments of policies regarding user conduct, dispute resolution, or fees (if any). We will not retroactively change provisions for ongoing disputes – any dispute that arises will be governed by the Terms in effect at the time of the events giving rise to the dispute, unless both parties agree to apply updated Terms.
                                </p>
                                <p>
                                    Milsy also reserves the right to modify, suspend, or discontinue any part of the App or the services it provides at any time (such as adding or removing features, changing the layout, instituting usage limits, or terminating the App entirely) with or without notice. We are not liable to you or any third party for any such modification or discontinuation of service. However, if you have a paid subscription or any paid feature (if applicable in the future) and we discontinue the service entirely, we will provide any refund that is required by law or under our separate subscription terms.
                                </p>
                                <p>
                                    In summary, keep an eye on updates to these Terms. We aim to maintain a fair and transparent agreement and will not impose unfair changes without notice. Your continued use of Milsy signifies your ongoing agreement to the Terms as modified.
                                </p>
                            </div>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
                            <h2 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-6 bg-military-green block"></span>
                                14. Governing Law and Dispute Resolution
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    These Terms and your use of Milsy are governed by the laws of the Republic of Turkey, without regard to its conflict of law principles. This means that the interpretation, construction, and enforcement of these Terms will be governed by Turkish law. The United Nations Convention on Contracts for the International Sale of Goods (CISG) does not apply to these Terms.
                                </p>
                                <p>
                                    <strong>Jurisdiction:</strong> You agree that any dispute, claim, or controversy arising out of or relating to these Terms or the use of the App that cannot be resolved through informal negotiation will be subject to the exclusive jurisdiction of the courts of Turkey. Unless another location is mandatorily required by applicable law, you agree that Istanbul courts (or the competent courts of the jurisdiction in Turkey where our company is registered, if different) will be the venue for resolving any such disputes. You hereby consent to the personal jurisdiction of those courts and waive any objections on the grounds of inconvenient forum or similar.
                                </p>
                                <p>
                                    <strong>Dispute Resolution and Claims:</strong> We encourage users to contact us first to attempt to resolve any concerns informally before resorting to legal action. Often issues can be resolved quickly through our support channels. However, if a legal claim does arise, it will be handled individually and not as part of any class action (to the extent permitted by law). You agree that you and Milsy will only pursue claims against each other on an individual basis, and not in any representative capacity. That means, to the extent allowed by law, no class actions, class arbitrations, or representative claims are permitted. If this class action waiver is found to be illegal or unenforceable for a particular matter, neither you nor Milsy will be entitled to arbitration (if arbitration is considered) and the matter will instead proceed in court (with the class action waiver severed from the terms addressing the court process).
                                </p>
                                <p>
                                    <strong>Injunctive Relief:</strong> Notwithstanding the above, you acknowledge that unauthorized use of our App or services (such as violation of intellectual property rights or breaching sections of these Terms that protect our interests or the integrity of the App) could cause irreparable harm to Milsy for which monetary damages may be inadequate. In such cases, we may seek injunctive or equitable relief in a court of competent jurisdiction without posting a bond or proving damages, to protect our rights or property. This provision does not limit any other rights or remedies we may have by law or in equity.
                                </p>
                                <p>
                                    If you are a consumer residing outside of Turkey, you may have certain rights or remedies under your local laws that cannot be waived by contract. In such cases, the governing law and jurisdiction clauses above apply to the maximum extent permitted by your local law.
                                </p>
                                <p>
                                    This Governing Law section will survive any termination of these Terms.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold uppercase tracking-wider font-orbitron text-white mb-4 flex items-center gap-3">
                                <span className="w-2 h-6 bg-military-green block"></span>
                                15. Contact Information
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    If you have any questions, concerns, or feedback about these Terms or the Milsy App, or if you need to contact us for any reason relating to your use of Milsy, please reach out to us. You can contact Milsy’s support and administration through the following methods:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-military-green">
                                    <li><strong>Email:</strong> <a href="mailto:partners@infrasync.tech" className="text-military-green hover:text-military-green-light transition-colors underline underline-offset-4 decoration-military-green/30">partners@infrasync.tech</a> (for general inquiries or to report violations of these Terms).</li>
                                    <li><strong>In-App Support:</strong> If available, via the support or help section within the Milsy App.</li>
                                    <li><strong>Mailing Address:</strong> InfraSync (Attn: Legal Department), Pınarbahaşı Mah. Teknokent, Antalya, 07100, Turkey.</li>
                                </ul>
                                <p>
                                    We will endeavor to respond to official correspondence within a reasonable timeframe. Please include your name, contact information, and a clear description of your question or issue when reaching out to us, so we can assist you more effectively. Communications regarding legal disputes or matters may also be sent to the above contact points, and if you are notifying us of an alleged breach of these Terms or a potential intellectual property infringement, please provide all relevant details to assist us in investigating and responding.
                                </p>
                                <p>
                                    <strong>Notice to You:</strong> Similarly, if we need to contact or notify you regarding any matter, we will use the contact information you have provided (such as the email associated with your account). It is your responsibility to keep that information up-to-date. Notices we send to your registered email or via in-app notification will be considered received by you within 24 hours of sending if sent to the email on record, or immediately upon sending if delivered via push notification or in-app alert.
                                </p>
                            </div>
                        </section>

                        <section className="bg-white/5 border border-white/10 p-8 rounded-sm">
                            <div className="space-y-4">
                                <p>
                                    <strong>Conclusion:</strong> These Terms and Conditions, together with the Privacy Policy and any additional rules or guidelines posted in the App, constitute the entire agreement between you and Milsy regarding the use of the App. They supersede any prior agreements or communications between you and us relating to the App. If any provision of these Terms is held to be invalid or unenforceable by a court of competent jurisdiction, that provision will be enforced to the maximum extent permissible and the remaining provisions will remain in full force and effect. Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
                                </p>
                                <p>
                                    By using Milsy, you affirm that you have read these Terms and Conditions and agree to abide by them. Thank you for being part of the Milsy community and for helping to make Airsoft experiences more organized, fun, and safe for everyone. Stay safe and enjoy the game!
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}