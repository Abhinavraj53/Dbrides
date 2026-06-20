import { ArrowLeft, Mail, ShieldCheck, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function AccountDeletion() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <section className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
              <Trash2 size={28} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Delete your Qrides account</h1>
              <p className="text-gray-600 mt-1">For Qrides Rider and Qrides Captain</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h2>Delete your account in the app</h2>
            <ol>
              <li>Open Qrides Rider or Qrides Captain and sign in.</li>
              <li>Open your Account or Settings screen.</li>
              <li>Select <strong>Delete Account</strong> and confirm the request.</li>
            </ol>

            <h2>Request deletion if you cannot access the app</h2>
            <p>
              Email us from the email address associated with your Qrides account. Include
              whether you use the Rider or Captain app and your registered phone number with
              country code. Do not send your password, OTP, card details, or identity documents.
            </p>

            <a
              href="mailto:support@qrides.in?subject=Qrides%20account%20deletion%20request&body=App%3A%20Rider%20or%20Captain%0ARegistered%20phone%20with%20country%20code%3A%0ARegistered%20email%3A"
              className="not-prose inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              <Mail size={20} />
              Email deletion request
            </a>

            <div className="not-prose mt-8 rounded-2xl bg-blue-50 border border-blue-100 p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Data deleted:</strong> Your account and personal profile data,
                    after account ownership is verified.
                  </p>
                  <p>
                    <strong>Data that may be retained:</strong> Limited transaction, payout,
                    safety, fraud-prevention, dispute, tax, or legal records where retention is
                    required by law. These records are deleted or anonymised when no longer required.
                  </p>
                </div>
              </div>
            </div>

            <p>
              We may contact you to verify account ownership before processing your request.
              For help, contact <a href="mailto:support@qrides.in">support@qrides.in</a>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AccountDeletion;
