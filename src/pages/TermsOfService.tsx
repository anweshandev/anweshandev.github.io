import SEO from '../components/layout/SEO';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen py-24 bg-[--background]">
      <SEO
        title="Terms of Service"
        description="Terms and conditions governing use of anweshan.cv and contact form submissions."
      />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto rounded-3xl border border-[--text]/10 bg-white/40 dark:bg-black/20 backdrop-blur-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-sm text-[--text]/60 mb-10">Effective Date: March 08, 2026</p>

          <div className="space-y-8 text-[--text]/85 leading-relaxed">
            <section>
              <p>
                These Terms and Conditions ("Terms") govern your use of the website at
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
                and any information voluntarily submitted through the contact form at
                {' '}
                <Link className="underline underline-offset-4" to="/contact">/contact</Link>.
                By using this website or submitting the form, you agree to these Terms.
              </p>
              <p className="mt-3">
                Please also read the
                {' '}
                <Link className="underline underline-offset-4" to="/legal/privacy-policy">Privacy Policy</Link>.
                The Terms of Service and Privacy Policy together are referred to as the "Policy".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">1. Website Operator</h2>
              <p>
                This website is owned and operated by Anweshan Roy Chowdhury, an individual residing at:
              </p>
              <p className="mt-3">
                8B, Kedar Bose Lane,<br />
                Kolkata - 700025,<br />
                West Bengal, India
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">2. Contact Information</h2>
              <p>
                You may contact the website operator through:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Contact form: <Link className="underline underline-offset-4" to="/contact">/contact</Link></li>
                <li>Email: <a className="underline underline-offset-4" href="mailto:me@anweshan.cv">me@anweshan.cv</a></li>
                <li>Postal address listed above</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">3. Eligibility and Acceptable Use</h2>
              <p>
                You must use this website lawfully and in good faith. You agree not to submit unlawful,
                abusive, fraudulent, malicious, or third-party confidential content through the contact form.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">4. Data Collection and Privacy Notice</h2>
              <p>
                This website does not knowingly collect personal data except information you voluntarily provide.
                Through the contact form, we collect: Name, Email Address, and Phone Number.
                If you provide information in the chatbot, that information may also be collected and processed.
                The website uses Google Analytics for aggregate website traffic analytics, and Invisible reCAPTCHA
                for abuse and spam prevention.
              </p>
              <p className="mt-3">
                Use of Google services is subject to Google's policies:
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
              <h2 className="text-2xl font-bold mb-3">5. AI Chatbot Processing Disclosure</h2>
              <p>
                The chatbot made available on this website uses artificial intelligence models from Google Gemini,
                also referred to by Google as Generative Language services, to parse prompts, understand context,
                and generate responses. When you submit text or other content to the chatbot, that content may be
                transmitted to Google for processing in order to produce a reply.
              </p>
              <p className="mt-3">
                Based on Google's published Gemini API terms and privacy materials, prompts, contextual information,
                and generated outputs may be processed by Google for service delivery, safety filtering, abuse
                monitoring, debugging, testing, legal compliance, and related operational purposes. The exact way
                Google handles prompts and outputs may vary depending on the service configuration in use, including
                whether the relevant Gemini service is provided on a paid or unpaid basis.
              </p>
              <p className="mt-3">
                You should not submit sensitive, confidential, financial, medical, legal, or other high-risk
                personal information through the chatbot. Use of the chatbot constitutes your acknowledgment that
                AI-generated outputs may be incomplete, inaccurate, or inappropriate in some cases and should not be
                relied upon as professional advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">6. No Warranties</h2>
              <p>
                This website and its content are provided on an "as is" and "as available" basis,
                without warranties of any kind, express or implied, to the fullest extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Anweshan Roy Chowdhury shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising out of or related to
                your use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">8. Intellectual Property</h2>
              <p>
                Unless otherwise stated, all original content on this website is owned by Anweshan Roy Chowdhury.
                You may view and share public pages for personal and informational use, but you may not reuse,
                republish, or commercially exploit content without prior permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">9. Third-Party Links and Services</h2>
              <p>
                This website may include links to third-party services or websites. Those services operate under
                their own terms and policies, and the website operator is not responsible for their content,
                privacy practices, or availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">10. Governing Law and Jurisdiction</h2>
              <p>
                These Terms are governed by the laws of India. Courts with jurisdiction in Kolkata, West Bengal,
                India will have exclusive jurisdiction over disputes arising from or related to these Terms,
                subject to applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">11. Changes to These Terms</h2>
              <p>
                These Terms may be updated from time to time. Continued use of the website after updates are
                published constitutes acceptance of the revised Terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
