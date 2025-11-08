import React from 'react';

const PhysicsChapter2: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Font loading for Hind Siliguri */}
      

      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <header className="text-center py-10 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
          <h1 className="text-4xl font-extrabold tracking-tight">
            নবম-দশম শ্রেণি – পদার্থবিজ্ঞান – দ্বিতীয় অধ্যায়: গতি
          </h1>
          <p className="text-lg mt-3 font-medium">তাহমিদ হাসান মুত্তাকী</p>
          <p className="text-base mt-1">
            April 21, 2022 (তাত্ত্বিক অংশ), April 27, 2022 (গাণিতিক অংশ)
          </p>
          <p className="text-base font-semibold">এসএসসি পদার্থবিজ্ঞান</p>
        </header>

        {/* Theory Section */}
        <section className="p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-300 dark:border-blue-700 pb-2">
            তাত্ত্বিক অংশ
          </h2>

          {/* Embedded YouTube Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src="https://www.youtube.com/embed/95j0_czpk08"
                title="Physics Chapter 2 Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src="https://www.youtube.com/embed/kv2BVdvOGvk"
                title="Physics Chapter 2 Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              স্থিতি বা গতির ধারণাটা বেশ সহজে আমরা চিন্তা করতে পারি। সময়ের সাথে অবস্থান পরিবর্তন না হওয়াকে স্থিতি আর পরিবর্তন হওয়াকে গতি বলে। সহজ কথায় স্থিতি আর গতির ধারণা এখানে পাওয়া যায়, কিন্তু একটাই সমস্যা, তা হলো ধারণাটা সম্পূর্ণ নয়, অন্তত পদার্থবিজ্ঞানের জন্য তো নয়ই!
            </p>
            <p>
              চিন্তা কর, চলন্ত ট্রেনের ভেতরে থাকা তোমার সাপেক্ষে তোমার পাশের যাত্রীকে যদিও স্থির মনে হবে, ট্রেনের বাইরে থাকা কারো কাছে কিন্তু তিনি হবেন গতিশীল। আবার ট্রেনের জানালা দিয়ে দেখার সময় তোমার কাছে মনে হবে বাইরের গাছগুলো যেন কত দ্রুত দৃষ্টিসীমার আড়ালে চলে যাচ্ছে, অথচ ট্রেনের বাইরে মাঠে দাঁড়িয়ে থাকা একজন দেখবেন গাছগুলো ঠিক ঠিক তার জায়গায় দাঁড়িয়ে আছে, যেভাবে ছিলো বহুকাল ধরে!
            </p>
            <p>
              তাহলে আমাদের সংজ্ঞাতে আরেকটু সংশোধন আনা প্রয়োজন। স্থিতি ও গতির সংজ্ঞা এভাবে দেয়া যায়:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>স্থিতি:</strong> প্রসঙ্গ বিন্দু বা প্রসঙ্গ কাঠামোর সাপেক্ষে সময়ের সাথে অবস্থানের পরিবর্তন না হওয়াকে স্থিতি বলে।</li>
              <li><strong>গতি:</strong> প্রসঙ্গ বিন্দু বা প্রসঙ্গ কাঠামোর সাপেক্ষে সময়ের সাথে অবস্থানের পরিবর্তন হওয়াকে গতি বলে।</li>
            </ul>
            <p>
              এখানে প্রসঙ্গ বিন্দু বা প্রসঙ্গ কাঠামো কথাটাও বোঝা প্রয়োজন। যে বিন্দু বা কাঠামোর সাপেক্ষে কোন বস্তুর অবস্থা বা অবস্থান পরিমাপ করা হয়, তাকে প্রসঙ্গ বিন্দু বা প্রসঙ্গ কাঠামো বলে।
            </p>
            <p>
              স্থিতি বা গতি দুরকম হতে পারে, পরম ও আপেক্ষিক।
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>পরম স্থিতি বা পরম গতি:</strong> প্রকৃত অর্থে স্থির কোন প্রসঙ্গ বিন্দুর সাপেক্ষে স্থিতি বা গতিকে পরম স্থিতি বা পরম গতি বলে।</li>
              <li><strong>আপেক্ষিক স্থিতি বা আপেক্ষিক গতি:</strong> প্রকৃত অর্থে স্থির নয়, এমন কোন প্রসঙ্গ বিন্দুর সাপেক্ষে স্থিতি বা গতিকে পরম স্থিতি বা পরম গতি বলে।</li>
            </ul>
            <p>
              সমস্যা হলো প্রকৃত অর্থে স্থির বলতে কিছু আদতে হয় না। কোন পর্যবেক্ষকের কাছে যা স্থির, অন্য পর্যবেক্ষকের কাছে তা গতিশীল। তাই পরম স্থিতি বা পরম গতির অস্তিত্ব মহাবিশ্বে নেই। মহাবিশ্বে সকল গতি-ই আপেক্ষিক গতি।
            </p>

            <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">বিভিন্ন প্রকার গতি</h3>
            <p>
              গতির প্রকারভেদ অনেকরকম হতে পারে। তোমাদের বইয়ে আলোচিত গুরুত্বপূর্ণ কিছু প্রকার হলো-
            </p>
            <ul className="list-disc pl-6 space-y-2 bg-gray-50 p-4 rounded-lg">
              <li><strong>সরলরৈখিক গতি বা Linear Motion:</strong> সরলরেখায় চলা কোন কিছুর গতিকে সরলরৈখিক গতি বলে। যেমন, সোজা নিচে পড়ন্ত বস্তুর গতি।</li>
              <li><strong>ঘূর্ণন গতি বা Circular Motion:</strong> একটি নির্দিষ্ট বিন্দুকে কেন্দ্র করে সমদূরত্বে থেকে চলতে থাকা কোন কিছুর গতিকে ঘূর্ণন গতি বলে। যেমন- ঘড়ির কাঁটার গতি, বৈদ্যুতিক পাখার গতি বা চাঁদের গতি।</li>
              <li><strong>চলন গতি বা Transitional Motion:</strong> কোন বস্তু যদি এমনভাবে চলতে থাকে, যেন প্রতিটি বস্তুকণা একই সময়ে একই দিকে যেতে থাকে, তাহলে সেটা চলন গতি। যেমন, সরলপথে চলমান গাড়ির গতি, অবশ্যই চাকা ব্যতীত।</li>
              <li><strong>পর্যায়বৃত্ত গতি বা Periodic Motion:</strong> গতিশীল বস্তু যদি গতিপথের নির্দিষ্ট কোন বিন্দুকে একটি নির্দিষ্ট সময় পরপর একই দিক থেকে অতিক্রম করে, তবে এর গতিকে পর্যায়বৃত্ত গতি বলে।</li>
              <li><strong>সরল স্পন্দন গতি বা Simple Harmonic Motion:</strong> পর্যাবৃত্ত গতিসম্পন্ন বস্তুর যাত্রা যদি স্থির অবস্থায় শুরু হয়ে ধীরে ধীরে গতিশীল হয়ে কেন্দ্রবিন্দুতে সর্বোচ্চ গতিতে পৌঁছায়, এরপর গতি ধীরে ধীরে কমে একটা সময় থেমে গিয়ে পুনরায় বিপরীত দিকে গতিশীল হয় এবং এভাবে পুনরাবৃত্তি ঘটতে থাকে, তবে তার গতিকে সরল স্পন্দন গতি বলে।</li>
            </ul>
            <div className="my-6 transform transition-transform hover:scale-105">
              <img src="/images/transitional-motion.png" alt="Transitional Motion Diagram" className="w-full h-auto rounded-lg shadow-md" />
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-2">চলন গতির চিত্র</p>
            </div>

            <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">স্কেলার রাশি ও ভেক্টর রাশি</h3>
            <p>
              প্রথম অধ্যায়ে আমরা রাশি সম্পর্কে জেনেছি। একক ও মাত্রাসহ রাশির ধারণা ভালোভাবে না থাকলে প্রথম অধ্যায়টা আগে দেখে নিও।
            </p>
            <ul className="list-disc pl-6 space-y-2 bg-gray-50 p-4 rounded-lg">
              <li><strong>স্কেলার রাশি:</strong> যে রাশি প্রকাশের জন্য শুধু মান প্রয়োজন হয়। যেমন- দূরত্ব, দ্রুতি, ভর, কাজ প্রভৃতি।</li>
              <li><strong>ভেক্টর রাশি:</strong> যে রাশি প্রকাশের জন্য মান ও দিক উভয়ই প্রয়োজন হয়। যেমন- সরণ, বেগ, ওজন, বল প্রভৃতি।</li>
            </ul>
            <p>
              এখন একটা ফান ফ্যাক্ট শেয়ার করি। দুটো স্কেলার রাশির গুণফল সবসময়ই স্কেলার, স্কেলার রাশির সাথে ভেক্টর রাশির গুণফল সবসময়ই ভেক্টর, কিন্তু দুটো ভেক্টর রাশির গুণফল স্কেলারও হতে পারে, আবার ভেক্টরও হতে পারে।
            </p>
            <div className="my-6 transform transition-transform hover:scale-105">
              <img src="/images/vector-comparison.png" alt="Vector Comparison Diagram" className="w-full h-auto rounded-lg shadow-md" />
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-2">ভেক্টর তুলনার চিত্র</p>
            </div>

            <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">দূরত্ব (Distance) ও সরণ (Displacement)</h3>
            <p>
              দূরত্ব আর সরণের পার্থক্য হলো দূরত্ব স্কেলার রাশি, আর দূরত্ব ভেক্টর রাশি। দুটোকে একই প্রতীক দ্বারা প্রকাশ করা হয়, মাত্রা ও একক অভিন্ন।
            </p>
            <ul className="list-disc pl-6 space-y-2 bg-gray-50 p-4 rounded-lg">
              <li><strong>দূরত্ব:</strong> গতিশীল বস্তুকণার গতিপথের মোট দৈর্ঘ্য হলো দূরত্ব। প্রতীক: s, SI একক: m, মাত্রা: L</li>
              <li><strong>সরণ:</strong> গতিশীল বস্তুকণার আদি অবস্থান ও শেষ অবস্থানের মধ্যবর্তী সরলরৈখিক দূরত্বকে সরণ বলে। প্রতীক: s⃗, SI একক: m, মাত্রা: L</li>
            </ul>
            <div className="my-6 transform transition-transform hover:scale-105">
              <img src="/images/distance-displacement.png" alt="Distance vs Displacement Diagram" className="w-full h-auto rounded-lg shadow-md" />
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-2">দূরত্ব ও সরণের চিত্র</p>
            </div>

            <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">দ্রুতি (Speed) ও বেগ (Velocity)</h3>
            <ul className="list-disc pl-6 space-y-2 bg-gray-50 p-4 rounded-lg">
              <li><strong>দ্রুতি:</strong> দূরত্ব অতিক্রমের হারকে দ্রুতি বলে। প্রতীক: v, একক: ms-1, মাত্রা: LT-1</li>
              <li><strong>বেগ:</strong> সরণের হারকে বেগ বলে। প্রতীক: v⃗, একক: ms-1, মাত্রা: LT-1</li>
            </ul>
            <p>
              সুষম দ্রুতি ও অসম দ্রুতি: বস্তুকণার যাত্রাপথের পুরো সময়ে একই দ্রুতি বজায় থাকলে তাকে সুষম দ্রুতি বা সম দ্রুতি, বজায় না থাকলে তাকে অসম দ্রুতি বলে।
            </p>

            <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">চিন্তা কর…</h3>
            <p>
              এখন কিছু প্রশ্ন, প্রথমে ভেবেচিন্তে নিজে উত্তর দেয়ার চেষ্টা কর, প্রয়োজনে ক্যালকুলেটর হাতে নেও।
            </p>
            <ol className="list-decimal pl-6 space-y-2 bg-gray-50 p-4 rounded-lg">
              <li>রাতুল একটি 3m ব্যাসার্ধের বৃত্তাকার পথে ১২ সেকেন্ডে ঘুরে আসলো। তার গড় বেগ কত? সুষম দ্রুতিতে চললে ৬ সেকেন্ডের সময় তার তাৎক্ষণিক বেগ কত?</li>
              <li>আঁকাবাঁকা বা বৃত্তাকার পথে সুষম দ্রুতিতে চলা সম্ভব, কিন্তু সুষম বেগে চলা সম্ভব না! কেন?</li>
            </ol>
            <p>
              প্রথম প্রশ্নে বৃত্তাকার পথ ঘুরে আসলে সরণ ০, তাই গড় বেগ ০। সুষম দ্রুতিতে চললে তাৎক্ষণিক বেগ 1.57 ms-1। দ্বিতীয় প্রশ্নে, আঁকাবাঁকা পথে দিক পরিবর্তনের কারণে বেগ সুষম থাকা সম্ভব না।
            </p>
            <div className="my-6 transform transition-transform hover:scale-105">
              <img src="/images/string-motion.png" alt="String Motion Diagram" className="w-full h-auto rounded-lg shadow-md" />
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-2">সুতোয় বাঁধা পাথরের গতির চিত্র</p>
            </div>

            <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">ত্বরণ (Acceleration) ও মন্দন (Deceleration)</h3>
            <ul className="list-disc pl-6 space-y-2 bg-gray-50 p-4 rounded-lg">
              <li><strong>ত্বরণ:</strong> বেগ বৃদ্ধির হার বা পরিবর্তনের হারকে ত্বরণ বলে।</li>
              <li><strong>মন্দন:</strong> ঋণাত্মক ত্বরণ তথা বেগ হ্রাসের হারকে মন্দন বলে।</li>
            </ul>
            <p>
              ত্বরণ বা মন্দন a দ্বারা প্রকাশ করা হয় (ভেক্টরের ক্ষেত্রে a⃗), একক: ms-2, মাত্রা: LT-2।
            </p>

            <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">মহাকর্ষ ও অভিকর্ষ বলের ধারণা</h3>
            <ul className="list-disc pl-6 space-y-2 bg-gray-50 p-4 rounded-lg">
              <li><strong>মহাকর্ষ বল:</strong> মহাবিশ্বের প্রতিটি বস্তু পরস্পরকে আকর্ষণ করে। এই আকর্ষণ বলকে মহাকর্ষ বল বলে।</li>
              <li><strong>অভিকর্ষ বল:</strong> পৃথিবী কোন বস্তুকে যে বলে আকর্ষণ করে, তাকে অভিকর্ষ বল বলে।</li>
              <li><strong>অভিকর্ষজ ত্বরণ:</strong> অভিকর্ষ বলের কারণে বস্তুতে সৃষ্ট ত্বরণকে মাধ্যাকর্ষণজনিত ত্বরণ বলে। পৃথিবীপৃষ্ঠের কাছাকাছি এর মান 9.8 ms-1।</li>
            </ul>
          </div>
        </section>

        {/* Math Section - Combined with existing content */}
        <section className="p-8 bg-gray-50">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b-2 border-blue-300 dark:border-blue-700 pb-2">
            গাণিতিক অংশ
          </h2>
          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              শুরুতে আমাদের কিছু প্রতীকের সাথে পরিচিত হতে হবে, যা আমরা গাণিতিক সূত্রগুলো প্রকাশের জন্য ব্যবহার করব। এই অধ্যায়ের জন্য আমাদের যে প্রতীকগুলো দরকার হবে-
            </p>
            <ul className="list-disc pl-6 space-y-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <li><strong>ত্বরণ থাকলে:</strong>
                <ul className="list-circle pl-6 space-y-1">
                  <li>আদিবেগ (যাত্রা শুরুতে বেগ), u</li>
                  <li>শেষবেগ (যাত্রা শেষে বেগ), v</li>
                  <li>গড়বেগ, V</li>
                </ul>
              </li>
              <li><strong>সমবেগে চললে:</strong>
                <ul className="list-circle pl-6 space-y-1">
                  <li>সমবেগ, v</li>
                </ul>
              </li>
              <li>সরণ, s</li>
              <li>ত্বরণ, a</li>
              <li>সময়, t</li>
            </ul>
            <p>
              লক্ষ্য কর, আমি কোন ভেক্টর চিহ্ন ব্যবহার করিনি। কারণ তোমাদের শ্রেণিতে বাস্তবিক অর্থে ভেক্টর নিয়ে কাজ করা হয় না। শুধু ভেক্টরের ক্ষেত্রে যাত্রাপথের সরলরৈখিক দৈর্ঘ্য ও স্কেলারের ক্ষেত্রে মোট দৈর্ঘ্য নিতে হবে এবং ভেক্টরের বেলায় বেগ, সরণ আর স্কেলারের বেলায় দ্রুতি, দূরত্ব কথাগুলো ব্যবহার হবে। প্রতীক একটি থাকবে।
            </p>
            <p>
              আরেকটি বিষয়, এই অধ্যায়ে আমরা মূলত ৫টা রাশি নিয়ে কাজ করি। আদিবেগ, শেষবেগ, সরণ, ত্বরণ ও সময়। সমবেগে চলার ক্ষেত্রে ত্বরণের মান ০ হয়, আর আদিবেগ ও শেষবেগ সমান হয়ে যায়, যেটাকে সমবেগ বলছি। তো এই ৫টা রাশি এমনভাবে সম্পর্কযুক্ত যে যেকোন ৩টা জানা থাকলে বাকি ২টা নির্ণয় করা যায়।
            </p>
            <p>
              তার আগে প্রতীকের ব্যবহার বোঝার জন্য একটা উদাহরণ দেয়া যাক। একটা গাড়ি স্থির অবস্থা থেকে যাত্রা শুরু করে 2 ms-2 সমত্বরণে 2.5 ms-1 গড়বেগে ৫ সেকেন্ড সময়ে 25 m দূরত্ব অতিক্রম করে 10 ms-1 বেগে উপনীত হলো। তাহলে,
            </p>
            <ul className="list-disc pl-6 space-y-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <li>আদিবেগ, u = 0 (যেহেতু শুরুতে স্থির ছিলো)</li>
              <li>শেষবেগ, v = 10 ms-1</li>
              <li>গড়বেগ, V = 2.5 ms-1</li>
              <li>সরণ, s = 25 m</li>
              <li>ত্বরণ, a = 2 ms-2</li>
              <li>সময়, t = 5 s</li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">সূত্রগুলো</h3>
            <p>
              এখন আমরা পর্যায়ক্রমে সূত্রগুলো দেখবো। সৃজনশীল পদ্ধতিতে সূত্রের প্রতিপাদন সাধারণভাবে পরীক্ষায় দেয়া হয় না, তবে যদি সূত্রগুলো কীভাবে এসেছে তা না বোঝো, তাহলে তোমার কনসেপ্টে বড় ঘাটতি যেমন থেকে যাবে, তেমনি পদার্থবিজ্ঞান পড়ায় যে আনন্দ থাকতে পারে, তা তুমি উপলদ্ধি করতে পারবে না।
            </p>
            <ul className="list-decimal pl-6 space-y-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <li><strong>সমবেগে ও গড়বেগে চলমান বস্তুর t সময়ে সরণ নির্ণয়:</strong> s = vt বা s = Vt</li>
              <li><strong>সমত্বরণে চলমান বস্তুর t সময় পর বেগ নির্ণয়:</strong> v = u + at</li>
              <li><strong>সমত্বরণে চলমান বস্তুর t সময়ে গড়বেগ নির্ণয়:</strong> V = (u + v)/2 = u + ½ at</li>
              <li><strong>সমত্বরণে চলমান বস্তুর t সময়ে সরণ নির্ণয়:</strong> s = ut + ½ at²</li>
              <li><strong>সমত্বরণে চলমান বস্তুর ক্ষেত্রে সময়বিহীন সূত্র:</strong> v² = u² + 2as</li>
            </ul>
            <p>
              সর্বাধিক প্রয়োজনীয় সূত্র:
            </p>
            <ol className="list-decimal pl-6 space-y-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <li>s = vt বা s = Vt</li>
              <li>v = u + at</li>
              <li>s = ut + ½ at²</li>
              <li>v² = u² + 2as</li>
            </ol>
            <p>
              একটা অঙ্ক দেখা যাক, একটা গাড়ি পশ্চিম দিকে 25 ms-1 বেগে যাচ্ছে এবং পূর্ব দিকে এর ত্বরণ 5 ms-2। কত সময় পর গাড়িটির বেগ পূর্ব দিকে 35 ms-1 হবে?
            </p>
            <p className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
              সমাধান: v = u + at, t = 12 s
            </p>

            <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">লেখচিত্র</h3>
            <p>
              সাধারণত লেখচিত্রে স্বাধীন চলককে X অক্ষ ও অধীন চলককে Y অক্ষে নেয়া হয়। গতি সংক্রান্ত ক্ষেত্রে সাধারণত স্বাধীন চলক হয় সময় এবং অধীন চলক হয় বেগ বা সরণ প্রভৃতি।
            </p>
            <div className="my-6 transform transition-transform hover:scale-105">
              <img src="/images/velocity-time-graph.png" alt="Velocity-Time Graph" className="w-full h-auto rounded-lg shadow-md" />
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-2">বেগ-সময় লেখচিত্র</p>
            </div>

            <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">পড়ন্ত বস্তুর সূত্র</h3>
            <p>
              পড়ন্ত বস্তুর জন্য গ্যালিলিও তিনটি সূত্র দিয়েছেন:
            </p>
            <ol className="list-decimal pl-6 space-y-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <li>v = u + gt</li>
              <li>h = ut + ½ gt²</li>
              <li>v² = u² + 2gh</li>
            </ol>
            <p>
              একটা অঙ্ক: একটা বস্তুকে 100 m উঁচু দালান থেকে 10 ms-1 বেগে ওপরের দিকে ছুঁড়ে দেয়া হলো। কত সময় পর কত বেগে এটি ভূমিতে পড়বে?
            </p>
            <p className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
              সমাধান: t = 5.65 s, v = 45.37 ms-1
            </p>

            <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">সাধারণ প্রশ্ন</h3>
            <p>
              বেশ চমৎকার কিছু প্রশ্ন। প্রথম প্রশ্নটার একটা চমৎকার উদাহরণ কিন্তু এরমধ্যেই আলোচনা হয়ে গেছে, খেয়াল করেছ কি? সোজা ওপরে ছুঁড়ে দেয়া বস্তু সর্বোচ্চ উচ্চতায় পৌঁছালে বেগ সেই মুহুর্তে ০ থাকে, কিন্তু অভিকর্ষজ ত্বরণ g কিন্তু পুরো যাত্রাপথেই বজায় থাকে।
            </p>

            <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">গাণিতিক প্রশ্ন</h3>
            <p>
              প্রথম সমস্যাটা গ্রাফ থেকে বোঝা সহজ।
            </p>
            <div className="my-6 transform transition-transform hover:scale-105">
              <img src="/images/distance-graph.png" alt="Distance Graph" className="w-full h-auto rounded-lg shadow-md" />
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-2">দূরত্ব গ্রাফ</p>
            </div>

            <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">আরো প্রশ্ন</h3>
            <ol className="list-decimal pl-6 space-y-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <li>একটি গ Più

