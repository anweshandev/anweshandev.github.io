import SEO from '../components/layout/SEO';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-24 bg-[--background]">
      <SEO
        title="Privacy Policy"
        description="Privacy and cookie policy for anweshan.cv, including analytics and spam protection disclosures."
      />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto rounded-3xl border border-[--text]/10 bg-white/40 dark:bg-black/20 backdrop-blur-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-[--text]/60 mb-10">Effective Date: March 08, 2026</p>

          <div className="space-y-8 text-[--text]/85 leading-relaxed">
            <section>
              <p>
                This Privacy Policy explains how information may be collected and used when you access
                {' '}
                <a
                  className="underline underline-offset-4"
                  href="https://anweshan.cv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  anweshan.cv
                </a>
                {' '}
                and interact with services such as the contact form and chatbot.
              </p>
              <p className="mt-3">
                Please also read the
                {' '}
                <Link className="underline underline-offset-4" to="/legal/terms-of-service">Terms of Service</Link>.
                The Privacy Policy and Terms of Service together are referred to as the "Policy".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">1. Data Controller</h2>
              <p>
                Anweshan Roy Chowdhury, 8B, Kedar Bose Lane, Kolkata - 700025, West Bengal, India.
              </p>
              <p className="mt-3">
                Contact: <a className="underline underline-offset-4" href="mailto:me@anweshan.cv">me@anweshan.cv</a>
                {' '}or{' '}
                <Link className="underline underline-offset-4" to="/contact">/contact</Link>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">2. Information We Collect</h2>
              <p>
                This website does not knowingly collect personal data except information you voluntarily provide.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Contact form fields: Name, Email Address, Phone Number</li>
                <li>Chatbot content: Any information you choose to provide in chatbot conversations</li>
                <li>Technical analytics data via Google Analytics (aggregated usage and performance metrics)</li>
                <li>Abuse-prevention signals collected by Invisible reCAPTCHA</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">3. How We Use Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>To respond to contact requests and professional inquiries</li>
                <li>To maintain website security and prevent spam/abuse</li>
                <li>To understand website traffic and improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">4. AI Chatbot and Google Gemini Processing</h2>
              <p>
                The chatbot available on this website uses Google Gemini, also described by Google as Generative
                Language services, to parse submitted prompts, interpret context, and generate responses. If you
                enter information into the chatbot, that information may be transmitted to Google for processing as
                part of the response-generation workflow.
              </p>
              <p className="mt-3">
                According to Google's public Gemini API terms and privacy materials, prompts, contextual inputs,
                and generated outputs may be processed for service delivery, safety systems, abuse detection,
                debugging, testing, legal compliance, and related operational purposes. Google states that prompt
                and response handling may differ depending on whether the relevant Gemini service is configured as a
                paid or unpaid service.
              </p>
              <p className="mt-3">
                For that reason, you should avoid submitting sensitive, confidential, financial, medical, legal,
                or similarly high-risk personal information through the chatbot. Google's privacy and service terms
                remain applicable to the extent Google processes information through its services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">5. Cookie Policy</h2>
              <p>
                This website may use cookies or similar technologies through Google Analytics and Google Invisible
                reCAPTCHA to support analytics, security, and spam prevention functionality.
              </p>
              <p className="mt-3">
                By continuing to use the website, you consent to the use of cookies and related technologies
                as described in this Policy.
              </p>
              <p className="mt-3">
                For details on Google's handling of data and cookies, see
                {' '}
                <a
                  className="underline underline-offset-4"
                  href="https://policies.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">6. Data Sharing</h2>
              <p>
                Information may be processed by trusted service providers used for analytics, security,
                and communications. We do not sell your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">7. Data Retention</h2>
              <p>
                Information is retained only for as long as reasonably necessary for communication,
                operational, analytics, or legal compliance purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">8. Third-Party Policies</h2>
              <p>
                Third-party services are governed by their own privacy terms and policies,
                including Google policies available at https://policies.google.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">9. Changes to This Privacy Policy</h2>
              <p>
                This Privacy Policy may be updated from time to time. Continued use of the website after updates
                are published constitutes acceptance of the revised Policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
