import React from 'react';

export default function ContactPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">צור קשר</h1>
        <p className="text-lg text-gray-700 mb-4">לכל שאלה, פנייה או הצעה – מוזמנים לפנות אלינו במייל:</p>
        <a href="mailto:contact.theoryapp@gmail.com" className="text-blue-600 text-xl font-bold underline break-all">contact.theoryapp@gmail.com</a>
      </div>
    </main>
  );
} 