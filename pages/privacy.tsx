import React from "react";

export const metadata = {
  title: "Privacy Policy | MyMemoir",
  description: "Learn how MyMemoir handles your data securely and transparently.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-left text-gray-800 dark:text-gray-200 leading-relaxed">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
      <p className="italic mb-4">Last updated: October 2025</p>
      <p className="mb-6">Contact: team@mymemoirai.com</p>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold mt-8 mb-2">1. What this policy covers</h2>
        <p>
          This Privacy Policy explains what data we collect, how we use it, who we share it with,
          and the choices available to you. By using the MyMemoir mobile app or website, you agree
          to this Policy.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Data we collect</h2>
        <h3 className="text-lg font-semibold mt-4 mb-1">2.1 Data you provide</h3>
        <p>
          Audio recordings that you choose to capture when using the app. These are used to
          transcribe and generate memoir content. Text that you type or paste, including prompts,
          edits, or notes. Support or feedback messages that you send to us.
        </p>
        <p>
          You may include personal or sensitive information (such as health or family details) in
          your recordings or writing. We process that information only to generate your requested
          memoir text.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-1">2.2 Device and technical information</h3>
        <p>
          We collect minimal diagnostic information, including a random session or device ID for
          rate-limiting and abuse prevention, timestamps and short error messages for failed
          requests, and basic device data such as iOS version and model. We do not collect precise
          location, contact lists, advertising identifiers, analytics, or behavioral tracking data.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. How we use your data</h2>
        <p>
          We use your data to record, transcribe, summarize, and generate your memoir, to ensure
          reliability and security, and to respond if you contact support. We do not sell, rent, or
          share your data for advertising or cross-app tracking.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Where and how processing happens</h2>
        <p>
          We act as the data controller for the app. Processing occurs through trusted providers:
          Amazon Web Services (AWS) hosts our Lambdas, Step Functions, and temporary S3/DynamoDB
          storage. OpenAI processes transcripts and prompts via its API. These providers act as
          processors and are contractually prohibited from using your data for independent or
          advertising purposes.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Legal basis for processing</h2>
        <p>
          Where privacy laws require a legal basis, we process data under contract (to provide the
          requested features), legitimate interests (fraud prevention, debugging, analytics), and
          consent (when you choose to record audio or provide text).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Storage and retention</h2>
        <p>
          On your device, recordings, transcripts, and drafts are stored locally and may be included
          in iCloud backups. On our servers, temporary files created during memoir generation are
          automatically deleted within 30 days of job completion unless retained briefly for
          debugging or security. Logs with minimal diagnostic data are kept for up to 14 days, then
          deleted or anonymized. You can request deletion of any data associated with you by
          emailing team@mymemoirai.com.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">7. Security</h2>
        <p>
          All communication uses HTTPS/TLS encryption. AWS encrypts stored data, and access is
          restricted to authorized personnel. No system is perfectly secure, but we apply
          safeguards appropriate to the scope of the service.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">8. Data incidents</h2>
        <p>
          If we become aware of unauthorized access that affects your personal data, we will take
          reasonable steps to investigate and, where required by law, notify affected users and
          authorities.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Your choices and rights</h2>
        <p>
          You can enable or disable microphone and speech-recognition permissions in iOS Settings.
          You can delete your recordings and drafts within the app or request deletion of any
          residual data we control. You may request access to, correction of, or deletion of your
          data by contacting team@mymemoirai.com. Users in the EEA, UK, or California may have
          additional rights under GDPR or CPRA.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">10. Children</h2>
        <p>
          MyMemoir is intended for users aged 18 and older. We do not knowingly collect data from
          minors. If a child has provided information, contact us and we will delete it.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">11. International transfers</h2>
        <p>
          We process data in the United States and other locations where AWS and OpenAI operate.
          Where required by law, we rely on safeguards such as Standard Contractual Clauses for
          cross-border transfers.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">12. Third-party content and links</h2>
        <p>
          If you export or share your memoir through another app or service, that third party’s
          privacy policy applies. MyMemoir is not responsible for third-party practices or content.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">13. No cookies or tracking</h2>
        <p>
          The MyMemoir app and website do not use cookies, analytics scripts, or tracking
          technologies for advertising or behavioral profiling.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">14. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, MyMemoir and its operator are not liable for any
          indirect, incidental, or consequential damages arising from data handling, processing, or
          transmission.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">15. Data roles</h2>
        <p>
          Jason Liang, doing business as MyMemoir, is the data controller. Amazon Web Services and
          OpenAI act as processors on our behalf and process data only as needed to operate the
          service.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">16. Governing law and disputes</h2>
        <p>
          Any disputes regarding this Privacy Policy are governed by the laws and jurisdiction
          specified in the Terms of Use.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">17. Updates to this policy</h2>
        <p>
          We may update this Privacy Policy periodically. The current version will always be
          available at mymemoirai.com/privacy and will take effect upon posting. Material changes
          will be highlighted in-app or by other reasonable notice.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">18. Contact</h2>
        <p>For privacy-related questions or requests, contact team@mymemoirai.com.</p>
      </div>
    </main>
  );
}
