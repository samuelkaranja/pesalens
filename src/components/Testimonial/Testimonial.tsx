import React from "react";
import User from "../../assets/code.jpg";

const Testimonial: React.FC = () => {
  return (
    <section className="bg-[#f6f8f6] py-15 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl text-black font-medium pb-3">
          Loved by users everywhere
        </h1>
        <p className="text-sm md:text-lg font-light text-black">
          See what our early adopters have to say about their experience with
          Pesalens
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <div className="border border-gray-200 rounded-xl p-5 w-85 md:w-95 shadow bg-white">
          <h1 className="pb-6 border-b border-gray-200 leading-relaxed">
            "Finally, an easy way to see where my M-pesa float goes!. Pesalens
            is a game-changer for my personal budgeting."
          </h1>

          <div className="pt-3 flex flex-row items-center">
            <img
              src={User}
              alt=""
              className="w-12 h-12 object-contain rounded-full mr-3"
            />
            <span>
              <p>Jane Doe</p>
              <p>Freelance Designer</p>
            </span>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl p-5 w-85 md:w-95 shadow bg-white">
          <h1 className="pb-6 border-b border-gray-200 leading-relaxed">
            "The insights are invaluable. I quickly identified areas where I was
            overspending and made adjustments. Highly recommend!"
          </h1>

          <div className="pt-3 flex flex-row items-center">
            <img
              src={User}
              alt=""
              className="w-12 h-12 object-contain rounded-full mr-3"
            />
            <span>
              <p>Jane Doe</p>
              <p>Freelance Designer</p>
            </span>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl p-5 w-85 md:w-95 shadow bg-white">
          <h1 className="pb-6 border-b border-gray-200 leading-relaxed">
            "The automatic categorization is brilliant. I've saved so much time
            and now have a real sense of control over my finances."
          </h1>

          <div className="pt-3 flex flex-row items-center">
            <img
              src={User}
              alt=""
              className="w-12 h-12 object-contain rounded-full mr-3"
            />
            <span>
              <p>Jane Doe</p>
              <p>Freelance Designer</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
