'use client';

import React from 'react';
import { FaCar, FaChartLine, FaBook, FaUserTie } from 'react-icons/fa';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800">תיאוריה בדרך</h1>
            <h2 className="text-2xl md:text-3xl text-gray-700">האפליקציה שלך להצלחה בנהיגה</h2>
            <p className="text-lg text-gray-600">שלוט בכביש עם שיעורים אינטראקטיביים, מעקב התקדמות בזמן אמת וסימולציות של מבחני תיאוריה.</p>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src="/appstore-logo.svg" alt="App Store" className="w-16 h-16 hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/app-screenshot-portrait.png" alt="מוקאפ אפליקציה" className="max-w-xs md:max-w-sm h-auto rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/*<section className="bg-white py-16">*/}
      {/*  <div className="container mx-auto px-4">*/}
      {/*    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">תכונות מרכזיות</h2>*/}
      {/*    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">*/}
      {/*      {[*/}
      {/*        {*/}
      {/*          icon: <FaCar size={32} color="#2563eb" />,*/}
      {/*          title: "שיעורי נהיגה צעד אחר צעד",*/}
      {/*          description: "לימוד מובנה ומסודר של כל שלבי הנהיגה"*/}
      {/*        },*/}
      {/*        {*/}
      {/*          icon: <FaChartLine size={32} color="#2563eb" />,*/}
      {/*          title: "מעקב התקדמות בזמן אמת",*/}
      {/*          description: "צפה בהתקדמות שלך וזהה תחומים לשיפור"*/}
      {/*        },*/}
      {/*        {*/}
      {/*          icon: <FaBook size={32} color="#2563eb" />,*/}
      {/*          title: "מבחני תיאוריה ושאלות לתרגול",*/}
      {/*          description: "תרגול מקיף של כל חומרי התיאוריה"*/}
      {/*        },*/}
      {/*        // {*/}
      {/*        //   icon: <FaUserTie size={32} color="#2563eb" />,*/}
      {/*        //   title: "טיפים ממדריכי נהיגה מוסמכים",*/}
      {/*        //   description: "ייעוץ מקצועי ממיטב המדריכים"*/}
      {/*        // }*/}
      {/*      ].map((feature, index) => (*/}
      {/*        <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">*/}
      {/*          <div className="mb-4">{feature.icon}</div>*/}
      {/*          <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>*/}
      {/*          <p className="text-gray-600">{feature.description}</p>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Testimonials Section */}
      {/*<section className="py-16 bg-gray-50">*/}
      {/*  <div className="container mx-auto px-4">*/}
      {/*    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">מה אומרים המשתמשים שלנו</h2>*/}
      {/*    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">*/}
      {/*      {[*/}
      {/*        {*/}
      {/*          name: "שרה כהן",*/}
      {/*          text: "האפליקציה הזו עזרה לי לעבור את המבחן בפעם הראשונה!",*/}
      {/*          avatar: "/avatar1.jpg"*/}
      {/*        },*/}
      {/*        {*/}
      {/*          name: "דוד לוי",*/}
      {/*          text: "התרגול האינטראקטיבי עשה את כל ההבדל. ממליץ בחום!",*/}
      {/*          avatar: "/avatar2.jpg"*/}
      {/*        },*/}
      {/*        {*/}
      {/*          name: "מיכל אברהם",*/}
      {/*          text: "המעקב אחר ההתקדמות שלי עזר לי להתמקד בנקודות החלשות",*/}
      {/*          avatar: "/avatar3.jpg"*/}
      {/*        }*/}
      {/*      ].map((testimonial, index) => (*/}
      {/*        <div key={index} className="bg-white p-6 rounded-xl shadow-md">*/}
      {/*          <div className="flex items-center mb-4">*/}
      {/*            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>*/}
      {/*            <h3 className="text-lg font-semibold">{testimonial.name}</h3>*/}
      {/*          </div>*/}
      {/*          <p className="text-gray-600">{testimonial.text}</p>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* FAQ Section */}
      {/*<section className="py-16 bg-white">*/}
      {/*  <div className="container mx-auto px-4">*/}
      {/*    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">שאלות נפוצות</h2>*/}
      {/*    <div className="max-w-3xl mx-auto space-y-6">*/}
      {/*      {[*/}
      {/*        {*/}
      {/*          question: "האם האפליקציה מתאימה למתחילים?",*/}
      {/*          answer: "כן, האפליקציה מותאמת במיוחד למתחילים ומציעה מסלול למידה הדרגתי ומותאם אישית."*/}
      {/*        },*/}
      {/*        {*/}
      {/*          question: "האם אפשר לעקוב אחרי ההתקדמות שלי?",*/}
      {/*          answer: "כן, המערכת מציגה דוחות מפורטים על ההתקדמות שלך, כולל סטטיסטיקות וניתוח ביצועים."*/}
      {/*        },*/}
      {/*        {*/}
      {/*          question: "האם יש חומרים שמתאימים למבחן התיאוריה הרשמי?",*/}
      {/*          answer: "כן, כל החומרים באפליקציה מעודכנים ועומדים בדרישות הרשמיות של משרד התחבורה."*/}
      {/*        }*/}
      {/*      ].map((faq, index) => (*/}
      {/*        <div key={index} className="bg-gray-50 p-6 rounded-xl">*/}
      {/*          <h3 className="text-xl font-semibold mb-2 text-gray-800">{faq.question}</h3>*/}
      {/*          <p className="text-gray-600">{faq.answer}</p>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">תיאוריה בדרך</h3>
              <p className="text-gray-400">האפליקציה שלך להצלחה בנהיגה</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">קישורים מהירים</h4>
              <ul className="space-y-2">
                <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">מדיניות פרטיות</a></li>
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">תנאי שימוש</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">צור קשר</a></li>
              </ul>
            </div>
            {/*<div>*/}
            {/*  <h4 className="text-lg font-semibold mb-4">עקבו אחרינו</h4>*/}
            {/*  <div className="flex space-x-4 space-x-reverse">*/}
            {/*    <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram size={24} /></a>*/}
            {/*    <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaFacebook size={24} /></a>*/}
            {/*    <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTiktok size={24} /></a>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} תיאוריה בדרך. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 