System: গাড়ি স্থির অবস্থান থেকে প্রথমে 4 ms-1 সমত্বরণে যাত্রা করে 20 ms-1 বেগ প্রাপ্ত হলো। পরবর্তী 40 m গাড়িটি সমবেগে চললো। এরপর 10 s-এ গাড়িটি সমমন্দনে চলে স্থির হলো। মোট সরণ কত? মোট কত সময় গাড়িটি যাত্রা করে?
                <p className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                  সমাধান: মোট সরণ = 190 m, মোট সময় = 17 s
                </p>
              </li>
              <li>প্রতি তলা 3 m উচ্চতার ১২ তলা দালানের ছাদ থেকে ওপরের দিকে একটি বল 10 ms-1 ছুঁড়ে দেয়া হলো। ১ সেকেন্ড পরে তৃতীয় তলা থেকে 60 ms-1 বেগে অপর একটি বল ওপরের দিকে ছোঁড়া হলো। বল দুটি মিলিত হবে কী? হলে কত সময় পর?
                <p className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                  সমাধান: বল দুটি মিলিত হবে 0.483 s পরে, 33.6869 m উচ্চতায়।
                </p>
              </li>
            </ol>
          </div>
          {/* Remaining content from previous version of PhysicsChapter2.tsx (mathematical sections) */}
          <main className="max-w-4xl mx-auto space-y-10">

            {/* Section: প্রসঙ্গ কাঠামো */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                প্রসঙ্গ কাঠামো
              </h2>
              <p className="mb-4 leading-relaxed">
                কোনো বস্তুর গতির বর্ণনার জন্য ত্রিমাত্রিক স্থানে সুনির্দিষ্ট স্থানাঙ্ক ব্যবস্থা বিবেচনা করা হয় এবং যার সাপেক্ষে বস্তুটির গতি বর্ণনা করা হয় তাকে <strong className="text-blue-600">প্রসঙ্গ কাঠামো</strong> বলে।
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>প্রসঙ্গ কাঠামোর সাপেক্ষে যদি বস্তুর অবস্থানের পরিবর্তন হয় গতি</li>
                <li>পরিবর্তন না হয় স্থিতি</li>
              </ul>
            </section>

            {/* Section: স্থিতি এবং গতি */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                স্থিতি এবং গতি
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong className="text-blue-600">আপেক্ষিক গতি/স্থিতি:</strong> প্রসঙ্গ কাঠামো গতিশীল</li>
                <li><strong className="text-blue-600">পরম গতি/স্থিতি:</strong> প্রসঙ্গ কাঠামো স্থির</li>
                <li>সকল গতিই আপেক্ষিক গতি।</li>
              </ul>
            </section>

            {/* Section: গতির প্রকারভেদ */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                গতির প্রকারভেদ
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>সরলরৈখিক গতি</li>
                <li>ঘূর্ণন গতি</li>
                <li>চলন গতি</li>
                <li>পর্যায়বৃত্ত গতি</li>
                <li>সরল স্পন্দন গতি</li>
              </ul>
            </section>

            {/* Section: বিভিন্ন প্রকার গতির ব্যাখ্যা */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                বিভিন্ন প্রকার গতির ব্যাখ্যা
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-blue-600 mb-2">সরলরৈখিক গতি:</h3>
                <p className="text-gray-700 dark:text-gray-300">কোনো কিছু যদি সোজা সরলরেখায় যায় তখন তার গতিকে সরলরৈখিক গতি বলে।</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-blue-600 mb-2">চলন গতি:</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">চলার দিক একই থাকে।</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>কণার দিক পরিবর্তন করে চলে - চলন গতি নয়।</li>
                  <li>চিত্র ১: চলন গতি নয়।</li>
                  <li>চিত্র ২: চলন গতি।</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-blue-600 mb-2">ঘূর্ণন গতি:</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">কোনো কিছু যদি একটি নির্দিষ্ট বিন্দুর সমদূরত্বে থেকে ঘুরতে থাকে তাহলে সেটাকে ঘূর্ণন গতি বলে।</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>যেমন: বৈদ্যুতিক পাখা, ঘড়ির কাঁটা, আকাশের চাঁদ ইত্যাদি।</li>
                  <li>ঘূর্ণন গতি বিশেষ পর্যায়বৃত্ত গতি।</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-blue-600 mb-2">পর্যায়বৃত্ত গতি:</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">কোনো গতিশীল বস্তু যদি নির্দিষ্ট সময় পরপর একটি নির্দিষ্ট বিন্দু দিয়ে একই দিকে একইভাবে অতিক্রম করে তাহলে সেটাকে পর্যায়বৃত্ত গতি বলে।</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>পর্যায়বৃত্ত গতিতে সময় একই থাকে।</li>
                  <li>পর্যায়বৃত্ত গতি বিশেষ ধরনের স্পন্দন গতি।</li>
                  <li>ঘড়ির কাঁটা বিশেষ ধরনের পর্যায়বৃত্ত গতি।</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-blue-600 mb-2">স্পন্দন গতি:</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">পর্যায়বৃত্ত গতিসম্পন্ন কোনো বস্তু যদি পর্যায়কালের অর্ধেক সময় কোনো নির্দিষ্ট দিকে বাকি অর্ধেক সময় যদি তার পূর্বগতির বিপরীত দিকে চলে তবে তার গতিকে সরল স্পন্দন গতি বলে।</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>যেমন: দোলনা, ঘড়ির পেন্ডুলাম ইত্যাদি।</li>
                </ul>
              </div>
            </section>

            {/* Section: রাশি (যা কিছু পরিমাপযোগ্য) */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                রাশি (যা কিছু পরিমাপযোগ্য)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong className="text-blue-600">ভেক্টর রাশি (সদিক রাশি):</strong> দিক + মান</li>
                <li><strong className="text-blue-600">স্কেলার রাশি (অদিক রাশি):</strong> শুধু মান</li>
              </ul>
            </section>

            {/* Section: দূরত্ব এবং সরণ */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                দূরত্ব এবং সরণ
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>দূরত্ব হচ্ছে স্কেলার রাশি।</li>
                <li>সরণ হচ্ছে ভেক্টর রাশি।</li>
                <li>ভেক্টর রাশি সমান হতে হলে তার মান ও দিক একই হতে হবে।</li>
                <li><strong className="text-blue-600">দূরত্ব:</strong> হুবহু যে পথে গিয়েছে সে পথ।</li>
                <li><strong className="text-blue-600">সরণ:</strong> আদি ও শেষ বিন্দু সরলরেখা দ্বারা যোগ।</li>
              </ul>

              <div className="mt-4 text-center">
                <h3 className="text-xl font-medium text-purple-700 mb-2">উদাহরণ:</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-1">বাসা (A) থেকে স্কুল (D) পর্যন্ত পথ ABCDE।</p>
                <p className="text-gray-700 dark:text-gray-300 mb-1">দূরত্ব = AB+BC+CD</p>
                <p className="text-gray-700 dark:text-gray-300">সরণ = AD'</p>
                <p className="text-sm text-gray-500 italic mt-2">
                    (মূল ডকুমেন্টে বাসা এবং স্কুলের চিত্র ছিল)
                </p>
              </div>
            </section>

            {/* Section: সমস্যা ২ (দ্রুতি ও বেগ) */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">
                সমস্যা ২: দ্রুতি ও বেগ
              </h2>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                A থেকে B তে এবং B থেকে C তে। সময় = 10s
              </p>

              <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-4">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">গণনা:</h3>
                <p className="mb-2">
                  <span className="font-semibold">দূরত্ব =</span> AB + BC = 3m + 4m = <span className="font-bold text-green-700">7m</span>
                </p>
                <p className="mb-2">
                  <span className="font-semibold">সরণ AC =</span> (AB<sup>2</sup> + BC<sup>2</sup>)<sup>1/2</sup> = (3<sup>2</sup> + 4<sup>2</sup>)m<sup>1/2</sup> = (9+16)<sup>1/2</sup>m = (25)<sup>1/2</sup>m = <span className="font-bold text-green-700">5m</span>
                </p>
                <p className="mb-2">
                  <span className="font-semibold">দ্রুতি =</span> দূরত্ব / সময় = 7m / 10s = <span className="font-bold text-green-700">0.7 ms⁻¹</span>
                </p>
                <p className="mb-2">
                  <span className="font-semibold">বেগ =</span> সরণ / সময় = 5m / 10s = <span className="font-bold text-green-700">0.5 ms⁻¹</span>
                </p>
              </div>
              <p className="text-sm text-gray-500 italic mt-2">
                  (মূল ডকুমেন্টে A, B, C বিন্দুর সাথে একটি ত্রিভুজের চিত্র ছিল)
              </p>
            </section>

            {/* Section: সমস্যা ৩ (দূরত্ব ও সরণ) */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">
                সমস্যা ৩: দূরত্ব ও সরণ
              </h2>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                A-B-E-C-O এই পথে O বিন্দুতে যেতে সময় লাগে $t$।
              </p>
              <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-4">
                <p className="mb-2">
                  <span className="font-semibold">সরণ =</span> AO = <span className="font-bold text-green-700">2m</span>
                </p>
                <p className="mb-2">
                  <span className="font-semibold">দূরত্ব =</span> AB + BEC + CO = (2πr / 4) + (2<sup>2</sup> + 2<sup>2</sup>)<sup>1/2</sup> + 2
                </p>
                <p className="mb-2">
                  <span className="font-semibold">দূরত্ব =</span> <span className="font-bold text-green-700">7.97 m</span>
                </p>
              </div>
              <p className="text-sm text-gray-500 italic mt-2">
                (মূল ডকুমেন্টে একটি পথের চিত্র ছিল)
              </p>
            </section>

            {/* Section: গতি পর্ব-২ (গড় দ্রুতি ও বেগ) */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">
                গতি পর্ব-২: গড় দ্রুতি ও গড় বেগ
              </h2>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                A থেকে G তে 15s এ ABCEFG পথ অতিক্রম করে।
              </p>
              <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-4">
                <p className="mb-2">
                  <span className="font-semibold">সরণ =</span> AG = (3<sup>2</sup> + 3<sup>2</sup>)<sup>1/2</sup> = 3 &times; (2)<sup>1/2</sup>m &approx; <span className="font-bold text-green-700">4.24 m</span>
                </p>
                <p className="mb-2">
                  <span className="font-semibold">দূরত্ব =</span> ABC + CE + EFG + GO + OC = ((2πr / 4) + 3 &times; (2)<sup>1/2</sup> + (2πr / 4) + 3 + 3)m
                </p>
                <p className="mb-2">
                  <span className="font-semibold">দূরত্ব =</span> (3π / 2) + 10.24 + (3π / 2)m = <span className="font-bold text-green-700">19.6648 m</span>
                </p>
                <p className="mb-2">
                  <span className="font-semibold">গড় বেগ =</span> সরণ / মোট সময় = (3 &times; (2)<sup>1/2</sup>m) / 15S &approx; <span className="font-bold text-green-700">0.2828 ms⁻¹</span>
                </p>
                <p className="mb-2">
                  <span className="font-semibold">গড় দ্রুতি =</span> মোট দূরত্ব / মোট সময় = (19.6648m) / 15S &approx; <span className="font-bold text-green-700">1.3109 ms⁻¹</span>
                </p>
              </div>
              <p className="text-sm text-gray-500 italic mt-2">
                  (মূল ডকুমেন্টে একটি জটিল পথের চিত্র ছিল)
              </p>
            </section>

            {/* Section: ত্বরণ ও মন্দন */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                ত্বরণ ও মন্দন
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>সময়ের সাথে সাথে সরণের পরিবর্তনের হারকে বেগ বলে।</li>
                <li>সময়ের সাথে সাথে বেগ বৃদ্ধির হারকে <strong className="text-blue-600">ত্বরণ</strong> বলে।</li>
                <li>সময়ের সাথে সাথে বেগ হ্রাসের হারকে <strong className="text-blue-600">মন্দন</strong> বলে।</li>
                <li>মন্দন = ঋণাত্মক ত্বরণ।</li>
                <li>সুষম ত্বরণ: বেগ বৃদ্ধির হার সমান হলে।</li>
              </ul>
              <p className="text-sm text-gray-500 italic mt-2">
                  (মূল ডকুমেন্টে একজন সাইক্লিস্টের চিত্র ছিল যেখানে ত্বরণ ও মন্দন দেখানো হয়েছে)
              </p>
            </section>

            {/* Section: গতি পর্ব-৩ (Suvat সমীকরণাবলী) */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                গতি পর্ব-৩: Suvat সমীকরণাবলী
              </h2>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg shadow-inner mb-4">
                <h3 className="text-lg font-medium text-purple-800 mb-2">মূল সূত্রসমূহ:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-white">
                  <li>a = (v-u)/t</li>
                  <li>v = u + at</li>
                  <li>s = ut + (1/2)at<sup>2</sup></li>
                  <li>v<sup>2</sup> = u<sup>2</sup> + 2as</li>
                  <li>s = ((u+v)/2)t</li>
                  <li>S<sub>nth</sub> = u + (1/2)a(2n-1)</li>
                </ul>
              </div>

              <div className="space-y-6">
                {/* Suvat সমস্যা ১ */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                  <h3 className="text-xl font-medium text-purple-700 mb-2">সমস্যা ১:</h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">স্থির অবস্থান থেকে যাত্রা শুরু করে 5s এ 20 ms⁻¹ বেগ প্রাপ্ত হয়। ত্বরণ কত?</p>
                  <p className="mb-1 text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">দেওয়া আছে:</span> u = 0 ms⁻¹, v = 20 ms⁻¹, t = 5 s
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">সমাধান:</span> a = (v-u)/t = (20-0)/5 = <span className="font-bold text-green-700">4 ms⁻²</span>
                  </p>
                </div>

                {/* Suvat সমস্যা ২ */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                  <h3 className="text-xl font-medium text-purple-700 mb-2">সমস্যা ২:</h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">20 ms⁻¹ বেগে গতিশীল কোনো বস্তু 10s এ থেমে যায়। মন্দন কত?</p>
                  <p className="mb-1 text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">দেওয়া আছে:</span> u = 20 ms⁻¹, v = 0 ms⁻¹, t = 10 s
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">সমাধান:</span> a = (v-u)/t = (0-20)/10 = -2 ms⁻²
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    সুতরাং, মন্দন = <span className="font-bold text-green-700">2 ms⁻²</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Section: বিড়াল ও ইঁদুর সমস্যা */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">
                বিড়াল ও ইঁদুর সমস্যা
              </h2>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                সুষম ত্বরণে বিড়াল (a=0.04 ms⁻²) এবং সুষম বেগে ইঁদুর (v=0.8 ms⁻¹)।
                A --- 18m --- B --- 32m --- D।
              </p>
              <p className="text-sm text-gray-500 italic mb-4">
                  (মূল ডকুমেন্টে বিড়াল, ইঁদুর, রুটি ও মিলিত বিন্দুর চিত্র ছিল)
              </p>

              <div className="space-y-6">
                {/* A) B পয়েন্টে বিড়ালের বেগ কত? */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                  <h3 className="text-xl font-medium text-purple-700 mb-2">ক) B পয়েন্টে বিড়ালের বেগ কত?</h3>
                  <p className="mb-1 text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">বিড়ালের ক্ষেত্রে:</span> u = 0 ms⁻¹, a = 0.04 ms⁻², S = 18m
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">সমাধান:</span> আমরা জানি, v<sup>2</sup> = u<sup>2</sup> + 2aS
                    <br />&rArr; v<sup>2</sup> = 0<sup>2</sup> + 2 &times; 0.04 &times; 18
                    <br />&rArr; v<sup>2</sup> = 1.44
                    <br />&rArr; v = (1.44)<sup>1/2</sup> = <span className="font-bold text-green-700">1.2 ms⁻¹</span>
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    B পয়েন্টে বিড়ালের বেগ = <span className="font-bold text-green-700">1.2 ms⁻¹</span>
                  </p>
                </div>

                {/* B) C পয়েন্টে কে আগে পৌছাবে? */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                  <h3 className="text-xl font-medium text-purple-700 mb-2">খ) C পয়েন্টে কে আগে পৌছাবে?</h3>
                  <p className="mb-1 text-gray-700 dark:text-gray-300 font-semibold">ইঁদুরের ক্ষেত্রে:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    S<sub>2</sub> = 32m, v = 0.8 ms⁻¹
                    <br />আমরা জানি, S<sub>2</sub> = vt<sub>2</sub> &rArr; t<sub>2</sub> = S<sub>2</sub>/v = 32/0.8 = <span className="font-bold text-green-700">40 s</span>
                  </p>
                  <p className="mt-3 mb-1 text-gray-700 dark:text-gray-300 font-semibold">বিড়ালের ক্ষেত্রে:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    u=0 ms⁻¹, a=0.04 ms⁻², AC = S<sub>3</sub> = (18+32)m = 50m
                    <br />আমরা জানি, S<sub>3</sub> = ut<sub>1</sub> + (1/2)at<sub>1</sub><sup>2</sup>
                    <br />50 = 0 &times; t<sub>1</sub> + (1/2) &times; 0.04 &times; t<sub>1</sub><sup>2</sup>
                    <br />50 = 0.02 t<sub>1</sub><sup>2</sup>
                    <br />t<sub>1</sub><sup>2</sup> = 50 / 0.02 = 2500
                    <br />t<sub>1</sub> = (2500)<sup>1/2</sup> = <span className="font-bold text-green-700">50 s</span>
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    সুতরাং, C পয়েন্টে <span className="font-bold text-red-700">ইঁদুর</span> আগে পৌঁছাবে।
                  </p>
                </div>

                {/* C) CD = কত মিটার? */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                  <h3 className="text-xl font-medium text-purple-700 mb-2">গ) CD = কত মিটার?</h3>
                  <p className="mb-1 text-gray-700 dark:text-gray-300">ধরি, বিড়াল ও ইঁদুর D পয়েন্টে $t$ সময়ে পৌঁছাবে।</p>
                  <p className="mt-2 mb-1 text-gray-700 dark:text-gray-300 font-semibold">বিড়ালের ক্ষেত্রে:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    S<sub>AD</sub> = Ut + (1/2)at<sup>2</sup>
                    <br />18+32+CD = (0 &times; t) + (1/2) &times; 0.04 &times; t<sup>2</sup>
                    <br />50+CD = 0.02t<sup>2</sup> --- (i)
                  </p>
                  <p className="mt-3 mb-1 text-gray-700 dark:text-gray-300 font-semibold">ইঁদুরের ক্ষেত্রে:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    S<sub>BD</sub> = Vt
                    <br />32+CD = 0.8t
                    <br />&rArr; t = (32+CD)/0.8 --- (ii)
                  </p>
                  <p className="mt-3 mb-1 text-gray-700 dark:text-gray-300 font-semibold">শর্তমতে (i) ও (ii) হতে:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    50+CD = 0.02 &times; ((32+CD)/0.8)<sup>2</sup>
                    <br />50+CD = 0.02 &times; (32+CD)<sup>2</sup> / 0.64
                    <br />50+CD = (32+CD)<sup>2</sup> / 32
                    <br />1600+32CD = 1024 + 64CD + CD<sup>2</sup>
                    <br />CD<sup>2</sup> + 32CD - 576 = 0
                    <br />দ্বিঘাত সমীকরণ ব্যবহার করে: CD = (-b &plusmn; (b<sup>2</sup> - 4ac)<sup>1/2</sup>) / (2a)
                    <br />CD = (-32 &plusmn; (32<sup>2</sup> - 4 &times; 1 &times; (-576))<sup>1/2</sup>) / (2 &times; 1)
                    <br />CD = (-32 &plusmn; (1024 + 2304)<sup>1/2</sup>) / 2
                    <br />CD = (-32 &plusmn; 57.688) / 2
                    <br />ধনাত্মক মান গ্রহণ করে, CD = ( -32 + 57.688 ) / 2 = 25.688 / 2 = <span className="font-bold text-green-700">12.844 m</span>
                  </p>
                  <p className="text-sm text-gray-500 italic mt-2">
                      (মূল ডকুমেন্টে CD = 0.5137 m দেওয়া আছে, যা আমার গণনা থেকে ভিন্ন। আমার গণনাটি স্ট্যান্ডার্ড দ্বিঘাত সমীকরণ সমাধান পদ্ধতি অনুসরণ করে।)
                  </p>
                </div>
              </div>
            </section>

            {/* Section: পর্ব-৪: বুলেট সমস্যা */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                পর্ব-৪: বুলেট সমস্যা
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                বুলেট যখন তক্তার ভিতরে প্রবেশ করা শুরু করবে তখন তার শেষবেগই বুলেটের আদিবেগ।
              </p>
              <p className="text-sm text-gray-500 italic mb-4">
                (মূল ডকুমেন্টে বুলেটের গতিপথের চিত্র ছিল)
              </p>

              <div className="space-y-6">
                {/* বুলেট সমস্যা ১ */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                  <h3 className="text-xl font-medium text-purple-700 mb-2">সমস্যা-০১:</h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    কোনো বন্দুক থেকে গুলি 100 ms⁻¹ বেগে বেরিয়ে তক্তার ভেতর 10 cm প্রবেশ করে থেমে যায়। মন্দন কত?
                  </p>
                  <p className="mb-1 text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">দেওয়া আছে:</span> u = 100 ms⁻¹, S = 10 cm = 0.1 m, v = 0 ms⁻¹
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">সমাধান:</span> আমরা জানি, v<sup>2</sup> = u<sup>2</sup> + 2aS
                    <br />0<sup>2</sup> = (100)<sup>2</sup> + 2 &times; a &times; 0.1
                    <br />0 = 10000 + 0.2a
                    <br />0.2a = -10000
                    <br />a = -10000 / 0.2 = <span className="font-bold text-green-700">-50000 ms⁻²</span>
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    মন্দন = <span className="font-bold text-green-700">50000 ms⁻²</span>
                  </p>
                </div>

                {/* বুলেট সমস্যা ২ */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                  <h3 className="text-xl font-medium text-purple-700 mb-2">সমস্যা-২:</h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    এখানে দুটি ধাপে সমস্যার বর্ণনা রয়েছে।
                  </p>
                  <p className="mb-1 text-gray-700 dark:text-gray-300 font-semibold">AB এর ক্ষেত্রে:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    u<sub>1</sub> = 100 ms⁻¹, S = 10 m, ত্বরণ a = 50 ms⁻²
                    <br />আমরা জানি, V<sup>2</sup> = u<sup>2</sup> + 2aS
                    <br />V = ( (100)<sup>2</sup> + 2 &times; 50 &times; 10 )<sup>1/2</sup> = (10000 + 1000)<sup>1/2</sup> = (11000)<sup>1/2</sup> = <span className="font-bold text-green-700">104.88 ms⁻¹</span>
                  </p>
                  <p className="mt-3 mb-1 text-gray-700 dark:text-gray-300 font-semibold">BC এর ক্ষেত্রে:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    S = 5 cm = 0.05 m, u = 104.88 ms⁻¹, V = 0 ms⁻¹
                    <br />আমরা জানি, V<sup>2</sup> = u<sup>2</sup> + 2aS
                    <br />a = (V<sup>2</sup> - u<sup>2</sup>) / (2S) = (0<sup>2</sup> - (104.88)<sup>2</sup>) / (2 &times; 0.05)
                    <br />a = -11000 / 0.1 = <span className="font-bold text-green-700">-110000 ms⁻²</span>
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    মন্দন = <span className="font-bold text-green-700">110000 ms⁻²</span>
                  </p>
                </div>

                {/* বুলেট সমস্যা ৩ */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                  <h3 className="text-xl font-medium text-purple-700 mb-2">সমস্যা ৩:</h3>
                  <p className="mb-1 text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">দেওয়া আছে:</span> u = 100 ms⁻¹, v = 0 ms⁻¹, a = -20 ms⁻²
                    <br />S = ?
                    <br />t = ?
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">সমাধান (দূরত্ব):</span> আমরা জানি, v<sup>2</sup> = u<sup>2</sup> + 2aS
                    <br />&rArr; S = (v<sup>2</sup> - u<sup>2</sup>) / (2a) = (0<sup>2</sup> - (100)<sup>2</sup>) / (2 &times; -20)
                    <br />S = -10000 / -40 = <span className="font-bold text-green-700">250 m</span>
                  </p>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">সমাধান (সময়):</span> আবার, t = (v-u)/a
                    <br />&rArr; t = (0-100)/-20 = <span className="font-bold text-green-700">5 s</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Section: পর্ব-৫: বুলেট সমস্যা (ধারাবাহিকতা) */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                পর্ব-৫: বুলেট সমস্যা (ধারাবাহিকতা)
              </h2>

              <div className="space-y-6">
                {/* বুলেট সমস্যা ২ (বেগ অর্ধেক হারায়) */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                  <h3 className="text-xl font-medium text-purple-700 mb-2">সমস্যা ২:</h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    কোনো বুলেট দেয়ালের মধ্যে 0.05 m প্রবেশ করার পর বেগ অর্ধেক হয়ে যায়। বুলেটটি আর কতদূর প্রবেশ করবে?
                  </p>
                  <p className="text-sm text-gray-500 italic mb-4">
                    (মূল ডকুমেন্টে একটি দেয়ালের চিত্র ছিল)
                  </p>

                  <p className="mb-1 text-gray-700 dark:text-gray-300 font-semibold">AB এর ক্ষেত্রে:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    আদিবেগ = U
                    <br />শেষবেগ = U - U/2 = U/2
                    <br />সরণ S = 0.05 m
                    <br />আমরা জানি, (U/2)<sup>2</sup> = U<sup>2</sup> + 2a &times; 0.05
                    <br />U<sup>2</sup>/4 = U<sup>2</sup> + 0.1a
                    <br />0.1a = U<sup>2</sup>/4 - U<sup>2</sup> = -3U<sup>2</sup>/4
                    <br />a = (-3U<sup>2</sup>) / (4 &times; 0.1) = <span className="font-bold text-green-700">-7.5U<sup>2</sup> ms⁻²</span>
                  </p>

                  <p className="mt-3 mb-1 text-gray-700 dark:text-gray-300 font-semibold">BC এর ক্ষেত্রে:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    আদিবেগ u = U/2 ms⁻¹
                    <br />শেষবেগ V = 0 ms⁻¹
                    <br />সরণ = x মিটার
                    <br />আমরা জানি, V<sup>2</sup> = u<sup>2</sup> + 2ax
                    <br />0<sup>2</sup> = (U/2)<sup>2</sup> + 2(-7.5U<sup>2</sup>)x
                    <br />0 = U<sup>2</sup>/4 - 15U<sup>2</sup>x
                    <br />15U<sup>2</sup>x = U<sup>2</sup>/4
                    <br />x = (U<sup>2</sup>/4) / (15U<sup>2</sup>) = 1/60 = <span className="font-bold text-green-700">0.0167 m</span>
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    বুলেটটি আরও <span className="font-bold text-green-700">0.0167 m</span> প্রবেশ করবে।
                  </p>
                </div>

                {/* বুলেট সমস্যা ৩ (শর্টকাট) */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                  <h3 className="text-xl font-medium text-purple-700 mb-2">সমস্যা ৩ (শর্টকাট):</h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    কোনো বুলেট দেয়ালের মধ্যে 0.05 m প্রবেশ করার পর বেগ অর্ধেক হারায়। বুলেটটি আর কতদূর প্রবেশ করে?
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    ধরি, আদিবেগ = U
                    <br />শেষবেগ = U - U/2 = U/2
                    <br />&rArr; n এর মান = 2 (যেহেতু বেগ অর্ধেক হয়েছে)
                    <br />আদি সরণ S = 0.05 m
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">শর্টকাট সূত্র:</span> d = S / (n<sup>2</sup> - 1)
                    <br />d = 0.05 / (2<sup>2</sup> - 1) = 0.05 / (4 - 1) = 0.05 / 3 = <span className="font-bold text-green-700">0.0167 m</span>
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    বুলেটটি আরও <span className="font-bold text-green-700">0.0167 m</span> প্রবেশ করবে।
                  </p>
                  <p className="text-sm text-gray-500 mt-2 p-2 bg-yellow-50 rounded">
                    <span className="font-bold">নোট:</span> এই নিয়ম MCQ এর জন্য প্রযোজ্য।
                  </p>
                </div>
              </div>
            </section>

            {/* Section: পর্ব-৬: পরন্ত বস্তু */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                পর্ব-৬: পরন্ত বস্তু
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-4">
                <p className="mb-2 text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">90 kmh⁻¹ = কত ms⁻¹?</span>
                  <br />(90 &times; 1000)m / (60 &times; 60)s = <span className="font-bold text-green-700">25 ms⁻¹</span>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-bold">শর্টকাট:</span> kmh⁻¹ কে 3.6 দ্বারা ভাগ করলে ms⁻¹ পাওয়া যায়।
                </p>
              </div>

              <h3 className="text-xl font-medium text-blue-600 mb-3">গ্যালিলিওর সূত্র ৩টি:</h3>
              <ul className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                <li>
                  <span className="font-semibold">১ম সূত্র:</span> স্থির অবস্থান ও একই উচ্চতা থেকে বিনা বাধায় পড়ন্ত বস্তু সমান সময়ে সমান পথ অতিক্রম করবে।
                </li>
                <li>
                  <span className="font-semibold">২য় সূত্র:</span> স্থির অবস্থান থেকে বিনা বাধায় পড়ন্ত বস্তুর নির্দিষ্ট সময়ে (t) প্রাপ্ত বেগ (V) ঐ সময়ের সমানুপাতিক অর্থাৎ V &propto; t
                  <br />&rArr; V = Kt
                  <br />&rArr; V/t = K
                  <br />&therefore; V<sub>1</sub>/t<sub>1</sub> = V<sub>2</sub>/t<sub>2</sub> = &dots; = V<sub>n</sub>/t<sub>n</sub>
                </li>
                <li>
                  <span className="font-semibold">৩য় সূত্র:</span> স্থির অবস্থান থেকে বিনা বাধায় পড়ন্ত বস্তু নির্দিষ্ট সময়ে (t) যে দূরত্ব (h) অতিক্রম করে তা ঐ সময়ের (t) বর্গের সমানুপাতিক অর্থাৎ h &propto; t<sup>2</sup>
                  <br />&rArr; h = Kt<sup>2</sup>
                  <br />&rArr; h/t<sup>2</sup> = K
                  <br />&rArr; h<sub>1</sub>/t<sub>1</sub><sup>2</sup> = h<sub>2</sub>/t<sub>2</sub><sup>2</sup> = &dots; = h<sub>n</sub>/t<sub>n</sub><sup>2</sup>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic mt-2 mb-4">
                (মূল ডকুমেন্টে ৩য় সূত্রের গ্রাফ ছিল)
              </p>

              <h3 className="text-xl font-medium text-blue-600 mb-3">পরন্ত বস্তুর সূত্র ও নিক্ষিপ্ত বস্তুর সূত্র:</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-inner">
                  <thead>
                    <tr className="bg-gray-100 text-gray-600 dark:text-gray-400 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">পরন্ত বস্তুর সূত্র</th>
                      <th className="py-3 px-6 text-left">নিক্ষিপ্ত বস্তুর সূত্র</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300 text-sm font-light">
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50">
                      <td className="py-3 px-6 text-left whitespace-nowrap">V = (1/2)gt<sup>2</sup> + Ut</td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">V = Ut - (1/2)gt<sup>2</sup></td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50">
                      <td className="py-3 px-6 text-left">V = U + gt</td>
                      <td className="py-3 px-6 text-left">V = U - gt</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-6 text-left">V<sup>2</sup> = U<sup>2</sup> + 2gh</td>
                      <td className="py-3 px-6 text-left">V<sup>2</sup> = U<sup>2</sup> - 2gh</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mt-6">
                <li>V=0 (সর্বোচ্চ) &rArr; সর্বোচ্চ বিন্দু</li>
                <li>নিক্ষিপ্ত বস্তুর বেলায় সর্বোচ্চ বিন্দুতে বেগ শূন্য।</li>
                <li>বস্তু ওঠার সময় ও পড়ার সময় সমান এবং যে বেগে উঠবে ঠিক সেই বেগেই পড়বে।</li>
              </ul>

              <div className="space-y-6 mt-6">
                {/* পরন্ত বস্তু সমস্যা ২ */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                  <h3 className="text-xl font-medium text-purple-700 mb-2">সমস্যা ২:</h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    একজন বোলার বল 200 kmh⁻¹ বেগে খাড়া উপরের দিকে ছুঁড়ে মারলেন।
                  </p>

                  <p className="mb-1 text-gray-700 dark:text-gray-300 font-semibold">ক) বলটি সর্বোচ্চ কত উচ্চতায় উঠবে?</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">দেওয়া আছে:</span> U = 200 kmh⁻¹ = 55.56 ms⁻¹, V = 0 ms⁻¹, g = 9.8 ms⁻²
                    <br />আমরা জানি, V<sup>2</sup> = U<sup>2</sup> - 2gh
                    <br />&rArr; h = (U<sup>2</sup> - V<sup>2</sup>) / (2g) = ((55.56)<sup>2</sup> - 0) / (2 &times; 9.8)
                    <br />h = 3086.97 / 19.6 = <span className="font-bold text-green-700">157.50 m</span>
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    বলটি সর্বোচ্চ <span className="font-bold text-green-700">157.50 m</span> উচ্চতায় উঠবে।
                  </p>

                  <p className="mt-4 mb-1 text-gray-700 dark:text-gray-300 font-semibold">খ) বলটি কতক্ষণ বাতাসে থাকবে?</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    আমরা জানি, V = U - gt
                    <br />&rArr; t = (U-V)/g = (55.56 - 0) / 9.8 = <span className="font-bold text-green-700">5.67 s</span> (ওঠার সময়)
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    বলটি বাতাসে থাকবে = (5.67 &times; 2) = <span className="font-bold text-green-700">11.34 s</span>।
                  </p>
                </div>
              </div>
            </section>

            {/* Section: গতি-শেষ পর্ব (ট্রাক ও গাড়ি) */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                গতি-শেষ পর্ব: ট্রাক ও গাড়ি
              </h2>

              <div className="space-y-6">
                {/* সমস্যা ৩ (অতিক্রান্ত দূরত্ব) */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                  <h3 className="text-xl font-medium text-purple-700 mb-2">সমস্যা ৩:</h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    স্থির অবস্থান হতে মুক্তভাবে পড়ন্ত কোনো বস্তু ১ম সেকেন্ডে $h$ দূরত্ব অতিক্রম করে। ২য় সেকেন্ডে অতিক্রান্ত দূরত্ব, ৩য় সেকেন্ডে অতিক্রান্ত দূরত্ব কত?
                  </p>
                  <p className="text-sm text-gray-500 italic mb-4">
                    (মূল ডকুমেন্টে একটি বস্তুর পড়ার চিত্র ছিল)
                  </p>

                  <p className="text-gray-700 dark:text-gray-300">
                    আমরা জানি, h &propto; t<sup>2</sup>
                    <br />১ম সেকেন্ডে অতিক্রান্ত দূরত্ব = <span className="font-bold text-green-700">h</span>
                    <br />২য় সেকেন্ডে অতিক্রান্ত দূরত্ব = (4h-h) মিটার = <span className="font-bold text-green-700">3h মিটার</span>
                    <br />৩য় সেকেন্ডে অতিক্রান্ত দূরত্ব = (9h-4h) মিটার = <span className="font-bold text-green-700">5h মিটার</span>
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    সুতরাং, ১ম সেকেন্ডে : ২য় সেকেন্ডে : ৩য় সেকেন্ডে = <span className="font-bold text-green-700">1 : 3 : 5</span>
                  </p>
                </div>

                {/* সমস্যা ৪ (ট্রাক ও গাড়ি) */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                  <h3 className="text-xl font-medium text-purple-700 mb-2">সমস্যা ৪:</h3>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    গাড়ি 21 ms⁻¹ সমবেগে এবং ট্রাক 2 ms⁻² সমত্বরণে। P থেকে Q 80m দূরত্ব। Q থেকে x দূরত্বে।
                  </p>
                  <p className="text-sm text-gray-500 italic mb-4">
                    (মূল ডকুমেন্টে গাড়ি ও ট্রাকের চিত্র ছিল)
                  </p>

                  <p className="mb-1 text-gray-700 dark:text-gray-300 font-semibold">ক) ট্রাকটি 20 তম সেকেন্ডে অতিক্রান্ত দূরত্ব কত?</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">ট্রাকের ক্ষেত্রে:</span> U = 0 ms⁻¹, a = 2 ms⁻²
                    <br />19 সেকেন্ডে অতিক্রান্ত দূরত্ব S<sub>1</sub> = Ut<sub>1</sub> + (1/2)at<sub>1</sub><sup>2</sup> = 0 &times; 19 + (1/2) &times; 2 &times; (19)<sup>2</sup> = 361 m
                    <br />20 সেকেন্ডে অতিক্রান্ত দূরত্ব S<sub>2</sub> = Ut<sub>2</sub> + (1/2)at<sub>2</sub><sup>2</sup> = 0 &times; 20 + (1/2) &times; 2 &times; (20)<sup>2</sup> = 400 m
                    <br />সুতরাং, 20 তম সেকেন্ডে অতিক্রান্ত দূরত্ব S = S<sub>2</sub> - S<sub>1</sub> = (400 - 361)m = <span className="font-bold text-green-700">39 m</span>
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">অন্যভাবে সমাধান (20 তম সেকেন্ডের সূত্র):</span>
                    <br />আমরা জানি, S<sub>n</sub> = U + (1/2)a(2n-1)
                    <br />S<sub>20</sub> = 0 + (1/2) &times; 2 &times; (2 &times; 20 - 1) = <span className="font-bold text-green-700">39 m</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-2 p-2 bg-yellow-50 rounded">
                    <span className="font-bold">নোট:</span> 20 তম সেকেন্ডে অতিক্রান্ত দূরত্ব বলতে 19 সেকেন্ড শুরু থেকে 20 সেকেন্ড সময়টুকুতে অতিক্রান্ত দূরত্বের পরিমাণ।
                  </p>

                  <p className="mt-4 mb-1 text-gray-700 dark:text-gray-300 font-semibold">খ) চলার পথে কার ও ট্রাকটি কত বার পরস্পরকে অতিক্রম করবে? গাণিতিক যুক্তি দাও।</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">গাড়ির অতিক্রান্ত দূরত্ব:</span> S<sub>C</sub> = 80 + x
                    <br />Vt = 80+x &rArr; 21t - 80 = x --- (1)
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">ট্রাকের অতিক্রান্ত দূরত্ব:</span> S<sub>T</sub> = Ut + (1/2)at<sup>2</sup>
                    <br />x = 0 &times; t + (1/2) &times; 2 &times; t<sup>2</sup> &rArr; x = t<sup>2</sup> --- (2)
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    (1) ও (2) হতে,
                    <br />21t - 80 = t<sup>2</sup>
                    <br />&rArr; t<sup>2</sup> - 21t + 80 = 0
                    <br />&rArr; t<sup>2</sup> - 16t - 5t + 80 = 0
                    <br />&rArr; t(t-16) - 5(t-16) = 0
                    <br />&rArr; (t-16)(t-5) = 0
                    <br />হয়, t = <span className="font-bold text-green-700">16 s</span> অথবা t = <span className="font-bold text-green-700">5 s</span>
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    সুতরাং, গাড়ি ও ট্রাক পরস্পরকে <span className="font-bold text-green-700">2 বার</span> অতিক্রম করবে।
                  </p>
                </div>
              </div>
            </section>

            {/* Section: Concept-5: গতির গ্রাফ */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                Concept-5: গতির গ্রাফ
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>X অক্ষ বরাবর বসে স্বাধীন রাশি।</li>
                <li>Y অক্ষ বরাবর বসে অধীন রাশি।</li>
              </ul>

              <div className="bg-gray-50 p-4 rounded-lg shadow-inner mt-4 mb-4">
                <h3 className="text-xl font-medium text-purple-700 mb-2">Basic 1:</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  গ্রাফ হচ্ছে x ও y অক্ষের অধিকার সম্পর্ক।
                </p>
              </div>
              <p className="text-sm text-gray-500 italic mb-4">
                (মূল ডকুমেন্টে x ও y অক্ষের একটি গ্রাফ ছিল)
              </p>

              <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-4">
                <h3 className="text-xl font-medium text-purple-700 mb-2">Basic 2:</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  গ্রাফ কি নির্দেশ করছে তা বোঝা যাবে গ্রাফের ঢালের সাহায্যে।
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  &therefore; ঢাল = &Delta;y / &Delta;x = &Delta; ত্বরণ / &Delta; সময়
                  <br /><span className="text-sm italic text-gray-600 dark:text-gray-400">কোনো সরলরেখা X অক্ষের ধনাত্মক দিকের সাথে যে কোণ উৎপন্ন করে তার Tangent কে ঢাল বলে।</span>
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                <h3 className="text-xl font-medium text-purple-700 mb-2">Basic 3:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>সরলরেখা থাকলে ঢাল হবে সুষম।</li>
                  <li>বক্ররেখা থাকলে ঢাল হবে অসম।</li>
                </ul>
              </div>
            </section>

            {/* Section: টাইপ ১: সরণ VS সময় */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                টাইপ ১: সরণ VS সময়
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner text-center">
                  <h3 className="text-lg font-medium text-purple-700 mb-2">স্থির অবস্থান:</h3>
                  <p className="mb-1 text-gray-700 dark:text-gray-300">ঢাল = &Delta;S / &Delta;t = 0 / &Delta;t = <span className="font-bold text-green-700">0</span></p>
                  <p className="text-sm text-gray-500 italic">(অনুভূমিক সরলরেখা)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner text-center">
                  <h3 className="text-lg font-medium text-purple-700 mb-2">সুষম বেগ:</h3>
                  <p className="mb-1 text-gray-700 dark:text-gray-300">ঢাল = &Delta;S / &Delta;t = <span className="font-bold text-green-700">বেগ (V)</span></p>
                  <p className="text-sm text-gray-500 italic">(মূলবিন্দুগামী সরলরেখা)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner text-center">
                  <h3 className="text-lg font-medium text-purple-700 mb-2">অসম বেগ:</h3>
                  <p className="mb-1 text-gray-700 dark:text-gray-300">ঢাল = &Delta;S / &Delta;t = <span className="font-bold text-green-700">বেগ</span></p>
                  <p className="text-sm text-gray-500 italic">(বক্ররেখা)</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic mt-4">
                  (মূল ডকুমেন্টে সরণ vs সময় গ্রাফগুলো ছিল)
              </p>
            </section>

            {/* Section: টাইপ ২: বেগ VS সময় */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                টাইপ ২: বেগ VS সময়
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner text-center">
                  <h3 className="text-lg font-medium text-purple-700 mb-2">স্থির বেগ:</h3>
                  <p className="mb-1 text-gray-700 dark:text-gray-300">ঢাল = &Delta;V / &Delta;t = 0 / &Delta;t = <span className="font-bold text-green-700">0</span></p>
                  <p className="text-sm text-gray-500 italic">(অনুভূমিক সরলরেখা)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner text-center">
                  <h3 className="text-lg font-medium text-purple-700 mb-2">সুষম ত্বরণ:</h3>
                  <p className="mb-1 text-gray-700 dark:text-gray-300">ঢাল = &Delta;V / &Delta;t = <span className="font-bold text-green-700">ত্বরণ</span></p>
                  <p className="text-sm text-gray-500 italic">(মূলবিন্দুগামী সরলরেখা)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner text-center">
                  <h3 className="text-lg font-medium text-purple-700 mb-2">অসম ত্বরণ:</h3>
                  <p className="mb-1 text-gray-700 dark:text-gray-300">ঢাল = &Delta;V / &Delta;t = <span className="font-bold text-green-700">ত্বরণ</span></p>
                  <p className="text-sm text-gray-500 italic">(বক্ররেখা)</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-inner mt-6">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  ঢাল = (-) অসম ত্বরণ বা অসম মন্দন।
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-bold">নোট:</span> কোনো রেখা যদি X অক্ষ থেকে উপর দিকে উঠে থাকে তাহলে ঢাল ধনাত্মক। কিন্তু নিচের দিকে নামতে থাকলে ঢাল ঋণাত্মক।
                </p>
              </div>
              <p className="text-sm text-gray-500 italic mt-4 mb-4">
                  (মূল ডকুমেন্টে বেগ vs সময় গ্রাফগুলো ছিল, যার মধ্যে একটি trapezoidal গ্রাফও ছিল)
              </p>

              <h3 className="text-xl font-medium text-blue-600 mb-3">চিত্র থেকে অতিক্রান্ত দূরত্ব:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>১ম অংশ = সুষম ত্বরণ</li>
                <li>২য় অংশ = সুষম বেগ</li>
                <li>৩য় অংশ = সুষম মন্দন</li>
              </ul>

              <div className="bg-gray-50 p-4 rounded-lg shadow-inner mt-4">
                <h4 className="text-lg font-medium text-purple-700 mb-2">ক) অতিক্রান্ত দূরত্ব কত?</h4>
                <p className="mb-1 text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">১ম অংশ:</span> S<sub>1</sub> = ((U<sub>1</sub> + V<sub>1</sub>)/2)t<sub>1</sub> = ((0+10)/2) &times; 1 = <span className="font-bold text-green-700">5 m</span>
                </p>
                <p className="mb-1 text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">২য় অংশ:</span> S<sub>2</sub> = ((U<sub>2</sub> + V<sub>2</sub>)/2)t<sub>2</sub> = ((10+10)/2) &times; 1 = <span className="font-bold text-green-700">10 m</span>
                  <br />অথবা, S<sub>2</sub> = V &times; t<sub>2</sub> = 10 &times; 1 = <span className="font-bold text-green-700">10 m</span>
                </p>
                <p className="mb-1 text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">৩য় অংশ:</span> S<sub>3</sub> = ((U<sub>3</sub> + V<sub>3</sub>)/2)t<sub>3</sub> = ((10+0)/2) &times; 1 = <span className="font-bold text-green-700">5 m</span>
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  &therefore; মোট সরণ S = (5+10+5) = <span className="font-bold text-green-700">20 m</span>
                </p>
              </div>
            </section>

            {/* Section: গতি ও গতির গ্রাফ (চাকার সমস্যা) */}
            <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                গতি ও গতির গ্রাফ: চাকার সমস্যা
              </h2>
              <p className="mb-3 text-gray-700 dark:text-gray-300">চাকার ব্যাসার্ধ r = 2 m</p>
              <p className="text-sm text-gray-500 italic mb-4">
                (মূল ডকুমেন্টে চাকার আদি ও শেষ অবস্থানের চিত্র ছিল)
              </p>

              <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-4">
                <h3 className="text-xl font-medium text-purple-700 mb-2">প্রশ্ন:</h3>
                <p className="mb-2 text-gray-700 dark:text-gray-300">
                  চাকাটি 180&deg; ঘুরলে চুইগামের সরণ কত?
                </p>
                <p className="mb-1 text-gray-700 dark:text-gray-300 font-semibold">সমাধান:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  চাকাটি 180&deg; ঘুরলে চুইগামের অবস্থান হবে: আদি অবস্থান A, শেষ অবস্থান B।
                  <br />BC = ব্যাস = 2r = 2 &times; 2 = <span className="font-bold text-green-700">4 m</span>
                  <br />চাকার পরিধির অর্ধেক দূরত্ব, AC = (1/2) &times; 2πr = πr = π &times; 2 = <span className="font-bold text-green-700">2π m</span> &approx; 6.28 m
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  আমরা জানি, সরণ AB = (AC<sup>2</sup> + BC<sup>2</sup>)<sup>1/2</sup>
                  <br />AB = ((2π)<sup>2</sup> + (4)<sup>2</sup>)<sup>1/2</sup> = (39.4784 + 16)<sup>1/2</sup> = (55.4784)<sup>1/2</sup> = <span className="font-bold text-green-700">7.44 m</span>
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                <h3 className="text-xl font-medium text-purple-700 mb-2">Home Work / সমস্যা (270&deg;):</h3>
                <p className="mb-2 text-gray-700 dark:text-gray-300">
                  চাকাটি 270&deg; ঘুরলে চুইগামের সরণ কত? (চাকার ব্যাসার্ধ r = 2 m)
                </p>
                <p className="mb-1 text-gray-700 dark:text-gray-300 font-semibold">সমাধান:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  দেওয়া আছে, OA = OM = চাকার ব্যাসার্ধ = 2 m
                  <br />&triangle; AOC এ, &angle; AOC এর মান মূল ডকুমেন্টে 60&deg; দেওয়া আছে। যদি এটি একটি সমকোণী ত্রিভুজ হয়, তবে AC নির্ণয় করা যায়।
                  <br />যদি AC = (3)<sup>1/2</sup>m ধরা হয় (যেমনটি মূল ডকুমেন্টে দেওয়া আছে), তবে AM = AC + OM = ((3)<sup>1/2</sup>+2) m
                  <br />DM (আর্ক দৈর্ঘ্য 270&deg; এর জন্য) = (270/360) &times; 2πr = (3/4) &times; 2 &times; π &times; 2 = 3π &approx; <span className="font-bold text-green-700">9.42 m</span>
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  চুইগামের সরণ AD = (DM<sup>2</sup> + AM<sup>2</sup>)<sup>1/2</sup> (যদি এটি সমকোণী ত্রিভুজ হয়)
                  <br />AD = ((9.42)<sup>2</sup> + (1.732+2)<sup>2</sup>)<sup>1/2</sup> = (88.74 + (3.732)<sup>2</sup>)<sup>1/2</sup>
                  <br />AD = (88.74 + 13.928)<sup>1/2</sup> = (102.668)<sup>1/2</sup> = <span className="font-bold text-green-700">10.13 m</span>
                </p>
                <p className="text-sm text-gray-500 mt-2 p-2 bg-yellow-50 rounded">
                    <span className="font-bold">নোট:</span> মূল ডকুমেন্টের 270&deg; ঘুর্ণনের সমাধানের কিছু ধাপে অস্পষ্টতা এবং সম্ভাব্য গণনা ত্রুটি ছিল। এখানে যৌক্তিক অনুমানের ভিত্তিতে সমাধান করা হয়েছে।
                </p>
              </div>
            </section>

          </main>
        </section>
      </div>

      <footer className="text-center mt-12 pt-6 border-t border-gray-300 text-gray-600 dark:text-gray-400 text-sm">
        <p>&copy; 2024 Physics Chapter Notes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PhysicsChapter2;
