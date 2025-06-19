import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">מדיניות פרטיות – אפליקציית "תיאוריה בדרך"</h1>
        <section className="space-y-6 text-right">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">הקדמה</h2>
            <p className="text-gray-700">
              מדיניות פרטיות זו נועדה להסביר כיצד נאסף, נשמר, נעשה שימוש ונשמר מידע הנוגע למשתמשים באפליקציית "תיאוריה בדרך" ("האפליקציה"). השימוש באפליקציה מהווה הסכמה למדיניות פרטיות זו.<br/><br/>
              המפתח של האפליקציה ("המפתח") מתחייב לפעול לשמירת פרטיות המשתמשים ככל הניתן, בהתאם לחוקי הגנת הפרטיות במדינת ישראל.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">סוגי המידע שנאספים</h2>
            <p className="text-gray-700">
              <span className="font-bold">מידע שאינו מזהה אישית (אנונימי)</span> – נתונים סטטיסטיים כלליים, כגון:<br/>
              • משך השימוש באפליקציה<br/>
              • תוצאות מבחנים ותרגולים<br/>
              • העדפות שימוש (כגון מצב כהה/בהיר)<br/>
              • נתוני קריסות ותקלות לצורכי שיפור<br/><br/>
              <span className="font-bold">מידע מזהה אישית (אם נאסף)</span> – כגון כתובת דוא"ל בעת יצירת קשר עם המפתח.<br/><br/>
              <span className="font-bold">מידע פרסומי</span> – האפליקציה כוללת שירותי פרסום של צדדים שלישיים (כגון Google AdMob), אשר עשויים לאסוף מידע אנונימי לצורך הצגת פרסומות מותאמות אישית.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">שימוש במידע</h2>
            <p className="text-gray-700">
              המידע שנאסף ישמש לצרכים הבאים בלבד:<br/>
              • תפעול תקין של האפליקציה<br/>
              • שיפור חוויית המשתמש<br/>
              • ניתוח נתונים סטטיסטיים ואנונימיים<br/>
              • מענה לפניות משתמשים<br/>
              • הצגת פרסומות רלוונטיות (באמצעות צדדים שלישיים)
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">שיתוף מידע עם צדדים שלישיים</h2>
            <p className="text-gray-700">
              המידע עשוי להיחשף לשירותים חיצוניים לצורך תפעול האפליקציה (כגון Google Firebase, AdMob).<br/><br/>
              המפתח לא מוכר, משכיר או משתף מידע אישי עם גורמים חיצוניים אלא לצורך תפעול ושיפור האפליקציה, ובהתאם לחוק.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">אבטחת מידע</h2>
            <p className="text-gray-700">
              המפתח נוקט באמצעים סבירים ומקובלים להגנה על המידע הנאסף.<br/><br/>
              עם זאת, אין באפשרותו להבטיח אבטחה מלאה מפני חדירות או גישה בלתי מורשית.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">קישורים ושירותים של צד שלישי</h2>
            <p className="text-gray-700">
              האפליקציה עשויה להכיל קישורים או פרסומות לשירותים חיצוניים. איננו אחראים לתוכן או למדיניות הפרטיות של אתרים או אפליקציות חיצוניות.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">זכויות המשתמש</h2>
            <p className="text-gray-700">
              המשתמש רשאי לפנות בכל עת ולבקש לעיין, לעדכן או למחוק מידע מזהה אישי, אם קיים.<br/><br/>
              לפניות בנושא זה ניתן ליצור קשר דרך כתובת המייל:<br/>
              <span role="img" aria-label="email">📧</span> <a href="mailto:contact.theoryapp@gmail.com" className="text-blue-600 underline">contact.theoryapp@gmail.com</a>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">שינויים במדיניות הפרטיות</h2>
            <p className="text-gray-700">
              המפתח שומר לעצמו את הזכות לעדכן מדיניות פרטיות זו בכל עת. השימוש המתמשך באפליקציה מהווה הסכמה לגרסה העדכנית של מדיניות זו.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">סמכות שיפוט</h2>
            <p className="text-gray-700">
              על מדיניות פרטיות זו יחולו חוקי מדינת ישראל, וכל מחלוקת תידון בבית המשפט המוסמך בעיר תל אביב-יפו.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
} 