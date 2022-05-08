import React from 'react';

const Blog = () => {
    return (
        <div className='p-20'>
           <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="flush-headingOne">
      <button className="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
        aria-expanded="false" aria-controls="flush-collapseOne">
       Difference between javascript and nodejs
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse border-0 collapse show"
      aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body py-4 px-5"><strong>জাভাস্ক্রিপ্ট হল একটি প্রোগ্রামিং ভাষা</strong> যা ওয়েব ব্রাউজারে চলে। জাভাস্ক্রিপ্ট স্পাইডার মাঙ্কি (ফায়ারফক্স), জাভাস্ক্রিপ্ট কোর (সাফারি), বা V8 (গুগল ক্রোম) এর মতো যেকোনো ইঞ্জিন চালায়। প্রধানত একটি ওয়েব অ্যাপ্লিকেশনের জন্য ক্লায়েন্ট-সাইড কার্যকলাপের জন্য ব্যবহৃত হয়। <br />
                 যেখানে <strong>Node.js হল জাভাস্ক্রিপ্টের জন্য একটি ইন্টারপ্রেটার বা চলমান পরিবেশ,</strong> এটি একটি দরকারী লাইব্রেরি যা জাভাস্ক্রিপ্ট প্রোগ্রামগুলি আলাদাভাবে ব্যবহার করতে পারে৷ এটি প্রধানত একটি শেল স্ক্রিপ্ট তৈরি বা কার্যকর করা বা কোনো হার্ডওয়্যার-নির্দিষ্ট তথ্য অ্যাক্সেস করা, বা কোনো ব্যাকএন্ড কাজ চালানোর জন্য ব্যবহৃত হয়। Node JS শুধুমাত্র একটি V8 ইঞ্জিনে চলে এবং এই Node JS-এর অধীনে একটি জাভাস্ক্রিপ্ট প্রোগ্রাম লেখা হয়।</div>
    </div>
  </div>
  <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="flush-headingTwo">
      <button className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
        aria-expanded="false" aria-controls="flush-collapseTwo">
        Differences between sql and nsql databases.
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
      data-bs-parent="#accordionFlushExample">
      <div className="accordion-body py-4 px-5">
          <h1>

          এসকিউএল ডাটাবেস অ্যাক্সেস এবং ম্যানিপুলেট করার জন্য একটি আদর্শ ভাষা। NoSQL ডাটাবেস একটি নন-এসকিউএল ডাটাবেসের জন্য দাঁড়িয়েছে। NoSQL ডাটাবেস রিলেশনাল ডাটাবেসের মতো ডেটা সঞ্চয় করতে টেবিল ব্যবহার করে না। <br />
                 <br />
                 <strong>SQL</strong> <br />
                 এসকিউএল ডাটাবেসগুলি রিলেশনাল, এটি স্ট্রাকচার্ড কোয়েরি ল্যাঙ্গুয়েজ ব্যবহার করে এবং একটি পূর্বনির্ধারিত স্কিমা রয়েছে। এসকিউএল ডাটাবেসগুলি উল্লম্বভাবে স্কেলযোগ্য, এটি টেবিল-ভিত্তিক ডাটাবেস, মাল্টি-সারি লেনদেনের জন্য SQL ডাটাবেসগুলি আরও ভাল। <br />
                 <br />
                 <strong>NoSQL</strong> <br />
                 NoSQL ডাটাবেসগুলি সম্পর্কহীন। এটিতে অসংগঠিত ডেটার জন্য গতিশীল স্কিমা রয়েছে। এটি একটি অনুভূমিকভাবে মাপযোগ্য ডাটাবেস। NoSQL ডাটাবেস হল নথি, কী-মান, গ্রাফ, বা প্রশস্ত-কলাম স্টোর। নথিপত্র বা JSON এর মতো অসংগঠিত ডেটার জন্য NoSQL ভাল।
          </h1>
      </div>
    </div>
  </div>
  <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="flush-headingThree">
      <button className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
        aria-expanded="false" aria-controls="flush-collapseThree">
       What is the purpose of Jwt and how does it work?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
      data-bs-parent="#accordionFlushExample">
      <div className="accordion-body py-4 px-5"><strong>JWT (জাভাস্ক্রিপ্ট অবজেক্ট নোটেশন), বা JSON ওয়েব টোকেন,</strong> হল একটি উন্মুক্ত মান যা ক্লায়েন্ট এবং সার্ভারের মধ্যে নিরাপত্তা তথ্য ভাগ করে নেওয়ার জন্য ব্যবহৃত হয়, সংক্ষেপে JWT ব্যবহারকারীদের প্রমাণীকরণ এবং তথ্য ভাগ করার একটি নিরাপদ উপায় হিসাবে ব্যবহৃত হয়। প্রতিটি JWT-এ এনকোড করা JSON অবজেক্ট রয়েছে, যার মধ্যে দাবির সেট রয়েছে। টোকেন ইস্যু করার পরে দাবিগুলি পরিবর্তন করা যাবে না তা নিশ্চিত করার জন্য একটি ক্রিপ্টোগ্রাফিক অ্যালগরিদম ব্যবহার করে JWTs স্বাক্ষরিত হয়।</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;