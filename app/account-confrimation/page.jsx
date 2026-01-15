import { authUser } from "@/lib/getUser";
import { MailCheck } from "lucide-react";
import { redirect } from "next/navigation";
import VerifyInput from "./component/VerifyInput";

export default async function AccountConfrimationPage({ searchParams }) {
  const params = await searchParams;
  const email = params.email;
  console.log(email);
  const currentUser = await authUser();

  if (!currentUser || currentUser.role !== "superadmin")
    redirect("/unauthorized");

  // RESEND ACTIVATION CODE

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 sm:p-10 border border-gray-100 text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-linear-to-br from-green-100 to-emerald-100 p-3">
              <MailCheck className="w-16 h-16 text-green-600" strokeWidth={2} />
            </div>
          </div>

          <h1 className="text-lg font-bold text-gray-900 mb-3">
            Confrim your email address
          </h1>

          <div>
            <p className="text-md text-gray-600 mb-1.5">
              An email containing a four digit verification code has been sent
              to:
            </p>
            <span className="font-semibold">{email}</span>
          </div>

          <p className="text-md text-gray-600 mt-2 mb-3">
            check your email and enter it below:
          </p>

          {/* DISPLAY EMAIL */}
          <div className="my-4 flex justify-center">
            <VerifyInput email={email} />
          </div>
        </div>
      </div>
    </div>
  );
}
